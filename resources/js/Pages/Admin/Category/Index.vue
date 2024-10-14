<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {Link} from "@inertiajs/vue3";
defineProps({
    categories: Object
})
</script>

<template>
    <AdminLayout>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex flex-col mt-3 gap-y-5">
            <Link :href="route('categories.create')" class="text-center">Создать категорию</Link>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Created At
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Updated At
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Delete</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="category in categories" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{category.id}}
                    </th>
                    <td class="px-6 py-4">
                        {{category.name}}
                    </td>
                    <td class="px-6 py-4">
                        {{category.created_at}}
                    </td>
                    <td class="px-6 py-4">
                        {{category.update_at}}
                    </td>
                    <td class="px-6 py-4 text-right">
                        <Link :href="route('categories.edit', category.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                    </td>
                    <td class="px-6 py-4 text-right">
                        <Link :href="route('categories.destroy', category.id)" method="delete" as="button" type="button" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    </AdminLayout>
</template>

<style scoped>

</style>
