中文 | [English](README.md)

# @cutting-mat/axios

[![npm](https://img.shields.io/npm/v/@cutting-mat/axios.svg)](https://www.npmjs.com/package/@cutting-mat/axios) [![license](https://img.shields.io/github/license/cutting-mat/axios.svg)]()

Axios的升级替代品，与Axios完全相同的API，无任何副作用，仅仅为 `Instance.get()` 扩展缓存功能

## 快速开始

1. 使用 npm 安装

``` bash
npm i @cutting-mat/axios --save
```

2. 创建请求实例

``` js
import axios from "@cutting-mat/axios"
const instance = axios.create();

```

3. 发送 get 请求（与Axios唯一的不同）

``` js
// 原来的 api
instance.get(url[, config])
// 扩展为
instance.get(url[, config[, cacheConfig]])
```

## cacheConfig 配置

- 启用缓存: `cacheConfig.cache: true`

``` js
instance.get(`/url`, { params: 1 }, {
    cache: true
})

```

- 关闭并清除缓存: `cacheConfig.cache: false`

``` js
instance.get(`/url`, { params: 1 }, {
    cache: false
})
// 等同于
instance.get(`/url`, { params: 1 })


```

- 更新缓存: `cacheConfig.cache: 'update'`

``` js
instance.get(`/url`, { params: 1 }, {
    cache: 'update'
})

```

## 注意

- 仅 `instance.get()` 方法生效，使用前必须先调用`create()`创建实例

## License

MIT
