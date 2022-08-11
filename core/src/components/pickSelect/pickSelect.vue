<script setup lang="ts">
import {pickIcon} from '../pickIcon'
import {ref,computed, useAttrs,watch,nextTick, onMounted, onBeforeUnmount, onUpdated} from 'vue'
import {insertBody} from '../../util'

const attrss = useAttrs()

const props = withDefaults(defineProps<{
  modelValue: any
  noData?: string
  maxSelected?: number | string,
  autocomplete?: boolean,
  color?: string,
  multiple?: boolean,
  label?: string,
  success?: boolean,
  danger?: boolean,
  warning?: boolean,
  successText?: string,
  dangerText?: string,
  warningText?: string
  descriptionText?: string,
  iconPack?: string,
  icon?: string,
  iconClear?: string,
  width?: string
}>(), {
  noData:'No data available',
  maxSelected: undefined,
  autocomplete: false,
  color: 'primary',
  multiple: false,
  label: undefined,
  success: false,
  danger: false,
  warning: false,
  successText: undefined,
  dangerText: undefined,
  warningText: undefined,
  descriptionText: undefined,
  iconPack: 'material-icons',
  icon: 'keyboard_arrow_down',
  iconClear: 'clear',
  width: undefined
})

const emits = defineEmits(['blur', 'focus', 'input-change', 'change', 'update:modelValue'])

const active = ref<boolean>(false)
const modelValuex = ref<string>('')
const clear = ref<boolean>(false)
const scrollx = ref<boolean>(false)
const cords = ref({})
const filterx = ref<boolean>(false)
const childrenItems = ref([])

const inputselect = ref<any>(null)
const pickSelectOptions = ref<any>(null)
const ulx = ref<any>(null)
const inputSelectLabel = ref<any>(null)

const activeBtnClear = computed(() => {
  return props.autocomplete && filterx.value
})

const getWidth = computed(()=>{
  return props.width ? `width:${props.width};` : '';
})

const attrs = computed(()=>{
  return {
    name: attrss.name + '_label',
    onblur: (event:any) =>{
      if (
        props.autocomplete && event.relatedTarget ? !event.relatedTarget.closest(".pick-select--options") : false
      ) {
        closeOptions();
      }
      emits("blur", event);
    },
    onfocus: (event:any) => {
      emits("focus", event);
      if (event.keyCode ? event.keyCode : event.which) {
        focus();
      }
    },
    onMouseup: () => {
      focus()
    },
    oninput: (event:any)=>{
      if (props.autocomplete) {
        emits("input-change", event);
      }
    },
    onkeyup: (event:any)=>{
      if (event.key == "ArrowDown" || event.key == "ArrowUp") {
        event.preventDefault();
        let childrens = childrenItems.value.filter((item:any) => {
          return item.visible;
        });
        childrens[0].$el.querySelector(".pick-select--item").focus();
      } else {
        if (props.autocomplete) {
          filterItems(event.target.value);
        }
      }
      childrenItems.value.map((item:any) => {
        item.modelValueInputx = inputselect.value;
      });
    }
  }
})

watch(()=>props.modelValue,(event,prevEvent)=>{
  modelValuex.value = props.modelValue
  emits('change',event)
})

watch(()=>active,()=>{
  nextTick(()=>{
    if (active.value) {
      insertBody(pickSelectOptions)
      setTimeout(() => {
        childrenItems.value.forEach((item:any) => {
          if (item.focusValue) {
            item.focusValue();
          }
        });
        if (ulx.value.scrollHeight >= 260) scrollx.value = true;
      }, 100)
    }else {
      let parent:any = document.getElementsByTagName("body");
      parent.removeChild(pickSelectOptions.value)
    }
  })
})

onMounted(()=>{
  inputselect.value.value = props.modelValue
  changeValue()
  if (active.value) {
    insertBody(pickSelectOptions.value);
  }
})

onBeforeUnmount(()=>{
  const parent:any = document.getElementsByTagName("body")
  if (active.value) {
    closeOptions();
  }
  if ( parent && pickSelectOptions.value && pickSelectOptions.value.parentNode === parent) {
    parent.removeChild(pickSelectOptions.value);
  }
})

onUpdated(()=>{
  if (!active.value) {
    changeValue();
  }
})

function clearValue(){
  focus()
  filterItems("")
  changeValue()
}

function filterItems(modelValue:string){
  if (modelValue) {
    filterx.value = true;
  } else {
    filterx.value = false;
  }
  let items = childrenItems.value
  items.map((item:any)=>{
    if (!("text" in item)) return;
    let text = item.text
    if (props.multiple) {
      let modelValuesx = modelValue.split(",");
      modelValuesx.forEach(modelValue_multi => {
        if (text.toUpperCase().indexOf(modelValue_multi.toUpperCase()) == -1) {
          item.visible = false;
        } else {
          item.visible = true;
        }
      });
    } else {
      if (text.toUpperCase().indexOf(modelValue.toUpperCase()) == -1) {
        item.visible = false;
      } else {
        item.visible = true;
      }
    }
  })

  let lengthx = items.filter((item:any) => {
    return item.visible;
  });
  if (lengthx.length == 0) {
    clear.value = true;
  } else {
    clear.value = false;
  }
  nextTick(() => {
    cords.value = changePosition();
  });
}

