---
outline: deep
---

<script setup lang="ts">
  import {pickDivider} from '@elonehoo/pick'
</script>

# Divider

Divide text or section components with some great features and quick to implement.

## Default

You can add a line to divide with the component `pick-divider`.

```vue
<template>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <pick-divider/>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>
```

<div>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <pick-divider/>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

## Text

You can add a text between the line to delimit two elements and have a description for the user.

```vue
<template>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <pick-divider>My Text</pick-divider>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>
```

<div>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  <pick-divider>My Text</pick-divider>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

## Text Position

You can guide the text in 5 ways with property position:

- left
- left-center
- center (default)
- right-center
- right

```vue
<template>
  <pick-divider position="left">My Text</pick-divider>
  <pick-divider position="left-center">My Text</pick-divider>
  <pick-divider position="center">My Text</pick-divider>
  <pick-divider position="right-center">My Text</pick-divider>
  <pick-divider position="right">My Text</pick-divider>
</template>
```

<div>
  <pick-divider position="left">My Text</pick-divider>
  <pick-divider position="left-center">My Text</pick-divider>
  <pick-divider position="center">My Text</pick-divider>
  <pick-divider position="right-center">My Text</pick-divider>
  <pick-divider position="right">My Text</pick-divider>
</div>

## Color

You can change the color of the component with the property `color`, you can use the [main](./color) colors or **RGB** and **HEX**.

:::warning
Only **RGB** and **HEX** colors are supported.
:::

```vue
<template>
  <pick-divider>Default</pick-divider>
  <pick-divider color="primary">Primary</pick-divider>
  <pick-divider color="success">Success</pick-divider>
  <pick-divider color="danger">Danger</pick-divider>
  <pick-divider color="warning">Warning</pick-divider>
  <pick-divider color="dark">Dark</pick-divider>
  <pick-divider color="rgb(29, 222, 194)">RGB</pick-divider>
  <pick-divider color="#ad289f">HEX</pick-divider>
</template>
```

<div>
  <pick-divider>Default</pick-divider>
  <pick-divider color="primary">Primary</pick-divider>
  <pick-divider color="success">Success</pick-divider>
  <pick-divider color="danger">Danger</pick-divider>
  <pick-divider color="warning">Warning</pick-divider>
  <pick-divider color="dark">Dark</pick-divider>
  <pick-divider color="rgb(29, 222, 194)">RGB</pick-divider>
  <pick-divider color="#ad289f">HEX</pick-divider>
</div>

## Background

You can change the background of the component with the property `background`, you can use the [main](./color) colors or **RGB** and **HEX**.

```vue
<template>
  <pick-divider>Default</pick-divider>
  <pick-divider background="primary" color="#ade6d4">Primary</pick-divider>
  <pick-divider background="success" color="#0a540a">Success</pick-divider>
  <pick-divider background="danger" color="lightred">Danger</pick-divider>
  <pick-divider background="warning" color="grey">Warning</pick-divider>
  <pick-divider background="dark" color="lightgrey">Dark</pick-divider>
  <pick-divider background="rgb(252, 243, 192)" color="rgb(29, 222, 194)">RGB</pick-divider>
  <pick-divider background="#fffaaa" color="#ad289f">HEX</pick-divider>
</template>
```

<div>
  <pick-divider>Default</pick-divider>
  <pick-divider background="primary" color="#ade6d4">Primary</pick-divider>
  <pick-divider background="success" color="#0a540a">Success</pick-divider>
  <pick-divider background="danger" color="lightred">Danger</pick-divider>
  <pick-divider background="warning" color="grey">Warning</pick-divider>
  <pick-divider background="dark" color="lightgrey">Dark</pick-divider>
  <pick-divider background="rgb(252, 243, 192)" color="rgb(29, 222, 194)">RGB</pick-divider>
  <pick-divider background="#fffaaa" color="#ad289f">HEX</pick-divider>
</div>

## Icons

To add an icon within the division we have the property `icon`.

```vue
<template>
  <pick-divider icon="arrow_downward"></pick-divider>
  <pick-divider color="primary" icon="star"></pick-divider>
  <pick-divider color="success" icon="check"></pick-divider>
  <pick-divider color="danger" icon="delete_forever"></pick-divider>
  <pick-divider color="warning" icon="report_problem"></pick-divider>
  <pick-divider color="dark" icon="watch_later"></pick-divider>
</template>
```

<div>
  <pick-divider icon="arrow_downward"></pick-divider>
  <pick-divider color="primary" icon="star"></pick-divider>
  <pick-divider color="success" icon="check"></pick-divider>
  <pick-divider color="danger" icon="delete_forever"></pick-divider>
  <pick-divider color="warning" icon="report_problem"></pick-divider>
  <pick-divider color="dark" icon="watch_later"></pick-divider>
</div>

## Style

You can change line's style with the property `border-style`. The allowed values ​​are equivalent to the `border-style` property in CSS.

- **dotted** - Defines a dotted border
- **dashed** - Defines a dashed border
- **solid** - Defines a solid border (default)

```vue
<template>
  <pick-divider border-style="dotted" color="dark">dotted</pick-divider>
  <pick-divider border-style="dashed" color="dark">dashed</pick-divider>
  <pick-divider border-style="solid" color="dark">solid</pick-divider>
</template>
```

<div>
  <pick-divider border-style="dotted" color="dark">dotted</pick-divider>
  <pick-divider border-style="dashed" color="dark">dashed</pick-divider>
  <pick-divider border-style="solid" color="dark">solid</pick-divider>
</div>

## API

| name | type | parameters | descriptive | default |
| :---- | :---- | :----------: | :----------- | :------- |
| position | string | (left, left-center, right-center, right) | Determine the position of the text or icon. | center |
| color | string | | Change the color of the line and the text. | rgba(0,0,0,0.1) |
| background | string | | Change the background color of the text. | transparent |
| icon | string | Icon Class | 	Add an icon instead of the text. | default |
| border-style | string | parameters | Determines the type of line in the component. | solid |
| icon-pack | string | Icon Pack Class Name | Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
