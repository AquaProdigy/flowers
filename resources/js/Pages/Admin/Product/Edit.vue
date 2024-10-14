<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {Link, useForm} from "@inertiajs/vue3";
import { reactive } from 'vue'

const props = defineProps({
    flower: Object,
    errors: Object
})

const form = useForm({
    name: props.flower.name || '',
    description: props.flower.description || '',
    price: props.flower.price || '',
    quantity: props.flower.quantity || ''
})
function submit(id){
    form.patch(route('products.update', id))
}

</script>
<script>

</script>
<template>
    <AdminLayout>
        <div class="flex flex-col gap-y-5">
            Изменение продукта
            <form @submit.prevent="submit(flower.id)">
                <div class="flex flex-col gap-y-5 w-2/5">
                    <div class="flex flex-col">
                        <label for="name">Название букета</label>
                        <input id="name" type="text" v-model="form.name">
                        <span v-if="errors.name">{{errors.name}}</span>
                    </div>
                    <div class="flex flex-col">
                        <label for="description">Описание</label>
                        <textarea id="description" v-model="form.description"></textarea>
                        <span v-if="errors.description">{{errors.description}}</span>
                    </div>
                    <div class="flex flex-col">
                        <label for="quantity">Колличество в наличии</label>
                        <input id="quantity" type="number" v-model="form.quantity">
                        <span v-if="errors.quantity">{{errors.quantity}}</span>
                    </div>
                    <div class="flex flex-col">
                        <label for="price">Цена</label>
                        <input id="price" type="number" v-model="form.price" class="">
                        <span v-if="errors.price">{{errors.price}}</span>
                    </div>
                </div>
                <button type="submit">Обновить</button>

            </form>
        </div>
    </AdminLayout>
</template>

<style scoped>

</style>
