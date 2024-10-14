<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {Link, router, useForm} from "@inertiajs/vue3";
defineProps({
    data: Object
})

</script>

<template>
    <AdminLayout>
        <div class="flex flex-col justify-center text-center gap-y-5">
            <span>ID: {{data.id}}</span>
            <input type="text" v-model="data.name">
            <Link :href="route('categories.update', data.id)" :data="{name: data.name}" method="patch" as="button" type="button">Сохранить</Link>
        </div>

    </AdminLayout>
</template>

<style scoped>

</style>
