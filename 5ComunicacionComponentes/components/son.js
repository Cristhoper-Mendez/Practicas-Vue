Vue.component('son', {
    template:
    `
    <div class="bg-success py-5" >
        <h4>Component son: {{numero}}</h4>
        <h4>Name: {{name}}</h4>
    </div>
    `,
    props: ['numero'],
    data () {
        return {
            name: 'Alex'
        }
    },
    mounted() {
        this.$emit('nameson',this.name);
    },
})