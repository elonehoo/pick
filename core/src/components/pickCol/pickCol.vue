<script setup lang="ts">
withDefaults(defineProps<{
  pickW?: number,
  pickXs?: number | string,
  pickSm?: number | string,
  pickLg?: number | string,
  pickOffset?: number,
  pickType?: string,
  pickJustify?: string,
  pickAlign?:string,
  pickOrder?:string | number
}>(),{
  pickW: 12,
  pickXs: '',
  pickSm: '',
  pickLg: '',
  pickOffset: 0,
  pickType:'',
  pickJustify:'',
  pickAlign:'',
  pickOrder:''
})
</script>

<template>
<div :class="['pick-xs-'+pickXs,'pick-sm-'+pickSm,'pick-lg-'+pickLg,]" class="pick-col">
    <slot/>
  </div>
</template>

<style scoped>
  .pick-col {
    float: left;
    order: v-bind(pickOrder);
    justify-content: v-bind(pickJustify);
    display: v-bind(pickType);
    align-items: v-bind(pickAlign);
    margin-left: v-bind('pickOffset * 100 / 12 + "%"');
    width: v-bind(pickW * 100 / 12 + '%');
  }
  .pick-lg-12 {
    width: 100% !important;
  }
  .pick-lg-11 {
    width: 91.66666666666667% !important;
  }
  .pick-lg-10 {
    width: 83.33333333333333% !important;
  }
  .pick-lg-9 {
    width: 75% !important;
  }
  .pick-lg-8 {
    width: 66.66666666666667% !important;
  }
  .pick-lg-7 {
    width: 58.33333333333333% !important;
  }
  .pick-lg-6 {
    width: 50% !important;
  }
  .pick-lg-5 {
    width: 41.66666666666667% !important;
  }
  .pick-lg-4 {
    width: 33.33333333333333% !important;
  }
  .pick-lg-3 {
    width: 25% !important;
  }
  .pick-lg-2 {
    width: 16.66666666666667% !important;
  }
  .pick-lg-1 {
    width: 8.333333333333333% !important;
  }
  .pick-lg-0 {
    display: none !important;
  }
  @media only screen and (max-width: 900px) {
    .pick-sm-12 {
      width: 100% !important;
    }
    .pick-sm-11 {
      width: 91.66666666666667% !important;
    }
    .pick-sm-10 {
      width: 83.33333333333333% !important;
    }
    .pick-sm-9 {
      width: 75% !important;
    }
    .pick-sm-8 {
      width: 66.66666666666667% !important;
    }
    .pick-sm-7 {
      width: 58.33333333333333% !important;
    }
    .pick-sm-6 {
      width: 50% !important;
    }
    .pick-sm-5 {
      width: 41.66666666666667% !important;
    }
    .pick-sm-4 {
      width: 33.33333333333333% !important;
    }
    .pick-sm-3 {
      width: 25% !important;
    }
    .pick-sm-2 {
      width: 16.66666666666667% !important;
    }
    .pick-sm-1 {
      width: 8.333333333333333% !important;
    }
    .pick-sm-0 {
      display: none !important;
    }
  }
  @media only screen and (max-width: 600px) {
    .pick-xs-12 {
      width: 100% !important;
    }
    .pick-xs-11 {
      width: 91.66666666666667% !important;
    }
    .pick-xs-10 {
      width: 83.33333333333333% !important;
    }
    .pick-xs-9 {
      width: 75% !important;
    }
    .pick-xs-8 {
      width: 66.66666666666667% !important;
    }
    .pick-xs-7 {
      width: 58.33333333333333% !important;
    }
    .pick-xs-6 {
      width: 50% !important;
    }
    .pick-xs-5 {
      width: 41.66666666666667% !important;
    }
    .pick-xs-4 {
      width: 33.33333333333333% !important;
    }
    .pick-xs-3 {
      width: 25% !important;
    }
    .pick-xs-2 {
      width: 16.66666666666667% !important;
    }
    .pick-xs-1 {
      width: 8.333333333333333% !important;
    }
    .pick-xs-0 {
      display: none !important;
    }
  }
</style>
