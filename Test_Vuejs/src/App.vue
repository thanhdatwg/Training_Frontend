<template>
  <div id="app">
    <!-- <componentHeader v-on:getData="app=$event"/> -->
    <!-- <component-footer v-bind:title="msg"/> -->
    <!-- <Component-listUser v-bind:listUser="listUser"/> -->
    <!-- <h1>{{app}}</h1> -->
    <h1>{{result}}</h1>
    <h2>{{value}}</h2>
    <h1>{{tenResult}}</h1>
    <h1>{{nameResult}}</h1>
    <hr>
    <h1>{{incrementComputed}}</h1>
    <button @click="increment">Increase</button>
    

  </div>
</template>

<script>
import ComponentHeader from './components/ComponentHeader.vue'
import ComponentFooter from './components/CompFooter.vue'
import ComponentListUser from './components/ListUser.vue'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      listUser: [
        {id:1, name:"Jame", email:"thanhdatwgmail.com"},
        {id:2, name: "scarll", email:"scarllwgmail.com"},
        {id:3, name: "lisso", email:"lissowgmail.com"},
        {id:4, name: "lisso1111", email:"lisso1111gmai.com"},
        {id:5, name: "lisso2222", email:"lisso2222gmai.com"},
        {id:6, name: "lisso3333", email:"lisso3333gmai.com"}
      ],
      app: ''
    }
  },
  components: {
    ComponentHeader, 
    ComponentFooter,
    ComponentListUser
  },
  computed: {
    ...mapState(["result","value"]),
    ...mapGetters(["tenResult", "nameResult"]),
    incrementComputed(){
      return this.result+20
    }
    // decrement(){
    //   return this.$store.commit('decrementOp')
    // }

  },
  methods: {
    increment(){
      this.$store.commit('incrementOp', 10)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  font-size : 30px;
}
/* .container {} */
</style>
