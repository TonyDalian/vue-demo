import * as types from '../types'

/**
 * App通用配置
 */
const state = {
    loading: false,
    leftNavStatus: false

}

const actions = {
  
    setLoadingState({ commit }, status) {
        commit(types.COM_LOADING_STATUS, status)
    },
    setNavState({ commit }, status) {
        commit(types.COM_NAV_STATUS, status)
    }

}

const getters = {
    loading: state => state.loading,
    showToast: state => state.showToast,
    showAlert: state => state.showAlert
}


const mutations = {
    [types.COM_LOADING_STATUS](state, status) {
        state.loading = status
    },

    [types.COM_NAV_STATUS](state, status) {
        state.leftNavStatus = status
    }
}


export default {
    state,
    actions,
    getters,
    mutations
}