import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    menuFlag: false
}

const getters = {
    menuFlag: state => state.menuFlag,
}

const actions = {
    // prompt({ commit, state }, result) {
    //     commit(types.RETURN_RESULT, result)
    // }
    toggleAction({ commit, state }) {
        commit('toggleTab')
    },
    show({ commit, state }) {
        commit('show')
    },
    hide({ commit, state }) {
        commit('hide')
    }
}

const mutations = {
    // [types.RETURN_RESULT]: (state, data) => {
    //     state.result = data
    // },
    // [types.REQUESTING]: (state, data) => {
    //     state.requesting = data
    // }
    toggleTab(state) {
        state.menuFlag = !state.menuFlag;
    },
    show(state) {
        state.menuFlag = true;
    },
    hide(state) {
        state.menuFlag = false;
    }
}

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    getters,
    actions,
    mutations,
})

export { store }