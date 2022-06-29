English | [中文](README_CN.md)

# @cutting-mat/axios

[![npm](https://img.shields.io/npm/v/@cutting-mat/axios.svg)](https://www.npmjs.com/package/@cutting-mat/axios) [![license](https://img.shields.io/github/license/cutting-mat/axios.svg)]()

The upgraded alternative of Axios, which has the same API as Axios, no side effects, only extends the caching function for the `Instance.get()` method

## Getting started

1. install with npm:

```shell
npm i @cutting-mat/axios --save
```

2. Create Axios instance

```js
import axios from "@cutting-mat/axios";
const instance = axios.create();
```

3. Send get request (the only difference from Axios)

```js
// Original API
instance.get(url[, config])
// Expand to
instance.get(url[, config[, cacheConfig]])
```

## cacheConfig

- Enable caching

```js
instance.get(
  `/url`,
  { params: 1 },
  {
    cache: true,
  }
);
```

- Close and clear cache

```js
instance.get(
  `/url`,
  { params: 1 },
  {
    cache: false,
  }
);
// Equivalent to
instance.get(`/url`, { params: 1 });
```

- Update cache

```js
instance.get(
  `/url`,
  { params: 1 },
  {
    cache: "update",
  }
);
```

## Note

- Only ` instance.get() 'method takes effect. You must call 'create()' to create an instance before using it
- The default is to do anti-shake on concurrent requests, to force concurrency you need to set `cache: 'update'`

## License

MIT
