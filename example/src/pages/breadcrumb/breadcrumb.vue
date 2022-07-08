<script setup lang="ts">
import type { BreadcrumbItem } from '@elonehoo/pick'
import { pickBreadcrumb } from '@elonehoo/pick'

const items: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    url: 'dashboard',
  },
  {
    title: 'Link 1',
    url: 'link-1',
  },
  {
    title: 'Link 2',
    disabled: true,
  },
  {
    title: 'Active',
    active: true,
  },
]
</script>

<template>
  <div>
    <pick-breadcrumb :items="items" />
    <pick-breadcrumb :items="items" color="#3DC9B3" />
    <pick-breadcrumb :items="items" separator="•" />
    <pick-breadcrumb :items="items" separator="-" />
    <pick-breadcrumb :items="items" separator="|" />
    <pick-breadcrumb :items="items" separator="chevron_right" />
    <pick-breadcrumb>
      <li class="disabled-link">
        <a href="#" title="Home">Home</a><span class="vs-breadcrum--separator">/</span>
      </li>
      <li class="disabled-link">
        <a href="#" title="Profil">Profil</a><span class="vs-breadcrum--separator">/</span>
      </li>
      <li aria-current="page" class="active">
        Infos
      </li>
    </pick-breadcrumb>

    <pick-breadcrumb :items="items" align="left" />
    <pick-breadcrumb :items="items" align="center" />
    <pick-breadcrumb :items="items" align="right" />
  </div>
</template>

<style scoped>
.disabled-link {
  opacity: 0.5;
  cursor: default;
}
a{
  transition: all 0.2s ease;
  color: rgba(0,0,0,0.4);
  text-decoration: none;
}
a:hover,a:focus{
  color: rgba(0,0,0,0.7);
  text-decoration: underline;
}
.vs-breadcrum--separator {
  color: rgba(0,0,0,0.4);
  padding: 0 0.5rem 0 0.5rem;
}
</style>
