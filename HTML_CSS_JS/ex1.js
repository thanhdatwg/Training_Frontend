var input = new Vue({
    el: '#exercise',
    data: {
        name: 'ThanhDat',
        age: '21',
        number: '',
        link: 'https://fallbacks.carbonads.com/nosvn/fallbacks/731050e6bd3fc6979e1cb1a972294dae.png',
        message: ''
    },
    methods: {
        age_3(){
            return this.age*3;
        },
        numberRandom(){
            var x = Math.random()
            if (x < 1 && x > 0) {
                return x
            } 
        },
        Click(){
            return alert('Hoàn thành bài kiểm tra')
        }

    }

})
