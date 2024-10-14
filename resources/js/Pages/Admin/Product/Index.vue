<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {Link} from "@inertiajs/vue3";
defineProps({
    data: Object
})
</script>

<template>
<AdminLayout>
    <div class="flex flex-col justify-center text-center gap-y-5 mt-3">
        <Link :href="route('products.create')" class="">Создать карточку товара</Link>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Quantity
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Updated
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Image
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Edit
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Delete
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="flower in data" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{flower.name}}
                    </th>
                    <td class="px-6 py-4">
                        {{ flower.description.slice(0, 100)}}
                    </td>
                    <td class="px-6 py-4">
                        {{ flower.category.name}}
                    </td>
                    <td class="px-6 py-4">
                        {{ flower.quantity}}
                    </td>
                    <td class="px-6 py-4">
                        {{ flower.price }} руб
                    </td>
                    <td class="px-6 py-4">
                        {{ flower.updated_at }}
                    </td>
                    <td class="px-6 py-4">
                        <img :src="flower.image_path" alt="flower">
                    </td>
                    <td class="px-6 py-4">
                        <Link :href="route('products.edit', flower.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                    </td>
                    <td class="px-6 py-4">
                        <Link :href="route('products.destroy', flower.id)" method="delete" as="button" type="button" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</AdminLayout>
</template>

<style scoped>

</style>
