<template>
  <v-card>
    <v-tabs v-model="tab" background-color="transparent" color="primary" grow>
      <v-tab>
        店舗情報
      </v-tab>
      <v-tab>
        スタッフ
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="pa-4">
      {{ $route.params.id }}
      <v-tab-item>
        <v-row>
          <v-col cols="12" sm="6">
            <text-field label="メールアドレス" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <text-field label="電話番号" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <text-field label="FAX" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="3">
            <text-field label="郵便番号" />
          </v-col>
          <v-col cols="12" sm="3">
            <text-field label="都道府県コード" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <text-field label="住所1" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <text-field label="住所2" />
          </v-col>
        </v-row>
        <v-row class="justify-end">
          <rounded-button text="保存" icon="content-save" />
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <h2>現在のサービス</h2>
        <v-divider> </v-divider>

        <br />
        <section class="d-flex flex-column flex-sm-row">
          <card />
          <card />
          <card />
        </section>

        <h2 class="mt-10">利用可能サービス</h2>
        <v-divider> </v-divider>

        <br />
        <section class="d-flex flex-column flex-sm-row">
          <card />
          <card />
          <card />
        </section>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import TextField from "@/components/TextField.vue";
import RoundedButton from "@/components/Buttons/Rounded.vue";
import Card from "@/components/Card.vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Home",
  components: { TextField, RoundedButton, Card },
  data() {
    return {
      tab: null
    };
  }
});
</script>
