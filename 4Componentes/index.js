Vue.component('saludo',{
    template://html 
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>Hello from a component of Vue</h3>
        <h3>Hello from other component of Vue JS</h4>
    </div>            
    
    `,
    data() {
        return {
            saludo: 'Hello world from Vue js'
        }
    }
});