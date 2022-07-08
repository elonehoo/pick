---
outline: deep
---

<script setup lang="ts">
  import {pickButton,pickRow,pickCol} from '@elonehoo/pick'
</script>

# Button

Easy-to-use button components

## Filled

To define the type of button the directive is used type with the value of some `type` of button like it can be: `filled`.

```vue
<template>
  <pick-button color="primary" type="filled">
    Primary
  </pick-button>
  <pick-button color="success" type="filled">
    Success
  </pick-button>
  <pick-button color="danger" type="filled">
    Danger
  </pick-button>
  <pick-button color="warning" type="filled">
    Warning
  </pick-button>
  <pick-button color="dark" type="filled">
    Dark
  </pick-button>
  <pick-button color="#3dd495" type="filled">
    RGB
  </pick-button>
  <pick-button disabled type="filled">
    Disabled
  </pick-button>
</template>
```

<div>
  <pick-button color="primary" type="filled" >Primary</pick-button>
  &nbsp;
  <pick-button color="success" type="filled">Success</pick-button>
  &nbsp;
  <pick-button color="danger" type="filled">Danger</pick-button>
  &nbsp;
  <pick-button color="warning" type="filled">Warning</pick-button>
  &nbsp;
  <pick-button color="dark" type="filled">Dark</pick-button>
  &nbsp;
  <pick-button color="#3dd495" type="filled">RGB</pick-button>
  &nbsp;
  <pick-button disabled type="filled">Disabled</pick-button>
</div>

## Border

To add a type of button with edges we change the value of `border`.

```vue
<template>
  <pick-button color="primary" type="border">
    Primary
  </pick-button>
  <pick-button color="success" type="border">
    Success
  </pick-button>
  <pick-button color="danger" type="border">
    Danger
  </pick-button>
  <pick-button color="warning" type="border">
    Warning
  </pick-button>
  <pick-button color="dark" type="border">
    Dark
  </pick-button>
  <pick-button color="#3dd495" type="border">
    RGB
  </pick-button>
  <pick-button disabled type="border">
    Disabled
  </pick-button>
</template>
```

<div>
  <pick-button color="primary" type="border">Primary</pick-button>
  &nbsp;
  <pick-button color="success" type="border">Success</pick-button>
  &nbsp;
  <pick-button color="danger" type="border">Danger</pick-button>
  &nbsp;
  <pick-button color="warning" type="border">Warning</pick-button>
  &nbsp;
  <pick-button color="dark" type="border">Dark</pick-button>
  &nbsp;
  <pick-button color="#3dd495" type="border">RGB</pick-button>
  &nbsp;
  <pick-button disabled type="border">Disabled</pick-button>
</div>

## Flat

To add a type of button with edges we change the value of `flat`.

```vue
<template>
  <pick-button color="primary" type="flat">
    Primary
  </pick-button>
  <pick-button color="success" type="flat">
    Success
  </pick-button>
  <pick-button color="danger" type="flat">
    Danger
  </pick-button>
  <pick-button color="warning" type="flat">
    Warning
  </pick-button>
  <pick-button color="dark" type="flat">
    Dark
  </pick-button>
  <pick-button color="#3dd495" type="flat">
    RGB
  </pick-button>
  <pick-button disabled type="flat">
    Disabled
  </pick-button>
</template>
```

<div>
  <pick-button color="primary" type="flat">Primary</pick-button>
  &nbsp;
  <pick-button color="success" type="flat">Success</pick-button>
  &nbsp;
  <pick-button color="danger" type="flat">Danger</pick-button>
  &nbsp;
  <pick-button color="warning" type="flat">Warning</pick-button>
  &nbsp;
  <pick-button color="dark" type="flat">Dark</pick-button>
  &nbsp;
  <pick-button color="#3dd495" type="flat">RGB</pick-button>
  &nbsp;
  <pick-button disabled type="flat">Disabled</pick-button>
</div>

## Line Down

To add a type of button with edges we change the value of `type` by: `line`.

:::tip
you can change the position of the line up with the property line-position="top". You can also change the way the line appears on mouse hover with the property line-origin using the allowed values:

 - left
 - center (default)
 - right
:::

