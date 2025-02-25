[**@sitecore-jss/sitecore-jss-angular**](../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-angular](../README.md) / RouterLinkDirective

# Class: RouterLinkDirective

## Extends

- [`LinkDirective`](LinkDirective.md)

## Constructors

### new RouterLinkDirective()

> **new RouterLinkDirective**(`viewContainer`, `templateRef`, `renderer`, `elementRef`, `router`): [`RouterLinkDirective`](RouterLinkDirective.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `viewContainer` | `ViewContainerRef` |
| `templateRef` | `TemplateRef`\<`unknown`\> |
| `renderer` | `Renderer2` |
| `elementRef` | `ElementRef`\<`any`\> |
| `router` | `Router` |

#### Returns

[`RouterLinkDirective`](RouterLinkDirective.md)

#### Overrides

[`LinkDirective`](LinkDirective.md).[`constructor`](LinkDirective.md#constructors)

#### Defined in

[packages/sitecore-jss-angular/src/components/router-link.directive.ts:28](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/router-link.directive.ts#L28)

## Properties

### attrs

> **attrs**: `object` = `{}`

#### Index Signature

 \[`attr`: `string`\]: `string`

#### Overrides

[`LinkDirective`](LinkDirective.md).[`attrs`](LinkDirective.md#attrs)

#### Defined in

[packages/sitecore-jss-angular/src/components/router-link.directive.ts:17](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/router-link.directive.ts#L17)

***

### defaultFieldEditingComponent

> `protected` **defaultFieldEditingComponent**: `Type`\<`unknown`\>

Default component to render in Pages in Metadata edit mode if field value is empty and emptyFieldEditingTemplate is not provided

#### Inherited from

[`LinkDirective`](LinkDirective.md).[`defaultFieldEditingComponent`](LinkDirective.md#defaultfieldeditingcomponent)

#### Defined in

[packages/sitecore-jss-angular/src/components/link.directive.ts:33](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/link.directive.ts#L33)

***

### editable

> **editable**: `boolean` = `true`

#### Overrides

[`LinkDirective`](LinkDirective.md).[`editable`](LinkDirective.md#editable)

#### Defined in

[packages/sitecore-jss-angular/src/components/router-link.directive.ts:15](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/router-link.directive.ts#L15)

***

### emptyFieldEditingTemplate

> **emptyFieldEditingTemplate**: `TemplateRef`\<`unknown`\>

Custom template to render in Pages in Metadata edit mode if field value is empty

#### Overrides

[`LinkDirective`](LinkDirective.md).[`emptyFieldEditingTemplate`](LinkDirective.md#emptyfieldeditingtemplate)

#### Defined in

[packages/sitecore-jss-angular/src/components/router-link.directive.ts:24](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/router-link.directive.ts#L24)

***

### field

> **field**: [`LinkField`](../interfaces/LinkField.md)

#### Overrides

[`LinkDirective`](LinkDirective.md).[`field`](LinkDirective.md#field)

#### Defined in

[packages/sitecore-jss-angular/src/components/router-link.directive.ts:19](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/router-link.directive.ts#L19)

***

### renderer

> `protected` **renderer**: `Renderer2`

#### Inherited from

[`LinkDirective`](LinkDirective.md).[`renderer`](LinkDirective.md#renderer)

#### Defined in

[packages/sitecore-jss-angular/src/components/link.directive.ts:40](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/link.directive.ts#L40)

***

### templateRef

> `protected` **templateRef**: `TemplateRef`\<`unknown`\>

#### Inherited from

[`LinkDirective`](LinkDirective.md).[`templateRef`](LinkDirective.md#templateref)

#### Defined in

[packages/sitecore-jss-angular/src/components/link.directive.ts:39](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/link.directive.ts#L39)

***

### viewContainer

> `protected` **viewContainer**: `ViewContainerRef`

#### Inherited from

[`LinkDirective`](LinkDirective.md).[`viewContainer`](LinkDirective.md#viewcontainer)

#### Defined in

[packages/sitecore-jss-angular/src/components/base-field.directive.ts:24](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/base-field.directive.ts#L24)

***

### viewRef

> `protected` **viewRef**: `EmbeddedViewRef`\<`unknown`\>

#### Inherited from

[`LinkDirective`](LinkDirective.md).[`viewRef`](LinkDirective.md#viewref)

#### Defined in

[packages/sitecore-jss-angular/src/components/base-field.directive.ts:12](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/base-field.directive.ts#L12)

## Methods

### ngOnChanges()

> **ngOnChanges**(`changes`): `void`

A callback method that is invoked immediately after the
default change detector has checked data-bound properties
if at least one has changed, and before the view and content
children are checked.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `changes` | `SimpleChanges` | The changed properties. |

#### Returns

`void`

#### Inherited from

[`LinkDirective`](LinkDirective.md).[`ngOnChanges`](LinkDirective.md#ngonchanges)

#### Defined in

[packages/sitecore-jss-angular/src/components/link.directive.ts:47](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/link.directive.ts#L47)

***

### renderEmpty()

> `protected` **renderEmpty**(): `void`

Renders the empty field markup which is required by Pages in editMode 'metadata' in case field is empty.

#### Returns

`void`

#### Inherited from

[`LinkDirective`](LinkDirective.md).[`renderEmpty`](LinkDirective.md#renderempty)

#### Defined in

[packages/sitecore-jss-angular/src/components/base-field.directive.ts:37](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/base-field.directive.ts#L37)

***

### renderMetadata()

> `protected` **renderMetadata**(`kind`): `void`

Renders a metadata chrome marker for the field. Required by Pages in editMode 'metadata'.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `kind` | `MetadataKind` | 'open' or 'close' to indicate the start or end of the metadata chrome |

#### Returns

`void`

#### Inherited from

[`LinkDirective`](LinkDirective.md).[`renderMetadata`](LinkDirective.md#rendermetadata)

#### Defined in

[packages/sitecore-jss-angular/src/components/base-field.directive.ts:53](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/base-field.directive.ts#L53)

***

### renderTemplate()

> `protected` **renderTemplate**(`props`, `linkText`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | `object` |
| `linkText` | `string` |

#### Returns

`void`

#### Overrides

[`LinkDirective`](LinkDirective.md).[`renderTemplate`](LinkDirective.md#rendertemplate)

#### Defined in

[packages/sitecore-jss-angular/src/components/router-link.directive.ts:38](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/router-link.directive.ts#L38)

***

### shouldRender()

> `protected` **shouldRender**(): `boolean`

Determines if directive should render the field as is
Returns true if we are in edit mode 'chromes' (field.editable is present) or field is not empty
or link field text is present and we are not in edit mode 'metadata'
The right side of the expression was added to preserve existing functionality

#### Returns

`boolean`

#### Inherited from

[`LinkDirective`](LinkDirective.md).[`shouldRender`](LinkDirective.md#shouldrender)

#### Defined in

[packages/sitecore-jss-angular/src/components/link.directive.ts:102](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/link.directive.ts#L102)

***

### updateAttribute()

> `protected` **updateAttribute**(`node`, `key`, `propValue`?): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `node` | `HTMLElement` |
| `key` | `string` |
| `propValue`? | `unknown` |

#### Returns

`void`

#### Inherited from

[`LinkDirective`](LinkDirective.md).[`updateAttribute`](LinkDirective.md#updateattribute)

#### Defined in

[packages/sitecore-jss-angular/src/components/link.directive.ts:73](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-angular/src/components/link.directive.ts#L73)
