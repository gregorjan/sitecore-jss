[**@sitecore-jss/sitecore-jss**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss](../../README.md) / [tracking](../README.md) / TrackingRequestOptions

# Interface: TrackingRequestOptions

## Properties

### action?

> `optional` **action**: `string`

Type of tracking request action. Default: 'event'

#### Defined in

[packages/sitecore-jss/src/tracking/trackingRequestOptions.ts:20](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss/src/tracking/trackingRequestOptions.ts#L20)

***

### fetcher

> **fetcher**: [`HttpDataFetcher`](../../index/type-aliases/HttpDataFetcher.md)\<`void`\>

The fetcher that performs the HTTP request and returns a promise to JSON

#### Defined in

[packages/sitecore-jss/src/tracking/trackingRequestOptions.ts:12](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss/src/tracking/trackingRequestOptions.ts#L12)

***

### host

> **host**: `string`

Hostname of tracking service; e.g. http://my.site.core

#### Defined in

[packages/sitecore-jss/src/tracking/trackingRequestOptions.ts:6](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss/src/tracking/trackingRequestOptions.ts#L6)

***

### querystringParams?

> `optional` **querystringParams**: `ParsedUrlQueryInput`

An object of key:value pairs to be stringified and used as querystring parameters.

#### Defined in

[packages/sitecore-jss/src/tracking/trackingRequestOptions.ts:17](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss/src/tracking/trackingRequestOptions.ts#L17)

***

### serviceUrl?

> `optional` **serviceUrl**: `string`

Relative path from host to tracking service. Default: /sitecore/api/jss/track

#### Defined in

[packages/sitecore-jss/src/tracking/trackingRequestOptions.ts:9](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss/src/tracking/trackingRequestOptions.ts#L9)

***

### test?

> `optional` **test**: `boolean`

Internal usage only. Ignores SSR check for unit tests.

#### Defined in

[packages/sitecore-jss/src/tracking/trackingRequestOptions.ts:23](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss/src/tracking/trackingRequestOptions.ts#L23)
