import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Axios from 'axios';

declare function require(moduleName: string): any;

export function generateNet(
    config: AxiosRequestConfig, 
    userInterceptors: (arg0: AxiosInstance) => AxiosInstance): AxiosInstance {
        
    let  net: AxiosInstance = axios.create(config);

    if (process.env.NODE_ENV === 'Mock') {
        const Mock = require('mockjs');
        let initMocks = require('../network/mock/index').initMocks;
        initMocks(Mock);
    }

    return userInterceptors(net);
}