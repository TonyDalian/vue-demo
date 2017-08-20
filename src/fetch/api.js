import axios from 'axios'
import qs from 'qs'

//import * as _ from '../util/tool'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8000/';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
   //  _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
   // _.toast("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params) {
    if(params!=null){
          return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                   reject(error)
                })
            })
    }else{
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err);
                })
                .catch((error) => {
                   reject(error)
                })
            }).catch(function(err){
                   console.log(err);
            });
    }
   
}

export default {
    /**
     * 用户登录
     */
    Login(params) {
        return fetch('/users/api/userLogin', params)
    },
    
    /**
     * 用户注册
     */
    Regist(params) {
        return fetch('/users/api/userRegist', params)
    },

    /**
     * 获取用户信息
     */
    UserInfo(id) {
       
        return fetch('/api/persons/detail/'+id)
    
                // axios.get('http://127.0.0.1:8000/api/persons/detail/1').then((response) => {
                //    console.log(response.data);
                // }).catch(function (response) {
                //     console.log(response)
                // });
    },


}
