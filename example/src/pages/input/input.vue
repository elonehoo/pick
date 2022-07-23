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

<template>
  <div>
    <pick-input v-model="value1" placeholder="Placeholder" />
    <pick-input disabled placeholder="Disabled" v-model="value2" />
    <br />
    <pick-input label="Name" v-model="value3" placeholder="Name" />
    <pick-input type="password" label="Password" placeholder="Password" v-model="value4" />
    <br />
    <pick-input label-placeholder="Label-placeholder"  v-model="value5" />
    <pick-input disabled label-placeholder="Label-disabled"  v-model="value6" />
    <br />
    <pick-input icon="search" placeholder="Search" v-model="value7"/>
    <pick-input icon-after label-placeholder="icon-after" icon="mode_edit" placeholder="Nombre" v-model="value8"/>
    <pick-input disabled icon="email" label-placeholder="icon-disabled" v-model="value9"/>
    <pick-input icon-no-border icon="account_circle" label-placeholder="icon-no-border" v-model="value10"/>
    <br />
    <pick-input label-placeholder="Default" v-model="value11"/>
    <pick-input color="success" label-placeholder="Success" v-model="value12"/>
    <pick-input color="danger" label-placeholder="Danger" v-model="value13"/>
    <pick-input color="warning" label-placeholder="Warning" v-model="value14"/>
    <pick-input color="dark" label-placeholder="Dark" v-model="value15"/>
    <pick-input color="rgb(213, 14, 151)" label-placeholder="RGB: rgb(213, 14, 151)" v-model="value16"/>
    <pick-input color="#11e988" label-placeholder="HEX: #11e988" v-model="value17"/>
    <br />
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
    <br />
    <pick-input size="large" placeholder="Size large" v-model="value22" />
    <pick-input size="default" placeholder="Size default" v-model="value23" />
    <pick-input size="small" placeholder="Size small" v-model="value24" />
  </div>
</template>
