Vue.component('blog-post',{
    props: ['title'],
    template: "<h1>{{title}}</h1>"
})
new Vue({
    el: '#app'
})

// API
axios.get('http://5d6e3cc8777f67001403658b.mockapi.io/list_user')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function(){
   console.log('end');
   })



//   axios.post('http://5d6e3cc8777f67001403658b.mockapi.io/list_user', {
//     id: 1999,
//     createdAt: '2020-02-12T12:52:05.400Z',
//     name: 'thanhdat'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   axios.interceptors.request.use(function (config) {
//     NProgress.start();
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });
  
//   axios.interceptors.response.use(function (response) {
//       NProgress.done();
//       return response;
//   }, function (error) {
//       return Promise.reject(error);
//   });