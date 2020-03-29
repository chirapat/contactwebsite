<template>
  <div class="contact">
    <div class="menu">
      <Menu />
    </div>

      <sui-segment class="box" color="teal">
          &nbsp; &nbsp;
        <sui-input type="text" class="searchText" placeholder="Search Contact Name" v-model="search" icon="search icon"  />
          &nbsp;
          <sui-button class="addBtn" type="submit" color="teal" content="+ add contact" @click="AddBtn" />
      </sui-segment>

      <div class="box">
        <sui-segment class="contactBox">
          <sui-card-group :items-per-row="4" :key="Contacts">
            <div class="cardbox" v-for="contact in filterContacts" v-bind:key="contact._id">
                <Card :pic = "contact.imgURL"  :firstName ="contact.firstName" :lastName="contact.lastName" :number="contact.mobile" :email="contact.email" :fb="contact.facebook" :id="contact._id" /> 
            </div>
          </sui-card-group>
       
        </sui-segment>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card'
import Menu from  '../components/Menu'
import axios from 'axios'

export default {
  name: 'Contact',
  components:{
      Card,
      Menu
  },
  data(){
    return{
      Contacts: [],
      search: ''
    }
  },
  computed:{
    filterContacts: function(){
      return this.Contacts.filter((contact)=>{
        return contact.firstName.toLowerCase().match(this.search.toLowerCase()) || contact.lastName.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  mounted (){
    axios.get('http://localhost:3000/contacts')
    .then((response)=>{
      console.log(response.data)
      this.Contacts = response.data
    })
    .catch((error)=>{
      console.log(error)
    })
  },
  methods:{
    AddBtn(){
      this.$router.push('AddContact')
    }
  }
}
</script>

<style scoped>
  .box{
    margin: 5%;
    margin-top: 0%;
  }
  .cardbox{
    margin: 0.77%;
  }
  .contactBox{
    margin-top: 0%;
  }
  .addBtn{
    text-align: left;
  }
  /* .contactRibbon{
    position: relative;
  } */
  .searchText{
    width: 70%;
    margin-left: 0%;
  }

</style>