[**@sitecore-jss/sitecore-jss-react-native**](../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-react-native](../README.md) / RestLayoutService

# Class: RestLayoutService

Fetch layout data using the Sitecore Layout Service REST API.
Uses Axios as the default data fetcher (@see AxiosDataFetcher).

## Extends

- `LayoutServiceBase`

## Constructors

### new RestLayoutService()

> **new RestLayoutService**(`serviceConfig`): [`RestLayoutService`](RestLayoutService.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `serviceConfig` | `RestLayoutServiceConfig` |

#### Returns

[`RestLayoutService`](RestLayoutService.md)

#### Overrides

`LayoutServiceBase.constructor`

#### Defined in

sitecore-jss/types/layout/rest-layout-service.d.ts:55

## Properties

### getDefaultFetcher()

> `protected` **getDefaultFetcher**: \<`T`\>(`req`?, `res`?) => (`url`, `data`?) => `Promise`\<`AxiosResponse`\<`T`\>\>

Provides default

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `req`? | `IncomingMessage` | Request instance |
| `res`? | `ServerResponse`\<`IncomingMessage`\> | Response instance |

#### Returns

`Function`

default fetcher

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `data`? | `unknown` |

##### Returns

`Promise`\<`AxiosResponse`\<`T`\>\>

#### See

AxiosDataFetcher data fetcher

#### Defined in

sitecore-jss/types/layout/rest-layout-service.d.ts:97

***

### getFetcher()

> `protected` **getFetcher**: (`req`?, `res`?) => `HttpDataFetcher`\<[`LayoutServiceData`](../interfaces/LayoutServiceData.md)\>

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `req`? | `IncomingMessage` |
| `res`? | `ServerResponse`\<`IncomingMessage`\> |

#### Returns

`HttpDataFetcher`\<[`LayoutServiceData`](../interfaces/LayoutServiceData.md)\>

#### Defined in

sitecore-jss/types/layout/rest-layout-service.d.ts:84

***

### getFetchParams()

> `protected` **getFetchParams**: (`language`?) => `FetchParams`

Provides fetch options in order to fetch data

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `language`? | `string` | language will be applied to `sc_lang` param |

#### Returns

`FetchParams`

fetch options

#### Defined in

sitecore-jss/types/layout/rest-layout-service.d.ts:83

## Methods

### fetchLayoutData()

> **fetchLayoutData**(`itemPath`, `language`?, `req`?, `res`?): `Promise`\<[`LayoutServiceData`](../interfaces/LayoutServiceData.md)\>

Fetch layout data for an item.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `itemPath` | `string` | item path to fetch layout data for. |
| `language`? | `string` | the language to fetch layout data for. |
| `req`? | `IncomingMessage` | Request instance |
| `res`? | `ServerResponse`\<`IncomingMessage`\> | Response instance |

#### Returns

`Promise`\<[`LayoutServiceData`](../interfaces/LayoutServiceData.md)\>

layout service data

#### Throws

the item with the specified path is not found

#### Overrides

`LayoutServiceBase.fetchLayoutData`

#### Defined in

sitecore-jss/types/layout/rest-layout-service.d.ts:65

***

### fetchPlaceholderData()

> **fetchPlaceholderData**(`placeholderName`, `itemPath`, `language`?, `req`?, `res`?): `Promise`\<`PlaceholderData`\>

Fetch layout data for a particular placeholder.
Makes a request to Sitecore Layout Service for the specified placeholder in
a specific route item. Allows you to retrieve rendered data for individual placeholders instead of entire routes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `placeholderName` | `string` | the name of the placeholder to fetch layout data for. |
| `itemPath` | `string` | the path to the item to fetch layout data for. |
| `language`? | `string` | the language to fetch data for. |
| `req`? | `IncomingMessage` | Request instance |
| `res`? | `ServerResponse`\<`IncomingMessage`\> | Response instance |

#### Returns

`Promise`\<`PlaceholderData`\>

placeholder data

#### Defined in

sitecore-jss/types/layout/rest-layout-service.d.ts:77

***

### resolveLayoutServiceUrl()

> `protected` **resolveLayoutServiceUrl**(`apiType`): `string`

Resolves layout service url

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `apiType` | `"render"` \| `"placeholder"` \| `"component"` | which layout service API to call ('render' or 'placeholder') |

#### Returns

`string`

the layout service url

#### Defined in

sitecore-jss/types/layout/rest-layout-service.d.ts:90

***

### setupReqHeaders()

> `protected` **setupReqHeaders**(`req`): (`reqConfig`) => `AxiosRequestConfig`

Setup request headers

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `req` | `IncomingMessage` | Request instance |

#### Returns

`Function`

axios request config

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `reqConfig` | `AxiosRequestConfig` |

##### Returns

`AxiosRequestConfig`

#### Defined in

sitecore-jss/types/layout/rest-layout-service.d.ts:103

***

### setupResHeaders()

> `protected` **setupResHeaders**(`res`): (`serverRes`) => `AxiosResponse`\<`any`\>

Setup response headers based on response from layout service

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `res` | `ServerResponse`\<`IncomingMessage`\> | Response instance |

#### Returns

`Function`

response

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `serverRes` | `AxiosResponse`\<`any`\> |

##### Returns

`AxiosResponse`\<`any`\>

#### Defined in

sitecore-jss/types/layout/rest-layout-service.d.ts:109
