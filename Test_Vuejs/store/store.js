import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      result: 2,
      value: "gia tri cua result : "
    }, 
    mutations:{
        incrementOp(state,n) {
            state.result += n 
        },
        // decrementOp(state,n) {
        //     state.result++
        // }
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

    },
    modules:{

    }
})