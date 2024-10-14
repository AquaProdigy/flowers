<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {Link, useForm} from "@inertiajs/vue3";
import { reactive } from 'vue'

defineProps({
    categories: Object,
    errors: Object
})

const form = useForm({
    name: null,
    description: null,
    price: null,
    quantity: null,
    category_id: null,
    image_path: null,
})
function submit(){
    form.post(route('products.store'))
}

</script>
<script>

</script>
<template>
    <AdminLayout>
        <div class="flex flex-col gap-y-5 mt-3 mx-auto">
            <div>
                <select v-model="form.category_id" id="countries" class="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected :value="null">Выберите категорию</option>
                    <option v-for="category in categories" :value="category.id">{{ category.name}}</option>
                </select>
            </div>
            <form v-if="form.category_id" @submit.prevent="submit" class="flex flex-col items-center">
                <div class="upload_image w-2/5">
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" @input="form.image_path = $event.target.files[0]"/>
                        </label>
                    </div>
                </div>
                <div class="flex flex-col gap-y-5 w-2/5">
                    <div class="flex flex-col">
                        <label for="name">Название букета</label>
                        <input id="name" type="text" v-model="form.name">
                    </div>
                    <div class="flex flex-col">
                        <label for="description">Описание</label>
                        <textarea id="description" v-model="form.description"></textarea>
                    </div>
                    <div class="flex flex-col">
                        <label for="quantity">Колличество в наличии</label>
                        <input type="number" id="quantity" v-model="form.quantity">
                    </div>
                    <div class="flex flex-col">
                        <label for="price">Цена</label>
                        <input id="price" type="number" v-model="form.price" class="">
                    </div>
                </div>
                <button type="submit">Создать</button>

            </form>
        </div>
    </AdminLayout>
</template>

<style scoped>

</style>
