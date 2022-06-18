<template>
    <div class="ml-6">
        <div class="grid grid-cols-4 gap-4 mt-10">
            <div v-for="folder in folders" :key="folder.uuid">
                <div v-if="folder.parent == null">  
                    <Folder :folder="folder" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Folder from './Folder.vue'
    export default {
        props: ['folders'],
        components: { Folder }
    }
</script>

<style>

</style>