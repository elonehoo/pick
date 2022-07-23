---
outline: deep
---

<script setup lang="ts">
import {ref} from 'vue'
import { pickInput } from '@elonehoo/pick'
const value1 = ref<string>('')
const value2 = ref<string>('')

const value3 = ref<string>('')
const value4 = ref<string>('')

const value5 = ref<string>('')
const value6 = ref<string>('')

const value7 = ref<string>('')
const value8 = ref<string>('')
const value9 = ref<string>('')
const value10 = ref<string>('')

const value11 = ref<string>('')
const value12 = ref<string>('')
const value13 = ref<string>('')
const value14 = ref<string>('')
const value15 = ref<string>('')
const value16 = ref<string>('')
const value17 = ref<string>('')

const value18 = ref<string>('')
const value19 = ref<string>('')
const value20 = ref<string>('')
const value21 = ref<string>('')

const value22 = ref<string>('')
const value23 = ref<string>('')
const value24 = ref<string>('')
</script>

# Input

Nice inputs with many variants.

## Default

The input is a functional part in an application, For implementing it we have the `pick-input` component.

```vue
<template>
  <pick-input v-model="value1" placeholder="Placeholder" />
  <pick-input disabled placeholder="Disabled" v-model="value2" />
</template>
```

<div class="centerx">
  <pick-input v-model="value1" placeholder="Placeholder" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <pick-input disabled placeholder="Disabled" v-model="value2" />
</div>

## Label

Add a label to the input with the property `label`.

```vue
<template>
  <pick-input label="Name" v-model="value3" placeholder="Name" />
  <pick-input type="password" label="Password" placeholder="Password" v-model="value4" />
</template>
```

<div class="centerx">
  <pick-input label="Name" v-model="value3" placeholder="Name" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <pick-input type="password" label="Password" placeholder="Password" v-model="value4" />
</div>

## Label Placeholder

The placeholder can become a label when the input is focused. Use the property `label-placeholder` for making this.

:::warning
This property overrides the `label` and `theplaceholder`
:::

```vue
<template>
  <pick-input label-placeholder="Label-placeholder"  v-model="value5" />
  <pick-input disabled label-placeholder="Label-disabled"  v-model="value6" />
</template>
```

<div class="centerx">
  <pick-input label-placeholder="Label-placeholder"  v-model="value5" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <pick-input disabled label-placeholder="Label-disabled"  v-model="value6" />
</div>

## Icons

The input can have `icons`. Use the property icon. You can also also manipulate the icon's position with the property `icon-after`.

```vue
<template>
  <pick-input icon="search" placeholder="Search" v-model="value7"/>
  <pick-input icon-after label-placeholder="icon-after" icon="mode_edit" placeholder="Nombre" v-model="value8"/>
  <pick-input disabled icon="email" label-placeholder="icon-disabled" v-model="value9"/>
  <pick-input icon-no-border icon="account_circle" label-placeholder="icon-no-border" v-model="value10"/>
</template>
```

<div>
  <div class="centerx">
    <pick-input icon="search" placeholder="Search" v-model="value7"/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <pick-input icon-after label-placeholder="icon-after" icon="mode_edit" placeholder="Nombre" v-model="value8"/>
  </div>
  <div class="centerx">
    <pick-input disabled icon="email" label-placeholder="icon-disabled" v-model="value9"/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <pick-input icon-no-border icon="account_circle" label-placeholder="icon-no-border" v-model="value10"/>
  </div>
</div>

## Colors

You can change the color of the borders when the focus the input with the property color. You are able to use the [Main Colors](./color) or **RGB** and **HEX** colors.

:::warning
There is only support for **HEX** and **RGB** colors
:::

```vue
<template>
  <pick-input label-placeholder="Default" v-model="value11"/>
  <pick-input color="success" label-placeholder="Success" v-model="value12"/>
  <pick-input color="danger" label-placeholder="Danger" v-model="value13"/>
  <pick-input color="warning" label-placeholder="Warning" v-model="value14"/>
  <pick-input color="dark" label-placeholder="Dark" v-model="value15"/>
  <pick-input color="rgb(213, 14, 151)" label-placeholder="RGB: rgb(213, 14, 151)" v-model="value16"/>
  <pick-input color="#11e988" label-placeholder="HEX: #11e988" v-model="value17"/>
</template>
```

