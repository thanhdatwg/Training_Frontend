// <!-- định nghĩa 1 component với tên là "button-counter" -->
// Component là các đối tượng vue có thể sd lại đc và ở đấy đối tượng đó là button-counter. chúng ta có thể sd component này như là 1 phần tử bên trong đối tượng Vue được khởi tạo bởi new Vue (có id là app)
// vì là những đối tượng Vue có thể tái sử dụng đc bao nhiêu lần tuỳ ý nên component cũng nhận các tuỳ chọn như instance đó là : data , computed , watch, methods & các hook vòng đời . 

// #data : phải là 1 hàm 


//======================Tổ chức component============================

//một ứng dụng thường được tổ chức dưới dạng một cây component lồng nhau 
// Có 2 cách đăng ký component : toàn cục & cục bộ  (Vd dưới là toàn cục với vue.component)

Vue.component('button-counter',{
    template: '<button v-on:click="count++">Bạn đã click lần thứ {{count}}</button>' ,
    data: function(){
        return {
            count: 0
        }
    }
})
new Vue({
    el: '#app'
})

//========================= Truyền dữ liệu xuống Component con bằng prop ================

//Prop : là các thuộc tính tuỳ chỉnh mà có thể đăng ký trên component.Khi một giá trị được truyền vào một prop, nó trở thành một “property” của đối tượng component đó.
//Một component có thể có bao nhiêu prop tùy ý, và prop có thể nhận bất kì giá trị gì, chúng ta có thể truy xuất đến giá trị của prop , giống như trong data ở instance
Vue.component('blog-title',{
    props: ['title'],
    template: '<h3>{{title}}</h3>'
})

new Vue ({
    el: '#app_2'
})

// Trong một ví dụ điển hình , sẽ có một mảng bài viết ở trong data

Vue.component('blog-post',{
    props: ['id','title'],
    template: '<h3>{{id}} - {{title}}</h3>'
})
new Vue({
    el: '#app_3',
    data: {
        posts: [
            {id:1, title:'thí sinh số 1', content:"ldkasjdkasjdkasjd"},
            {id:2, title:'thí sinh số 2', content:"lsssssss" },
            {id:3, title:'thí sinh số 3', content:"ssssssss"}
        ],
        postFontSize: 1
    }
})

//=============== Gửi thông tin đến đối tượng cha bằng sự kiện =============

// Khi xây dựng component <blog-post> , một số tính năng cần có thể giao tiếp ngược lên đối tượng cha . 

Vue.component('blog-post-2', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text', 10)"> 
          Phóng to
        </button>
        <div v-html="post.content"></div>
      </div>
    `
  })
  // Để phát ra (emit) một sự kiện, chúng ta có thể gọi phương thức $emit cho sẵn và truyền vào tên của sự kiện
  //Sau đó trong component <blog-post>, chúng ta có thể lắng nghe sự kiện này bằng v-on giống như với các sự kiện DOM:

  new Vue({
    el: '#app_4',
    data: {
        posts: [
            {id:1, title:'Title 1', content:"Content1"},
            {id:2, title:'Title 2', content:"Content2"},
            {id:3, title:'Title 3', content:"Content3"}
        ],
        postFontSize: 15
    }
})

//======================================Sử dụng v-model với component====================

// v-model = v-bind:value + v-on:input

//=================================Phân phối nội dung với slot===========================
//chỉ cần thêm <slot> vào nơi cần thể hiện nội dung => có thể truyền nội dung vào một component
Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Lỗi!</strong>
        <slot></slot>
      </div>
    `
  })
new Vue({
    el: '#app_5'
})

//=================================== Component Động ====================================

Vue.component('tab-home',{
    template: '<div>Component Trang chủ</div>'
})
Vue.component('tab-posts',{
    template: '<div>Component Bài Viết</div>'
})
Vue.component('tab-archive',{
    template: '<div>Component Lưu Trữ</div>'
})

new Vue({
    el: '#dynamic-component-demo',
    data:{
        currentTabKey: 'home',
        tabs: [
            { key: 'home', label: 'Trang chủ' },
            { key: 'posts', label: 'Bài viết' },
            { key: 'archive', label: 'Lưu trữ' }
    ]
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTabKey.toLowerCase()
          }
    }
})

//=============================================================

var ComponentA = {
    template: '<h1>Component A</h1>'
}
var ComponentB = {
    template: '<h1>Component B</h>'
}
new Vue({
    el: 'app_6',
    components: {
        'component-a': ComponentA,
        'component-b': ComponentB
    }
})