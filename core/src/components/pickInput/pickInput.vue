<script setup lang="ts">
  import {ref,inject,Ref,computed,useAttrs} from 'vue'
  import { getColor } from '../../util/color'
  import { pickIcon } from '../pickIcon'

  const attrs = useAttrs()

  const pickinput= ref<any>(null)

  const props = withDefaults(defineProps<{
    modelValue?:string | number,
    labelPlaceholder?: string | number,
    label?: string | number,
    autofocus?: boolean,
    icon?: string,
    iconAfter?:boolean | string,
    iconNoBorder?:boolean,
    iconPack?:string,
    color?:string,
    success?:boolean,
    danger?:boolean,
    warning?:boolean,
    successText?:string,
    dangerText?:string,
    warningText?:string,
    descriptionText?:string,
    size?:string,
    valIconPack?:string,
    valIconSuccess?:string,
    valIconDanger?:string,
    valIconWarning?:string,
  }>(), {
    modelValue: '',
    labelPlaceholder:undefined,
    label: undefined,
    autofocus: false,
    icon:undefined,
    iconAfter:false,
    iconNoBorder:false,
    iconPack:'material-icons',
    color:'primary',
    success:false,
    danger:false,
    warning:false,
    successText:undefined,
    dangerText:undefined,
    warningText:undefined,
    descriptionText:undefined,
    size:'normal',
    valIconPack:'material-icons',
    valIconSuccess:'done',
    valIconDanger:'clear',
    valIconWarning:'warning',
  })

  const emit = defineEmits(['update:modelValue','focus','blur','icon-click'])

  const elForm = inject('elForm','')
  const elFormItem = inject('elFormItem','')

  const isFocus:Ref<boolean> = ref<boolean>(false)

  const style = computed(()=>{
    return {
      border: `1px solid ${isFocus.value ? getColor(props.color,1) : 'rgba(0, 0, 0,.2)'}`,
    }
  })

  const styleLabel = computed(()=>{
    return {
      color: isFocus.value ? getColor(props.color,1) : undefined,
    }
  })

  const listeners = computed(()=>{
    return {
      focus: (evt:any) => {
        emit('focus',evt)
        changeFocus(true)
      },
      blur: (evt:any) => {
        emit('blur',evt)
        changeFocus(false)
      }
    }
  })

  const isValue = computed(()=>{
    return props.labelPlaceholder ? true : !props.modelValue
  })

  const getIcon = computed(()=>{
    return props.danger  ? props.valIconDanger
           : props.warning ? props.valIconWarning
           : props.success ? props.valIconSuccess
           : ''
  })

  function changeFocus(booleanx:boolean):void{
    isFocus.value = booleanx
  }

  function beforeEnter(el:HTMLElement):void{
    el.style.height = '0'
  }

  function enter(el:HTMLElement,done?:Function):void{
    let h:number = el.scrollHeight
    el.style.height = h + 'px'
    done!()
  }

  function leave(el:HTMLElement):void{
    el.style.height = '0px'
  }

  function focusInput():void{
    pickinput.focus()
  }
</script>

<template>
  <div
    ref="coninput"
    :style="styleLabel"
    :class="[`pick-input-${props.color}`,{
      'isFocus':isFocus,
      'input-icon-validate-success':props.success,
      'input-icon-validate-danger':props.danger,
      'input-icon-validate-warning':props.warning,
      'is-label-placeholder':props.labelPlaceholder
    }]"
    class="pick-component pick-con-input-label pick-input">
    <label
     v-if="props.labelPlaceholder ? false : props.label"
     class="pick-input--label"
     @click="focusInput">{{ props.label }}</label>
    <div class="pick-con-input">
      <input
       ref="pickinput"
       :style="style"
       :autofocus="autofocus"
       :class="[props.size,{
         'hasValue':props.modelValue !== '',
         'hasIcon':props.icon,
         'icon-after-input':props.iconAfter
       }]"
       :value="props.modelValue"
       @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
       v-bind="attrs"
       :placeholder="null"
       :type="$attrs.type ? $attrs.type : 'text'"
       class="pick-inputx pick-input--input"
       v-on="listeners">
      <transition name="placeholderx">
        <span
          v-if="isValue && ( labelPlaceholder || attrs.placeholder)"
          ref="spanplaceholder"
          :style="styleLabel"
          :class="[
            props.labelPlaceholder&&(props.size),
            props.size,
            {'pick-placeholder-label': props.labelPlaceholder,}
          ]"
          class="input-span-placeholder pick-input--placeholder"
          @click="focusInput">
          {{ attrs.placeholder || props.labelPlaceholder }}
        </span>
      </transition>
      <pick-icon
       v-if="props.icon"
       :class="{'icon-after':iconAfter, 'icon-no-border':iconNoBorder}"
       :icon-pack="iconPack"
       :icon="icon"
       style="font-size: 1.1rem;"
       class="icon-inputx notranslate pick-input--icon"
       @click="focusInput(); emit('icon-click');" />
      <transition name="icon-validate" >
        <span
          v-if="success || danger || warning"
          :class="{'icon-before':iconAfter}"
          class="input-icon-validate pick-input--icon-validate">
          <pick-icon
            style="font-size: 1.1rem;"
            :class="{'icon-before':iconAfter}"
            :icon-pack="valIconPack"
            :icon="getIcon"
          />
        </span>
      </transition>
    </div>
    <transition-group
      @before-enter="beforeEnter(pickinput)"
      @enter="enter(pickinput)"
      @leave="leave(pickinput)"
    >
      <div
        v-if="success"
        key="success"
        class="con-text-validation pick-input--text-validation">
        <span class="span-text-validation span-text-validation-success pick-input--text-validation-span">
          {{
            successText
          }}
        </span>
      </div>
      <div
        v-else-if="danger"
        key="danger"
        class="con-text-validation pick-input--text-validation">
        <span class="span-text-validation span-text-validation-danger pick-input--text-validation-span">
          {{
            dangerText
          }}
        </span>
      </div>
      <div
        v-else-if="warning"
        key="warning"
        class="con-text-validation pick-input--text-validation">
        <span class="span-text-validation span-text-validation-warning pick-input--text-validation-spans">
          {{
            warningText
          }}
        </span>
      </div>
      <div
        v-if="descriptionText"
        key="description"
        class="con-text-validation pick-input--text-validation">
        <span class="span-text-validation span-text-validation pick-input--text-validation-span">
          {{
            descriptionText
          }}
        </span>
      </div>
    </transition-group>
  </div>
</template>
