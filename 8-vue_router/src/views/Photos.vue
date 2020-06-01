<template>
    <div>
        <h1>Galery of photos</h1>
        <router-link :to="{ name: 'Photos', params: {id : foto} }" v-for="(foto, index) of fotos" :key="index">
            <button>Photo {{foto}} </button>
        </router-link>
        <Photo/>
        <button @click="home">Home</button>
        <button @click="anterior">Anterior</button>
        <button @click="siguiente">Siguiente</button>
    </div>
</template>

<script>

import Photo from "@/components/Photo.vue"

export default {
    components:{
        Photo   
    },
    data(){
        return {
            fotos: [1,2,3,4]
        }
    },
    methods:{
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
            this.$router.go(+1)
        }
    }
    
}
</script>