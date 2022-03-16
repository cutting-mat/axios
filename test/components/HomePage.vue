<template>
  <div>
    <div class="wrap">
      <h1 class="maintitle">Axios的升级替代品</h1>
      <h2 class="subtitle">无任何副作用，仅仅为 Instance.get() 扩展缓存功能</h2>

      <div>
        <a
          href="https://github.com/cutting-mat/axios/blob/main/README_CN.md"
          target="_blank"
          class="myBtn"
        >
          <i class="el-icon-magic-stick"></i>
          快速开始
        </a>

        <a
          href="https://www.npmjs.com/package/axios"
          target="_blank"
          class="myBtn"
        >
          <i class="el-icon-reading"></i>
          Axios 文档
        </a>
      </div>

      <h3 class="channeltitle">演示</h3>
      <el-button @click="testRequest(true)"> 请求(缓存开) </el-button>
      <el-button @click="testRequest(false)"> 请求(缓存关) </el-button>
      <el-button @click="testRequest('update')"> 请求(更新缓存) </el-button>
      <el-button @click="multiRequest(true)"> 并发3次请求(缓存开) </el-button>
      <el-button @click="multiRequest(false)"> 并发3次请求(缓存关) </el-button>
      <div class="log">
        <el-button size="mini" @click="clear()"> 清空日志 </el-button>
        <div v-for="(item, index) in log" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../src/axios";
import { responseCache } from "../../src/axios";

// 创建请求实例
const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  data() {
    return {
      log: [],
      responseCache,
    };
  },
  methods: {
    clear() {
      this.log = [];
    },
    testRequest(cacheOption) {
      return instance
        .get("http://rap2api.taobao.org/app/mock/3567/return/test", null, {
          cache: cacheOption,
        })
        .then((res) => {
          this.log.push(`${new Date().getTime()}: ${JSON.stringify(res.data)}`);
        })
        .catch((err) => {
          this.log.push(`${new Date().getTime()}: ${err.message || err}`);
        });
    },
    multiRequest(cacheOption) {
      for (let i = 0; i < 3; i++) {
        this.testRequest(cacheOption);
      }
    },
  },
  created() {},
};
</script>
<style scoped>
.wrap {
  width: 1200px;
  text-align: center;
}
.maintitle {
  color: #000;
  font-size: 2.5em;
}
.subtitle {
  color: rgb(71, 101, 130);
  font-size: 1.6em;
  font-weight: normal;
  margin-bottom: 20px;
}
.channeltitle {
  font-size: 1.5em;
  color: #000;
  margin: 40px 0 20px;
  font-weight: normal;
}
.myBtn {
  display: inline-block;
  border-radius: 6px;
  padding: 0 24px;
  line-height: 52px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #f8f8f8;
  background-color: #4abf8a;
  border: 2px solid #3eaf7c;
  transition: background-color 0.1s ease;
  margin: 0 10px;
}

.log {
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 20px 0;
  min-height: 10em;
  background: #dedede;
  border-radius: 8px;
  padding: 20px;
}
</style>>
