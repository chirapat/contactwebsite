<template>
    <div class="card">
        <sui-card class="fluid">
            <!-- <div class="image">
                <img v-bind:src="getImgUrl(name)">
            </div> -->
            <!-- <sui-image v-bind:src="getImgUrl(pic)" width="318.58px" height="318.58px" /> -->
            <sui-image :src="pic" width="318.58px" height="318.58px" />
            <sui-card-content>
                <sui-card-header> {{firstName}}  {{lastName}} </sui-card-header>
                <!-- <sui-card-meta>Joined in 2013</sui-card-meta> -->
                <sui-card-description>Mobile: {{number}} </sui-card-description>
                <sui-card-description>Email: {{email}} </sui-card-description>
                <sui-card-description>Facebook: {{fb}} </sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
                <!-- <sui-icon name="user" />
                22 Friends -->
                <div>
                    <button class="ui blue icon button" @click="gotoEdit">
                        <i class="edit icon"></i>
                    </button>
                    <button class="ui red icon button" @click="deleteContact">
                        <i class="delete icon"></i>
                    </button>
                </div>
            </sui-card-content>
            <!-- <div class="ui small basic icon buttons"> -->


            <!-- </div> -->

        </sui-card>

    </div>
</template>

<script>

import axios from 'axios'

    export default {
        name: 'Card',
        props: {
            pic: String,
            firstName: String,
            lastName: String,
            number: String,
            email: String,
            fb: String,
            id: String
        },
        methods:{
            getImgUrl(pic) {
                var images = require.context('../assets/', false, /\.png$/)
                return images('./' + pic + ".png")
            },
            deleteContact(){

                axios.delete(`http://localhost:3000/contacts/${this.id}`)
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })

                window.location.reload()

            },
            gotoEdit(){
                this.$router.push({path: 'updatecontact/'+ this.id})
            }
        }
        
    }
</script>