<template>
  <div id="app"
    class="flex-col"
  >
    <myHeader />

    <HomePage class="flex-1 scrollbar"  />

    <footer class="foot">
      <p>
        © 2022 - 3022 Author
        <a href="https://refined-x.com/" target="_blank">雅X共赏</a>
        Github
        <a href="https://github.com/cutting-mat/axios" target="_blank"
          >@cutting-mat/axios</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
//import { util } from "@/core";
import myHeader from "./test/header";

export default {
  components: {
    myHeader,
    HomePage: () => import("./test/HomePage"),
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

<style scoped>
@import url('./assets/global.css');
.foot {
  /* position: absolute;
    left: 0;
    bottom: 0;
    width: 100%; */
  background: #333;
  padding: 24px;
  overflow: hidden;
  color: #999;
  font-size: 14px;
  text-align: center;
  margin-top: 40px;
}
.foot a {
  color: #fff;
  margin: 0 0.5em;
}
</style>
