<template>
    <sui-segment class="segment">
        <sui-form>
            <sui-header dividing>Contact</sui-header>

            <sui-form-field>
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="First Name" v-model="firstName"/>
            </sui-form-field>


            <sui-form-field>
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" v-model="lastName"/>
            </sui-form-field>


            <sui-form-field>
                <label>Mobile No.</label>
                <input type="text" name="mobileNo" placeholder="Mobile No." v-model="number"/>
            </sui-form-field>

            <sui-form-field>
                <label>Email</label>
                <input type="text" name="email" placeholder="Email" v-model="email"/>
            </sui-form-field>

            <sui-form-field>
                <label>Facebook</label>
                <input type="text" name="fbLink" placeholder="Facebook URL" v-model="facebook" />
            </sui-form-field>

            <sui-form-field>
                <label>Image URL</label>
                <input type="text" name="imgURL" placeholder="Image URL" v-model="imgURL"/>
            </sui-form-field>

            <sui-header dividing></sui-header>
            <div class="buttons">
            <sui-button-group class="buttons">
                <sui-button color="blue" content="Save" basic icon="save icon" @click="addToAPI" />
                <sui-button color="blue" content="Close" basic icon="close icon red"/>
            </sui-button-group>
            </div>

        </sui-form>
    </sui-segment>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'ContactForm',
        props: {

        },
        data(){
            return{
                imgURL: '',
                firstName: '',
                lastName: '',
                number: '',
                email: '',
                facebook: ''
            }
        },
        methods:{
            addToAPI(){
                var newContact = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    number: this.number,
                    email: this.email,
                    facebook: this.facebook,
                    imgURL: this,imgURL
                }

                axios.post('http://localhost:3000/contacts', newContact)
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })

            }
        }
        
    }
</script>

<style scoped>
    .segment {
        margin: 25%;
        width: 50%;
        text-align: left;
    }
    
    .buttons{
        text-align: center;
    }
</style>