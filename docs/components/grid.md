---
outline: deep
---

<script setup lang="ts">
import {pickRow,pickCol} from '@elonehoo/pick'
</script>

# Grid

In the grid system, we define the frame outside the information area based on row and column, to ensure that every area can have stable arrangement.

## Following is a brief look at how it works:

- 1 - Establish a set of column in the horizontal space defined by row (abbreviated col)
- 2 - Your content elements should be placed directly in the col, and only col should be placed directly in row
- 3 - The column grid system is a value from 1-12 to represent its range spans. For example, three columns of equal width can be created by .col-4 (33.3%).
- 4 - If the sum of col spans in a row are more than 12, then the overflowing col as a whole will start a new line arrangement.

## Design concept

With the directive `w` define the width of the column (`col`) its value is 1-12 an example of sizes would be: 12 = 100%, 6 = 50%, 4 = 25%

```vue
<template>
  <pick-row>
    <pick-col type="flex" justify="center" align="center" :w="12">
      100%
    </pick-col>
  </pick-row>
  <pick-row>
    <pick-col v-for="item in 2" :key="item" type="flex" justify="center" align="center" :w="6">
      50%
    </pick-col>
  </pick-row>
  <pick-row>
    <pick-col v-for="item in 3" :key="item" type="flex" justify="center" align="center" :w="4">
      33.3%
    </pick-col>
  </pick-row>
  <pick-row>
    <pick-col v-for="item in 4" :key="item" type="flex" justify="center" align="center" :w="3">
      25%
    </pick-col>
  </pick-row>
  <pick-row>
    <pick-col v-for="item in 6" :key="item" type="flex" justify="center" align="center" :w="2">
      16.6%
    </pick-col>
  </pick-row>
  <pick-row>
    <pick-col v-for="item in 12" :key="item" type="flex" justify="center" align="center" :w="1">
      8.3%
    </pick-col>
  </pick-row>
</template>
```

<div>
  <pick-row class="row background">
    <pick-col class=" border-left border-right" type="flex" justify="center" align="center" :w="12">100%</pick-col>
    </pick-row>
  <pick-row class="row background">
    <pick-col v-for="item in 2" :key="item" :class="item === 2 ? 'border-right' : ''" class=" border-left" type="flex" justify="center" align="center" :w="6">50%</pick-col>
  </pick-row>
  <pick-row class="row background">
    <pick-col v-for="item in 3" :key="item" :class="item === 3 ? 'border-right' : ''" class=" border-left" type="flex" justify="center" align="center" :w="4">33.3%</pick-col>
  </pick-row>
  <pick-row class="row background">
    <pick-col v-for="item in 4" :key="item" :class="item === 4 ? 'border-right' : ''" class=" border-left" type="flex" justify="center" align="center" :w="3">25%</pick-col>
  </pick-row>
  <pick-row class="row background">
    <pick-col v-for="item in 6" :key="item" :class="item === 6 ? 'border-right' : ''" class=" border-left" type="flex" justify="center" align="center" :w="2">16.6%</pick-col>
  </pick-row>
  <pick-row class="row background">
    <pick-col v-for="item in 12" :key="item" :class="item === 12 ? 'border-right' : ''" class=" border-left border-bottom" type="flex" justify="center" align="center" :w="1">8.3%</pick-col>
  </pick-row>
</div>

## Column offset

To give a distance with respect to the left we have the directive offset that with the same measures `1-12` we add the space specified a serious example `12 = 100%`, `6 = 50%`, `4 = 25%`.

```vue
<template>
  <pick-row :w="12">
    <pick-col :offset="5" type="flex" justify="center" align="center" :w="6">
      offset - 6
    </pick-col>
  </pick-row>
  <pick-row :w="12">
    <pick-col :offset="0" type="flex" justify="center" align="center" :w="2">
      offset - 2
    </pick-col>
  </pick-row>
  <pick-row :w="12">
    <pick-col :offset="2" type="flex" justify="center" align="center" :w="8">
      offset - 8
    </pick-col>
  </pick-row>
  <pick-row :w="12">
    <pick-col :offset="10" type="flex" justify="center" align="center" :w="1">
      offset - 7
    </pick-col>
  </pick-row>
  <pick-row :w="12">
    <pick-col :offset="4" type="flex" justify="center" align="center" :w="4">
      offset - 4
    </pick-col>
  </pick-row>
</template>
```

