<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="$route.name !== 'Login'">
      <div class="d-flex align-center">
        <h1>バード</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">ブレスレン</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <section
          id="nav"
          class="d-flex justify-content-start my-5"
          v-if="$route.name !== 'Login'"
        >
          <link-button icon="account" path="/" text="アカウント設定" />
          <link-button icon="briefcase" path="/corporate" text="法人設定" />
          <link-button icon="store" path="/store" text="店舗設定" />
          <link-button
            icon="account-multiple"
            path="/staff"
            text="スタンプ設定"
          />
        </section>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import LinkButton from "@/components/Buttons/LinkButton.vue";

export default Vue.extend({
  name: "App",

  components: {
    LinkButton
  },

  data: () => ({
    //
  })
});
</script>

<style lang="scss">
#nav {
}
</style>
