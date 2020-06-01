<template>
    <div>
        <h1>Forms</h1>
        <b-form >
            <b-row md="3">
                <b-col>
                    <b-form-input type="text" v-model="text" :state="comprobation"></b-form-input>
                    <small>Minimum 3 characters</small>
                    <p>Text {{text}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="select" :options="animals"></b-form-select>
                    <p>Selected: {{select}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animalsRadio"></b-form-radio-group>
                    <p>Selected: {{radio}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="animalsRadio"></b-form-checkbox-group>
                    <p>Selected: {{check}}</p>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data(){
        return{
            text: '',
            radio: null,
            select: null,
            check: [],
            radio: '',
            animals: [
                {value: null, text: 'Select a animal '},
                {value: 'perro', text: 'perr'},
                {value: 'gato', text: 'gato'},
                {value: 'pato', text: 'pato'},
            ],
            animalsRadio: [
                {value: 'perro', text: 'perr'},
                {value: 'gato', text: 'gato'},
                {value: 'pato', text: 'pato'},
            ]
        }
    },
    computed: {
        comprobation(){
            return this.text.length > 2 ? true : false
        }
    }
}
</script>