```vue
<template>
  <pick-button color="primary" type="line">
    Primary
  </pick-button>
  <pick-button color="success" line-origin="left" type="line">
    Success
  </pick-button>
  <pick-button color="danger" type="line">
    Danger
  </pick-button>
  <pick-button color="warning" line-position="top" line-origin="left" type="line">
    Warning
  </pick-button>
  <pick-button color="dark" line-position="top" line-origin="right" type="line">
    Dark
  </pick-button>
  <pick-button color="#3dd495" type="line">
    RGB
  </pick-button>
  <pick-button disabled type="line">
    Disabled
  </pick-button>
</template>
```

<div>
  <pick-button color="primary" type="line">Primary</pick-button>
  &nbsp;
  <pick-button color="success" line-origin="left" type="line">Success</pick-button>
  &nbsp;
  <pick-button color="danger" type="line">Danger</pick-button>
  &nbsp;
  <pick-button color="warning" line-position="top"  line-origin="left" type="line">Warning</pick-button>
  &nbsp;
  <pick-button color="dark" line-position="top" line-origin="right" type="line">Dark</pick-button>
  &nbsp;
  <pick-button color="#3dd495" type="line">RGB</pick-button>
  &nbsp;
  <pick-button disabled type="line">Disabled</pick-button>
</div>

## Gradient

To add a type of button with edges we change the value of `type` by: `gradient`.

```vue
<template>
  <pick-button color="primary" type="gradient">
    Primary
  </pick-button>
  <pick-button color="success" type="gradient">
    Success
  </pick-button>
  <pick-button color="danger" type="gradient">
    Danger
  </pick-button>
  <pick-button color="warning" type="gradient">
    Warning
  </pick-button>
  <pick-button color="dark" type="gradient">
    Dark
  </pick-button>
  <pick-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" type="gradient">
    RGB
  </pick-button>
  <pick-button disabled type="gradient">
    Disabled
  </pick-button>
</template>
```

<div>
  <pick-button color="primary" type="gradient">Primary</pick-button>
  &nbsp;
  <pick-button color="success" type="gradient">Success</pick-button>
  &nbsp;
  <pick-button color="danger" type="gradient">Danger</pick-button>
  &nbsp;
  <pick-button color="warning" type="gradient">Warning</pick-button>
  &nbsp;
  <pick-button color="dark" type="gradient">Dark</pick-button>
  &nbsp;
  <pick-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" type="gradient">RGB</pick-button>
  &nbsp;
  <pick-button disabled type="gradient">Disabled</pick-button>
</div>

## Relief

To add a type of button with edges we change the value of `type` by: `relief`.

```vue
<template>
  <pick-button color="primary" type="relief">
    Primary
  </pick-button>
  <pick-button color="success" type="relief">
    Success
  </pick-button>
  <pick-button color="danger" type="relief">
    Danger
  </pick-button>
  <pick-button color="warning" type="relief">
    Warning
  </pick-button>
  <pick-button color="dark" type="relief">
    Dark
  </pick-button>
  <pick-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" type="relief">
    RGB
  </pick-button>
  <pick-button disabled type="relief">
    Disabled
  </pick-button>
</template>
```

<div>
  <pick-button color="primary" type="relief">Primary</pick-button>
  &nbsp;
  <pick-button color="success" type="relief">Success</pick-button>
  &nbsp;
  <pick-button color="danger" type="relief">Danger</pick-button>
  &nbsp;
  <pick-button color="warning" type="relief">Warning</pick-button>
  &nbsp;
  <pick-button color="dark" type="relief">Dark</pick-button>
  &nbsp;
  <pick-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" type="relief">RGB</pick-button>
  &nbsp;
  <pick-button disabled type="relief">Disabled</pick-button>
</div>

## Color

There are cases in which we need something more personalized like a specific color, you can change the color of the button with the property `color` giving it as a value the color.

:::tip
If you need a gradient type button, to assign the color you have to use the property `gradient-color-secondary`
:::

```vue
<template>
  <pick-button color="#c72a75" type="filled">
    Color
  </pick-button>
  <pick-button color="#c72a75" type="border">
    Color
  </pick-button>
  <pick-button color="#c72a75" type="flat">
    Color
  </pick-button>
  <pick-button color="#c72a75" type="line">
    Color
  </pick-button>
  <pick-button color="#c72a75" gradient-color-secondary="#5252e8" type="gradient">
    Color
  </pick-button>
  <pick-button color="#c72a75" type="relief">
    Color
  </pick-button>
</template>
```

