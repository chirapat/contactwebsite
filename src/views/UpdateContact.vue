<template>
    <div>
        <div>
            <Menu />
        </div>
        <div>
            <sui-segment class="segment">
        <sui-form>
            <sui-header dividing>Contact</sui-header>

            <sui-form-field>
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="First Name" v-model="Contacts.firstName"/>
            </sui-form-field>


            <sui-form-field>
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Last Name" v-model="Contacts.lastName"/>
            </sui-form-field>


            <sui-form-field>
                <label>Mobile No.</label>
                <input type="text" name="mobileNo" placeholder="Mobile No." v-model="Contacts.mobile"/>
            </sui-form-field>

            <sui-form-field>
                <label>Email</label>
                <input type="text" name="email" placeholder="Email" v-model="Contacts.email"/>
            </sui-form-field>

            <sui-form-field>
                <label>Facebook</label>
                <input type="text" name="fbLink" placeholder="Facebook URL" v-model="Contacts.facebook" />
            </sui-form-field>

            <sui-form-field>
                <label>Image URL</label>
                <input type="text" name="imgURL" placeholder="Image URL" v-model="Contacts.imgURL"/>
            </sui-form-field>

            <sui-header dividing></sui-header>
            <div class="buttons">
            <sui-button-group class="buttons">
                <sui-button color="blue" content="Save" basic icon="save icon" @click="updateToAPI" />
                <sui-button color="blue" content="Close" basic icon="close icon red" @click="closePage"/>
            </sui-button-group>
            </div>

        </sui-form>
    </sui-segment>
        </div>

    </div>

</template>


<script>

import ContactForm from '../components/ContactForm'
import Menu from '../components/Menu'
import axios from 'axios'

export default {
    name: 'AddContact',
    components:{
        ContactForm,
        Menu
    },
            data(){
                return{
                    Contacts: []
                }
        },
         mounted (){

             console.log("ID here: "+ this.$route.params.id)
            axios.get('http://localhost:3000/contacts/' + this.$route.params.id)
            .then((response)=>{
            console.log(response.data)
            this.Contacts = response.data
            })
            .catch((error)=>{
            console.log(error)
            })
        },
        methods:{
            updateToAPI(){
                var newContact = {
                    id: this.$route.params.id,
                    firstName: this.Contacts.firstName,
                    lastName: this.Contacts.lastName,
                    mobile: this.Contacts.mobile,
                    email: this.Contacts.email,
                    facebook: this.Contacts.facebook,
                    imgURL: this.Contacts.imgURL
                }

                console.log(newContact)

                axios.put('http://localhost:3000/contacts/update', newContact)
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })
                
                this.closePage()
            },
            closePage(){
                this.$router.push({path: '/contact'})
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