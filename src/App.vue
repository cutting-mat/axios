<template>
  <div class="flex-col" style="height: 100%">
    <myHeader />
    <HomePage class="flex-1 scrollbar" />
    <myFooter />
  </div>
</template>

<script>
//import { util } from "@/core";
import myHeader from "./components/header.vue";
import HomePage from "./components/HomePage.vue";
import myFooter from "./components/footer.vue";

export default {
  components: {
    myHeader,
    myFooter,
    HomePage,
  },
  data() {
    return {
      screen: {},
    };
  },
  methods: {},
  created() {
    // const { width, height } = window.screen;
    const { innerWidth, innerHeight } = window;
    this.screen = {
      width: innerWidth,
      height: innerHeight,
    };
  },
};
</script>

<style></style>
