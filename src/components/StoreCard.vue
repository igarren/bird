<template>
  <v-card
    class="my-3"
    color="grey lighten-4 d-flex align-center justify-space-between"
  >
    <section class="d-flex align-center flex-xs-column">
      <v-icon right dark color="primary" class="ma-2">mdi-store</v-icon>
      <div>
        <h3>{{ name }}</h3>
        <p class="ma-0">{{ address }}</p>
      </div>
    </section>
    <section class="d-flex align-center">
      <v-icon right dark color="primary" class="ma-2">mdi-user</v-icon>
      <p class="my-0 mx-5">5 スタッフ</p>
      <rounded-button text="編集" icon="pencil" :path="path" />
    </section>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import RoundedButton from "@/components/Buttons/Rounded.vue";
export default defineComponent({
  components: {
    RoundedButton
  },
  props: {
    path: String,
    name: String,
    address: String
  }
});
</script>