import qs from 'qs';

import {generateNet} from '@/util/net-util';
import {config, userInterceptors} from '@/network/conf/api-config';
import { AxiosPromise, AxiosResponse, AxiosInstance } from 'axios';

const net: AxiosInstance = generateNet(config, userInterceptors);

const API_GET_USER_INFO: string = '';

export const getUserInfo = (): AxiosPromise<AxiosResponse> => net.get(API_GET_USER_INFO);