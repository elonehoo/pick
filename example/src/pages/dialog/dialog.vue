<script setup lang="ts">
import {ref} from 'vue'
import {pickDialog,pickButton} from '@elonehoo/pick'

const dialogActive = ref<boolean>(false)

const dialogActive1 = ref<boolean>(false)
const dialogActive2 = ref<boolean>(false)
const dialogActive3 = ref<boolean>(false)
const dialogActive4 = ref<boolean>(false)
const dialogActive5 = ref<boolean>(false)

const dialogActive6 = ref<boolean>(false)
const acceptFlag = ref<boolean>(false)

function dialogCancel() {
  dialogActive.value = false
  dialogActive1.value = false
  dialogActive2.value = false
  dialogActive3.value = false
  dialogActive4.value = false
  dialogActive5.value = false
}

function dialogCancel1() {
  if(acceptFlag.value === true){
    dialogActive6.value = false
  }
}

function dialogAccept(value:any){

}

function dialogAccept1(value:any){
  acceptFlag.value = true
  dialogCancel1()
}
</script>

<template>
  <div>
    <pick-button @click="dialogActive = true">
      show
    </pick-button>

    <pick-dialog :buttonsHidden="false" @cancel="dialogCancel" @accept="dialogAccept" @close="dialogCancel" title="Dialog - primary" :active="dialogActive" color="primary">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>

    <br />
    <br />
    <pick-button color="success" @click="dialogActive1 = true">
      show
    </pick-button>

    <pick-dialog :buttonsHidden="false" @cancel="dialogCancel" @accept="dialogAccept" @close="dialogCancel" title="Dialog - success" :active="dialogActive1" color="success">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>

    <br />
    <br />
    <pick-button color="danger" @click="dialogActive2 = true">
      show
    </pick-button>

    <pick-dialog :buttonsHidden="false" @cancel="dialogCancel" @accept="dialogAccept" @close="dialogCancel" title="Dialog - danger" :active="dialogActive2" color="danger">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>

    <br />
    <br />
    <pick-button color="warning" @click="dialogActive3 = true">
      show
    </pick-button>

    <pick-dialog :buttonsHidden="false" @cancel="dialogCancel" @accept="dialogAccept" @close="dialogCancel" title="Dialog - danger" :active="dialogActive3" color="warning">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>

    <br />
    <br />
    <pick-button color="dark" @click="dialogActive4 = true">
      show
    </pick-button>

    <pick-dialog :buttonsHidden="false" @cancel="dialogCancel1" @accept="dialogAccept" @close="dialogCancel" title="Dialog - danger" :active="dialogActive4" color="dark">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>

    <br />
    <br />
    <pick-button color="#3dd495" @click="dialogActive5 = true">
      show
    </pick-button>

    <pick-dialog :buttonsHidden="false" @cancel="dialogCancel" @accept="dialogAccept" @close="dialogCancel" title="Dialog - danger" :active="dialogActive5" color="#3dd495">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>

    <br />
    <br />
    <pick-button color="danger" @click="dialogActive6 = true">
      show
    </pick-button>

    <pick-dialog :buttonsHidden="false" @cancel="dialogActive6 = false" @accept="dialogAccept1" @close="dialogCancel1" title="Dialog - danger" :active="dialogActive6" color="danger">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </pick-dialog>
  </div>
</template>

<style scoped>

</style>
