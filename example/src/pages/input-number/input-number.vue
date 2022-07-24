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

<template>
  <div>
    <pick-input-number v-model="number" style="width: 88px;"/>
    <pick-input-number :disabled="true" v-model="number1" style="width: 88px;"/>
    <pick-input-number :is-disabled="true" v-model="number2" style="width:88px;"/>
    <pick-input-number v-model="number3" icon-inc="expand_less" icon-dec="expand_more" style="width:88px;"/>
    <br />
    <br />
    <pick-input-number color="danger" v-model="number4" style="width: 88px;"/>
    <pick-input-number color="success" v-model="number5" style="width: 88px;"/>
    <pick-input-number color="warning" v-model="number6" style="width: 88px;"/>
    <pick-input-number color="dark" v-model="number7" style="width: 88px;"/>
    <pick-input-number color="rgb(218, 24, 94)" v-model="number8" style="width: 88px;"/>
    <pick-input-number color="#ad3af9" v-model="number9" style="width: 88px;"/>
    <br /><br />
    <pick-input-number min="13" max="21" v-model="number10" style="width: 88px;"/>
    <br /><br />
    <pick-input-number v-model="number11" style="width: 88px;"/>
    <pick-input-number size="medium" v-model="number12" style="width: 88px;"/>
    <pick-input-number size="small" v-model="number13" style="width: 88px;"/>
    <pick-input-number size="mini" v-model="number14" style="width: 88px;"/>
    <br /><br />
    <pick-input-number v-model="number15" :step="5" style="width: 88px;"/>
    <br /><br />
    <pick-input-number v-model="number16" :step="1.43" style="width: 88px;"/>
    <br /><br />
    <pick-input-number v-model="number17" label="passengers:" style="width: 172px;"/>
  </div>
</template>
