<script>
import {router} from "@inertiajs/vue3";
export default {
    name: "Show",
    data() {
        return {
            fullPrice: 0,
            address: null,
            isTypeDelivery: null,
        }
    },

    methods: {
        checkTypeDelivery() {
            this.isTypeDelivery = localStorage.getItem('isTypeDelivery')
            if (this.isTypeDelivery === 'Доставка'){
                this.setAddress()

                if (this.address){
                    return this.requestPayment()
                }

                return this.addressAlert()
            }
            return this.requestPayment()

        },
        requestPayment(){
            router.post(route('payment.create'), this.address ? JSON.parse(this.address): null)
        },
        addressAlert(){
            alert('Не выбран адрес доставки')
        },
        setAddress(){
            this.address = localStorage.getItem('address')
        },
        sumPrice(){
            this.fullPrice = 0
            this.$props.cart.forEach(item => {
                this.fullPrice += Math.floor(item.flowers.price * item.quantity)
            })
        },
        plus(item){
            item.quantity += 1
            this.sumPrice()
            this.updateQuantity(item.id, item.quantity)
        },
        minus(item){
            item.quantity -= 1
            this.sumPrice()
            this.updateQuantity(item.id, item.quantity)
        },
        updateQuantity(id, quantity){
            axios.patch(route('carts.update', id), {id: id, quantity: quantity})
        }
    },
    mounted() {
        this.sumPrice()

    }


}
</script>
<script setup>
import { Link} from "@inertiajs/vue3";
import MainLayout from "@/Layouts/MainLayout.vue";
import {formToJSON} from "axios";
defineProps({
    cart: Array
});

</script>

<template>
<MainLayout>
        <div class="container flex">
            <div class="shoping-cart flex flex-col mx-auto">
                <div class="mb-6 grid justify-items-center pb-3">
                    <button v-if="fullPrice" @click.prevent="checkTypeDelivery">
                        <div class="flex sm:flex-col border-2 border-violet-600 rounded-full px-6 gap-x-2">
                            <div>Оплатить</div>
                            <div>{{ fullPrice }} Руб</div>
                        </div>
                    </button>
                </div>
                <div class="list-items flex flex-col">
                    <div v-for="item in cart" class="item sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:place-items-center gap-6 mb-8 border-b-2 px-5 w-/">
                        <div class="image flex justify-center mb-6 flex-col">
                            <img :src="item.flowers.image_path" alt="flower" class="max-w-full rounded-lg max-h-[40vh]">
                            <div class="flex gap-x-3 justify-center">
                                <button @click.prevent="plus(item)" :disabled="item.quantity >= item.flowers.quantity">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                                <div>{{item.quantity}}</div>
                                <button @click.prevent="minus(item)" :disabled="item.quantity === 1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="place-self-stretch flex flex-col">
                            <div class="name">{{ item.flowers.name }}</div>
                            <div class="price font-bold"> {{ item.flowers.price * item.quantity }} руб</div>
                        </div>
                        <div class="text-end">
                            <Link :href="route('carts.destroy', {id: item.id})" @click="fullPrice -= item.quantity * item.flowers.price" method="delete" as="button" type="button" class="h-12 w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</MainLayout>
</template>

<style scoped>

</style>
