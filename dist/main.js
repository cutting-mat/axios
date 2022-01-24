var $36uui$axios = require("axios");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $9a83dbdbbd2c6ea2$export$2e2bcd8739ae039);

const $9a83dbdbbd2c6ea2$var$axiosCreate = ($parcel$interopDefault($36uui$axios)).create;
let $9a83dbdbbd2c6ea2$var$axiosGet;
// 请求缓存对象
let $9a83dbdbbd2c6ea2$var$responseCache = {
};
($parcel$interopDefault($36uui$axios)).create = function(config) {
    let instance = $9a83dbdbbd2c6ea2$var$axiosCreate(config);
    $9a83dbdbbd2c6ea2$var$axiosGet = instance.get;
    instance.get = function(url, params, opt) {
        /**
         * get请求缓存功能
         * @param url[String] 请求地址
         * @param params[Object] 请求参数
         * @param opt[Object] 扩展配置，默认值{cache: true}
         * @return [Promise] 请求Promse
         * */ opt = Object.assign({
            cache: false
        }, opt || {
        });
        let paramsStr = Object.prototype.toString.call(params) === '[object Object]' ? JSON.stringify(params) : '';
        let requestKey = `request_${url}?${paramsStr}`;
        if (opt.cache) {
            if (!$9a83dbdbbd2c6ea2$var$responseCache[requestKey]) {
                console.log('cache-axios create cache:', requestKey);
                $9a83dbdbbd2c6ea2$var$responseCache[requestKey] = $9a83dbdbbd2c6ea2$var$axiosGet(url, params);
                $9a83dbdbbd2c6ea2$var$responseCache[requestKey].catch(()=>{
                    delete $9a83dbdbbd2c6ea2$var$responseCache[requestKey];
                });
            } else console.log('cache-axios use cache:', requestKey);
            return $9a83dbdbbd2c6ea2$var$responseCache[requestKey];
        } else {
            if ($9a83dbdbbd2c6ea2$var$responseCache[requestKey]) {
                console.log('cache-axios clear cache:', requestKey);
                delete $9a83dbdbbd2c6ea2$var$responseCache[requestKey];
            }
            return $9a83dbdbbd2c6ea2$var$axiosGet(url, params);
        }
    };
    return instance;
};
var $9a83dbdbbd2c6ea2$export$2e2bcd8739ae039 = ($parcel$interopDefault($36uui$axios));


//# sourceMappingURL=main.js.map
