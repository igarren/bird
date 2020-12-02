<template>
  <div class="text-center">
    <v-btn :to="path" text rounded color="primary" dark class="mr-5">
      <v-icon right dark class="ma-2"> {{ `mdi-${icon}` }} </v-icon>
      {{ text }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: String,
    path: String,
    icon: String
  }
});
</script>