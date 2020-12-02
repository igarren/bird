<template>
  <div class="text-center">
    <v-btn :to="path" rounded color="primary" dark class="mr-3">
      <v-icon right dark class="ma-2">
        {{ `mdi-${icon}` }}
      </v-icon>
      {{ text }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: String,
    icon: String,
    path: {
      type: String,
      default: ""
    }
  }
});
</script>