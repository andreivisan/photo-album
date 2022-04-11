<template>
  <div class="home">
    <Header />
    <Folders />
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import Folders from '../components/Folders.vue'

  export default {
    name: 'Home',
    components: { Header, Folders }
  }
</script>
