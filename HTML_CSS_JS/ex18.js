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
  
