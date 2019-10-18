import { Module } from 'vuex'
import { GetterTree, ActionTree, MutationTree  } from 'vuex'
import axios, { AxiosPromise } from 'axios'
import { RootState, UserInfoState } from '../stateInterface';

const state: UserInfoState = {
    UserInfo: ''
}

const getters: GetterTree<UserInfoState, RootState> = {
    getUserInfo(state): string {
        return state.UserInfo;
    }
}

const actions: ActionTree<UserInfoState, RootState> = {
    fetchName({ commit }, id: number): AxiosPromise<UserInfoState> {
        console.log('action:', id)
        return axios.request({
            url: 'https://www.apiopen.top/satinCommentApi?id=27610708&page=1'
        }).then(res => {
            commit('setProfile', {});
            return res
        }).catch(err => {
            return err;
        })
    }
}

const mutations: MutationTree<UserInfoState> = {
    setProfile(state, payload: UserInfoState) {
        state.UserInfo = payload.UserInfo;
    }
}

const namespaced: boolean = true;

export const UserInfo: Module<UserInfoState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};