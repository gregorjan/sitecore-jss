[**@sitecore-jss/sitecore-jss**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss](../../README.md) / [index](../README.md) / HttpDataFetcher

# Type Alias: HttpDataFetcher()\<T\>

> **HttpDataFetcher**\<`T`\>: (`url`, `data`?) => `Promise`\<[`HttpResponse`](../interfaces/HttpResponse.md)\<`T`\>\>

Describes functions that fetch data asynchronously (i.e. from an API endpoint).
This interface conforms to Axios' public API, but is adaptable to other HTTP libraries and
fetch polyfills.
The interface implementation must:
- Support SSR
- Comply with the rules of REST by returning appropriate response status codes when there is an error instead of throwing exceptions.
- Send HTTP POST requests if `data` param is specified; GET is suggested but not required for data-less requests

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `data`? | `unknown` |

## Returns

`Promise`\<[`HttpResponse`](../interfaces/HttpResponse.md)\<`T`\>\>

## Defined in

[packages/sitecore-jss/src/data-fetcher.ts:26](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss/src/data-fetcher.ts#L26)
