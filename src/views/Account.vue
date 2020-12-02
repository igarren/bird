<template>
  <v-card class="account pa-4">
    <v-row>
      <v-col cols="12" sm="3">
        <text-field label="ログインID" v-model="state.login" />
      </v-col>
      <v-col cols="12" sm="3">
        <text-field label="パスワード" v-model="state.password" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <text-field label="メールアドレス" v-model="state.email" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3">
        <text-field label="権限" v-model="state.authority" />
      </v-col>
      <v-col cols="12" sm="3">
        <text-field label="パスワード" />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12" sm="3">
        <text-field label="姓" v-model="state.lastName" />
      </v-col>
      <v-col cols="12" sm="3">
        <text-field label="名" v-model="state.firstName" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <text-field label="電話番号" v-model="state.phone" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3">
        <text-field label="郵便番号" v-model="state.zip" />
      </v-col>
      <v-col cols="12" sm="3">
        <text-field label="都道府県" v-model="state.prefecture" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <text-field label="住所1" v-model="state.address1" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <text-field label="住所2" v-model="state.address2" />
      </v-col>
    </v-row>
    <v-row class="justify-end">
      <rounded-button text="保存" icon="content-save" />
    </v-row>
  </v-card>
</template>

<script lang="ts">
import TextField from "@/components/TextField.vue";
import RoundedButton from "@/components/Buttons/Rounded.vue";
import { defineComponent, reactive } from "@vue/composition-api";

interface Account {
  login: "login";
  password: "123456789";
  email: "brethren@test.com";
  authority: "管理者";
  lastName: "イガ";
  firstName: "ブレ";
  phone: "0123456789";
  zip: "6800831";
  prefecture: "鳥取";
  address1: "鳥取市";
  address2: "栄町";
}

export default defineComponent({
  name: "Account",
  components: {
    TextField,
    RoundedButton
  },
  setup() {
    const state = reactive({
      login: "brethren",
      password: "123456789",
      email: "brethren@test.com",
      authority: "管理者",
      lastName: "Igarashi",
      firstName: "Brethren",
      phone: "0123456789",
      zip: "6800831",
      prefecture: "鳥取",
      address1: "鳥取市",
      address2: "栄町755"
    });

    return {
      state
    };
  }
});
</script>
