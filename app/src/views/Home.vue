<template>
  <div class="home">
    <Header />
    <div v-if="folders.length">
      <Folders :folders="folders"/>
    </div>
  </div>
</template>

<script>
import getFolders from '@/composables/getFolders'

import Header from '../components/Header.vue'
import Folders from '../components/Folders.vue'

export default {
  name: 'Home',
  components: { Header, Folders },

  setup() {
    const {folders, error, load} = getFolders()

    load()

    return { folders, error }
  }
}
</script>
