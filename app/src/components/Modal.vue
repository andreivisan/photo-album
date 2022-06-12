<template>
    <div>
        <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" @click.self="closeModal"></div>
        
        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">     
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow">
                    <!-- HEADER -->
                    <div class="flex justify-center items-center p-4 rounded-t border-b dark:border-black">
                        <slot name="modal-title"></slot>
                    </div>

                    <!-- BODY -->
                    <div class="p-6 space-y-6">
                        <slot name="modal-content"></slot>
                    </div>

                    <!-- ACTIONS -->
                    <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <slot name="modal-actions"></slot>
                    </div>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>

</style>