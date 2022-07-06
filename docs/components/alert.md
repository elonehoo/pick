<script setup lang="ts">
import {ref} from 'vue'
import {pickAlert} from '@elonehoo/pick'

const active1:boolean = ref(true)
</script>

# Alert

Notifications to the user at execution time with good animation and functionality

## Default

To add a notification use the `pick-alert` component. For the main parameter, pass the active property that determines if the alert is visible or not.

```vue
<template>
  <pick-alert active="true">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </pick-alert>
</template>
```

<div >
  <pick-alert active="true">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </pick-alert>
</div>

## Title

Add a title to the alert with the property title.

<div>
  <pick-alert title="Lorem ipsum dolor sit amet" color="rgb(231, 154, 23)" active="true">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </pick-alert>
</div>

## Color

You can change the color of the alert with the property color. You are able to use the `Pick Colors` or `RGB` and `HEX` colors.

:::warning
Only **RGB** and **HEX** colors are supported.
:::

```vue
<template>
  <pick-alert color="primary" title="Primary" active="true">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  </pick-alert>
  <pick-alert title="Success" active="true" color="success">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
  <pick-alert title="Danger" active="true" color="danger">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </pick-alert>
  <pick-alert title="Danger" active="true" color="warning">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </pick-alert>
  <pick-alert title="Dark" active="true" color="dark">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
  <pick-alert title="RGB" active="true" color="rgb(41, 147, 138)">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
  <pick-alert title="HEX" active="true" color="#842993">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
</template>
```

<div>
  <pick-alert color="primary" title="Primary" active="true">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  </pick-alert>
  <br/>
  <pick-alert title="Success" active="true" color="success">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
  <br/>
  <pick-alert title="Danger" active="true" color="danger">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </pick-alert>
  <br/>
  <pick-alert title="Danger" active="true" color="warning">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </pick-alert>
  <br/>
  <pick-alert title="Dark" active="true" color="dark">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
  <br/>
  <pick-alert title="RGB" active="true" color="rgb(41, 147, 138)">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
  <br/>
  <pick-alert title="HEX" active="true" color="#842993">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
</div>

## Closable

You can show and hide the alert by means of active and a boolean bind as value.

The property to determine if the alert can be closed is closable.

```vue
<template>
  <pick-alert :active="active1" closable @update:active="(n)=>active1 = n" close-icon="close">
    Lorem ip sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
</template>
```

<div>
  <button @click="active1=!active1">{{active1 ? 'close' : 'open'}}</button>
  <pick-alert :active="active1" closable @update:active="(n)=>active1 = n" close-icon="close">
    Lorem ip sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
</div>

You can also change the icon used for the close buton on the alerts.

:::tip
Pick uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://fonts.google.com/icons?selected=Material+Icons). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

```vue
<template>
  <pick-alert :active="active1" closable @update:active="(n)=>active1 = n" close-icon="cancel">
    Lorem ip sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
</template>
```

<div>
  <button @click="active1=!active1">{{active1 ? 'close' : 'open'}}</button>
  <pick-alert :active="active1" closable @update:active="(n)=>active1 = n" close-icon="cancel">
    Lorem ip sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
</div>

## Icons

You can add to the alert a descriptive icon with the property icon and as a value the icon name of the icon in the currently selected icon pack. (The default is [Material Icons](https://fonts.google.com/icons?selected=Material+Icons))

:::tip
Pick uses the **Google Material Icons** font library by default. For a list of all available icons, visit the official [Material Icons page](https://fonts.google.com/icons?selected=Material+Icons). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

```vue
<template>
  <pick-alert active="true" color="rgb(111, 38, 224)" icon="sms">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
</template>
```

<div>
  <pick-alert active="true" color="rgb(111, 38, 224)" icon="sms">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
  </pick-alert>
</div>

## API

| name | type | parameters | descriptive | default |
| :----: | :----: | :-----------: | :-----------: | :-------: |
| active | boolean | true,false | Determines if the component is visible. | false |
| title | string | | Title of the alert | |
| closable | boolean | | Determines if the alert can be closed by the user | false |
| color | string | primary, success, danger, warning, dark, RGB, HEX | Color of the alert | |
| icon | string | | Determines the alert icon | |
| close-icon | string | | Determines the close icon | close |
| icon-pack | string | | Determines the icon pack. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
