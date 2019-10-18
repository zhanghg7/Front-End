import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState, UserInfoState } from './stateInterface';

import modules from './modules'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    state: {
        version: 'v1.0.0'
    },
    modules,
    strict: process.env.NODE_ENV !== 'production'
  }

export default new Vuex.Store<RootState>(store);