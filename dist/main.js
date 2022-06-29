var $4vI1J$axios = require("axios");

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

$parcel$export(module.exports, "responseCache", () => $2448ed1f9f693dd4$export$b4c67320c85a8b9d);
$parcel$export(module.exports, "default", () => $2448ed1f9f693dd4$export$2e2bcd8739ae039);

// 原始 axios.create
const $2448ed1f9f693dd4$var$axiosCreate = ($parcel$interopDefault($4vI1J$axios)).create;
let $2448ed1f9f693dd4$export$b4c67320c85a8b9d = {
};
($parcel$interopDefault($4vI1J$axios)).create = function(config) {
    const instance = $2448ed1f9f693dd4$var$axiosCreate(config);
    const axiosGet = instance.get;
    // 替换实例的 get()
    instance.get = function(url1, params1, opt) {
        opt = Object.assign({
            cache: null
        }, opt || {
        });
        const paramsStr = Object.prototype.toString.call(params1) === "[object Object]" ? JSON.stringify(params1) : "";
        const requestKey = `${url1}?${paramsStr}`;
        const createPromise = function(url, params) {
            return axiosGet(url, params).then((res)=>{
                if (opt.cache === true || opt.cache === "update") $2448ed1f9f693dd4$export$b4c67320c85a8b9d[requestKey].status = "resolved";
                else delete $2448ed1f9f693dd4$export$b4c67320c85a8b9d[requestKey];
                return res;
            }).catch((err)=>{
                delete $2448ed1f9f693dd4$export$b4c67320c85a8b9d[requestKey];
                return err;
            });
        };
        if (!$2448ed1f9f693dd4$export$b4c67320c85a8b9d[requestKey] || $2448ed1f9f693dd4$export$b4c67320c85a8b9d[requestKey].status !== "pending" && opt.cache === "update" || opt.cache === false // 不需要缓存
        ) // console.log('创建缓存对象', requestKey)
        $2448ed1f9f693dd4$export$b4c67320c85a8b9d[requestKey] = {
            status: "pending",
            promise: createPromise(url1, params1)
        };
        return $2448ed1f9f693dd4$export$b4c67320c85a8b9d[requestKey].promise;
    };
    return instance;
};
var $2448ed1f9f693dd4$export$2e2bcd8739ae039 = ($parcel$interopDefault($4vI1J$axios));


//# sourceMappingURL=main.js.map
