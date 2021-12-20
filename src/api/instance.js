import axios from "axios";

// 配置当前axios实例配置项
const BASE_OPPTIOS={
    baseURL:"http://localhost:8001",
    timeout: 10000,
}
// 创建实例
const instance=axios.create(BASE_OPPTIOS)

// 请求拦截器
instance.interceptors.request.use((config)=>{
    return config
},error=>{
    return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.response.use((response)=>{
    return response
},(error)=>{
    return Promise.reject(error)
})
// 封装请求方式   GET，POST,PUT,DELETE
/**
 * @method GET请求
 * @param {String} URL      请求地址
 * @param {Object} params   url传递参数, 拼接在url之后
 */
 export const GET = (URL, params) => instance.get(URL, { params:params });
 /**
 * @method POST请求
 * @param {String} URL      请求地址
 * @param {Object} data     body传递参数
 * @param {Object} params   url传递参数, 拼接在url之后
 * @param {Object} config   请求配置信息
 */
export const POST = (URL, data, params, config) => instance.post(URL,data, { params, ...config });
/**
 * @method PUT请求
 * @param {String} URL      请求地址
 * @param {Object} data     body传递参数
 * @param {Object} params   url传递参数, 拼接在url之后
 */
 export const PUT = (URL, data, params) => instance.put(URL, data, { params });
 /**
  * @method DELETE请求
  * @param {String} URL      请求地址
  * @param {Object} data     body传递参数
  * @param {Object} params   url传递参数, 拼接在url之后
  */
 export const DELETE = (URL, data, params) => instance.delete(URL, { data: data, params });