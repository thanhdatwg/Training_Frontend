var app1 = new Vue({
  el: '#app_1',
  data: {
      seen: true//false
  }
})

var app2 = new Vue({
  el: '#app_2',
  data: {
      todos: [
          {text: 'JS'},
          {text: 'Vue'},
          {text: 'Rect'}
      ]
  }
})

var app3 = new Vue({
  el: '#app_3',
  data: {
      message: "hello . how are you ?"
  },
  methods: {
      Click_function() {
        this.message = this.message.split(' ').reverse().join(' ')
      }
  }

})

var app4 = new Vue({
  el: '#app_4',
  data: {
    message: 'hello'
  }
})

Vue.component('button-counter',{
  data: function(){
      return {
        count: 0
      }
  },
  template: '<button v-on:click="count++"> Ban da click dc {{count}} </button>'
})
new Vue({
  el: '#component'
})

var app_5 = new Vue({
  el: '#app_5',
  data: {
    isActive: true
  }
})

Vue.component('my-component',{
  template: '<p class="abc"  v-bind:class="{active: isActive}"></p>',
  data: function(){
    return {
      isActive: true
    }
  }
})
new Vue({
  el: '#app_6'
})

Vue.component('style-component',{
  template: '<h1 v-bind:style="{color: activeColor}">{{message}}</h1>',
  data: function(){
    return{
      activeColor: 'red',
      message: 'kkkkkk'
    }
  }

})
new Vue({
  el: '#app_7'
})

var app8 = new Vue({
  el: '#app_8',
  data: {
    message: true
  }
})

var app9 = new Vue({
  el: '#app_9',
  data: {
    items: [
      {id: 20176714 , age: 18},
      {id: 20176869 , age: 19},
      {id: 20176996 , age: 20}
    ]
  }
})

var app10 = new Vue({
  el: '#exercise',
  data: {
    message: true
  },
  methods: {
  	Click2_function(){
      this.message = !this.message
    }
  }
})


var app11 = new Vue({
  el: '#exercise1',
  data: {
    value: 0
  },
  methods: {
      click_function() {
      
      this.value = this.value+=1
    }
  }
})

Vue.component('exercise',{
  template: '<h1>{{message}}</h1>',
  data: function(){
    return{
      message: "Bài tập về component"
    }
  }
})
new Vue({
  el: '#app_12'
})

var app_13 = new Vue({
  el: '#checkbox',
  data: {
    checked: true
  }
})