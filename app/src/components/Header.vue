<template>
    <div class="grid grid-cols-9 gap-4 mt-6">
        <div class="col-span-4 text-left ml-6">
            <a href="" class="py-2 px-3 text-black border-b-4 border-black font-semibold ">Albums</a>
            <a href="" class="py-2 px-3 text-black font-semibold hover:text-gray-500 transition duration-300">All Photos</a>
        </div>
        <div class="bg-black text-white font-bold italic text-l p-2 rounded-md">
            <p>MY PHOTO ALBUM</p>
        </div>
        <div class="col-span-4 text-right mr-6">
            <div class="relative text-white focus-within:text-gray-400">
                <span class="absolute inset-y-0">
                    <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                        <svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <input type="search" name="q" class="py-2 text-sm text-white bg-black rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off">
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>