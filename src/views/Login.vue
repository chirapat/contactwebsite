<template>
  <div>
    <div>
      <Menu />
    </div>
  <div class="log">
    <LoginCard />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginCard from '../components/LoginCard'
import Menu from '../components/Menu'

export default {
  name: 'Contact',
  components:{
      LoginCard,
      Menu
  }
}
</script>