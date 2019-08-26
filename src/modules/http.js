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
//export const ProductResource = (method, path = 'admin/product', id, data) => {
//    return instance[method](path + (id ? ('/' + id) : ''), data)
//}

/*
 POST admin/product 新增商品
 GET admin/product/list 商品列表
 POST admin/product/opening 商品上架
 GET admin/product/{id} 获取商品信息
 POST admin/product/{id} 修改商品
 
 POST admin/product/{buyType}/finished/{id} 商城商品下架
 POST admin/product/{buyType}/info/{id} 修改商城商品图文信息
 GET admin/product/{buyType}/list 商城商品列表
 POST admin/product/{buyType}/trade/{id} 修改商城商品交易属性
 
 
 axios.request(config)                 vue.http(config)                      api.request(config)
 axios.get(url[, config])              vue.get(url, [params], [config])      api.get(url, [params], [config])
 axios.delete(url[, config])           vue.delete(url, [params], [config])   api.delete(url, [params], [config])
 axios.post(url[, data[, config]])     vue.post(url, [data], [config])       api.post(url, [data], [config])
 axios.put(url[, data[, config]])      vue.put(url, [data], [config])        api.put(url, [data], [config])
 axios.patch(url[, data[, config]])    vue.patch(url, [data], [config])      api.patch(url, [data], [config])
 
 
 
 
 resource
 resource(url, [params], [actions], [options])
 get: {method: 'GET'},
 save: {method: 'POST'},
 query: {method: 'GET'},
 update: {method: 'PUT'},
 remove: {method: 'DELETE'},
 delete: {method: 'DELETE'}
 
 export const CommentResource = Vue.resource(API_ROOT + 'comment{/id}{/controller}')
 CommentResource.get({id: id, controller: 'getFrontCommentList'})
 CommentResource.save({id: 'addNewComment'}, data)
 CommentResource.save({id: id, controller: 'addNewReply'}, data)
 CommentResource.remove({id: id})
 CommentResource.update({id: id, controller: 'delReply'}, data)
 
 
 */
