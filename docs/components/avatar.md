---
outline: deep
---

<script setup lang="ts">
import {ref} from 'vue'
import {pickRow,pickAvatar,pickCol} from '@elonehoo/pick'

const badge1:number = ref(6)
const badge2:number = ref(16)
</script>

# Avatar

A nice avatar and with many interesting features.

## Default

Often you need to add an user's avatar to your app. In order to make this we have the component `pick-avatar`.

To add an internal text value such as `Elone` use the `text` property.

:::tip
If the text has more than 5 letters, only the first letter will be shown as in the second avatar, the name is `Elone Hoo` and only the letters `EH` will be shown if the word contains spaces the initial of each one is added.
:::

```vue
<template>
  <pick-avatar />
  <pick-avatar text="Elone Hoo" />
  <pick-avatar text="Elone" />
  <pick-avatar src="https://github.com/elonehoo.png" />
</template>
```

<div>
  <pick-row type="flex" justify="center" align="center">
    <pick-col type="flex-end" justify="center" align="center">
      <pick-avatar />
      <pick-avatar text="Elone Hoo"/>
      <pick-avatar text="Elone"/>
      <pick-avatar src="https://github.com/elonehoo.png"/>
    </pick-col>
  </pick-row>
</div>

## Size

You can change the size of the Avatar with the property size the allowed values ​​are:

- large
- small
- Custom measure

:::tip
In the example the last avatar has the custom size of 70px the added value will be the avatar's height and width
:::

```vue
<template>
  <pick-avatar size="small" />
  <pick-avatar text="Elone Hoo" />
  <pick-avatar size="large" text="Elone" />
  <pick-avatar size="70px" src="https://github.com/elonehoo.png" />
</template>
```

<div>
  <pick-row type="flex" justify="center" align="center">
    <pick-col type="flex-end" justify="center" align="center">
      <pick-avatar size="small" />
      <pick-avatar text="Elone Hoo"/>
      <pick-avatar size="large" text="Elone"/>
      <pick-avatar size="70px" src="https://github.com/elonehoo.png"/>
    </pick-col>
  </pick-row>
</div>

## Color

You can change the Avatar's color by using the property `color`. If needed you could also change the text's color with the property `text-color`.

```vue
<template>
  <pick-avatar color="primary" text="primary" />
  <pick-avatar color="success" text="success" />
  <pick-avatar color="danger" text="danger" />
  <pick-avatar color="warning" text="warning" />
  <pick-avatar color="dark" text="dark" />
  <pick-avatar color="rgb(200, 21, 129)" text="RGB" />
  <pick-avatar color="#18cd5b" text="HEX" />
  <pick-avatar color="#26302a" text-color="rgb(246, 190, 16)" text="HEX RGB" />
</template>
```

<div>
  <pick-row type="flex" justify="center" align="center">
    <pick-col type="flex-end" justify="center" align="center">
      <pick-avatar color="primary" text="primary"/>
      <pick-avatar color="success" text="success"/>
      <pick-avatar color="danger" text="danger"/>
      <pick-avatar color="warning" text="warning"/>
      <pick-avatar color="dark" text="dark"/>
      <pick-avatar color="rgb(200, 21, 129)" text="RGB"/>
      <pick-avatar color="#18cd5b" text="HEX"/>
      <pick-avatar color="#26302a" text-color="rgb(246, 190, 16)" text="HEX RGB"/>
    </pick-col>
  </pick-row>
</div>

## With Badge

You can add a notification label to the avatar, either a reference point or a number with the property `badge`.

You could also change the badge's color by using the property `badge-color`. You are able to use the `Pick Colors` or `RGB` and `HEX` colors.

:::tip
Only **RGB** and **HEX** colors are supported.
:::

```vue
<template>
  <pick-avatar badge />
  <pick-avatar :badge="badge1" text="EloneHoo" />
  <pick-avatar badge-color="rgb(140, 23, 164)" :badge="badge2" text="Elone" />
  <pick-avatar :badge="badge2" src="https://github.com/elonehoo.png" />
</template>
```

<div>
  <pick-row type="flex" justify="center" align="center">
    <pick-col type="flex-end" justify="center" align="center">
      <pick-avatar badge />
      <pick-avatar :badge="badge1" text="EloneHoo" />
      <pick-avatar badge-color="rgb(140, 23, 164)" :badge="badge2" text="Elone" />
      <pick-avatar :badge="badge2" src="https://github.com/elonehoo.png"/>
    </pick-col>
  </pick-row>
</div>

## Icon

You can change the main icon of the Avatar with the property icon

:::tip
Pick uses the **Google Material Icons** font library. For a list of all available icons, visit the official [Material Icons page](https://fonts.google.com/icons?selected=Material+Icons).

This icon is only displayed when there is no property as text o src
:::

```vue
<template>
  <pick-avatar />
  <pick-avatar color="primary" icon="date_range" />
  <pick-avatar color="success" icon="whatshot" />
  <pick-avatar color="danger" icon="photo_camera" />
  <pick-avatar color="warning" icon="filter_vintage" />
  <pick-avatar color="dark" icon="watch" />
</template>
```

<div>
  <pick-row type="flex" justify="center" align="center">
    <pick-col type="flex-end" justify="center" align="center">
      <pick-avatar />
      <pick-avatar color="primary" icon="date_range" />
      <pick-avatar color="success" icon="whatshot" />
      <pick-avatar color="danger" icon="photo_camera" />
      <pick-avatar color="warning" icon="filter_vintage" />
      <pick-avatar color="dark" icon="watch" />
    </pick-col>
  </pick-row>
</div>

## API

| name | type | parameters | descriptive | default |
| :---- | :---- | :----------: | :----------- | :------- |
| text | string | | If the text is very long, only the first letter is added. | |
| text-color | string | Text colores principales, RGB, HEX | Define the color of the Text. | rgb(255, 255, 255) |
| src | string | parameters | Url of the image to show in the Avatar. | |
