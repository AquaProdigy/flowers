<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import {Link} from "@inertiajs/vue3";
defineProps({
    orders: Array,
})
</script>
<script>

export default {
    data() {
        return {
            requestCount: 0, // счетчик запросов
        };
    },
    methods: {
        checkStatus() {
            if (this.requestCount >= 5) {
                clearInterval(this.statusInterval);
                return;
            }

            axios.get('/payment/status')
                .then(res => {
                    this.updateOrderStatuses(res.data);
                    this.requestCount++;
                })
                .catch(error => {
                    console.log('status error', error);
                });
        },
        updateOrderStatuses(newStatuses) {
            newStatuses.forEach(statusUpdate => {
                const order = this.orders.find(order => order.id === statusUpdate.id);
                if (order && order.transaction.status !== statusUpdate.transaction.status) {
                    order.transaction.status = statusUpdate.transaction.status; // обновляем статус транзакции
                }
            });
        }
    },
    mounted() {
        this.statusInterval = setInterval(() => {
            this.checkStatus();
        }, 10000);
    },
    beforeDestroy() {
        clearInterval(this.statusInterval); // очищаем интервал при уничтожении компонента
    }
};
</script>
<template>
    <MainLayout class="">
        <div class="flex flex-col gap-y-5">
            <div v-for="order in orders" class="sm:px-5 border-2 py-3" :key="order.id">
                <div class="order__title flex justify-between py-1">
                    <div class="font-bold">Заказ от {{order.created_at}}</div>
                    <div v-if="order.transaction" class="bg-violet-500	bg-opacity-25 px-3">
                        <span v-if="order.transaction.status === 'CANCELLED'">Отменен</span>
                        <span v-else-if="order.transaction.status === 'CREATED'">В ожидании</span>
                        <span v-else-if="order.transaction.status === 'PAID'">Завершен</span>
                        <span v-else-if="order.transaction.status === 'REFUNDED'">Возврат</span>
                        <span v-else>Неизвестный статус</span>
                    </div>
                </div>
                <div class="flex justify-between">
                    <div class="grid grid-cols-1 gap-5">
                        <div v-for="item in order.order_items" class="grid grid-cols-2">
                            <div class="flex max-h-24 max-w-[120px] ">
                                <Link :href="route('flowers.show', item.flowers.id)">
                                    <img :src="item.flowers.image_path" alt="flower" class="rounded-lg max-h-24 max-w-[120px] ">
                                </Link>
                            </div>
                            <div class="content-center font-bold">
                                <div>
                                    {{item.flowers.name}}
                                </div>
                                <div>
                                    {{item.flowers.price}} ₽
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="font-bold align-middle content-start">
                        {{order.transaction.price}} ₽
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<style scoped>

</style>
