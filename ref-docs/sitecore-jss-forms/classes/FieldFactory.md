[**@sitecore-jss/sitecore-jss-react-forms**](../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-react-forms](../README.md) / FieldFactory

# Class: FieldFactory

Maps field type IDs from Sitecore (/sitecore/system/Settings/Forms/Field Types)
into an implementing React component - this is very similar to the JSS componentFactory,
but it maps form element components instead of layout components

## Constructors

### new FieldFactory()

> **new FieldFactory**(): [`FieldFactory`](FieldFactory.md)

#### Returns

[`FieldFactory`](FieldFactory.md)

#### Defined in

[src/field-factory.tsx:18](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-react-forms/src/field-factory.tsx#L18)

## Methods

### get()

> **get**(`field`, `props`): `ReactNode`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `field` | `FormField`\<`ViewModel`\> |
| `props` | [`FieldProps`](../interfaces/FieldProps.md)\<`FormField`\<`ViewModel`\>\> |

#### Returns

`ReactNode`

#### Defined in

[src/field-factory.tsx:38](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-react-forms/src/field-factory.tsx#L38)

***

### setComponent()

> **setComponent**\<`TProps`\>(`type`, `component`): `void`

#### Type Parameters

| Type Parameter |
| ------ |
| `TProps` *extends* [`FieldProps`](../interfaces/FieldProps.md)\<`FormField`\<`ViewModel`\>\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `string` |
| `component` | `FormFieldComponent`\<`TProps`\> |

#### Returns

`void`

#### Defined in

[src/field-factory.tsx:31](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-react-forms/src/field-factory.tsx#L31)

***

### setComponentNotFoundComponent()

> **setComponentNotFoundComponent**(`component`): `void`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | `ComponentType`\<`FormField`\<`ViewModel`\>\> |

#### Returns

`void`

#### Defined in

[src/field-factory.tsx:27](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-react-forms/src/field-factory.tsx#L27)
