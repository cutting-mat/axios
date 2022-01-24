import $k3WXp$axios from "axios";


const $50161b2200a8afdd$var$axiosCreate = $k3WXp$axios.create;
let $50161b2200a8afdd$var$axiosGet;
// 请求缓存对象
let $50161b2200a8afdd$var$responseCache = {
};
$k3WXp$axios.create = function(config) {
    let instance = $50161b2200a8afdd$var$axiosCreate(config);
    $50161b2200a8afdd$var$axiosGet = instance.get;
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
            if (!$50161b2200a8afdd$var$responseCache[requestKey]) {
                console.log('cache-axios create cache:', requestKey);
                $50161b2200a8afdd$var$responseCache[requestKey] = $50161b2200a8afdd$var$axiosGet(url, params);
                $50161b2200a8afdd$var$responseCache[requestKey].catch(()=>{
                    delete $50161b2200a8afdd$var$responseCache[requestKey];
                });
            } else console.log('cache-axios use cache:', requestKey);
            return $50161b2200a8afdd$var$responseCache[requestKey];
        } else {
            if ($50161b2200a8afdd$var$responseCache[requestKey]) {
                console.log('cache-axios clear cache:', requestKey);
                delete $50161b2200a8afdd$var$responseCache[requestKey];
            }
            return $50161b2200a8afdd$var$axiosGet(url, params);
        }
    };
    return instance;
};
var $50161b2200a8afdd$export$2e2bcd8739ae039 = $k3WXp$axios;


export {$50161b2200a8afdd$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
