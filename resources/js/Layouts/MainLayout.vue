<script>
import DropdownLink from "@/Components/DropdownLink.vue";
import Dropdown from "@/Components/Dropdown.vue";
import {Link} from "@inertiajs/vue3";
import CustomMap from "@/Components/CustomMap.vue";
export default {
    name: "MainLayout",
    components: {Link, Dropdown, DropdownLink, CustomMap},
    data() {
        return {
            isMenuOpen: false,
            isAddressOpen: false,
            isTypeDelivery: 'Доставка',
            isOpenMap: false,
            address: null,
        };
    },
    methods: {
        addToLocalAddress() {
            localStorage.setItem('address', this.address);
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;

        },
        closeMenu(){
            this.isMenuOpen = false;
        },
        toggleAddress() {
            this.isAddressOpen = !this.isAddressOpen;

        },
        closeAddress(){
            this.isAddressOpen = false;
        },
        selectOption(option) {
            this.isMenuOpen = false;
            // Add your logic for the selected option here
            this.isTypeDelivery = option;
            localStorage.setItem('isTypeDelivery', option)
        },
        isCloseMap(){
            this.isOpenMap = false;
        },
        toggleMap(){
            this.isOpenMap = !this.isOpenMap
        },
        checkTypeDelivery(){
            if (!localStorage.getItem('isTypeDelivery')){
                localStorage.setItem('isTypeDelivery', 'Доставка')
            }
            this.selectOption(localStorage.getItem('isTypeDelivery'))
        }

    },
    mounted(){
        try {
            this.address = JSON.parse(localStorage.getItem('address')).address
            this.$emit('')
        }catch (error) {
        }

        this.checkTypeDelivery()

    }

}
</script>