function changeValue(){
  filterx.value = false
  if (props.multiple) {
    let modelValues = props.modelValue ? props.modelValue : [];
    let options = childrenItems.value
    let optionsValues:any[] = [];
    modelValues.forEach((item:any) => {
      options.forEach((item_option:any) => {
        if (item_option.modelValue == item) {
          let text = item_option.text;
          text = text.replace("check_circle", "");
          optionsValues.push(text.trim());
        }
      });
    });
    inputselect.value.value = optionsValues.toString();
  } else {
    if (inputselect.value) {
      inputselect.value.value = modelValuex.value;
    }
  }
}

function focus(){
  active.value = true
  document.addEventListener('click', clickBlur)
  setLabelClass(inputSelectLabel.value, true)
  let inputx = inputselect.value
  if (props.autocomplete && props.multiple) {
    setTimeout(() => {
      if (inputx.modelValue) {
        inputselect.value.value = inputx.modelValue += ",";
      }
      inputx.selectionStart = inputx.selectionEnd = 10000;
    }, 10);
  } else if (props.autocomplete && !props.multiple) {
    inputselect.value.select();
  }
  if (!props.autocomplete) {
    if (
      props.multiple ? props.modelValue.length == 0 : !props.modelValue || props.multiple
    ) {
      setTimeout(() => {
        const el = childrenItems.value[0].$el.querySelector(".pick-select--item");
        if (el) el.focus();
      }, 50);
    }
  }
  nextTick(() => {
    cords.value = changePosition();
  })
}

function clickBlur(event:any){
  if (event.target === inputselect.value) {
    return
  }
  let closestx = event.target.closest(".pick-select--option");

  if (!closestx) {
    closeOptions();
    if (props.autocomplete) {
      filterItems("");
    }
    changeValue();
  }
}

function closeOptions(){
  active.value = false
  setLabelClass(inputSelectLabel.value, false)
  document.removeEventListener("click", clickBlur);
}

function changePosition(){
  let elx = inputselect.value;
  let content = pickSelectOptions.value;
  let conditional = props.autocomplete;
  let topx = 0;
  let leftx = 0;
  let widthx = 0;
  let scrollTopx = window.pageYOffset || document.documentElement.scrollTop

  if (
    elx.getBoundingClientRect().top + content.scrollHeight + 20 >=
    window.innerHeight
  ) {
    topx =
      elx.getBoundingClientRect().top +
      elx.clientHeight +
      scrollTopx -
      content.scrollHeight;
    if (conditional) {
      topx = topx - elx.clientHeight - 5;
    }
  } else {
    topx = conditional
      ? elx.getBoundingClientRect().top + elx.clientHeight + scrollTopx + 5
      : elx.getBoundingClientRect().top + scrollTopx;
  }
  leftx = elx.getBoundingClientRect().left;
  widthx = elx.offsetWidth;
  let cords = {
    left: `${leftx}px`,
    top: `${topx}px`,
    width: `${widthx}px`
  };
  return cords;
}

function beforeEnter(el:any) {
  el.style.height = 0;
}

function enter(el:any, done:any) {
  let h = el.scrollHeight;
  el.style.height = h + "px";
  done();
}

function leave(el:any) {
  el.style.height = 0 + "px";
}

function setLabelClass(label:any, focusing:any) {
  if (!label) {
    return;
  }

  if (focusing) {
    label.classList.add("input-select-label-" + props.color + "--active");
    return;
  }

  label.classList.remove("input-select-label-" + props.color + "--active");
}

</script>

<template>
<div
    :class="[{
      'autocompletex':autocomplete,
      'activeOptions':active,
      'input-select-validate-success':success,
      'input-select-validate-danger':danger,
      'input-select-validate-warning':warning}, $attrs.class]"
    :style="[getWidth]"
    class="con-select"
  >
    <label
      v-if="label"
      ref="inputSelectLabel"
      class="pick-select--label"
    >{{ label }}</label>
    <div class="input-select-con">
      <input
        v-bind="attrs"
        ref="inputselect"
        :value="modelValuex"
        :readonly="!autocomplete"
        class="input-select pick-select--input"
        type="text"
        @keydown.esc.stop.prevent="closeOptions"
      >
      <input
        :name="attrs.name"
        type="hidden"
        :value="modelValue"
      >

      <button
        :class="{'activeBtnClear': activeBtnClear}"
        class="icon-select-clear pick-select--icon-clear"
        @click="clearValue"
      >
        <i class="material-icons">
          close
        </i>
      </button>

      <pick-icon
        v-if="!activeBtnClear"
        :icon-pack="iconPack"
        :icon="icon"
        class="icon-select pick-select--icon"
      />

      <transition name="fadeselect">
        <div
          v-show="active"
          ref="pickSelectOptions"
          :style="cords"
          :class="[`pick-select-${color}`,{'scrollx':scrollx}]"
          class="pick-select--options"
        >
          <ul ref="ulx">
            <slot />
          </ul>
          <ul v-show="clear">
            <li @click="filterItems(''),changeValue()">
              {{ noData }}
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <transition-group
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="success"
        key="success"
        class="con-text-validation"
      >
        <span class="span-text-validation span-text-validation-success">
          {{
            successText
          }}
        </span>
      </div>
      <div
        v-else-if="danger"
        key="danger"
        class="con-text-validation span-text-validation-danger"
      >
        <span class="span-text-validation">
          {{
            dangerText
          }}
        </span>
      </div>
      <div
        v-else-if="warning"
        key="warning"
        class="con-text-validation span-text-validation-warning"
      >
        <span class="span-text-validation">
          {{
            warningText
          }}
        </span>
      </div>
      <div
        v-if="descriptionText"
        key="description"
        class="con-text-validation span-text-validation"
      >
        <span class="span-text-validation">
          {{
            descriptionText
          }}
        </span>
      </div>
    </transition-group>
  </div>
</template>
