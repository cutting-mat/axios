import $ajI3w$axios from "axios";


// 原始 axios.create
const $926ded21fece3cd3$var$axiosCreate = $ajI3w$axios.create;
let $926ded21fece3cd3$export$b4c67320c85a8b9d = {
};
$ajI3w$axios.create = function(config) {
    const instance = $926ded21fece3cd3$var$axiosCreate(config);
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
                if (opt.cache === true || opt.cache === "update") $926ded21fece3cd3$export$b4c67320c85a8b9d[requestKey].status = "resolved";
                else delete $926ded21fece3cd3$export$b4c67320c85a8b9d[requestKey];
                return res;
            }).catch((err)=>{
                delete $926ded21fece3cd3$export$b4c67320c85a8b9d[requestKey];
                return err;
            });
        };
        if (!$926ded21fece3cd3$export$b4c67320c85a8b9d[requestKey] || $926ded21fece3cd3$export$b4c67320c85a8b9d[requestKey].status !== "pending" && opt.cache === "update" || opt.cache === false // 不需要缓存
        ) // console.log('创建缓存对象', requestKey)
        $926ded21fece3cd3$export$b4c67320c85a8b9d[requestKey] = {
            status: "pending",
            promise: createPromise(url1, params1)
        };
        return $926ded21fece3cd3$export$b4c67320c85a8b9d[requestKey].promise;
    };
    return instance;
};
var $926ded21fece3cd3$export$2e2bcd8739ae039 = $ajI3w$axios;


export {$926ded21fece3cd3$export$b4c67320c85a8b9d as responseCache, $926ded21fece3cd3$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
