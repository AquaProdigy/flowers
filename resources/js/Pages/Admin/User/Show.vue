<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {Link} from "@inertiajs/vue3";
const props = defineProps({
    user: Object
})
</script>

<template>
<AdminLayout>
    <div class="flex mt-6 gap-x-3">
        <div>{{ user.id}}</div>
        <div>{{user.name}}</div>
        <div>{{user.phone}}</div>
        <div>{{user.email}}</div>
    </div>
</AdminLayout>
</template>

<style scoped>

</style>
