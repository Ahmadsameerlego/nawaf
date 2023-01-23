<template>
  <v-app>
    <v-main>
      <pageHeader />
      <router-view />
      <pageFooter/>
    </v-main>
  </v-app>
</template>

<script>
import "./assets/css/style.css";
import pageHeader from "./components/Shared/pageHeader.vue";
import pageFooter from "./components/Shared/pageFooter.vue";
export default {
  name: "App",
  components: {
    pageHeader,
    pageFooter
  },

  data: () => ({
    //
  }),
};
</script>
