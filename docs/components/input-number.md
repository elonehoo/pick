---
outline: deep
---

<script setup lang="ts">
  import {ref} from 'vue'
  import { pickInputNumber } from '@elonehoo/pick'

  const number = ref(33)
  const number1 = ref(48)
  const number2 = ref(50)
  const number3 = ref(55)

  const number4 = ref(55)
  const number5 = ref(55)
  const number6 = ref(55)
  const number7 = ref(55)
  const number8 = ref(55)
  const number9 = ref(55)

  const number10 = ref(15)

  const number11 = ref(15)
  const number12 = ref(15)
  const number13 = ref(15)
  const number14 = ref(15)

  const number15 = ref(20)

  const number16 = ref(1.98)

  const number17 = ref(15)
</script>

# Input Number

Input of single numbers pleasant to the user and practical.

## Default

If you need to add a component that handles a single number, use the component `pick-input-number`. You can also change the increment and decrement button icons using the properties `icon-inc` and `icon-dec` respectively.

```vue
<template>
  <pick-input-number v-model="number"/>
  <pick-input-number :disabled="true" v-model="number1"/>
  <pick-input-number :is-disabled="true" v-model="number2"/>
  <pick-input-number v-model="number3" icon-inc="expand_less" icon-dec="expand_more"/>
</template>
```

<div class="centerx">
  <pick-input-number v-model="number" style="width: 88px;"/>
  <pick-input-number :disabled="true" v-model="number1" style="width: 88px;"/>
  <pick-input-number :is-disabled="true" v-model="number2" style="width:88px;"/>
  <pick-input-number v-model="number3" icon-inc="expand_less" icon-dec="expand_more" style="width:88px;"/>
</div>

## Color

You can change the color of the **Input-Number** with the property color. You are able to use the [Main Colors](./color) or **RGB** and **HEX** colors.

:::warning
Only **RGB** and **HEX** colors are supported.
:::

```vue
<template>
  <pick-input-number color="danger" v-model="number4"/>
  <pick-input-number color="success" v-model="number5"/>
  <pick-input-number color="warning" v-model="number6"/>
  <pick-input-number color="dark" v-model="number7"/>
  <pick-input-number color="rgb(218, 24, 94)" v-model="number8"/>
  <pick-input-number color="#ad3af9" v-model="number9"/>
</template>
```

<div class="centerx">
  <pick-input-number color="danger" v-model="number4" style="width: 88px;"/>
  <pick-input-number color="success" v-model="number5" style="width: 88px;"/>
  <pick-input-number color="warning" v-model="number6" style="width: 88px;"/>
  <pick-input-number color="dark" v-model="number7" style="width: 88px;"/>
  <pick-input-number color="rgb(218, 24, 94)" v-model="number8" style="width: 88px;"/>
  <pick-input-number color="#ad3af9" v-model="number9" style="width: 88px;"/>
</div>

## Min - Max

You can restrict the maximum number or the minimum with the properties `min`, `max`.

```vue
<template>
  <pick-input-number min="13" max="21" v-model="number10"/>
</template>
```

<div class="centerx">
  <pick-input-number min="13" max="21" v-model="number10" style="width: 88px;"/>
</div>

## Size

To change the size of the component, you can use the property `size`. The allowed values are: `medium`, `small` and `mini`.

```vue
<template>
  <pick-input-number v-model="number11"/>
  <pick-input-number size="medium" v-model="number12"/>
  <pick-input-number size="small" v-model="number13"/>
  <pick-input-number size="mini" v-model="number14"/>
</template>
```

<div class="centerx">
  <pick-input-number v-model="number11" style="width: 88px;"/>
  <pick-input-number size="medium" v-model="number12" style="width: 88px;"/>
  <pick-input-number size="small" v-model="number13" style="width: 88px;"/>
  <pick-input-number size="mini" v-model="number14" style="width: 88px;"/>
</div>

## Step

To change the number to be added or decreased of the component, you can use the property `step`.

```vue
<template>
  <pick-input-number v-model="number15" :step="5"/>
</template>
```

<div class="centerx">
  <pick-input-number v-model="number15" :step="5" style="width: 88px;"/>
</div>

## Decimal

Number Input also supports decimal values.

```vue
<template>
  <pick-input-number v-model="number16" :step="1.43"/>
</template>
```

<div class="centerx">
  <pick-input-number v-model="number16" :step="1.43" style="width: 88px;"/>
</div>

## Label

Number Input supports adding labels for number inputs.

```vue
<template>
  <pick-input-number v-model="number17" label="passengers:"/>
</template>
```

<div class="centerx">
  <pick-input-number v-model="number17" label="passengers:" style="width: 172px;"/>
</div>

## API

| name | type | parameters | descriptive | default |
| :---- | :---- | :----------: | :----------- | :------- |
| v-model | bind |  | Link values. | |
| color | string | RGB, HEX, primary, success, danger, warning, dark | Component color. | |
| max | number | | Maximum number admitted.	 | |
| min | number | | Minimum number admitted.	 | |
| size | string | medium, small, mini | Component size. | |
| icon-pack | string | Icon Pack Class Name | Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
| icon-dec | string | icon name | Icon used to indicate decrement. | remove |
| icon-inc | string | icon name | Icon used to indicate increment. | remove |
| step | number | valid number | Number to be added or decreased each time. | 1 |
| label | string | | Add a descriptive text in the input number. | |

<style scoped>
.centerx{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
