<template>
  <v-card class="pa-4" min-height="200">
    <section v-if="!state.loading">
      <v-row class="justify-end">
        <v-col cols="12" sm="3">
          <text-field rounded label="検索" v-model="state.search" />
        </v-col>
      </v-row>
      <section v-if="stores.length">
        <store-card
          v-for="store in stores"
          :path="`/store/${store.store}`"
          :name="store.store"
          :address="store.address"
          :key="store.store"
        />
      </section>
      <section v-if="stores.length === 0" class="d-flex justify-center">
        <h2>0件</h2>
      </section>
    </section>
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
import StoreCard from "@/components/StoreCard.vue";
import TextField from "@/components/TextField.vue";
import {
  defineComponent,
  reactive,
  computed,
  onMounted
} from "@vue/composition-api";
import axios from "axios";

interface Store {
  store: string;
  staff: number;
  zip: string;
  state: string;
  address: string;
}

interface State {
  storesRaw: Store[];
  search: string;
  loading: boolean;
}

export default defineComponent({
  name: "Store",
  components: { StoreCard, TextField },
  setup() {
    const state: State = reactive({
      storesRaw: [],
      search: "",
      loading: true
    });
    const stores = computed(() =>
      state.storesRaw.filter((store: Store) =>
        store.store.includes(state.search)
      )
    );

    function searchText() {
      alert(state.search);
    }

    onMounted(() => {
      axios
        .get(
          "https://fakerapi.it/api/v1/custom?_quantity=20&store=company_name&staff=counter&zip=postcode&state=state&address=streetAddress"
        )
        .then(response => {
          const data = response.data.data;
          state.storesRaw = data;
          state.loading = false;
        });
    });

    return {
      state,
      stores
    };
  }
});
</script>
