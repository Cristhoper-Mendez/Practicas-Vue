const app = new Vue ({
    el: '#app',
    data: {
        title: 'Hello world with Vue',
        marcas: ['Sony', 'Lagsung', 'Xiaomi', 'Apple iPhone', 'Google Pixel'],
        modelos: [
            {marca: 'Sony', modelo: 'Xperia XZ4', stock: 12},
            {marca: 'Lagsung', modelo: 'Galaxy S20', stock: 0},
            {marca: 'Xiaomi', modelo: 'Redmi K30', stock: 8},
            {marca: 'Apple iPhone', modelo: '11 Pro Max Super Ultra', stock: 4},
            {marca: 'Google Pixel', modelo: '4 XL', stock: 4}
        ],
        newcel: '',
        total: 0
    },
    methods:{
        addnewcel () {
            this.modelos.push({
                marca: this.newcel, modelo: 'sample', stock: 0
            });
            this.newcel = ''
        }
    },
    computed: {
        suma() {
            this.total = 0;
            for(modelo of this.modelos){
                this.total = this.total + modelo.stock;
            }
            return this.total;
        }
    }
    
})