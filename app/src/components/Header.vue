<template>
    <div class="grid grid-cols-9 gap-4 mt-6">
        <div class="col-span-3 text-left ml-6">
            <button class="h-12 px-6 rounded-full nm-inset-gray-200 text-gray-600">
                <span class="uppercase font-bold tracking-widest">Albums</span>
            </button>
            <button class="ml-4 h-12 px-6 rounded-full nm-concave-gray-200-sm text-gray-600">
                <span class="uppercase font-bold tracking-widest">Photos</span>
            </button>
        </div>
        <div class="col-span-3 text-2xl font-bold leading-tight mb-4">
            <p>MY PHOTO ALBUM</p>
        </div>
        <div class="col-span-3 text-right mr-6">
            <div class="relative text-white focus-within:text-gray-400">
                <span class="absolute inset-y-2.5 inset-x-3">
                    <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                        <svg fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <input type="search" name="q" class="appearance-none rounded-full nm-inset-gray-200 leading-5 px-6 py-4 flex-grow sm:w-2/3" placeholder="Search..." autocomplete="off">
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