<div>
  <pick-row class="row " :w="12">
    <pick-col class=" background border-left border-right" :offset="5" type="flex" justify="center" align="center" :w="6">offset - 6</pick-col>
  </pick-row>
  <pick-row class="row " :w="12">
    <pick-col class=" background border-left border-right" :offset="0" type="flex" justify="center" align="center" :w="2">offset - 2</pick-col>
  </pick-row>
  <pick-row class="row " :w="12">
    <pick-col class=" background border-left border-right" :offset="2" type="flex" justify="center" align="center" :w="8">offset - 8</pick-col>
  </pick-row>
  <pick-row class="row " :w="12">
    <pick-col class=" background border-left border-right" :offset="10" type="flex" justify="center" align="center" :w="1">offset - 7</pick-col>
  </pick-row>
  <pick-row class="row border-bottom" :w="12">
    <pick-col class=" background border-left border-right" :offset="4" type="flex" justify="center" align="center" :w="4">offset - 4</pick-col>
  </pick-row>
</div>

## Flex layout

If we need to align the elements horizontally, use the `justify` directive that uses CSS attributes as parameters: `flex-start`, `center`, `flex-end`, `space-around`, `space-between`.

```vue
<template>
  <pick-row>
    <pick-col v-for="item in 3" :key="item" type="flex" justify="center" align="center" :w="2">
      offset - 6
    </pick-col>
  </pick-row>
  <pick-row type="flex" justify="center">
    <pick-col v-for="item in 3" :key="item" type="flex" justify="center" align="center" :w="2">
      offset - 6
    </pick-col>
  </pick-row>
  <pick-row type="flex" justify="flex-end">
    <pick-col v-for="item in 3" :key="item" type="flex" justify="center" align="center" :w="2">
      offset - 6
    </pick-col>
  </pick-row>
  <pick-row type="flex" justify="space-around">
    <pick-col v-for="item in 3" :key="item" type="flex" justify="center" align="center" :w="2">
      offset - 6
    </pick-col>
  </pick-row>
  <pick-row type="flex" justify="space-between">
    <pick-col v-for="item in 3" :key="item" type="flex" justify="center" align="center" :w="2">
      offset - 6
    </pick-col>
  </pick-row>
</template>
```

<div>
  <pick-row class="row">
    <pick-col v-for="item in 3" :key="item" :class="item === 3 ? 'border-right':''" class="background border-left" type="flex" justify="center" align="center" :w="2" >offset - 6</pick-col>
  </pick-row>
  <pick-row class="row" type="flex" justify="center">
    <pick-col v-for="item in 3" :key="item" :class="item === 3 ? 'border-right':''" class="background border-left" type="flex" justify="center" align="center" :w="2" >offset - 6</pick-col>
  </pick-row>
  <pick-row class="row" type="flex" justify="flex-end">
    <pick-col v-for="item in 3" :key="item" :class="item === 3 ? 'border-right':''" class="background border-left" type="flex" justify="center" align="center" :w="2" >offset - 6</pick-col>
  </pick-row>
  <pick-row class="row" type="flex" justify="space-around">
    <pick-col v-for="item in 3" :key="item" class="background border-left border-right" type="flex" justify="center" align="center" :w="2" >offset - 6</pick-col>
  </pick-row>
  <pick-row class="row border-bottom" type="flex" justify="space-between">
    <pick-col v-for="item in 3" :key="item" class="background border-left border-right" type="flex" justify="center" align="center" :w="2" >offset - 6</pick-col>
  </pick-row>
</div>

## Flex alignment

To align the elements vertically we have the directive `align` that as parameters the same known values ​​of css: `center`, `flex-end`, `flex-start`.

### Align Top

```vue
<template>
  <pick-row align="flex-start" type="flex" justify="center" :w="12">
    <pick-row v-for="item in 4" :key="item" type="flex" justify="center" align="center" :w="2">
      col - 3
    </pick-row>
  </pick-row>
</template>
```

<div>
  <pick-row class="row border-bottom" align="flex-start" type="flex" justify="center" :w="12">
    <pick-row v-for="item in 4" :key="item" :class="item === 4 ? 'border-right':''" class="background border-left" type="flex" justify="center" align="center" :w="2">col - 3</pick-row>
  </pick-row>
</div>

### Align Center

```vue
<template>
  <pick-row align="center" type="flex" justify="space-around" :w="12">
    <pick-row v-for="item in 4" :key="item" type="flex" justify="center" align="center" :w="2">
      col - 3
    </pick-row>
  </pick-row>
</template>
```

