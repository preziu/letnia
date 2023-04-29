<template>
    <HeaderComponent>
        <div>
            <div class="d-flex justify-content-center">
                Zamówienia
            </div>
        </div>
    </HeaderComponent>
    <div v-if="this.loaded">
        <div v-for="(booking, index) in bookingsData.data" :key="booking.id" class="card">
            <div class="card-header">
                Dostępne pokoje {{ index }}
            </div>
            <div class="card-body">
                <div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
                    <label for="default" class="mr-3">Namiot</label>
                    <input id="default" type="text" class="form-control w-75" v-model="booking.tent"/>
                </div>
                <div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
                    <label for="default" class="mr-3">Pokój 2-osobowy</label>
                    <input id="default" type="text" class="form-control w-75" v-model="booking.twoBed"/>
                </div>
                <div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
                    <label for="default" class="mr-3">Pokój 3-osobowy</label>
                    <input id="default" type="text" class="form-control w-75" v-model="booking.threeBed"/>
                </div>
                <div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
                    <label for="default" class="mr-3">Pokój 4-osobowy</label>
                    <input id="default" type="text" class="form-control w-75" v-model="booking.fourBed"/>
                </div>
                <div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
                    <label for="default" class="mr-3">Pokój 5-osobowy</label>
                    <input id="default" type="text" class="form-control w-75" v-model="booking.fiveBed"/>
                </div>
                <button class="btn mr-2 btn-tertiary text-nowrap" type="button" data-toggle="modal" data-target="#exampleModalCenter" v-on:click="updateBookingsData(booking)">
                    <span class="btn-text">Zmień liczbę pokoi</span>
                </button>
            </div>
        </div>
    </div>
    <ol>
        <div v-for="(order, index) in orders.data" :key="order.id">
            <div class="my-2">
                <div class="row card-body" :class="order.paid ? 'bg-cyan' : 'bg-white'">
                    <div class="col">
                        {{ index + 1 }}
                    </div>
                    <div class="col">
                        <div>{{ order.first_name }} {{ order.last_name }}</div>
                        <div>{{ order.email }} {{ order.phone }}</div>
                        <div>{{ translateVariant(order) }} {{ order.booking_type }}</div>
                        <div>Cena: {{ order.price }}</div>
                    </div>
                    <div class="col">
                        <button class="btn mr-2 btn-success text-nowrap" type="button" data-toggle="modal" data-target="#exampleModalCenter" v-on:click="confirmPayment(order)">
							<span class="btn-text">Zatwierdź płatność</span>
						</button>
                        <button class="btn mr-2 btn-warning text-nowrap" type="button" data-toggle="modal" data-target="#exampleModalCenter" v-on:click="deleteOrder(order)">
							<span class="btn-text">Usuń</span>
						</button>
                    </div>
                </div>
            </div>
        </div>
    </ol>
</template>

<style>
    
</style>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import OrderDataService from '../services/OrderDataService';
import BookingDataService from '../services/BookingDataService';

export default {
    name: "StayView",
    components: {
        HeaderComponent
    },
    data() {
        return {
            orders: {},
            bookingsData: {},
            bookingsUpdate: {},
            loaded: false,
        }
    },
    mounted() {
        OrderDataService.findAll()
            .then(response => {
                this.orders = response;
            })

        BookingDataService.findAll()
            .then(response => {
                this.bookingsData = response;
                this.loaded = true;
            })
    },
    methods: {
        translateVariant(order) {
            if (order.variant === 1) {
                return '22-25.06'
            } else if (order.variant === 2) {
                return '23-25.06'
            }
        },
        confirmPayment(order) {
            order.paid = true;
            OrderDataService.update(order.id, order)
        },
        deleteOrder(order) {
            OrderDataService.delete(order.id)
        },
        updateBookingsData(booking) {
            BookingDataService.update(booking.id, booking)
        }
    }
}
</script>
