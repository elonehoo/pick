<script setup lang="ts">
  import {ref} from 'vue'
  import { pickIcon } from '../pickIcon'

  const emit = defineEmits(['input'])

  const props = withDefaults(defineProps<{
    value?:any,
    vsColor:string,
    placeholder:string,
    items:Array<any>,
    iconPack:string,
    removeIcon:string
  }>(), {
    value:{},
    vsColor:'primary',
    placeholder:'',
    items:undefined,
    iconPack:'material-icons',
    removeIcon:'close'
  })

  const newChip = ref<string>('')

  function addItem():void{
    let valueOld = props.value
    valueOld.push(newChip.value)
    emit('input',valueOld)
    newChip.value = ''
  }

  function removeTotalItems(){
    let valueOld = props.value
    valueOld.splice(0, props.value.length)
    emit('input',valueOld)
  }
</script>

<template>
  <div>
    <div :class="{'no-items': props.value.length === 0}" class="con-chips" >
      <slot />
      <input
       :placeholder="props.value.length > 0 ? undefined : placeholder"
       type="text"
       v-model="newChip"
       @keypress.enter="addItem"
       class="con-chips--input"
      />
      <div class="x-global con-chips--remove-all" @click="removeTotalItems">
        <pick-icon :icon-pack="iconPack" :icon="removeIcon" />
      </div>
    </div>
  </div>
</template>

<style>
.con-chips {
    width: 100%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-shadow: 0 2px 15px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 15px 0 rgba(0,0,0,.1);
    border-radius: 5px;
    overflow: hidden;
    padding: 5px
}

.con-chips .con-vs-chip {
    margin-top: 0;
    margin-bottom: 0
}

.con-chips--input {
    display: inline-block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: inherit;
    padding: 9px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 80px;
    border: 0
}

.con-chips--remove-all {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
    -webkit-transition: all .3s ease;
    transition: all .3s ease
}

.con-chips--remove-all:hover {
    color: rgba(255, 71, 87,1)
}
</style>