<div>
  <pick-row class="row border-bottom" align="center" type="flex" justify="space-around" :w="12">
    <pick-row v-for="item in 4" :key="item" class="background border-left border-right" type="flex" justify="center" align="center" :w="2">col - 3</pick-row>
  </pick-row>
</div>

### Align Bottom

```vue
<template>
  <pick-row align="center" type="flex" justify="space-between" :w="12">
    <pick-row v-for="item in 4" :key="item" type="flex" justify="center" align="center" :w="2">
      col - 3
    </pick-row>
  </pick-row>
</template>
```

<div>
  <pick-row class="row border-bottom" align="center" type="flex" justify="space-between" :w="12">
    <pick-row v-for="item in 4" :key="item" class="background border-left border-right" type="flex" justify="center" align="center" :w="2">col - 3</pick-row>
  </pick-row>
</div>

## Flex order

In some cases, we want to order the elements to our liking. To do this, use the directive `order` that has a parameter you just have to pass the number in which we want to order the `col` with respect to his brothers `col`

```vue
<template>
  <pick-row type="flex">
    <pick-col order="3" type="flex" justify="center" align="center" :w="3">
      1 / order 3
    </pick-col>
    <pick-col order="1" type="flex" justify="center" align="center" :w="3">
      2 / order 1
    </pick-col>
    <pick-col order="4" type="flex" justify="center" align="center" :w="3">
      3 / order 4
    </pick-col>
    <pick-col order="2" type="flex" justify="center" align="center" :w="3">
      4 / order 2
    </pick-col>
  </pick-row>
</template>
```

<div>
  <pick-row class="row border-bottom" type="flex">
    <pick-col class="background border-left" order="3" type="flex" justify="center" align="center" :w="3">1 / order 3</pick-col>
    <pick-col class="background border-left" order="1" type="flex" justify="center" align="center" :w="3">2 / order 1</pick-col>
    <pick-col class="background border-left border-right" order="4" type="flex" justify="center" align="center" :w="3">3 / order 4</pick-col>
    <pick-col class="background border-left" order="2" type="flex" justify="center" align="center" :w="3">4 / order 2</pick-col>
  </pick-row>
</div>

## Responsive layout

There are some measures that can only be added in a specific size of the device, the directives are:

- 1 - lg: is for large devices such as desktops or laptops (large).
- 2 - sm: is for medium devices such as laptops or tablets.
- 3 - xs: is for small devices such as tablets (small) and phones.

```vue
<template>
  <pick-row :w="12">
    <pick-col type="flex" justify="center" align="center" lg="2" sm="4" xs="12">
      vs-lg="2"
    </pick-col>
    <pick-col type="flex" justify="center" align="center" lg="8" sm="4" xs="12">
      vs-lg="8"
    </pick-col>
    <pick-col type="flex" justify="center" align="center" lg="2" sm="4" xs="12">
      vs-lg="2"
    </pick-col>
  </pick-row>
</template>
```

<div>
  <pick-row class="row border-bottom" :w="12">
    <pick-col class="background border-left" type="flex" justify="center" align="center" lg="2" sm="4" xs="12">vs-lg="2"</pick-col>
    <pick-col class="background border-left" type="flex" justify="center" align="center" lg="8" sm="4" xs="12">vs-lg="8"</pick-col>
    <pick-col class="background border-left border-right" type="flex" justify="center" align="center" lg="2" sm="4" xs="12">vs-lg="2"</pick-col>
  </pick-row>
</div>

## API

| name | type | parameters | description | default |
| :---- | :---- | :----------: | :----------- | :------- |
| w | number | 1-12 | Width of the row or col. | 12 |
| offset | number | 1-12 | Distance to the left of the. | 0 |
| justify | string | flex-start, center, flex-end, space-around, space-between | Define the alignment vertically of the elements within the row or col. | |
| align | string | flex-start, center, flex-end, space-around, space-between | Define the horizontal alignment of the elements within the row or col. | |
| order | string \| number | | Changes the order of the col with respect to his brothers col. | |
| lg | number \| string | 1-12 | Is for large devices such as desktops or laptops (large). | |
| sm | number \| string | 1-12 | Is for medium devices such as laptops or tablets. | |
| xs | number \| string | 1-12 | Is for small devices such as tablets (small) and phones. | |

<style scoped>
.row{
  color: #969696;
  border-top:1px solid #d2d2d2;
}
.background{
  background:#f5f5f5;
}
.border-left{
  border-left: 1px solid #d2d2d2;
}
.border-right{
  border-right: 1px solid #d2d2d2;
}
.border-bottom{
  border-bottom: 1px solid #d2d2d2;
}
</style>
