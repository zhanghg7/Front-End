import { AxiosInstance } from 'axios'

export const config = {
    baseURL: '//pan.baidu.com',
    timeout: 10000,
    withCredentials: false
};

export function userInterceptors(axios: AxiosInstance): AxiosInstance {
    // 添加请求拦截器
    axios.interceptors.request.use(
        config => {
            // 在发送请求之前做些什么
            return config;
        },
        error => {
            // 对请求错误做些什么
            return Promise.reject(error);
        }
    );
    // 添加响应拦截器
    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            // 对响应错误做点什么
            return Promise.reject(error.response);
        }
    );

    return axios;
}