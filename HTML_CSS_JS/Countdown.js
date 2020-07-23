var app = new Vue({
    el: '#app',
    data: {
        count: 0,
        x: 0,
        y: 0
    },
    methods: {
        handleClick(number){  //number là tham số đầu vào
            // console.log("click",this);
            this.count += number
        },
        handleMouse(e){ //e là sự kiên
            console.log(e);
            this.x = e.clientX
            this.y = e.clientY
        },
        handleSubmit(e){
            console.log(e);
            // e.preventDefault(); //click submit ko di chuyển đến trang khác 
        },
        handleMouseChild(e){
            console.log(e);
            // e.stopPropagation();
        }
    }
})