<div>
  <pick-button color="#c72a75" type="filled">Color</pick-button>
  &nbsp;
  <pick-button color="#c72a75" type="border">Color</pick-button>
  &nbsp;
  <pick-button color="#c72a75" type="flat">Color</pick-button>
  &nbsp;
  <pick-button color="#c72a75" type="line">Color</pick-button>
  &nbsp;
  <pick-button color="#c72a75" gradient-color-secondary="#5252e8" type="gradient">Color</pick-button>
  &nbsp;
  <pick-button color="#c72a75" type="relief">Color</pick-button>
</div>

## Text Color

You can change the font color of buttons, need only set the prop `text-color` with your color.

```vue
<template>
  <pick-button color="primary" type="filled">
    Primary
  </pick-button>
  <pick-button color="success" text-color="rgb(10, 20, 30)" type="filled">
    Success
  </pick-button>
  <pick-button color="danger" text-color="#aaff00" type="filled">
    Danger
  </pick-button>
  <pick-button color="warning" text-color="primary" type="filled">
    Warning
  </pick-button>
  <pick-button color="dark" text-color="rgb(215, 205, 195)" type="filled">
    Dark
  </pick-button>
  <pick-button color="rgb(187, 138, 200)" text-color="warning)">
    RGB
  </pick-button>
  <pick-button disabled type="filled" text-color="rgb(0, 0, 0)">
    Disabled
  </pick-button>
</template>
```

<div>
  <pick-button color="primary" type="filled" >Primary</pick-button>
  &nbsp;
  <pick-button color="success" text-color="rgb(10, 20, 30)" type="filled">Success</pick-button>
  &nbsp;
  <pick-button color="danger" text-color="#aaff00" type="filled">Danger</pick-button>
  &nbsp;
  <pick-button color="warning" text-color="primary" type="filled">Warning</pick-button>
  &nbsp;
  <pick-button color="dark" text-color="rgb(215, 205, 195)" type="filled">Dark</pick-button>
  &nbsp;
  <pick-button color="rgb(187, 138, 200)" text-color="warning)">RGB</pick-button>
  &nbsp;
  <pick-button disabled type="filled" text-color="rgb(0, 0, 0)">Disabled</pick-button>
</div>

## Icon

You can add an icon to the button with the property `icon`.

:::tip
You can change the position of the icon so that it is after the text with the property `icon-after`
:::

```vue
<template>
  <pick-button color="primary" type="border" icon="home">
    Primary
  </pick-button>
  <pick-button color="warning" type="filled" icon="star">
    Star
  </pick-button>
  <pick-button color="success" type="flat" icon="done">
    Done
  </pick-button>
  <pick-button color="dark" type="line" icon="menu" icon-after>
    menu
  </pick-button>
  <pick-button color="danger" type="gradient" icon="favorite">
    favorite
  </pick-button>
  <pick-button disabled color="primary" type="border" icon="home">
    Disabled
  </pick-button>
</template>
```

<pick-row align="flex-start" type="flex" justify="center" :w="12">
  <pick-col type="flex" justify="center" align="center" :w="2">
    <pick-button color="primary" type="border" icon="home">Primary</pick-button>
  </pick-col>
  <pick-col type="flex" justify="center" align="center" :w="2">
    <pick-button color="warning" type="filled" icon="star">Star</pick-button>
  </pick-col>
  <pick-col type="flex" justify="center" align="center" :w="2">
    <pick-button color="success" type="flat" icon="done">Done</pick-button>
  </pick-col>
  <pick-col type="flex" justify="center" align="center" :w="2">
    <pick-button color="dark" type="line" icon="menu" iconAfter>menu</pick-button>
  </pick-col>
  <pick-col type="flex" justify="center" align="center" :w="2">
    <pick-button color="danger" type="gradient" icon="favorite">favorite</pick-button>
  </pick-col>
  <pick-col type="flex" justify="center" align="center" :w="2">
    <pick-button disabled color="primary" type="border" icon="home">Disabled</pick-button>
  </pick-col>
</pick-row>

### Icon only

You can have a button with only the icon you want with the property `icon` and not add any internal value to the button.

:::tip
you can use the `radius` property to determine the border-radius of the button, there are many cases in which we need it to be round for example.
:::

