import { AxiosError } from 'axios';
import { IncomingMessage, OutgoingMessage } from 'http';
import { ParsedUrlQueryInput } from 'querystring';
import { ResponseError } from '../data-fetcher';
import isServer from './is-server';

/**
 * Omit properties from T that are in K. This is a simplified version of TypeScript's built-in `Omit` utility type.
 * Since default `Omit` doesn't support indexing types, we had to introduce this custom implementation.
 */
// eslint-disable-next-line prettier/prettier
export type EnhancedOmit<T, K extends PropertyKey> = { [P in keyof T as Exclude<P, K>]: T[P] };

/**
 * note: encodeURIComponent is available via browser (window) or natively in node.js
 * if you use another js engine for server-side rendering you may not have native encodeURIComponent
 * and would then need to install a package for that functionality
 * @param {ParsedUrlQueryInput} params query string parameters
 * @returns {string} query string
 */
function getQueryString(params: ParsedUrlQueryInput) {
  return Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(String(params[k]))}`)
    .join('&');
}

/**
 * Resolves a base URL that may contain query string parameters and an additional set of query
 * string parameters into a unified string representation.
 * @param {string} urlBase the base URL that may contain query string parameters
 * @param {ParsedUrlQueryInput} params query string parameters
 * @returns a URL string
 * @throws {RangeError} if the provided url is an empty string
 */
export function resolveUrl(urlBase: string, params: ParsedUrlQueryInput = {}): string {
  if (!urlBase) {
    throw new RangeError('url must be a non-empty string');
  }

  // This is a better way to work with URLs since it handles different user input
  // edge cases. This works in Node and all browser except IE11.
  // https://developer.mozilla.org/en-US/docs/Web/API/URL
  // TODO: Verify our browser support requirements.
  if (isServer()) {
    const url = new URL(urlBase);
    for (const key in params) {
      if ({}.hasOwnProperty.call(params, key)) {
        url.searchParams.append(key, String(params[key]));
      }
    }
    const result = url.toString();
    return result;
  }

  const qs = getQueryString(params);
  const result = urlBase.indexOf('?') !== -1 ? `${urlBase}&${qs}` : `${urlBase}?${qs}`;
  return result;
}

export const isAbsoluteUrl = (url: string) => {
  if (!url) {
    return false;
  }

  if (typeof url !== 'string') {
    throw new TypeError('Expected a string');
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
};

/**
 * Indicates whether the error is a timeout error
 * @param {unknown} error error
 * @returns {boolean} is timeout error
 */
export const isTimeoutError = (error: unknown) => {
  return (
    (error as AxiosError).code === '408' ||
    (error as AxiosError).code === 'ECONNABORTED' ||
    (error as AxiosError).code === 'ETIMEDOUT' ||
    (error as ResponseError).response?.status === 408 ||
    (error as Error).name === 'AbortError'
  );
};

/**
 * Converts a string value in a regex pattern allowing wildcard matching
 * @param {string} pattern input with wildcards i.e. site.*.com
 * @returns {string} modified string that can be used as regexp input
 */
const convertToWildcardRegex = (pattern: string) => {
  return (
    '^' +
    pattern
      .replace(/\//g, '\\/')
      .replace(/\./g, '\\.')
      .replace(/\*/g, '.*') +
    '$'
  );
};

/**
 * Gets allowed origins from JSS_ALLOWED_ORIGINS env variable
 * @returns {string[]} list of allowed origins from JSS_ALLOWED_ORIGINS env variable
 */
export const getAllowedOriginsFromEnv = () =>
  process.env.JSS_ALLOWED_ORIGINS
    ? process.env.JSS_ALLOWED_ORIGINS.replace(' ', '').split(',')
    : [];

/**
 * Tests origin from incoming request against allowed origins list that can be
 * set in JSS's JSS_ALLOWED_ORIGINS env variable, passed via allowedOrigins param and/or
 * be already set in Access-Control-Allow-Origin by other logic.
 * Applies Access-Control-Allow-Origin and Access-Control-Allow-Methods on match
 * Also applies Access-Control-Allow-Headers for preflight requests
 * @param {IncomingMessage} req incoming request
 * @param {OutgoingMessage} res response to set CORS headers for
 * @param {string[]} [allowedOrigins] additional list of origins to test against
 * @returns true if incoming origin matches the allowed lists, false when it does not
 */
export const enforceCors = (
  req: IncomingMessage,
  res: OutgoingMessage,
  allowedOrigins?: string[]
): boolean => {
  // origin in not present for non-CORS requests (e.g. server-side) - so we skip the checks
  if (!req.headers.origin) {
    return true;
  }
  // 3 sources of allowed origins are considered:
  // the env value
  const defaultAllowedOrigins = getAllowedOriginsFromEnv();
  // the allowedOrigins prop
  allowedOrigins = defaultAllowedOrigins.concat(allowedOrigins || []);
  // and the existing CORS header, if present (i.e. set by nextjs config)
  const presetCors = res.getHeader('Access-Control-Allow-Origin');
  if (presetCors) {
    allowedOrigins.push(presetCors as string);
  }

  const origin = req.headers.origin;
  if (
    origin &&
    allowedOrigins.some(
      (allowedOrigin) =>
        origin === allowedOrigin || new RegExp(convertToWildcardRegex(allowedOrigin)).test(origin)
    )
  ) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE, PUT, PATCH');

    // set the allowed headers for preflight requests
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }

    return true;
  }
  return false;
};

  /**
   * Generates all possible permutations of an array of key-value pairs.
   * This is used to create every possible combination of URL query parameters.
   * @param {Array<[string, string]>} array - The array of key-value pairs to permute.
   * @returns {Array<Array<[string, string]>>} - A 2D array where each inner array is a unique permutation of the input.
   */
 export const getPermutations = (array: [string, string][]): [string, string][][] =>{
  if (array.length <= 1) return [array];

  return array.flatMap((current, i) => {
    const remaining = array.filter((_, idx) => idx !== i);
    return getPermutations(remaining).map((permutation) => [current, ...permutation]);
  });
};
