<template>
  <myHeader />

  <HomePage class="flex-1 scrollbar" />

  <myFooter />
</template>

<script>
//import { util } from "@/core";
import myHeader from "./components/header";
import HomePage from "./components/HomePage";
import myFooter from "./components/footer";

export default {
  components: {
    myHeader,
    myFooter,
    HomePage
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

<style >
</style>
