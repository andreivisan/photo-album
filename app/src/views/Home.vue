<template>
  <div class="home">
    <Header />
    <div class="ml-6 mt-20 space-x-8 my-8 flex" @click="openModal">
        <button class="w-20 h-20 flex justify-center items-center rounded-full add-folder"><!-- nm-convex-gray-200-xs -->
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path d="M24 17h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2zm-10 5h-14v-20h7c1.695 1.942 2.371 3 4 3h13v7h-2v-5h-11c-2.34 0-3.537-1.388-4.916-3h-4.084v16h12v2z"/>
            s</svg>
        </button>
    </div>
   
    <teleport to=".modals" v-if="showModal">
      <Modal @close="closeModal">
        <template v-slot:modal-title>
          <div class="text-2xl font-bold leading-tight mb-4">
            ADD FOLDER
          </div>
        </template>
        <template v-slot:modal-content>
          <AddFolderForm :folders="folders" @closeModal="closeModal"/>
        </template>
      </Modal>
    </teleport>
    <div v-if="folders.length">
      <Folders :folders="folders"/>
    </div>
  </div>
</template>

<script>
import getFolders from '@/composables/getFolders'

import Header from '../components/Header.vue'
import Folders from '../components/Folders.vue'
import Modal from '@/components/Modal.vue'
import AddFolderForm from '@/components/AddFolderForm.vue'

export default {
  name: 'Home',
  components: { Header, Folders, Modal, AddFolderForm },

  setup() {
    const {folders, error, load} = getFolders()

    load()

    return { folders, error }
  },

  data() {
    return {
      showModal: false
    }
  },

  methods: {
    openModal() {
      this.showModal = true
    },

    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
  .add-folder {
    border-radius: 110px;
    background: linear-gradient(315deg, #f5f7fb, #ced0d4);
    box-shadow:  -15px -15px 30px #ced0d4,
                15px 15px 30px #fcfeff;
  }
</style>
