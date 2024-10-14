<script>
export default {
    name: "Flower",

}
</script>

<script setup>
import {Link} from "@inertiajs/vue3";

defineProps({
    card: Object,
})
</script>

<template>
    <div class="max-w-screen-xl	mx-auto bg-gray-100 py-12">
        <div class="container__card flex flex-col mb-12 px-5 gap-6">

            <Link :href="route('home')" class="max-w-[24px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </Link>

            <div class="card__image flex max-h-96">
                <img :src="card.image_path" alt="flower_image" class="object-cover rounded-md mx-auto">
            </div>
            <div class="md:text-2xl md:font-bold font-medium text-center">{{ card.name }}</div>
            <div class="md:text-xl">{{ card.description }}</div>
            <div class="mt-6 font-bold sm:text-start text-center">{{ card.price }} руб</div>

            <Link v-if="$page.props.auth.user" :href="route('carts.store', {id: card.id})" :disabled="card.quantity === 0" method="post" as="button"  type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{{card.quantity >= 1 ? 'Добавить в корзину': 'Товара нет в наличии'}}</Link>
            <Link v-if="!$page.props.auth.user" :href="route('login')" type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{{card.quantity >= 1 ? 'Добавить в корзину': 'Товара нет в наличии'}}</Link>
        </div>
    </div>
</template>

<style scoped>

</style>
