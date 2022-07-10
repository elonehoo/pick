<script setup lang="ts">
  import {computed} from 'vue'
  import {getColor} from '../../util/color'
  import { pickIcon } from '../pickIcon'
  const props = withDefaults(defineProps<{
    item?: boolean,
    value?:any,
    active?:boolean,
    text?:string,
    closable?:boolean | string,
    color?:string,
    icon?:string,
    iconPack?:string,
    closeIcon?:string,
    transparent?:boolean
  }>(), {
    value:{},
    active:true,
    text:undefined,
    closable:false,
    color:undefined,
    icon:undefined,
    iconPack:'material-icons',
    closeIcon:'close',
    transparent:false
  })

  const emit = defineEmits(['input','click','pick-remove'])

  const styleChip = computed(()=>{
    const background = props.transparent ? getColor(props.color, .15) : getColor(props.color, 1)
    const color = props.transparent ? getColor(props.color, 1) : props.color ? 'rgba(255,255,255,.9)' : 'rgba(0,0,0,.7)'
    return {
      background: background,
      color: color
    }
  })

  function closeChip():void{
    emit('input',false)
    emit('click')
  }

</script>

<template>
  <div
   :style="styleChip"
   :class="[
    `pick-chip-${props.color}`,
     {
      'closable': closable,
      'con-color': color,
      'bg-chip-transparent': transparent
     }
    ]"
    class="con-pick-chip">
    <span class="text-chip pick-chip--text">
      <slot/>
    </span>
    <button
      v-if="closable"
      class="btn-close pick-chip--close"
      type="button"
      @click="closeChip">
      <pick-icon
        :icon-pack="iconPack"
        :icon="closeIcon"
      />
    </button>
  </div>
</template>

<style>
.con-pick-chip {
    background: #f0f0f0;
    border-radius: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: .7rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 3px;
    min-height: 28px;
    color: rgba(0,0,0,.7);
    position: relative
}

.con-pick-chip .con-color .con-pick-avatar {
    background: hsla(0,0%,100%,.2)
}

.con-pick-chip .con-pick-avatar {
    width: 24px;
    height: 24px;
    position: relative;
    display: block;
    margin: 2px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: rgba(0,0,0,.15)
}

.con-pick-chip .con-pick-avatar .material-icons {
    margin-top: 0;
    font-size: .8rem
}

.con-pick-chip .bg-chip-transparent {
    font-weight: 500
}

.pick-chip--close {
    width: 20px;
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 50%;
    border: 0;
    margin: 0 4px;
    cursor: pointer;
    background: rgba(0,0,0,.15);
    color: #fff;
    -webkit-transition: all .3s ease;
    transition: all .3s ease
}

.pick-chip--close:hover {
    background: 255,71,87
}

.pick-chip--close i {
    font-size: .9rem
}

.pick-chip--text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.pick-chip-primary:not(.bg-chip-transparent) {
    background: rgba(31, 116, 255,1)
}

.pick-chip-primary.bg-chip-transparent {
    background: rgba(31, 116, 255,.15);
    color: rgba(31, 116, 255,1)
}

.pick-chip-secondary:not(.bg-chip-transparent) {
    background: rgba(121, 49, 177,1)
}

.pick-chip-secondary.bg-chip-transparent {
    background: rgba(121, 49, 177,.15);
    color: rgba(121, 49, 177,1)
}

.pick-chip-danger:not(.bg-chip-transparent) {
    background: rgba(255, 71, 87,1)
}

.pick-chip-danger.bg-chip-transparent {
    background: rgba(255, 71, 87,.15);
    color: rgba(255, 71, 87,1)
}

.pick-chip-success:not(.bg-chip-transparent) {
    background: rgba(70, 201, 58,1)
}

.pick-chip-success.bg-chip-transparent {
    background: rgba(70, 201, 58,.15);
    color: rgba(70, 201, 58,1)
}

.pick-chip-warning:not(.bg-chip-transparent) {
    background: rgba(255,186,0,1)
}

.pick-chip-warning.bg-chip-transparent {
    background: rgba(255,186,0,.15);
    color: rgba(255,186,0,1)
}

.pick-chip-dark:not(.bg-chip-transparent) {
    background: rgba(30, 30, 30,1)
}

.pick-chip-dark.bg-chip-transparent {
    background: rgba(30, 30, 30,.15);
    color: rgba(30, 30, 30,1)
}

.pick-chip-light:not(.bg-chip-transparent) {
    background: rgba(245, 245, 245,1)
}

.pick-chip-light.bg-chip-transparent {
    background: rgba(245, 245, 245,.15);
    color: rgba(245, 245, 245,1)
}
</style>
