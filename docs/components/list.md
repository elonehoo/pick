---
outline: deep
---

<script setup lang="ts">
import {
  pickList,
  pickListHeader,
  pickListItem,
  pickButton,
  pickCheckBox,
  pickChip,
  pickAvatar
} from '@elonehoo/pick'
</script>

# List

Lists are continuous, vertical indexes of text or images

## Basic

A basic list of items with title and subtitle.

```vue
<template>
  <pick-list>
    <pick-list-item title="One text" />
    <pick-list-item title="Another text" subtitle="A little text" />
    <pick-list-item title="Some more text" />
    <pick-list-item title="Even more text" subtitle="Another little text" />
  </pick-list>
</template>
```

<div>
  <pick-list>
    <pick-list-item title="One text" />
    <pick-list-item title="Another text" subtitle="A little text" />
    <pick-list-item title="Some more text" />
    <pick-list-item title="Even more text" subtitle="Another little text" />
  </pick-list>
</div>

## Header

A `pick-list-header` separator with custom `color`.

```vue
<template>
  <pick-list>
    <pick-list-header title="Group 1"></pick-list-header>
    <pick-list-item title="Snickerdoodle" subtitle="An excellent companion"></pick-list-item>
    <pick-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></pick-list-item>
    <pick-list-header title="Group 2" color="success"></pick-list-header>
    <pick-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></pick-list-item>
    <pick-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></pick-list-item>
  </pick-list>
</template>
```

<div>
  <pick-list>
    <pick-list-header title="Group 1"></pick-list-header>
    <pick-list-item title="Snickerdoodle" subtitle="An excellent companion"></pick-list-item>
    <pick-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></pick-list-item>
    <pick-list-header title="Group 2" color="success"></pick-list-header>
    <pick-list-item title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></pick-list-item>
    <pick-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></pick-list-item>
  </pick-list>
</div>

## Icon

The list items and the headers can have a icon as well.

```vue
<template>
    <pick-list>
      <pick-list-header icon="supervisor_account" title="Group 1"></pick-list-header>
      <pick-list-item icon="check" title="Snickerdoodle" subtitle="An excellent companion"></pick-list-item>
      <pick-list-item icon="check" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></pick-list-item>
      <pick-list-header icon="how_to_reg" title="Group 2" color="success"></pick-list-header>
      <pick-list-item icon="verified_user" title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></pick-list-item>
      <pick-list-item icon="verified_user" title="Veronika Ossi" subtitle="Has not watched anything recently"></pick-list-item>
    </pick-list>
</template>
```

<div>
    <pick-list>
      <pick-list-header icon="supervisor_account" title="Group 1"></pick-list-header>
      <pick-list-item icon="check" title="Snickerdoodle" subtitle="An excellent companion"></pick-list-item>
      <pick-list-item icon="check" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></pick-list-item>
      <pick-list-header icon="how_to_reg" title="Group 2" color="success"></pick-list-header>
      <pick-list-item icon="verified_user" title="Enid's" subtitle="At night a bar, during the day a delicious brunch spot."></pick-list-item>
      <pick-list-item icon="verified_user" title="Veronika Ossi" subtitle="Has not watched anything recently"></pick-list-item>
    </pick-list>
</div>

## Avatar

You can implement an avatar in the list with the `#avatar` by putting a [pick-avatar component](avatar)

<div>
  <pick-list>
    <pick-list-header title="Users" color="danger"></pick-list-header>
    <pick-list-item title="Steve Jobes" subtitle="Top Contributor">
      <template #avatar>
        <pick-avatar />
      </template>
    </pick-list-item>
    <pick-list-item title="Matt" subtitle="11 Points">
      <template #avatar>
        <pick-avatar text="Pick"/>
      </template>
    </pick-list-item>
    <pick-list-header title="Profile photo" color="warning"></pick-list-header>
    <pick-list-item title="Xian Famous Foods" subtitle="A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.">
      <template #avatar>
        <pick-avatar text="Vue"/>
      </template>
    </pick-list-item>
  </pick-list>
</div>

## API

| name | type | parameters | description | default |
| :---- | :---- | :----------: | :----------- | :------- |
| color | string | RGB, HEX, primary, success, danger, warning, dark | Component color | primary |
| icon | string | Material icons | An icon to show | |
| icon-pack | string | Icon Pack Class Name | Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal. | material-icons |
| title | string | | List primary text | |
| subtitle | string | | List secondary text | |
| avatar | slot | | Slot to add the avatar in the list | |
