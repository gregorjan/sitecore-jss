[**@sitecore-jss/sitecore-jss**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss](../../README.md) / [layout](../README.md) / getContentStylesheetLink

# Function: getContentStylesheetLink()

> **getContentStylesheetLink**(`layoutData`, `sitecoreEdgeContextId`, `sitecoreEdgeUrl`?): `null` \| [`HTMLLink`](../../index/type-aliases/HTMLLink.md)

Get the content styles link to be loaded from the Sitecore Edge Platform

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `layoutData` | [`LayoutServiceData`](../interfaces/LayoutServiceData.md) | `undefined` | Layout service data |
| `sitecoreEdgeContextId` | `string` | `undefined` | Sitecore Edge Context ID |
| `sitecoreEdgeUrl`? | `string` | `SITECORE_EDGE_URL_DEFAULT` | Sitecore Edge Platform URL. Default is https://edge-platform.sitecorecloud.io |

## Returns

`null` \| [`HTMLLink`](../../index/type-aliases/HTMLLink.md)

content styles link, null if no styles are used in layout

## Defined in

[packages/sitecore-jss/src/layout/content-styles.ts:26](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss/src/layout/content-styles.ts#L26)
