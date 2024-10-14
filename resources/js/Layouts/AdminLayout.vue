<script>

export default {
    name: "AdminLayout",
}
</script>
<script setup>
import {Link} from "@inertiajs/vue3";
</script>
<template>
    <div class="wrapper max-w-screen-xl	mx-auto bg-gray-100 sm:flex gap-6 pt-3">
        <div class="flex flex-col sm:w-1/4">
            <span class="font-bold text-center">Меню</span>
            <div class="flex flex-col px-3 gap-1 font-medium">
                <Link :href="route('admin.index')" class="border-b-2">Главная</Link>
                <Link :href="route('categories.index')" class="border-b-2">Категории</Link>
                <Link :href="route('products.index')" class="border-b-2">Товары</Link>
                <Link :href="route('admin.orders.index')" class="border-b-2">Заказы</Link>
                <Link :href="route('users.index')" class="border-b-2">Пользователи</Link>
            </div>
        </div>
        <div class="sm:w-3/4">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

</style>
