中文 | [English](README.md)

# @cutting-mat/axios

[![npm](https://img.shields.io/npm/v/@cutting-mat/axios.svg)](https://www.npmjs.com/package/@cutting-mat/axios) [![license](https://img.shields.io/github/license/cutting-mat/axios-cache.svg)]()

Axios的升级替代品，与Axios完全相同的API，仅仅为`Instance.get()`方法扩展缓存功能

## 特性

为Axios实例的 get 方法增加缓存配置，如果开启缓存，地址和参数都相同的get请求将只发起一次。

``` js
instance.get(url[, config[, cache config]])
```

## 快速开始

1. 使用npm安装:

``` bash
npm i @cutting-mat/axios --save
```

2. 导入到项目

``` js
import axios from "@cutting-mat/axios"

```

3. 创建请求实例

``` js
const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
```

4. 发送get请求（与Axios唯一的不同）

``` js
/**
 * @param opt[Object] 额外的缓存配置
 * @param opt.cache[Boolean] 是否开启缓存，默认不开启
 * */ 

// 开启缓存
instance.get(`/url`, { params: 1 }, {
    cache: true
})

// 关闭缓存，并清除之前的缓存内容
instance.get(`/url`, { params: 1 }, {
    cache: false
})
```

## License

MIT
