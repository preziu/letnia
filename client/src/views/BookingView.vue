<template>
    <HeaderComponent>
        <div>
            <div class="d-flex justify-content-center">
                Zamówienia
            </div>
        </div>
    </HeaderComponent>
    <ol>
        <div v-for="(order, index) in orders.data" :key="order.id">
            <div class="my-5">
                <div class="row card-body" :class="order.paid ? 'bg-cyan' : 'bg-white'">
                    <div class="col">
                        {{ index + 1 }}
                    </div>
                    <div class="col">
                        <div>{{ order.first_name }} {{ order.last_name }}</div>
                        <div>{{ order.email }}</div>
                        <div>{{ translateVariant(order) }} {{ order.booking_type }}</div>
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

export default {
    name: "StayView",
    components: {
        HeaderComponent
    },
    data() {
        return {
            orders: {},
        }
    },
    mounted() {
        OrderDataService.findAll()
            .then(response => {
                this.orders = response;
            })
            .catch(e => {
                console.log(e);
            });
    },
    computed: {
        
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
            console.log(order);
            OrderDataService.update(order.id, order)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
        },
        deleteOrder(order) {
            OrderDataService.delete(order.id)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
        }
    }
}
</script>
