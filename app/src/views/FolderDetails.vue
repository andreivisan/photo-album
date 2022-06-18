<template>
    <div>
        <Header />    

        <div class="ml-6">
            <div class="grid grid-cols-4 gap-4 mt-10">
                <div v-for="subFolder in subFolders" :key="subFolder.uuid">
                    <Folder :folder="subFolder" />
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import getFolderChildren from '@/composables/getFolderChildren'

import Header from '../components/Header.vue'
import Folder from '../components/Folder.vue'

export default {
    props: ['uuid'],

    components: { Header, Folder },

    setup(props) {
        const { subFolders, error, load } = getFolderChildren(props.uuid)

        load()

        return { subFolders, error }
    }
}
</script>

<style>

</style>