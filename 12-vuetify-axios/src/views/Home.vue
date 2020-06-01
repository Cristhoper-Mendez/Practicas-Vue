<template>
    <div>
        <v-row :wrap="true">
            <v-col  xs="12">
                <v-card>
                    <v-date-picker v-model="fecha" 
                    full-width="" :locale="es" :min="minimo" :max="max" @change="getDollar(fecha)"
                    ></v-date-picker>
                </v-card>
                <v-card color="error" dark="">
                    <v-card-text class="display-1 text-center">
                        {{valor}} 
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        
    </div>
</template>

<script>

import { mapMutations } from "vuex";

import axios from "axios";

export default {
    name: 'Home',
    data(){
        return{
            fecha: new Date().toISOString().substr(0, 10),
            minimo: '1984',
            max: new Date().toISOString().substr(0, 10),
            es: 'es',
            valor: null
        }
    },
    methods:{
        ...mapMutations(['mostrarLoading', 'ocultarLoading']),

        async getDollar(dia){
            let arrayFecha = dia.split(['-'])
            let dmy = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0]

            try {
                this.mostrarLoading({titulo:'Accediendo a la informacion'})
                let datas = await axios.get(`https://mindicador.cl/api/dolar/${dmy}`)

                if(datas.data.serie.length > 0) {
                    this.valor = await datas.data.serie[0].valor
                } else {
                    this.valor = 'Not found'
                }
            } catch (error) {
                //console.log(error)
            }
            finally{
                this.ocultarLoading()
            }
        }
    },
    created(){
        this.getDollar(this.fecha)
    }
}
</script>