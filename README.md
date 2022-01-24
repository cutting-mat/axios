English | [中文](README_CN.md)

# @tower1229/axios

[![npm](https://img.shields.io/npm/v/@tower1229/axios-cache.svg)](https://www.npmjs.com/package/@tower1229/axios-cache) [![license](https://img.shields.io/github/license/tower1229/axios-cache.svg)]()

The upgraded alternative of Axios, which has the same API as Axios, only extends the caching function for the `Instance.get()` method

## Features

Add cache configuration for get method of Axios instance. If caching is enabled, get requests with the same address and parameters will be initiated only once.

``` js
instance.get(url[, config[, cache config]])
```

## Getting started

1. install with npm:

```shell
npm i @tower1229/axios-cache --save
```

2. import to your project

``` js
import axios from "@tower1229/axios-cache"
```

3. Create Axios instance

``` js
const instance = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
```

4. Send get request (the only difference from Axios)

``` js
/**
 * @param opt[Object] Additional cache configuration
 * @param opt.cache[Boolean] Whether to enable caching. It is not enabled by default
 * */ 

// Enable cache
instance.get(`/url`, { params: 1 }, {
    cache: true
})

// Close the cache and clear the previous cache contents
instance.get(`/url`, { params: 1 }, {
    cache: false
})
```

## License

MIT