<template>
    <v-row  justify="center">
        <v-col sm="6">
            <v-card class="text-center">
                <v-card-text >
                    <v-list-item-avatar >
                        <v-img :src="user.photo" ></v-img>
                    </v-list-item-avatar>
                </v-card-text>
                <v-card-text>
                    <h3 class="black--text">{{user.name}}</h3>
                </v-card-text>
                <v-card-text>
                    <input type="file" ref="imageFile" class="d-none" @change="searchImage($event)">
                    <v-btn color="primary" @click="$refs.imageFile.click()">Search image</v-btn>
                    <v-btn color="secondary" :disabled="file === null" @click="uploadImg()" :loading="loading">Upload image</v-btn>
                </v-card-text>
                <v-card-text v-if="file">
                    <h3>{{file.name}}</h3>
                    <v-img :src="urlImg"></v-img>
                </v-card-text>
                <v-card-text v-if="err">
                    <h4>{{err}}</h4>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex";
import { db, auth, storage, firebase } from "@/firebase";

export default {
    name: 'Admin',
    data(){
        return{
            file: null,
            urlImg: '',
            loading: false,
            err: null
        }
    },
    computed: {
        ...mapState(['user'])
    },
    methods:{
        searchImage(event){
            console.log(event.target.files[0]);
            
            const typeFile = event.target.files[0].type
            if(typeFile === 'image/jpeg' || typeFile === 'image/png'){
                this.file = event.target.files[0]
                this.err = null
            } else {
                this.err = 'Invalid file'
                this.file = null
                return
            }


            const reader = new FileReader();
            reader.readAsDataURL(this.file)
            reader.onload = (e) => {
                // console.log(e.target.result);
                this.urlImg = e.target.result
            }
        },
        async uploadImg(){
            try {
                this.loading = true
               //uploading img
               const refImg = storage.ref().child(this.user.email).child('profile photo')
               //processing img and waiting res
               const res = await refImg.put(this.file)
               console.log(res) 
               //change igm profile
               const url = await refImg.getDownloadURL()
               this.user.photo = url
               await db.collection('users').doc(this.user.uid).update({
                   photo: url
               })
               this.err = 'Image uploaded'
               this.file = null
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false
            }
        }
    }
}
</script>