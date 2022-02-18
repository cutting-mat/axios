<template>
  <div id="app"
    class="flex-col"
  >
    <myHeader />

    <HomePage class="flex-1 scrollbar"  />

    <myFooter />
  </div>
</template>

<script>
//import { util } from "@/core";
import myHeader from "./test/components/header";
import myFooter from "./test/components/footer";

export default {
  components: {
    myHeader,
    myFooter,
    HomePage: () => import("./test/components/HomePage"),
  },
  data() {
    return {
      screen: {},
    };
  },
  methods: {},
  created() {
    // const { width, height } = window.screen;
    const {innerWidth, innerHeight} = window;
    this.screen = {
      width: innerWidth,
      height: innerHeight,
    };
  },
};
</script>

<style >

</style>
