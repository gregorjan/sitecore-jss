[**@sitecore-jss/sitecore-jss-react**](../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-react](../README.md) / ComponentBuilder

# Class: ComponentBuilder

React implementation of component builder class for building components based on the configuration.

## Constructors

### new ComponentBuilder()

> **new ComponentBuilder**(`config`): [`ComponentBuilder`](ComponentBuilder.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`ComponentBuilderConfig`](../type-aliases/ComponentBuilderConfig.md)\<`ComponentType`\> |

#### Returns

[`ComponentBuilder`](ComponentBuilder.md)

#### Defined in

[packages/sitecore-jss-react/src/ComponentBuilder.ts:23](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-react/src/ComponentBuilder.ts#L23)

## Properties

### components

> `protected` **components**: `Map`\<`string`, `ComponentType`\>

List of components to be stored

#### Defined in

[packages/sitecore-jss-react/src/ComponentBuilder.ts:21](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-react/src/ComponentBuilder.ts#L21)

***

### config

> `protected` **config**: [`ComponentBuilderConfig`](../type-aliases/ComponentBuilderConfig.md)\<`ComponentType`\>

#### Defined in

[packages/sitecore-jss-react/src/ComponentBuilder.ts:23](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-react/src/ComponentBuilder.ts#L23)

## Methods

### getComponentFactory()

> **getComponentFactory**(): [`ComponentFactory`](../type-aliases/ComponentFactory.md)

Creates a new instance of component factory

#### Returns

[`ComponentFactory`](../type-aliases/ComponentFactory.md)

Component factory implementation

#### Defined in

[packages/sitecore-jss-react/src/ComponentBuilder.ts:31](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-react/src/ComponentBuilder.ts#L31)
