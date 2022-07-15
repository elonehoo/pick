<script setup lang="ts">
import {pickDivider} from '@elonehoo/pick'
</script>

<template>
  <div>
    <div>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <pick-divider/>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <br />
    <div>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <pick-divider>
        My Text
      </pick-divider>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div>
      <pick-divider color="primary" position="left">
        My Text
      </pick-divider>
      <pick-divider position="left-center">
        My Text
      </pick-divider>
      <pick-divider position="center">
        My Text
      </pick-divider>
      <pick-divider position="right-center">
        My Text
      </pick-divider>
      <pick-divider position="right">
        My Text
      </pick-divider>
    </div>
    <br />
    <div>
      <pick-divider>Default</pick-divider>
      <pick-divider color="primary">Primary</pick-divider>
      <pick-divider color="success">Success</pick-divider>
      <pick-divider color="danger">Danger</pick-divider>
      <pick-divider color="warning">Warning</pick-divider>
      <pick-divider color="dark">Dark</pick-divider>
      <pick-divider color="rgb(29, 222, 194)">RGB</pick-divider>
      <pick-divider color="#ad289f">HEX</pick-divider>
    </div>
    <br />
    <div>
      <pick-divider>Default</pick-divider>
      <pick-divider background="primary" color="#ade6d4">Primary</pick-divider>
      <pick-divider background="success" color="#0a540a">Success</pick-divider>
      <pick-divider background="danger" color="lightred">Danger</pick-divider>
      <pick-divider background="warning" color="grey">Warning</pick-divider>
      <pick-divider background="dark" color="lightgrey">Dark</pick-divider>
      <pick-divider background="rgb(252, 243, 192)" color="rgb(29, 222, 194)">RGB</pick-divider>
      <pick-divider background="#fffaaa" color="#ad289f">HEX</pick-divider>
    </div>
    <br />
    <div>
      <pick-divider icon="arrow_downward"></pick-divider>
      <pick-divider color="primary" icon="star"></pick-divider>
      <pick-divider color="success" icon="check"></pick-divider>
      <pick-divider color="danger" icon="delete_forever"></pick-divider>
      <pick-divider color="warning" icon="report_problem"></pick-divider>
      <pick-divider color="dark" icon="watch_later"></pick-divider>
    </div>
    <br />
    <div>
      <pick-divider border-style="dotted" color="dark">dotted</pick-divider>
      <pick-divider border-style="dashed" color="dark">dashed</pick-divider>
      <pick-divider border-style="solid" color="dark">solid</pick-divider>
    </div>
  </div>
</template>
