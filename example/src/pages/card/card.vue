<script setup lang="ts">
import { pickButton, pickCard, pickCol, pickRow } from '@elonehoo/pick'
</script>

<template>
  <div style="">
    <pick-row style="width:1000px;" justify="center">
      <pick-col type="flex" justify="center" align="center" :w="6">
        <pick-card class="cardx">
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
      </pick-col>
    </pick-row>

    <pick-row justify="center">
      <pick-col type="flex" justify="center" align="center" :w="6">
        <pick-card class="cardx">
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
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="6">
        <pick-card class="cardx">
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
      </pick-col>
    </pick-row>

    <pick-row justify="center">
      <pick-col type="flex" justify="center" align="center" :w="6">
        <pick-card class="cardx" fixed-height>
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
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="6">
        <pick-card class="cardx" fixed-height>
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
      </pick-col>
    </pick-row>

    <pick-row justify="center">
      <pick-col type="flex" justify="center" align="center" :w="6">
        <pick-card class="cardx" actionable>
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
      </pick-col>
      <pick-col type="flex" justify="center" align="center" :w="6">
        <pick-card class="cardx" actionable>
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
      </pick-col>
    </pick-row>
  </div>
</template>

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
