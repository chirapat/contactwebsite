<template>
  <!-- <div>
    <sui-menu attached="top">
      <sui-menu-item left>
        <sui-image src="pic" size="mini" />
      </sui-menu-item>

      <sui-menu-menu position="right">
        <sui-menu-item right>
          <sui-input transparent icon="search" placeholder="Search..." />
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu> 
  </div> -->
  <!-- <div> -->
    <div class="ui inverted top fixed large menu">
      <div class="item">
        <img src="../assets/logo.png">
      </div>
      <a class="item">Contacts</a>
      <div class="right menu">
      <a class="item">
        <i class="user icon"></i>  
       </a>
    </div>
    </div>
    
  <!-- </div> -->
</template>

<script>
  export default {
    name: 'Menu',
    // props:{
    //   pic: String
    // }
  }
</script>