<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    order: Object
})
</script>

<template>
<AdminLayout>
    <Link :href="route('admin.orders.index')">Назад</Link>
    <div class="flex gap-x-5" v-for="flowers in order.flowers">
        <div class="flex max-h-32"><img :src="flowers.image_path" alt="" class="w-full"></div>
        <div>{{ flowers.name }}</div>
        <div>{{ flowers.price }} руб</div>
    </div>
</AdminLayout>
</template>

<style scoped>

</style>
