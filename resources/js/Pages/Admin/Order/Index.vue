<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    orders: Object,
})

</script>

<template>
    <AdminLayout>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Пользователь
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Итоговая цена
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Создано
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Статус
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Кол-во товара
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Адрес доставки
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Корзина</span>
                    </th>

                </tr>
                </thead>
                <tbody>
                <tr v-for="order in orders" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <Link :href="route('users.show', order.user_id)">Просмотреть {{order.name}}</Link>
                    </th>
                    <td class="px-6 py-4">
                        {{order.total_price}}
                    </td>
                    <td class="px-6 py-4">
                        {{ order.created_at}}
                    </td>
                    <td class="px-6 py-4">
                        {{order.status}}
                    </td>
                    <td class="px-6 py-4">
                        {{order.orderItems}}
                    </td>
                    <td class="px-6 py-4">
                        {{order.address}}
                    </td>
                    <td class="px-6 py-4 text-right">
                        <Link :href="route('admin.orders.show', order.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Корзина</Link>
                    </td>

                </tr>
                </tbody>
            </table>
        </div>

    </AdminLayout>
</template>

<style scoped>

</style>