```vue
<template>
  <pick-button color="primary" type="border" icon="search" />
  <pick-button color="warning" type="filled" icon="public" />
  <pick-button color="success" type="flat" icon="photo_camera" />
  <pick-button color="dark" type="line" icon="event_note" />
  <pick-button color="danger" type="gradient" icon="person_add" />
  <pick-button disabled color="primary" type="border" icon="search" />
  <br>
  <pick-button radius color="primary" type="border" icon="search" />
  <pick-button radius color="warning" type="filled" icon="public" />
  <pick-button radius color="success" type="flat" icon="photo_camera" />
  <pick-button radius color="dark" type="line" icon="event_note" />
  <pick-button radius color="danger" type="gradient" icon="person_add" />
  <pick-button radius disabled color="primary" type="border" icon="search" />
</template>
```

<pick-row align="flex-start" type="flex" justify="center" :w="12">
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button color="primary" type="border" icon="search"/>
  </pick-col>
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button color="warning" type="filled" icon="public" />
  </pick-col>
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button color="success" type="flat" icon="photo_camera" />
  </pick-col>
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button color="dark" type="line" icon="event_note" />
  </pick-col>
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button color="danger" type="gradient" icon="person_add" />
  </pick-col>
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button disabled color="primary" type="border" icon="search" />
  </pick-col>
</pick-row>
<br />
<pick-row align="flex-start" type="flex" justify="center" :w="12">
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button radius color="primary" type="border" icon="search"/>
  </pick-col>
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button radius color="warning" type="filled" icon="public" />
  </pick-col>
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button radius color="success" type="flat" icon="photo_camera" />
  </pick-col>
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button radius color="dark" type="line" icon="event_note" />
  </pick-col>
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button radius color="danger" type="gradient" icon="person_add" />
  </pick-col>
  <pick-col type="flex" justify="center" align="center" offset="1" :w="1">
    <pick-button radius disabled color="primary" type="border" icon="search" />
  </pick-col>
</pick-row>

## Size

To define the size of button the directive is used `size`. there are three type of size: `large`, `default`, `small`. It is not important to specify the size when the button is of type `default`

```vue
<template>
  <pick-button size="large">
    Large
  </pick-button>
  <pick-button>Default</pick-button>
  <pick-button size="small">
    Small
  </pick-button>
</template>
```

<div>
  <pick-button size="large">Large</pick-button>
  &nbsp;
  <pick-button>Default</pick-button>
  &nbsp;
  <pick-button size="small">Small</pick-button>
</div>

## Link

You can specify for `window.location.href`

:::tip
you can use the `target` property to window.open()
:::

```vue
<template>
  <pick-button href="https://pick.elonehoo.xyz/">
    String literal
  </pick-button>
  <pick-button :href="{url: 'https://pick.elonehoo.xyz/'}">
    Object Path
  </pick-button>
  <pick-button target :href="{url: 'https://pick.elonehoo.xyz/'}">
    Open Current Tab
  </pick-button>
</template>
```

<div>
  <pick-button color="primary" type="filled" href="https://pick.elonehoo.xyz/">String literal</pick-button>
  &nbsp;
  <pick-button color="primary" type="filled" :href="{url: 'https://pick.elonehoo.xyz/'}">Object Path</pick-button>
  &nbsp;
  <pick-button color="primary" type="filled" target :href="{url: 'https://pick.elonehoo.xyz/'}">Open Current Tab</pick-button>
</div>

## API

| name | type | parameters | descriptive | default |
| :---- | :---- | :----------: | :----------- | :------- |
| type | string | | The type of button to use | filled |
| color | string | | Change the color of the button | primary |
| text-color | string | | Change the font color of the button | |
| icon | string | Material Icons | Determine the button icon | |
| icon-pack | string | Icon Pack Class Name	 | Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
| icon-after | boolean | | Determines if the icon is set after the text | false |
| line-origin | string | left,center,right | Determines the output of the line on the button (line) | center |
| line-position | string | top,down | Determine if the button (line) has the line up or down | down |
| gradient-direction | string | | Determine the angle of the gradient on the button | 30 deg |
| gradient-color-secondary | string | | Change the secondary color on the button (gradient) | primary |
| radius | boolean | | Change button radius to circle | false |
| href | any | | Added href property to button | |
| target | boolean | | Presence or absence of target property | false |
