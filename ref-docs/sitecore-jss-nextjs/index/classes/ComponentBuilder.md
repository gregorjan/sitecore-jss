[**@sitecore-jss/sitecore-jss-nextjs**](../../README.md) • **Docs**

***

[@sitecore-jss/sitecore-jss-nextjs](../../README.md) / [index](../README.md) / ComponentBuilder

# Class: ComponentBuilder

Nextjs implementation of component builder class for building components based on the configuration.

## Constructors

### new ComponentBuilder()

> **new ComponentBuilder**(`config`): [`ComponentBuilder`](ComponentBuilder.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`ComponentBuilderConfig`](../type-aliases/ComponentBuilderConfig.md)\<`Component`\> |

#### Returns

[`ComponentBuilder`](ComponentBuilder.md)

#### Defined in

[sitecore-jss-nextjs/src/ComponentBuilder.ts:48](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-nextjs/src/ComponentBuilder.ts#L48)

## Properties

### components

> `protected` **components**: `Map`\<`string`, `Component`\>

List of components to be stored

#### Defined in

[sitecore-jss-nextjs/src/ComponentBuilder.ts:41](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-nextjs/src/ComponentBuilder.ts#L41)

***

### config

> `protected` **config**: [`ComponentBuilderConfig`](../type-aliases/ComponentBuilderConfig.md)\<`Component`\>

#### Defined in

[sitecore-jss-nextjs/src/ComponentBuilder.ts:48](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-nextjs/src/ComponentBuilder.ts#L48)

***

### DEFAULT\_EXPORT\_NAME

> `protected` **DEFAULT\_EXPORT\_NAME**: `string` = `'Default'`

SXA uses custom default export name

#### Defined in

[sitecore-jss-nextjs/src/ComponentBuilder.ts:46](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-nextjs/src/ComponentBuilder.ts#L46)

## Methods

### getComponentFactory()

> **getComponentFactory**(`config`?): [`ComponentFactory`](../type-aliases/ComponentFactory.md)

Creates a new instance of component factory
Component can be imported dynamically or statically.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `config`? | `ComponentFactoryConfig` | Component factory configuration |

#### Returns

[`ComponentFactory`](../type-aliases/ComponentFactory.md)

Component factory implementation

#### Defined in

[sitecore-jss-nextjs/src/ComponentBuilder.ts:80](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-nextjs/src/ComponentBuilder.ts#L80)

***

### getModuleFactory()

> **getModuleFactory**(): [`ModuleFactory`](../type-aliases/ModuleFactory.md)

Creates a new instance of module factory
Module factory provides a module (file) including all exports.
Module can be imported dynamically or statically.

#### Returns

[`ModuleFactory`](../type-aliases/ModuleFactory.md)

Module factory implementation

#### Defined in

[sitecore-jss-nextjs/src/ComponentBuilder.ts:58](https://github.com/Sitecore/jss/blob/79b72df335ab50517e6c3357c25dd7db1965274d/packages/sitecore-jss-nextjs/src/ComponentBuilder.ts#L58)
