<script>
export default {
    name: "Cards",
    data() {
        return {
            toggleStyle: false,
            searchQuery: '', // Для хранения введенного текста поиска
        };
    },
    computed: {
        // Фильтрация категорий и цветов
        filteredCategories() {
            if (!this.searchQuery) {
                return this.categories;
            }

            const query = this.searchQuery.toLowerCase();

            return this.categories.map(category => {
                // Поиск в названиях цветов и описаниях
                const filteredFlowers = category.flowers.filter(flower =>
                    flower.name.toLowerCase().includes(query) ||
                    flower.description.toLowerCase().includes(query)
                );

                // Возвращаем категорию только с подходящими цветами
                if (category.name.toLowerCase().includes(query) || filteredFlowers.length > 0) {
                    return {
                        ...category,
                        flowers: filteredFlowers
                    };
                }

                return null;
            }).filter(category => category !== null); // Исключаем категории без совпадений
        },
    },
    watch: {
        // Отслеживание изменений в фильтрах
        filteredCategories(newCategories) {
            if (newCategories.length > 0) {
                // Прокрутка к первому найденному элементу
                this.scrollToCategory(newCategories[0].id);
            }
        }
    },
    methods: {
        changeStyleList() {
            this.toggleStyle = true;
        },
        changeStyleTable() {
            this.toggleStyle = false;
        },
        scrollToCategory(id) {
            const element = document.getElementById(id);
            if (element) {
                const offset = 180; // Отступ в пикселях
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: 'smooth'
                });
            }
        }
    },
};

</script>
<script setup>
import {Link} from "@inertiajs/vue3";

defineProps({
    categories: Array,
    cart: Number
})

</script>

<template>
    <div class="main__container mb-12 z-0">
        <div class="image__main flex max-h-96 mb-3 px-5">
            <img src="/images/flowers.jpg" alt="flowers" class="object-cover rounded-md">
        </div>
        <div class="flex sm:justify-end justify-center content-center gap-x-3 px-5">
            <a href="tel:7-928-818-88-27">
                <img width="28" height="28" src="/contacts/telephone-symbol-button.png" alt="telegram"/>
            </a>
            <a href="https://wa.me/79288188827">
                <img width="28" height="28" src="/contacts/whatsapp.png" alt="whatsapp"/>
            </a>
            <a href="https://t.me/123?profile">
                <img width="28" height="28" src="/contacts/telegram.png" alt="telegram"/>
            </a>
        </div>
        <div class="main__category sm:px-5 py-3 mb-12 z-0">
            <div class="sticky top-0 bg-white pt-3 rounded-lg">
                <!-- Поле поиска -->
                <div class="search mb-6">
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Поиск по меню"
                        class="w-full rounded-full px-5 border-gray-100 border-solid border-b-2 hover:border-gray-300"
                    >
                </div>
                <div class="category flex justify-center gap-2">
                    <div class="flex gap-3 pb-3 pl-3">
                        <button type="button" @click.prevent="changeStyleList">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" :class="{'fill-red-950 stroke-red-950 stroke-2': toggleStyle}">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </button>
                        <button type="button" @click.prevent="changeStyleTable">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" :class="{'fill-red-950 stroke-red-950 stroke-2': !toggleStyle}">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex snap-mandatory gap-2 snap-x overflow-x-auto pb-3">
                        <button @click="scrollToCategory(category.id)" v-for="category in filteredCategories" :key="category.id" type="button" class="item rounded-full sm:py-1 px-2 border-solid border-2 my-1 min-w-40 max-h-32 sm:text-base text-sm">
                            {{ category.name }}
                        </button>
                    </div>
                    <div v-if="$page.props.auth.user" class="flex sm:pt-2 pr-3 pt-1">
                        <Link :href='route("carts.show", {id: $page.props.auth.user.id})'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </Link>
                        <span class="">{{ cart ? cart: '' }}</span>
                    </div>
                </div>
            </div>

            <!-- Список категорий и цветов -->
            <div v-if="toggleStyle === false" v-for="category in filteredCategories" :key="category.id" class="category-element mb-6 bg-white rounded-lg">
                <h1 :id="category.id" class="font-bold px-5 text-2xl mb-6">{{ category.name }}</h1>
                <div class="cards md:grid md:grid-cols-4 gap-4 grid grid-cols-2">
                    <Link :href="route('flowers.show', flower.id)" v-for="flower in category.flowers" :key="flower.id" class="card grid grid-cols-1 hover:bg-gray-300 transition-colors duration-300 p-4 rounded-md text-left" href="#">
                        <img :src="flower.image_path" alt="" class="rounded-md">
                        <span class="font-bold mb-2">{{ flower.name }}</span>
                        <span v-if="flower.description.length > 100" class="mb-2">{{ flower.description.slice(0, 100)}}...</span>
                        <span v-else class="mb-2">{{ flower.description }}</span>
                        <span class="font-medium">{{ flower.price }} руб</span>
                    </Link>
                </div>
            </div>

            <div v-if="toggleStyle === true" v-for="category in filteredCategories" :key="category.id" class="category-element mb-6 bg-white rounded-lg">
                <h1 :id="category.id" class="font-bold px-5 text-2xl mb-6">{{ category.name }}</h1>
                <div class="cards gap-4 grid grid-cols-1">
                    <Link v-for="flower in category.flowers" :key="flower.id" class="card grid grid-cols-2 gap-6 hover:bg-gray-300 transition-colors duration-300 p-4 rounded-md text-left" href="#">
                        <img :src="flower.image_path" alt="" class="rounded-md w-full">
                        <div class="flex flex-col text-start">
                            <span class="font-bold mb-2 text-center">{{ flower.name }}</span>
                            <span class="mb-2 text-xs md:text-lg">{{ flower.description }}</span>
                            <span class="font-medium">{{ flower.price }} руб</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>
