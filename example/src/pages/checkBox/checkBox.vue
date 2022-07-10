<script setup lang="ts">
import {pickCheckBox} from '@elonehoo/pick'

let checkBox1 = $ref<boolean>(true)

let checkBox2 = $ref<string>('')

let checkBox3 = $ref<Array<string>>([])

function demo(event:boolean){
  checkBox1 = event
}

function demo2(event:string){
  checkBox2 = event
}

function demo3(event:string){
  console.log(event)
}

</script>

<template>
<div>
  <div>
    <pick-check-box @input="vent => {checkBox1 = vent}" :value="checkBox1">Primary</pick-check-box>
    <pick-check-box disabled >Primary</pick-check-box>
  </div>
  <br />
  <div>
    <pick-check-box >Primary</pick-check-box>
    <pick-check-box color="success">Primary</pick-check-box>
    <pick-check-box color="danger">Primary</pick-check-box>
    <pick-check-box color="warning">Primary</pick-check-box>
    <pick-check-box color="dark">Primary</pick-check-box>
    <pick-check-box color="rgb(38, 187, 174)">Primary</pick-check-box>
    <pick-check-box color="#720ea8">Primary</pick-check-box>
  </div>
  <br />
  <div>
    <pick-check-box @input="demo" :value="checkBox1" >{{checkBox1}}</pick-check-box>
  </div>
  <br/>
  <div>
    {{checkBox2 === null ?'null':checkBox2}}
    <pick-check-box @input="demo2" :value="checkBox2" pickValue="Elone Hoo" >Elone Hoo</pick-check-box>
  </div>
  <br />
  <div>
    <pick-check-box >Primary</pick-check-box>
    <pick-check-box icon="sms" color="success">SMS</pick-check-box>
    <pick-check-box icon="close" color="danger">Close</pick-check-box>
    <pick-check-box icon="attach_file" color="warning">Attach File</pick-check-box>
    <pick-check-box icon="format_bold" color="dark">Format Bold</pick-check-box>
    <pick-check-box icon="location_searching" color="rgb(38, 187, 174)">Location Searching</pick-check-box>
    <pick-check-box icon="camera_alt" color="#720ea8">Camera Alt</pick-check-box>
  </div>
</div>
</template>

<style scoped>

</style>
