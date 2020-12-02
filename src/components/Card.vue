<template>
  <v-card max-width="250" class="mr-3 ">
    <v-card-text>
      <div>サービス</div>
      <p class="display-1 text--primary">
        トリメディ
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="teal accent-4" @click="reveal = true">
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    label: String
  }
});
</script>