<template>
    <div class="wrapper max-w-screen-xl	mx-auto bg-gray-100">
        <header class="">
            <div class="xl:flex xl:justify-between lg:flex lg:justify-between md:flex md:justify-between flex justify-center flex-wrap py-6 px-5 gap-y-5 gap-x-5 ">
                <button @click="toggleMenu" class="1/2 flex items-center gap-4">
                    <svg style="width: 3rem; height: 3rem; color: red; background-color: white; border-radius: 50%; padding: 3px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="atom-icon">
                        <path d="M15.625 8.206c-.39 0-.762.073-1.11.2l-1.14-2.16v-.877h1.254c.181 0 .328.154.328.343a.335.335 0 01-.328.342.575.575 0 00-.563.587c0 .324.252.587.563.587.801 0 1.453-.68 1.453-1.516 0-.74-.51-1.355-1.183-1.488a.524.524 0 00-.165-.029h-1.921a.575.575 0 00-.563.587V5.81H8.072l-.274-.636h.89c.31 0 .562-.263.562-.587A.575.575 0 008.687 4H5.172a.575.575 0 00-.563.587c0 .324.252.587.563.587h1.393l.316.734a.57.57 0 00-.186.205l-1.21 2.293c-.348-.127-.72-.2-1.11-.2C2.514 8.206 1 9.786 1 11.728c0 1.942 1.514 3.522 3.375 3.522 1.669 0 3.055-1.272 3.324-2.935H10c.024 0 .05-.004.073-.007.014-.002.028-.002.041-.005.007-.002.013-.005.02-.006l.033-.011c.019-.006.039-.012.058-.02l.005-.002c.012-.006.021-.013.032-.02.01-.005.021-.01.032-.017l.027-.018c.015-.01.029-.024.043-.037.011-.01.024-.019.035-.03l.005-.007c.014-.014.024-.03.036-.045.01-.015.022-.028.031-.043l.015-.027.007-.009 2.32-4.397.716 1.359a3.57 3.57 0 00-1.28 2.755c0 1.942 1.515 3.522 3.376 3.522S19 13.67 19 11.728c0-1.942-1.514-3.522-3.375-3.522zm-3.764-1.223l-1.81 3.43-1.474-3.43h3.284zm-4.438.184l1.708 3.974H7.7a3.55 3.55 0 00-1.23-2.169l.952-1.805zm-.872 3.974H5.327l.59-1.119c.303.3.526.685.634 1.119zm-2.176 2.934c-1.24 0-2.25-1.052-2.25-2.347s1.01-2.348 2.25-2.348c.192 0 .378.028.557.076l-1.05 1.988-.01.027a.48.48 0 00-.04.112.55.55 0 00-.016.117c0 .01-.003.019-.003.028l.002.025a.9.9 0 00.016.116.59.59 0 00.036.107.585.585 0 00.026.05.44.44 0 00.064.091.611.611 0 00.127.111l.02.014c.008.005.017.007.025.012a.494.494 0 00.108.041.466.466 0 00.114.018l.024.002h2.176c-.251 1.01-1.13 1.76-2.176 1.76zm11.25 0c-1.24 0-2.25-1.052-2.25-2.347 0-.672.273-1.278.708-1.706l1.05 1.989a.558.558 0 00.493.303.538.538 0 00.27-.072.6.6 0 00.222-.798l-1.05-1.989a2.19 2.19 0 01.558-.075c1.24 0 2.25 1.053 2.25 2.347 0 1.296-1.01 2.348-2.25 2.348z" fill="currentColor"></path>
                    </svg>
                    <span class="font-bold text-xl">{{ isTypeDelivery }}</span>
                    <svg class="w-4 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </button>
                <div v-if="!$page.props.auth.user" class="flex gap-x-2 bg-white p-2 rounded-full font-medium items-center">
                    <Link  :href="route('login')">Войти</Link>
                    <span>/</span>
                    <Link  :href="route('register')">Регистрация</Link>
                </div>
                <div v-else class=" flex gap-x-2 bg-white p-2 rounded-full font-medium items-center">
                    <Dropdown align="right" width="48">
                        <template #trigger>
                                            <span class="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {{ $page.props.auth.user.name }}

                                                    <svg
                                                        class="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                        </template>

                        <template #content>
                            <DropdownLink :href="route('home')"> Главная </DropdownLink>
                            <DropdownLink :href="route('profile.edit')"> Профиль </DropdownLink>
                            <DropdownLink :href="route('orders.index')"> Заказы </DropdownLink>
                            <DropdownLink :href="route('logout')" method="post" as="button">
                                Выйти
                            </DropdownLink>
                        </template>
                    </Dropdown>
                </div>
            </div>
            <div v-if="isTypeDelivery === 'Доставка'" class="flex justify-center py-5">
                <button @click="toggleMap" type="button" class="flex bg-white w-3/4 justify-center rounded py-1 gap-x-3">
                    {{ this.address ?? 'Выбрать адрес доставки'}}
                    <svg class="w-4 h-4 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
            <custom-map :isOpenMap="isOpenMap" :isCloseMap="isCloseMap"/>

        </header>
        <main class="max-w-screen-xl mx-auto bg-gray-100">
            <slot></slot>
        </main>
        <footer>
            <div v-if="isMenuOpen" class="fixed inset-0 z-50 flex flex-col justify-end items-center w-3/4 mx-auto">
                <!-- Полупрозрачный фон -->
                <div class="fixed inset-0 bg-black opacity-50" @click="closeMenu"></div>

                <!-- Меню -->
                <div class="flex flex-col px-3 py-3 rounded relative w-full bg-white shadow-lg transform transition-transform duration-300"
                     :class="{ 'translate-y-0': isMenuOpen, 'translate-y-full': !isMenuOpen }">
                    <div class="flex justify-between">
                        <div class="text-2xl font-bold">Выберите тип доставки</div>
                        <button class="" @click="closeMenu">
                            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div class="p-4 flex flex-col gap-y-5">

                        <div class="flex justify-between items-center">
                            <button @click="selectOption('Доставка')" class="delivery flex items-center gap-x-5">
                                <svg class="w-10 h-10 text-black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.625 8.206c-.39 0-.762.073-1.11.2l-1.14-2.16v-.877h1.254c.181 0 .328.154.328.343a.335.335 0 01-.328.342.575.575 0 00-.563.587c0 .324.252.587.563.587.801 0 1.453-.68 1.453-1.516 0-.74-.51-1.355-1.183-1.488a.524.524 0 00-.165-.029h-1.921a.575.575 0 00-.563.587V5.81H8.072l-.274-.636h.89c.31 0 .562-.263.562-.587A.575.575 0 008.687 4H5.172a.575.575 0 00-.563.587c0 .324.252.587.563.587h1.393l.316.734a.57.57 0 00-.186.205l-1.21 2.293c-.348-.127-.72-.2-1.11-.2C2.514 8.206 1 9.786 1 11.728c0 1.942 1.514 3.522 3.375 3.522 1.669 0 3.055-1.272 3.324-2.935H10c.024 0 .05-.004.073-.007.014-.002.028-.002.041-.005.007-.002.013-.005.02-.006l.033-.011c.019-.006.039-.012.058-.02l.005-.002c.012-.006.021-.013.032-.02.01-.005.021-.01.032-.017l.027-.018c.015-.01.029-.024.043-.037.011-.01.024-.019.035-.03l.005-.007c.014-.014.024-.03.036-.045.01-.015.022-.028.031-.043l.015-.027.007-.009 2.32-4.397.716 1.359a3.57 3.57 0 00-1.28 2.755c0 1.942 1.515 3.522 3.376 3.522S19 13.67 19 11.728c0-1.942-1.514-3.522-3.375-3.522zm-3.764-1.223l-1.81 3.43-1.474-3.43h3.284zm-4.438.184l1.708 3.974H7.7a3.55 3.55 0 00-1.23-2.169l.952-1.805zm-.872 3.974H5.327l.59-1.119c.303.3.526.685.634 1.119zm-2.176 2.934c-1.24 0-2.25-1.052-2.25-2.347s1.01-2.348 2.25-2.348c.192 0 .378.028.557.076l-1.05 1.988-.01.027a.48.48 0 00-.04.112.55.55 0 00-.016.117c0 .01-.003.019-.003.028l.002.025a.9.9 0 00.016.116.59.59 0 00.036.107.585.585 0 00.026.05.44.44 0 00.064.091.611.611 0 00.127.111l.02.014c.008.005.017.007.025.012a.494.494 0 00.108.041.466.466 0 00.114.018l.024.002h2.176c-.251 1.01-1.13 1.76-2.176 1.76zm11.25 0c-1.24 0-2.25-1.052-2.25-2.347 0-.672.273-1.278.708-1.706l1.05 1.989a.558.558 0 00.493.303.538.538 0 00.27-.072.6.6 0 00.222-.798l-1.05-1.989a2.19 2.19 0 01.558-.075c1.24 0 2.25 1.053 2.25 2.347 0 1.296-1.01 2.348-2.25 2.348z" fill="currentColor"></path>
                                </svg>
                                <span class="text-2xl font-bold">Доставка</span>
                            </button>
                            <svg v-if="isTypeDelivery === 'Доставка'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 bg-red-600 rounded-full">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>


                        </div>
                        <div class="flex justify-between items-center">
                            <button @click="selectOption('Забрать')" class="pickup flex items-center gap-x-5">
                                <svg class="w-10 h-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span class="text-2xl font-bold">Забрать</span>
                            </button>
                            <svg v-if="isTypeDelivery === 'Забрать'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 bg-red-600 rounded-full">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>

</template>

<style scoped>

</style>
