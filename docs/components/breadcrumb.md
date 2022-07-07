---
outline: deep
---

<script setup lang="ts">
import {pickBreadcrumb,BreadcrumbItem} from '@elonehoo/pick'

const items:BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    url: 'dashboard'
  },
  {
    title: 'Link 1',
    url: 'link-1'
  },
  {
    title: 'Link 2',
    disabled: true
  },
  {
    title: 'Active',
    active: true
  }
]
</script>

# Breadcrumb

Displays the location of the current page within a navigational hierarchy. It improves the navigation experience.

## Default

Use the `items` in order to programatically generate the breadcrumb links.

```vue
<template>
  <pick-breadcrumb :items="[
    {
      title: 'Dashboard',
      url: 'dashboard'
    },
    {
      title: 'Link 1',
      url: 'link-1'
    },
    {
      title: 'Link 2',
      disabled: true
    },
    {
      title: 'Active',
      active: true
    }
  ]" />
</template>
```

<div>
  <pick-breadcrumb :items="items" />
</div>

## Color

Use the `color` directive like for any other component that supports it to customize the breadcrumbs links color.

```vue
<template>
  <pick-breadcrumb :items="items" color="#3DC9B3" />
</template>
```

<div>
  <pick-breadcrumb :items="items" color="#3DC9B3" />
</div>

## Separator

You can change the separator dividing the links by either passing a string to the `separator` directive like so "•", "-", "|" etc..., or by passing in one of the material icons text "**chevron_right**".

```vue
<template>
  <pick-breadcrumb :items="items" separator="•" />
  <pick-breadcrumb :items="items" separator="-" />
  <pick-breadcrumb :items="items" separator="|" />
  <pick-breadcrumb :items="items" separator="chevron_right" />
</template>
```

<div>
  <pick-breadcrumb :items="items" separator="•" />
  <pick-breadcrumb :items="items" separator="-" />
  <pick-breadcrumb :items="items" separator="|" />
  <pick-breadcrumb :items="items" separator="chevron_right" />
</div>

## Slot

A default Vue slot that can be used instead of passing in an array of object. This allows for greater control of the breadcrumbs.

<div>
  <pick-breadcrumb>
    <li class="disabled-link">
      <a class="link" href="#" title="Home">Home</a>
      <span class="vs-breadcrum--separator">/</span>
    </li>
    <li class="disabled-link">
      <a class="link" href="#" title="Profil">Profil</a>
      <span class="vs-breadcrum--separator">/</span>
    </li>
    <li aria-current="page" class="active">Infos</li>
  </pick-breadcrumb>
</div>

## Alignement

Use `align` to either align the breadcrumb to the left, center or right.

```vue
<template>
  <pick-breadcrumb :items="items" align="left" />
  <pick-breadcrumb :items="items" align="center" />
  <pick-breadcrumb :items="items" align="right" />
</template>
```

<div>
  <pick-breadcrumb :items="items" align="left" />
  <pick-breadcrumb :items="items" align="center" />
  <pick-breadcrumb :items="items" align="right" />
</div>

## API

| name | type | parameters | description | default |
| :----: | :----: | :----------: | :-----------: | :-------: |
| items | Array\<BreadcrumbItem> | ["title", "url", "disabled", "active" ] | The items that will construct the breadcrumb | |
| separator | string | | Separator dividing the breadcrumb links | / |
| color | string | | Change the color of the breadcrumb links | |
| align | string | [ "left", "center", "right" ] | Align the breadcrumb to the left, center or right. | left |

<style scoped>
.disabled-link {
  opacity: 0.5;
  cursor: default;
}
.link{
  transition: all 0.2s ease;
  color: rgba(0,0,0,0.4);
  text-decoration: none;
}
.link:hover,.link:focus{
  color: rgba(0,0,0,0.7);
  text-decoration: underline;
}
.vs-breadcrum--separator {
  color: rgba(0,0,0,0.4);
  padding: 0 0.5rem 0 0.5rem;
}
</style>
