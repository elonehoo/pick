<script setup lang="ts">
import { pickButton, pickCol, pickRow } from '@elonehoo/pick'

</script>

<template>
  <div>
    <div>
      <pick-button color="primary" type="filled">
        Primary
      </pick-button>
      &nbsp;
      <pick-button color="success" type="filled">
        Success
      </pick-button>
      &nbsp;
      <pick-button color="danger" type="filled">
        Danger
      </pick-button>
      &nbsp;
      <pick-button color="warning" type="filled">
        Warning
      </pick-button>
      &nbsp;
      <pick-button color="dark" type="filled">
        Dark
      </pick-button>
      &nbsp;
      <pick-button color="#3dd495" type="filled">
        RGB
      </pick-button>
      &nbsp;
      <pick-button disabled type="filled">
        Disabled
      </pick-button>
    </div>
    <br>
    <div>
      <pick-button color="primary" type="border">
        Primary
      </pick-button>
      &nbsp;
      <pick-button color="success" type="border">
        Success
      </pick-button>
      &nbsp;
      <pick-button color="danger" type="border">
        Danger
      </pick-button>
      &nbsp;
      <pick-button color="warning" type="border">
        Warning
      </pick-button>
      &nbsp;
      <pick-button color="dark" type="border">
        Dark
      </pick-button>
      &nbsp;
      <pick-button color="#3dd495" type="border">
        RGB
      </pick-button>
      &nbsp;
      <pick-button disabled type="border">
        Disabled
      </pick-button>
    </div>
    <br>
    <div>
      <pick-button color="primary" type="flat">
        Primary
      </pick-button>
      &nbsp;
      <pick-button color="success" type="flat">
        Success
      </pick-button>
      &nbsp;
      <pick-button color="danger" type="flat">
        Danger
      </pick-button>
      &nbsp;
      <pick-button color="warning" type="flat">
        Warning
      </pick-button>
      &nbsp;
      <pick-button color="dark" type="flat">
        Dark
      </pick-button>
      &nbsp;
      <pick-button color="#3dd495" type="flat">
        RGB
      </pick-button>
      &nbsp;
      <pick-button disabled type="flat">
        Disabled
      </pick-button>
    </div>
    <br>
    <div>
      <pick-button color="primary" type="line">
        Primary
      </pick-button>
      &nbsp;
      <pick-button color="success" line-origin="left" type="line">
        Success
      </pick-button>
      &nbsp;
      <pick-button color="danger" type="line">
        Danger
      </pick-button>
      &nbsp;
      <pick-button color="warning" line-position="top" line-origin="left" type="line">
        Warning
      </pick-button>
      &nbsp;
      <pick-button color="dark" line-position="top" line-origin="right" type="line">
        Dark
      </pick-button>
      &nbsp;
      <pick-button color="#3dd495" type="line">
        RGB
      </pick-button>
      &nbsp;
      <pick-button disabled type="line">
        Disabled
      </pick-button>
    </div>
    <br>
    <div>
      <pick-button color="primary" type="gradient">
        Primary
      </pick-button>
      &nbsp;
      <pick-button color="success" type="gradient">
        Success
      </pick-button>
      &nbsp;
      <pick-button color="danger" type="gradient">
        Danger
      </pick-button>
      &nbsp;
      <pick-button color="warning" type="gradient">
        Warning
      </pick-button>
      &nbsp;
      <pick-button color="dark" type="gradient">
        Dark
      </pick-button>
      &nbsp;
      <pick-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" type="gradient">
        RGB
      </pick-button>
      &nbsp;
      <pick-button disabled type="gradient">
        Disabled
      </pick-button>
    </div>
    <br>
    <div>
      <pick-button color="primary" type="relief">
        Primary
      </pick-button>
      &nbsp;
      <pick-button color="success" type="relief">
        Success
      </pick-button>
      &nbsp;
      <pick-button color="danger" type="relief">
        Danger
      </pick-button>
      &nbsp;
      <pick-button color="warning" type="relief">
        Warning
      </pick-button>
      &nbsp;
      <pick-button color="dark" type="relief">
        Dark
      </pick-button>
      &nbsp;
      <pick-button color="#3dd495" gradient-color-secondary="rgb(130, 207, 23)" type="relief">
        RGB
      </pick-button>
      &nbsp;
      <pick-button disabled type="relief">
        Disabled
      </pick-button>
    </div>
    <br>
    <div>
      <pick-button color="#c72a75" type="filled">
        Color
      </pick-button>
      &nbsp;
      <pick-button color="#c72a75" type="border">
        Color
      </pick-button>
      &nbsp;
      <pick-button color="#c72a75" type="flat">
        Color
      </pick-button>
      &nbsp;
      <pick-button color="#c72a75" type="line">
        Color
      </pick-button>
      &nbsp;
      <pick-button color="#c72a75" gradient-color-secondary="#5252e8" type="gradient">
        Color
      </pick-button>
      &nbsp;
      <pick-button color="#c72a75" type="relief">
        Color
      </pick-button>
    </div>
    <br>
    <div>
      <pick-button color="primary" type="filled">
        Primary
      </pick-button>
      &nbsp;
      <pick-button color="success" text-color="rgb(10, 20, 30)" type="filled">
        Success
      </pick-button>
      &nbsp;
      <pick-button color="danger" text-color="#aaff00" type="filled">
        Danger
      </pick-button>
      &nbsp;
      <pick-button color="warning" text-color="primary" type="filled">
        Warning
      </pick-button>
      &nbsp;
      <pick-button color="dark" text-color="rgb(215, 205, 195)" type="filled">
        Dark
      </pick-button>
      &nbsp;
      <pick-button color="rgb(187, 138, 200)" text-color="warning)">
        RGB
      </pick-button>
      &nbsp;
      <pick-button disabled type="filled" text-color="rgb(0, 0, 0)">
        Disabled
      </pick-button>
    </div>
    <br>
    <pick-row align="flex-start" type="flex" justify="center" :w="12">
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button color="primary" type="border" icon="home">
          Primary
        </pick-button>
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button color="warning" type="filled" icon="star">
          Star
        </pick-button>
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button color="success" type="flat" icon="done">
          Done
        </pick-button>
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button color="dark" type="line" icon="menu" icon-after>
          menu
        </pick-button>
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button color="danger" type="gradient" icon="favorite">
          favorite
        </pick-button>
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button disabled color="primary" type="border" icon="home">
          Disabled
        </pick-button>
      </pick-col>
    </pick-row>
    <br>
    <pick-row align="flex-start" type="flex" justify="center" :w="12">
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button color="primary" type="border" icon="search" />
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button color="warning" type="filled" icon="public" />
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button color="success" type="flat" icon="photo_camera" />
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button color="dark" type="line" icon="event_note" />
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button color="danger" type="gradient" icon="person_add" />
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button disabled color="primary" type="border" icon="search" />
      </pick-col>
    </pick-row>
    <br>
    <pick-row align="flex-start" type="flex" justify="center" :w="12">
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button radius color="primary" type="border" icon="search" />
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button radius color="warning" type="filled" icon="public" />
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button radius color="success" type="flat" icon="photo_camera" />
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button radius color="dark" type="line" icon="event_note" />
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button radius color="danger" type="gradient" icon="person_add" />
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="1">
        <pick-button radius disabled color="primary" type="border" icon="search" />
      </pick-col>
    </pick-row>
    <br>
    <div>
      <pick-button size="large">
        Large
      </pick-button>
      &nbsp;
      <pick-button>Default</pick-button>
      &nbsp;
      <pick-button size="small">
        Small
      </pick-button>
    </div>
    <br>
    <div>
      <pick-button color="primary" type="filled" href="https://pick.elonehoo.xyz/">
        String literal
      </pick-button>
      &nbsp;
      <pick-button color="primary" type="filled" :href="{url: 'https://pick.elonehoo.xyz/'}">
        Object Path
      </pick-button>
      &nbsp;
      <pick-button color="primary" type="filled" target :href="{url: 'https://pick.elonehoo.xyz/'}">
        Open Current Tab
      </pick-button>
    </div>
  </div>
</template>

<style scoped>
</style>
