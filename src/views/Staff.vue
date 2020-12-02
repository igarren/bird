<template>
  <v-card class="pa-5">
    <v-row class="justify-end">
      <v-col cols="12" sm="3">
        <text-field rounded label="検索" v-model="state.search" />
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="state.staffs"
      :items-per-page="5"
      :search="state.search"
      class="elevation-1"
      v-if="!state.loading"
    ></v-data-table>
    <section
      style="height: 300px"
      class="d-flex justify-center align-center"
      v-if="state.loading"
    >
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </section>
  </v-card>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import TextField from "@/components/TextField.vue";

import { defineComponent, reactive, onMounted } from "@vue/composition-api";
import axios from "axios";

export default defineComponent({
  name: "Staff",
  components: {
    HelloWorld,
    TextField
  },
  setup() {
    const headers = [
      { text: "姓", value: "lastname" },
      { text: "名", value: "firstname" },
      { text: "TEL", value: "phone" },
      { text: "メールアドレス", value: "email" }
    ];
    const state = reactive({
      staffs: [],
      loading: true,
      search: ""
    });

    onMounted(() => {
      axios
        .get("https://fakerapi.it/api/v1/persons?_locale=ja_JP")
        .then(response => {
          state.staffs = response.data.data;
          state.loading = false;
        });
    });

    return {
      state,
      headers
    };
  }
});
</script>
