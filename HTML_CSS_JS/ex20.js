Vue.component('blog-post',{
    props: ['title'],
    template: "<h1>{{title}}</h1>"
})
new Vue({
    el: '#app'
})