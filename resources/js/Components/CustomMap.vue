<template>
    <div v-if="isOpenMap" class="z-50">
        <div class="fixed inset-0 bg-black opacity-80 z-40" @click="isCloseMap"></div>

        <div class="relative z-50">
            <div class="main__map-container fixed inset-0 m-auto w-11/12 md:w-4/5 max-h-[90vh] flex flex-col md:flex-row gap-4 bg-white rounded-3xl p-4">
                <div class="map-container md:w-3/5 w-full relative rounded-3xl overflow-hidden" ref="mapContainer">
                    <!-- Стиль для фиксации метки по центру карты -->
                    <div class="map-marker absolute" :class="{ 'move-up': isMoving, 'move-down': !isMoving }">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div class="form-container md:w-2/5 w-full p-5 flex flex-col justify-center gap-2">
                    <!-- Формочка для отображения адреса и координат -->
                    <div class="flex">
                        <input type="text" :value="addressForm.address" class="p-2 border border-gray-300 rounded w-full" placeholder="Город, улица и дом">
                    </div>
                    <div class="flex flex-col md:flex-row gap-2">
                        <input v-model="addressForm.entrance" type="text" class="p-2 border border-gray-300 rounded w-full md:w-1/2" placeholder="Подъезд">
                        <input v-model="addressForm.doorCode" type="text" class="p-2 border border-gray-300 rounded w-full md:w-1/2" placeholder="Код двери">
                    </div>
                    <div class="flex flex-col md:flex-row gap-2">
                        <input v-model="addressForm.floor" type="text" class="p-2 border border-gray-300 rounded w-full md:w-1/2" placeholder="Этаж">
                        <input v-model="addressForm.apartment" type="text" class="p-2 border border-gray-300 rounded w-full md:w-1/2" placeholder="Квартира">
                    </div>
                    <div class="">
                        <input v-model="addressForm.commentOrder" type="text" class="p-2 border border-gray-300 rounded w-full" placeholder="Комментарий к заказу">
                    </div>
                    <button @click="submitForm" class="bg-orange-500 text-white px-4 py-2 mt-4 rounded w-full md:w-auto">
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            map: null,
            geocoder: null,
            isMoving: false,
            addressForm: {
                coordinates: [44.6226, 41.9350],
                address: null,
                entrance: '',
                doorCode: '',
                floor: '',
                apartment: '',
                commentOrder: '',
            },

        };
    },
    props: {
        isOpenMap: {
            type: Boolean,
            required: true
        },
        isCloseMap: {
            type: Function
        }
    },
    methods: {
        initMap() {
            this.$nextTick(() => {
                const mapContainer = this.$refs.mapContainer;

                if (!mapContainer || mapContainer.offsetWidth === 0 || mapContainer.offsetHeight === 0) {
                    console.error('Контейнер карты не найден или имеет нулевые размеры');
                    return;
                }

                if (window.ymaps) {
                    this.map = new ymaps.Map(mapContainer, {
                        center: this.addressForm.coordinates, // Начальный центр карты
                        zoom: 14,
                        controls: []
                    });

                    this.geocoder = ymaps.geocode;

                    this.map.events.add('actionbegin', this.onMapActionBegin);
                    this.map.events.add('actionend', this.onMapActionEnd);
                    this.map.events.add('boundschange', this.onMapBoundsChange);

                    // Обработчик изменения масштаба карты
                    this.map.events.add('boundschange', this.onMapBoundsChange);
                } else {
                    console.error('API Яндекс.Карт не загружен');
                }
            });
        },
        onMapBoundsChange(event) {
            if (!this.map) return;

            // Получаем центр карты и размеры контейнера
            const center = this.map.getCenter();
            const zoom = this.map.getZoom();

            // Обновляем координаты
            this.addressForm.coordinates = center;

            // Пересчитываем центр карты относительно метки
            this.map.setCenter(this.addressForm.coordinates, zoom);

            // Получаем адрес через геокодер
            this.geocoder(center).then((result) => {
                const firstGeoObject = result.geoObjects.get(0);
                this.addressForm.address = firstGeoObject ? firstGeoObject.getAddressLine().split(',').slice(1).join(',').trim() : 'Адрес не найден';
            });
        },
        onMapActionBegin() {
            this.isMoving = true;
        },
        onMapActionEnd() {
            this.isMoving = false;
        },
        submitForm() {
            localStorage.setItem('address', JSON.stringify(this.addressForm))
            this.$props.isCloseMap()
            window.location.reload()
        }
    },
    mounted() {
        if (this.isOpenMap) {
            this.initMap();
        }

    },
    watch: {
        isOpenMap(newVal) {
            if (newVal) {
                this.initMap();
            }
        }
    }
}
</script>

<style scoped>
.main__map-container {
    display: flex;
    flex-direction: column; /* Вертикальное расположение */
    width: 100%;
    height: 100%;
    max-width: 80%;
    max-height: 90%;
    overflow: hidden; /* Скрываем переполнение */
}

.map-container {
    width: 100%;
    height: 45vh; /* Увеличиваем высоту карты до 45vh */
    position: relative;
}

.form-container {
    width: 100%;
    max-height: 50vh; /* Максимальная высота формы */
    padding: 16px;
    font-size: 0.85rem;
    box-sizing: border-box; /* Учитываем padding в размер формы */
    display: flex;
    flex-direction: column;
    overflow-y: auto; /* Добавляем вертикальную прокрутку */
}

.map-marker {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    z-index: 999;
    transition: transform 0.5s ease;
}

.move-up {
    transform: translate(-50%, -120%);
}

.move-down {
    transform: translate(-50%, -100%);
}

.size-6 {
    width: 36px;
    height: 36px;
}

@media (min-width: 768px) {
    .main__map-container {
        flex-direction: row; /* Горизонтальное расположение на больших экранах */
        height: 100%;
    }

    .map-container {
        width: 60%;
        height: 100%;
    }

    .form-container {
        width: 40%;
        height: 100%;
    }
}

@media (max-width: 768px) {
    .form-container input, .form-container button {
        padding: 4px;
        font-size: 0.85rem; /* Уменьшаем отступ между элементами формы */
        width: 100%;
    }

    .form-container input {
        height: 30px; /* Высота первого инпута */
    }

    .form-container button {
        padding: 8px 12px;
        margin-top: auto; /* Кнопка остается внизу формы */
    }
}


</style>
