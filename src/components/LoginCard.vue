<template lang="html">
<div class="bigcontainer">
    <sui-card class="centered">
      <sui-segment color="teal">
        <sui-label ribbon color="teal" style="position: absolute;  left: -3.5%; z-index: 0;">Login</sui-label>Login</sui-segment>
    <div class="container">
    <sui-form>
    <sui-form-field>
      <label>User Account</label>
      <input placeholder="User Account" v-model="username"/>
    </sui-form-field>
    <sui-form-field>
      <label>Password</label>
      <input placeholder="Password" type="password" v-model="password"/>
    </sui-form-field>
    <sui-button type="login" @click="login">Login</sui-button>
  </sui-form>
</div>
</sui-card>
</div>

  
</template>

<script>

// import Menu from '../components/Menu'

export default {
  name: 'LoginCard',
  data(){
    return{
      username:"",
      password:""
    }
  },

  methods:{
    //sprcific: id:bob , pw:1234
    login(){
      if(this.username == 'bob' && this.password == '1234'){
        this.$router.push({
          path:'/contact'
        })
      }
    }
  }
  // components:{
  //   Menu
  // }
}
</script>


<style scoped>

    .bigcontainer{
        width: 100%;
        text-align: center;
    }
    .centered{
        text-align: left;
        width: 30%;
    }
    .container{
        margin-left: 5%;
        margin-right: 5%;
        margin-bottom: 5%;
    }

</style>