<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
defineProps({
    data: Object
})
</script>

<template>
    <AdminLayout>
        <div class="lg:flex lg:gap-x-5 flex flex-col mt-6 font-bold sm:items-start items-center">
            <div class="">
                <div>Категорий: {{data.categories}}</div>
                <div>Цветов(продуктов): {{data.products}}</div>
                <div>Заказов: {{data.orders}}</div>
                <div>Транзакций: {{data.transactions}}</div>
                <div>Пользователей: {{data.users}}</div>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped>

</style>
