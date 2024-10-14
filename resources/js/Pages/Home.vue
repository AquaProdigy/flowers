<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Cards from "@/Components/Cards.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import Dropdown from "@/Components/Dropdown.vue";
import MainLayout from "@/Layouts/MainLayout.vue";

defineProps({
    categories: Array,
    cart: Number,
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
})

</script>
<script>
import CustomMap from "@/Components/CustomMap.vue";



export default {
    data() {
        return {
            isMenuOpen: false,
            isAddressOpen: false,
            isTypeDelivery: 'Доставка',
            isOpenMap: false
        };
    },
    components: {
        CustomMap
    },

    methods: {
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
        },
        isCloseMap(){
            this.isOpenMap = false;
        },
        toggleMap(){
            this.isOpenMap = !this.isOpenMap
        },

    },
};

</script>


<template>
    <Head title="Flowers" />
    <MainLayout>
        <div>
            <Cards :categories="categories" :cart="cart"></Cards>
        </div>

    </MainLayout>

</template>