<div>
  <div class="centerx">
    <pick-input label-placeholder="Default" v-model="value11"/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <pick-input color="success" label-placeholder="Success" v-model="value12"/>
  </div>
  <br />
  <div class="centerx">
    <pick-input color="danger" label-placeholder="Danger" v-model="value13"/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <pick-input color="warning" label-placeholder="Warning" v-model="value14"/>
  </div>
  <br />
  <div class="centerx">
    <pick-input color="dark" label-placeholder="Dark" v-model="value15"/>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <pick-input color="rgb(213, 14, 151)" label-placeholder="RGB: rgb(213, 14, 151)" v-model="value16"/>
  </div>
  <br />
  <div class="centerx">
    <pick-input color="#11e988" label-placeholder="HEX: #11e988" v-model="value17"/>
  </div>
</div>

## Validations

You can add a state for example of in affirmative response to a validation with `success` and if it is necessary to add a description or help to the user you can do it with the property `description`.

:::tip
Each of the states you can change the text, for example in the case of danger-text for the state of danger.
:::

```vue
<template>
  <pick-input success success-text="The mail is valid" placeholder="Email Success" v-model="value18"/>
  <pick-input danger danger-text="The password does not meet the standards" placeholder="Password Danger" v-model="value19"/>
  <pick-input warning warning-text="The entered data could not be verified" placeholder="Date Warning" v-model="value20"/>
  <pick-input description-text="Just enter the first two numbers of your phone" placeholder="Phone Description" v-model="value21"/>
</template>
```

<div>
<pick-input
  success
  success-text="The mail is valid"
  placeholder="Email Success"
  v-model="value18"/>
<pick-input
  danger
  danger-text="The password does not meet the standards"
  placeholder="Password Danger"
  v-model="value19"/>
<pick-input
  warning
  warning-text="The entered data could not be verified"
  placeholder="Date Warning"
  v-model="value20"/>
<pick-input
  description-text="Just enter the first two numbers of your phone"
  placeholder="Phone Description"
  v-model="value21"/>
</div>

## Size

```vue
<template>
  <pick-input size="large" placeholder="Size large" v-model="value22" />
  <pick-input size="default" placeholder="Size default" v-model="value23" />
  <pick-input size="small" placeholder="Size small" v-model="value24" />
</template>
```

<div class="centerx">
  <pick-input size="large" placeholder="Size large" v-model="value22" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <pick-input size="default" placeholder="Size default" v-model="value23" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <pick-input size="small" placeholder="Size small" v-model="value24" />
</div>

## API

| name | type | parameters | description | default |
| :---- | :---- | :----------: | :----------- | :------- |
| v-model | bind |  | Link values. | |
| placeholder | string | | Brief suggestion describing the expected value of the input field. | |
| label | string | | Label for the input element. | |
| label-placeholder | string | | Label label with placeholder shape for the entry element. | |
| autofocus | boolean \| string | | Same as `autofocus` in native input | false |
| icon | string | icon name | Element icon. | |
| val-icon-success | string | icon name | The icon to use for success validations | done |
| val-icon-danger | string | icon name | The icon to use for danger validations | clear |
| val-icon-warning | string | icon name | The icon to use for warning validations | warning |
| icon-pack | string | Icon Pack Class Name | Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
| icon-no-border | boolean | boolean bind | If true, remove the border-right of the icon (separator between the icon and the input) | false |
| val-icon-pack | string | Validation Icon Pack Class Name | Icon Pack to be used by the Validation Icons. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
| icon-after | boolean \| string | | If true, sets icon to appear after input. | false |
| color | string | primary,success,danger,warning,dark,RGB,HEX | Input and text color. | primary |
| size | string | small,normal,large | Size of input. | normal |
| type | string | email, number, url, password, custom | The type of element input. | text |
| success | boolean | boolean bind | Activate the status of success in the input. | false |
| danger | boolean | boolean bind | Activate the status of danger in the input. | false |
| warning | boolean | boolean bind | Activate the status of warning in the input. | false |
| description-text | string | | Add a description text to the input. | false |
| danger-text | string | | Text to show when the item is invalid. | |
| success-text | string | | Text to show when the item is valid. | |
| warning-text | string | | Text to show when the item is valid. | |
| v-on:icon-click | Function | | Event to trigger on click on icon | |

<style>
.centerx{
  display: flex;
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  flex-wrap: wrap;

}
</style>
