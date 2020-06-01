Vue.component('father', {
    template: 
    `
    <div class="p-5 bg-dark text-white">
        <h2>Component father: {{numberFather}}</h2>
        <button @click="numberFather++" class="btn btn-primary">+</button>
        <button @click="numberFather--" class="btn btn-danger">-</button>
        {{namefather}}
        <son :numero="numberFather" @nameson="namefather = $event"></son>
        
    </div>
    `,
    data(){
        return{
            numberFather: 0,
            namefather: ''
        }
    }
})

// 