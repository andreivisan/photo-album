<template>
  <form class="bg-white px-8 pt-6 pb-8 mb-4" @submit="handleSaveFolder">
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="folderName">
            Folder Name
        </label>
        <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="folderName" type="text" placeholder="Folder Name" required>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="notes">
            Notes
        </label>
        <textarea v-model="notes" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="notes" />
    </div>
    <div class="mb-6">
        <label for="parentFolder" class="block text-gray-700 text-sm font-bold mb-2">Select a parent folder</label>
        <select v-model="parent" id="parentFolder" class="text-sm shadow border rounded w-full py-2 px-3 pl-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option selected>Parent Folder</option>
            <option  v-for="folder in folders" :key="folder.uuid" value="{{ folder.uuid }}">{{ folder.name }}</option>
        </select>
    </div>
    <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Save
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click.self="closeModal">
            Cancel
        </button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
    props: ['folders'],

    setup(props, { emit }) {
        const name = ref('')
        const notes = ref('')
        const parent = ref(null)

        const handleSaveFolder = async () => {
            const post = {
                name: name.value,
                notes: notes.value,
                parent: parent.value
            }

            await fetch('http://localhost:3000/folders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(post)
            }).then(resp => {
                emit('closeModal')
            }).catch(error => {
                console.log("Errors= " + error.message)
            })
        }

        return { name, notes, parent, handleSaveFolder }
    },

    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style>

</style>