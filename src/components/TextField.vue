<template>
  <v-text-field
    :label="label"
    outlined
    :rounded="rounded"
    hide-details
    :value="value"
    @input="$emit('input', $event)"
  >
  </v-text-field>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    label: String,
    value: String,
    rounded: {
      type: Boolean,
      default: false
    }
  }
});
</script>