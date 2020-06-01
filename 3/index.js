const app = new Vue({
    el: '#app',
    data: {
        greeting: 'Hello world from Vue JS and JavaScript',
        counter: 0
    },
    methods: {

    },
    computed:{
        invertido() {
            return this.greeting.split('').reverse().join('');
        },
        color() {
            return {
                'bg-success' : this.counter <= 10,
                'bg-warning' : this.counter >10 && this.counter <= 20,
                'bg-danger' : this.counter >20 
                //&& this.counter <=30
            }
        }
    }
})