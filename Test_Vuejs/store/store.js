import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      result: 2,
      value: "gia tri cua result : "
    }, 
    mutations:{
        incrementOp(state) {
            state.result += 2
        },
        decrementOp(state) {
            state.result -= 2
        }

    },
    getters:{ 
        tenResult: state => {
            return state.result*10
        },
        nameResult: state => {
            return state.value + state.result
        }
    },
    actions:{
        increment: ({commit}) => {
            setTimeout(() => {
                commit('incrementOp')
            },2000)
           
        },
        decrement: ({commit}) => {
            commit('decrementOp')
        }
    },
    
    modules:{

    }
})