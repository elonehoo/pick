---
outline: deep
---

<script setup lang="ts">
import {pickIcon} from '@elonehoo/pick'
</script>

# Icon

Renders a font icon in the desired font library

## Default

To use the icon, use the `pick-icon` component. For the main parameter, pass the `icon` property that determines which icon to show. By default, the icon uses the **Google Material Icons** font library. Another library can be selected by passing the css class/classes for the library to `icon-pack`. Only the Material Icons library is bundled with the framework. Other libraries will have to be included implicitly.

:::tip
Pick uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://fonts.google.com/icons?selected=Material+Icons).
:::

```vue
<template>
  <span><pick-icon icon="mood" /></span>
  <span><pick-icon icon="child_care" /></span>
  <span><pick-icon icon="pets" /></span>
  <span><pick-icon icon="android" /></span>
  <span><pick-icon icon="polymer" /></span>
</template>
```

<div>
  <span><pick-icon icon="mood" /></span>
  <span><pick-icon icon="child_care" /></span>
  <span><pick-icon icon="pets" /></span>
  <span><pick-icon icon="android" /></span>
  <span><pick-icon icon="polymer" /></span>
</div>

## Color

You can change the color of the icons as well, using color names, RGB, HEX, or Pick variables.

```vue
<template>
  <span><pick-icon icon="mood" /></span>
  <span><pick-icon icon="child_care" color="red" /></span>
  <span><pick-icon icon="pets" color="primary" /></span>
  <span><pick-icon icon="android" color="rgb(70, 150, 0)" /></span>
  <span><pick-icon icon="polymer" color="#BC1254" /></span>
</template>
```

<div>
  <span><pick-icon icon="mood" /></span>
  <span><pick-icon icon="child_care" color="red" /></span>
  <span><pick-icon icon="pets" color="primary" /></span>
  <span><pick-icon icon="android" color="rgb(70, 150, 0)" /></span>
  <span><pick-icon icon="polymer" color="#BC1254" /></span>
</div>

## Size

You can change the size of the Avatar with the property size the allowed values ​​are:

- large
- small
- Custom measure

```vue
<template>
  <span><pick-icon icon="mood" /></span>
  <span><pick-icon icon="child_care" size="small" color="red" /></span>
  <span><pick-icon icon="pets" size="medium" color="primary" /></span>
  <span><pick-icon icon="android" size="large" color="rgb(70, 150, 0)" /></span>
  <span><pick-icon icon="polymer" size="75px" color="#BC1254" /></span>
</template>
```

<div>
  <span><pick-icon icon="mood" /></span>
  <span><pick-icon icon="child_care" size="small" color="red" /></span>
  <span><pick-icon icon="pets" size="medium" color="primary" /></span>
  <span><pick-icon icon="android" size="large" color="rgb(70, 150, 0)" /></span>
  <span><pick-icon icon="polymer" size="75px" color="#BC1254" /></span>
</div>

## Background Color

You can change the background color with the property bg.

```vue
<template>
  <span><pick-icon icon="mood" /></span>
  <span><pick-icon icon="child_care" size="small" bg="red" /></span>
  <span><pick-icon icon="pets" size="medium" bg="primary" /></span>
  <span><pick-icon icon="android" size="large" bg="rgb(70, 150, 0)" /></span>
  <span><pick-icon icon="polymer" size="75px" bg="#BC1254" /></span>
</template>
```

<div>
  <span><pick-icon icon="mood" /></span>
  <span><pick-icon icon="child_care" size="small" bg="red" /></span>
  <span><pick-icon icon="pets" size="medium" bg="primary" /></span>
  <span><pick-icon icon="android" size="large" bg="rgb(70, 150, 0)" /></span>
  <span><pick-icon icon="polymer" size="75px" bg="#BC1254" /></span>
</div>

## Rounded

To make the icon round, pass the property round.

:::tip
You can also pass this as `round=true`. The two are equivalent.
:::

```vue
<template>
  <span><pick-icon icon="mood" /></span>
  <span><pick-icon icon="child_care" size="small" bg="red" round /></span>
  <span><pick-icon icon="pets" size="medium" bg="primary" round /></span>
  <span><pick-icon icon="android" size="large" bg="rgb(70, 150, 0)" round /></span>
  <span><pick-icon icon="polymer" size="75px" bg="#BC1254" round /></span>
</template>
```

<div>
  <span><pick-icon icon="mood" /></span>
  <span><pick-icon icon="child_care" size="small" bg="red" round /></span>
  <span><pick-icon icon="pets" size="medium" bg="primary" round /></span>
  <span><pick-icon icon="android" size="large" bg="rgb(70, 150, 0)" round /></span>
  <span><pick-icon icon="polymer" size="75px" bg="#BC1254" round /></span>
</div>

## API

| name | type | parameters | description | default |
| :---- | :---- | :----------: | :----------- | :------- |
| icon | string | | Determines the icon | |
| icon-pack | string | | Determines the icon pack. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
| color | string | Pick color presets, RGB, HEX, html color presets | Determines the icon pack. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | black |
| bg | string | Pick color presets, RGB, HEX, html color presets | Sets the background color | |
| size | string | small, medium, large, custom measure(75px, 3rem, 2em) | Sets the size of the icon | 1rem |
| round | boolean | | Makes the background round. | false |
