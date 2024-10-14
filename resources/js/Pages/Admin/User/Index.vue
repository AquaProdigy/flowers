<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {Link} from "@inertiajs/vue3";
const props = defineProps({
    users: Object,
})
</script>

<template>
<AdminLayout>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Имя
                </th>
                <th scope="col" class="px-6 py-3">
                    Телефон
                </th>
                <th scope="col" class="px-6 py-3">
                    Почта
                </th>
                <th scope="col" class="px-6 py-3">
                    Зарегестрирован
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ user.id}}
                </th>
                <td class="px-6 py-4">
                   {{user.name}}
                </td>
                <td class="px-6 py-4">
                    {{user.phone}}
                </td>
                <td class="px-6 py-4">
                    {{user.email}}
                </td>
                <td class="px-6 py-4">
                    {{user.created_at}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>

</AdminLayout>
</template>

<style scoped>

</style>
