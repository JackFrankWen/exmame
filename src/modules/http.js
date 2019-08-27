/*
 * 通用请求方法
 * @Author: ray.pan 
 * @since: 2017-10-26 17:47:51 
 */

import axios from 'axios';

const instance = axios.create({
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


// Add a response interceptor
instance.interceptors.response.use(function (response) {
    const params = response.config.origin;
    if (response.code === 200 || response.data.code === 1 || response.data.code === 200) {
        console.log(response, 'response sucess')
        return response.data;
    } else {
        console.log(response, 'response fail')
        // 业务错误
        return Promise.reject(response.data);
    }
    
}, function (error) {
    // Http错误
    let response = error instanceof Error ? error.response || error : error;
    let result;
    
    if (response.data) {
        result = response.data;
    } else {
        result = {
            code: response.status || -1,
            msg: response.statusText || '网络异常，请求超时。请稍后再试'
        };
    }
    return Promise.reject(result);
});

const api = {
    request(opts){
        return instance.request(opts);
    },
    
    get(url, params, opts){
        opts = opts || {};
        opts.method = 'get';
        opts.url = url;
        if (params) {
            opts.params = params;
        }
        return this.request(opts);
    },
    
    delete(url, params, opts){
        opts = opts || {};
        opts.method = 'delete';
        opts.url = url;
        if (params) {
            opts.params = params;
        }
        return this.request(opts);
    },
    
    post(url, data, opts){
        opts = opts || {};
        opts.method = 'post';
        opts.url = url;
        if (data) {
            console.log(data)
            opts.data = data;
        }
        return this.request(opts);
    },
    
    put(url, data, opts){
        opts = opts || {};
        opts.method = 'put';
        opts.url = url;
        if (data) {
            opts.data = data;
        }
        return this.request(opts);
    },
    
    patch(url, data, opts){
        opts = opts || {};
        opts.method = 'patch';
        opts.url = url;
        if (data) {
            opts.data = data;
        }
        return this.request(opts);
    },
    
};

export default api;
