<script setup lang="ts">
withDefaults(defineProps<{
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
})
</script>

<template>

</template>
