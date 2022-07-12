---
outline: deep
---

<script setup lang="ts">
  import { pickCard,pickButton,pickRow,pickCol } from '@elonehoo/pick'
</script>

# Card

Cards contain content and actions about a single subject.

## Default

To add a card we have the `pick-card` component, for the internal structure we use several slots (`header`, `footer`, `media`, `...` )

```vue
<template>
  <pick-card>
    <template #header>
      <h3>
        Hello world !
      </h3>
    </template>
    <template #default>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </template>
    <template #footer>
      <pick-row justify="flex-end">
        <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
        <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
        <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
      </pick-row>
    </template>
  </pick-card>
</template>
```

<pick-row justify="center">
  <pick-col type="flex" justify="center" align="center" :w="6">
    <pick-card class="cardx">
      <template #header>
        <h3 style="color:black">
          Hello world !
        </h3>
      </template>
      <template #default>
        <span style="color:black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </template>
      <template #footer>
        <pick-row justify="flex-end">
          <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite"></pick-button>
          <pick-button class="basic-demo" color="primary" icon="turned_in_not"></pick-button>
          <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></pick-button>
        </pick-row>
      </template>
    </pick-card>
  </pick-col>
</pick-row>

## Media

There are cases in which you need to add an image or video on the card so we have the `#media`

```vue
<template>
  <pick-card>
    <template #header>
      <h3>
        Hello world !
      </h3>
    </template>
    <template #media>
      <img src="/card.png">
    </template>
    <template #default>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </template>
    <template #footer>
      <pick-row justify="flex-end">
        <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
        <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
        <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
      </pick-row>
    </template>
  </pick-card>
  <pick-card>
    <template #header>
      <h3>
        Hello world !
      </h3>
    </template>
    <template #media>
      <img src="/card2.png">
    </template>
    <template #default>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </template>
    <template #footer>
      <pick-row justify="flex-end">
        <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
        <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
        <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
      </pick-row>
    </template>
  </pick-card>
</template>
```

<pick-row justify="center">
  <pick-col type="flex" justify="center" align="center" :w="6">
    <pick-card class="cardx">
      <template #header>
        <h3 style="color:black">
          Hello world !
        </h3>
      </template>
      <template #media>
        <img src="/card.png">
      </template>
      <template #default>
        <span style="color:black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </template>
      <template #footer>
        <pick-row justify="flex-end">
          <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite"></pick-button>
          <pick-button class="basic-demo" color="primary" icon="turned_in_not"></pick-button>
          <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></pick-button>
        </pick-row>
      </template>
    </pick-card>
  </pick-col>
  <pick-col type="flex" justify="center" align="center" :w="6">
    <pick-card class="cardx">
      <template #header>
        <h3 style="color:black">
          Hello world !
        </h3>
      </template>
      <template #media>
        <img src="/card2.png">
      </template>
      <template #default>
        <span style="color:black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </template>
      <template #footer>
        <pick-row justify="flex-end">
          <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite"></pick-button>
          <pick-button class="basic-demo" color="primary" icon="turned_in_not"></pick-button>
          <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></pick-button>
        </pick-row>
      </template>
    </pick-card>
  </pick-col>
</pick-row>

## Fixed Height

If you need to set card with the same height, send the prop `fixed-height` and cards set to 100% of height.

```vue
<template>
  <pick-card fixed-height>
    <template #header>
      <h3>
        Hello world !
      </h3>
    </template>
    <template #media>
      <img src="/card.png">
    </template>
    <template #default>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </template>
    <template #footer>
      <pick-row justify="flex-end">
        <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
        <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
        <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
      </pick-row>
    </template>
  </pick-card>
  <pick-card fixed-height>
    <template #header>
      <h3>
        Hello world !
      </h3>
    </template>
    <template #media>
      <img src="/card2.png">
    </template>
    <template #default>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </template>
    <template #footer>
      <pick-row justify="flex-end">
        <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
        <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
        <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
      </pick-row>
    </template>
  </pick-card>
</template>
```

<pick-row justify="center">
  <pick-col type="flex" justify="center" align="center" :w="6">
    <pick-card class="cardx" fixed-height>
      <template #header>
        <h3 style="color:black">
          Hello world !
        </h3>
      </template>
      <template #media>
        <img src="/card.png">
      </template>
      <template #default>
        <span style="color:black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </template>
      <template #footer>
        <pick-row justify="flex-end">
          <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
          <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
          <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
        </pick-row>
      </template>
    </pick-card>
  </pick-col>
  <pick-col type="flex" justify="center" align="center" :w="6">
    <pick-card class="cardx" fixed-height>
      <template #header>
        <h3 style="color:black">
          Hello world !
        </h3>
      </template>
      <template #media>
        <img src="/card2.png">
      </template>
      <template #default>
        <span style="color:black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </template>
      <template #footer>
        <pick-row justify="flex-end">
          <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
          <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
          <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
        </pick-row>
      </template>
    </pick-card>
  </pick-col>
</pick-row>

## Hover

You can add hover functionality with the property `actionable`.

```vue
<template>
  <pick-card actionable>
    <template #header>
      <h3>
        Hello world !
      </h3>
    </template>
    <template #media>
      <img src="/card.png">
    </template>
    <template #default>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </template>
    <template #footer>
      <pick-row justify="flex-end">
        <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
        <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
        <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
      </pick-row>
    </template>
  </pick-card>
  <pick-card actionable>
    <template #header>
      <h3>
        Hello world !
      </h3>
    </template>
    <template #media>
      <img src="/card2.png">
    </template>
    <template #default>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
    </template>
    <template #footer>
      <pick-row justify="flex-end">
        <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
        <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
        <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
      </pick-row>
    </template>
  </pick-card>
</template>
```

<pick-row justify="center">
  <pick-col type="flex" justify="center" align="center" :w="6">
    <pick-card class="cardx" actionable>
      <template #header>
        <h3 style="color:black">
          Hello world !
        </h3>
      </template>
      <template #media>
        <img src="/card.png">
      </template>
      <template #default>
        <span style="color:black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </template>
      <template #footer>
        <pick-row justify="flex-end">
          <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
          <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
          <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
        </pick-row>
      </template>
    </pick-card>
  </pick-col>
  <pick-col type="flex" justify="center" align="center" :w="6">
    <pick-card class="cardx" actionable>
      <template #header>
        <h3 style="color:black">
          Hello world !
        </h3>
      </template>
      <template #media>
        <img src="/card2.png">
      </template>
      <template #default>
        <span style="color:black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </template>
      <template #footer>
        <pick-row justify="flex-end">
          <pick-button class="basic-demo" type="gradient" color="danger" icon="favorite" />
          <pick-button class="basic-demo" color="primary" icon="turned_in_not" />
          <pick-button class="basic-demo" color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings" />
        </pick-row>
      </template>
    </pick-card>
  </pick-col>
</pick-row>

## API

| name | type | parameters | description | default |
| :---- | :---- | :----------: | :----------- | :------- |
| header | slot | | slot header card | |
| footer | slot | | slot footer card | |
| media | slot | | slot image media | |
| extra-content | slot | | 	slot extra contend and card | |
| fixed-height | boolean | | Set the card with 100% of height | false |
| actionable | boolean | | Hover effect | false |

<style scoped>
.basic-demo{
  margin: 3px;
}
.cardx {
    width: calc(100% - 10px);
    margin: 5px;
    margin-bottom: 20px;
}
</style>
