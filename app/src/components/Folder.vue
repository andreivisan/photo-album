<template>
    <div class="space-x-8 my-8 flex items-center">
        <button class="w-20 h-20 flex justify-center items-center rounded-full nm-flat-gray-200-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path d="M6.083 4c1.38 1.612 2.578 3 4.917 3h11v13h-20v-16h4.083zm.917-2h-7v20h24v-17h-13c-1.629 0-2.305-1.058-4-3z"/>
            </svg>
        </button>
        <router-link :to="{ name: 'FolderDetails', params: { uuid: folder.uuid }}">
            <p class="text-xl leading-tight mb-4">{{ folder.name }}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['folder']
}
</script>

<style>

</style>