<template>
  <form class="bg-gray-200 px-8 pt-6 pb-8" @submit="handleSaveFolder">
    <div class="mb-4 flex flex-col sm:flex-row sm:items-center">
        <label class="uppercase font-bold text-sm tracking-widest mb-1 sm:mb-0 sm:mr-8 sm:w-1/3" for="folderName">
            Folder Name
        </label>
        <input v-model="name" class="appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow sm:w-2/3" id="folderName" type="text" placeholder="Folder Name" required>
    </div>
    <div class="mb-4 flex flex-col sm:flex-row sm:items-center">
        <label class="uppercase font-bold text-sm tracking-widest mb-1 sm:mb-0 sm:mr-8 sm:w-1/3" for="notes">
            Notes
        </label>
        <textarea v-model="notes" class="appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow sm:w-2/3" id="notes" />
    </div>
    <div class="mb-6 flex flex-col sm:flex-row sm:items-center">
        <label for="parentFolder" class="uppercase font-bold text-sm tracking-widest mb-1 sm:mb-0 sm:mr-8 sm:w-1/3">Parent folder</label>
        <div class="rounded-full nm-flat-gray-200 leading-5 flex-grow sm:w-2/3 relative">
            <select v-model="parent" id="parentFolder" class="appearance-none w-full px-8 py-4 bg-transparent font-semibold">
                <option selected>Parent Folder</option>
                <option  v-for="folder in folders" :key="folder.uuid" value="{{ folder.uuid }}">{{ folder.name }}</option>
            </select>

            <div class="absolute right-0 top-0 h-full pr-8 flex flex-col justify-center items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="fill-current">
                    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                    <path
                        d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"
                    />
              </svg>
            </div>
        </div>
    </div>
    <div class="mt-12 flex items-center justify-between">
        <button class="rounded-full nm-flat-gray-200 hover:nm-flat-gray-200 leading-5 px-8 py-4 uppercase font-bold tracking-widest transition duration-200 ease-in-out transform hover:scale-110" type="submit">
            Save
        </button>
        <button class="rounded-full nm-flat-gray-200 hover:nm-flat-gray-200 leading-5 px-8 py-4 uppercase font-bold tracking-widest transition duration-200 ease-in-out transform hover:scale-110" type="button" @click.self="closeModal">
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