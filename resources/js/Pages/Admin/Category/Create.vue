<script setup>
import {Link} from "@inertiajs/vue3";
import AdminLayout from "@/Layouts/AdminLayout.vue";
</script>
<script>
export default {
    data(){
        return {
            categoryName: '',
        }
    }
}

</script>
<template>
<AdminLayout>
    <div class="flex flex-col gap-y-5 mt-3">
        <span class="text-center">Создать категорию</span>
        <input type="text" v-model="categoryName">
        <Link :href="route('categories.store')" :data="{name: categoryName}" method="post" class="text-center font-bold">Создать</Link>
    </div>

</AdminLayout>
</template>

<style scoped>

</style>
