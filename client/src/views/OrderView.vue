<template>
	<HeaderComponent>
		<div>
			<div class="d-flex justify-content-center">
				<img class="d-block w-50" src="@/assets/img/Zamawiam.png" alt="Ale jazdeczka!">
			</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu można zamówić wloteczkę na super mikro festiwalik w goorach!</div>
		</div>
	</HeaderComponent>
	<section class="section-sm">
		<div class="card card-primary">
			<div class="card-header text-center pt-2">
				<h6>Formularz zapisowy</h6>
			</div>
			<div class="card-body bg-white">
				<div class="container">
					<form class="signup-form" @submit.prevent="submitOrder">
						<div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
							<label for="default" class="mr-3">Imię</label>
							<input id="default" type="text" class="form-control w-75" v-model="order.first_name"/>
						</div>

						<div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
							<label for="default" class="mr-3">Nazwisko</label>
							<input id="default" type="text" class="form-control w-75" v-model="order.last_name"/>
						</div>

						<div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
							<label for="default" class="mr-3">Email</label>
							<input id="default" type="email" class="form-control w-75" v-model="order.email"/>
						</div>

						<div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
							<label class="form-check-label">Namiot a może pokój?</label>
							<div class="form-group d-flex flex-row justify-content-start mb-3 mt-3">
								<div class="form-check form-check-radio mr-3">
									<label class="form-check-label">
										<input 
											class="form-check-input"
											type="radio"
											name="booking_type"
											value="tent"
											v-model="order.booking_type"
										>
										<span class="form-check-sign"></span>
										Namiot
									</label>
								</div>
								<div class="form-check form-check-radio mr-3">
									<label class="form-check-label">
										<input 
											class="form-check-input"
											type="radio"
											name="booking_type"
											value="2-bed"
											v-model="order.booking_type"
										>
										<span class="form-check-sign"></span>
										2 osoby
									</label>
								</div>
								<div class="form-check form-check-radio mr-3">
									<label class="form-check-label">
										<input 
											class="form-check-input"
											type="radio"
											name="booking_type"
											value="3-bed"
											v-model="order.booking_type"
										>
										<span class="form-check-sign"></span>
										3 osoby
									</label>
								</div>
								<div class="form-check form-check-radio mr-3">
									<label class="form-check-label">
										<input 
											class="form-check-input"
											type="radio"
											name="booking_type"
											value="4-bed"
											v-model="order.booking_type"
										>
										<span class="form-check-sign"></span>
										4 osoby
									</label>
								</div>
								<div class="form-check form-check-radio">
									<label class="form-check-label">
										<input 
											class="form-check-input"
											type="radio"
											name="booking_type"
											value="5-bed"
											v-model="order.booking_type"
										>
										<span class="form-check-sign"></span>
										5 osób
									</label>
								</div>
							</div>
						</div>

						<div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
							<label class="form-check-label">Kiedy wpadacie?</label>
							<div class="form-group d-flex flex-row justify-content-start mb-3 mt-3">
								<div class="form-check form-check-radio mr-3">
									<label class="form-check-label">
										<input
											class="form-check-input"
											type="radio"
											name="variant"
											value="1"
											v-model="order.variant"
										>
										<span class="form-check-sign"></span>
										22 - 25.06
									</label>
								</div>
								<div class="form-check form-check-radio">
									<label class="form-check-label">
										<input
											class="form-check-input"
											type="radio"
											name="variant"
											value="2"
											v-model="order.variant"
										>
										<span class="form-check-sign"></span>
										23 - 25.06
									</label>
								</div>
							</div>
						</div>

						<div v-if="order.price" class="d-flex align-items-center justify-content-between mb-3 mt-3">
							<label class="form-check-label">Cena:</label>
							<div class="form-group d-flex flex-row justify-content-start mb-3 mt-3">
								{{this.order.price }}
							</div>
						</div>
						<div v-else-if="!order.price" class="d-flex align-items-center justify-content-between mb-3 mt-3">
							<label class="form-check-label">Cena pojawi się po wypełnieniu formularza</label>
						</div>


					</form>
				</div>

				<div class="form-group d-flex justify-content-end mb-4 mr-4">
					<div class="form-check">
						<label class="form-check-label">
							<input class="form-check-input" type="checkbox">
							<span class="form-check-x"></span>
							<span class="form-check-sign"></span>
							Wyrazam zgodę
						</label>
					</div>
				</div>

				<div class="d-flex justify-content-end mt-3">
					<button class="btn me-2 mr-2 btn-secondary text-nowrap" type="button" data-toggle="modal" data-target="#exampleModalCenter" v-on:click="showSummaryModal">
						<span class="btn-text">Dawaj do podsumowania</span>
					</button>
					<button class="btn me-2 mr-2 btn-primary" type="button">
						<span class="btn-text">Usuwam dane</span>
					</button>
				</div>
			</div>

			<div v-if="summaryReady" class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">Podsumowanie</h5>
						</div>
						<div class="modal-body">
							<p>{{ this.order.first_name }}</p>
							<p>{{ this.order.last_name }}</p>
							<p>{{ this.order.email }}</p>
							<p>{{ this.booking_type_translated }}</p>
							<p>{{ this.variant_translated }}</p>
							<p>Cena: {{ this.order.price }}</p>
						</div>
						<div class="modal-footer d-flex justify-content-center">
							<button type="button" class="btn btn-success" v-on:click="submitOrder" data-dismiss="modal">Przechodzę do płatności</button>
							<button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="cleanSummary">Muszę coś poprawić</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>
</template>

<style>
.card-header {
	background-image: url("../assets/img/weave.png") !important;
}
@media (max-width: 390px) {

}

</style>

<script>
import HeaderComponent from '../components/HeaderComponent';
import OrderDataService from '../services/OrderDataService';

export default {
	name: "OrderView",
	components: {
		HeaderComponent
	},
	data() {
		return {
			order: {
				id: null,
				first_name: 'Dupa',
				last_name: '',
				email: '',
				paid: null,
				booking_type: '',
				variant: '',
				amount: '',
				price: null
			},
			booking_type_translated: '',
			variant_translated: '',
			submitted: false,
			summaryReady: false,
		}
	},
	computed: {
        propertyAAndPropertyB() {
			return `${this.order.booking_type}|${this.order.variant}`;
        },
    },
	watch: {
		propertyAAndPropertyB(newVal, oldVal) { // eslint-disable-line

			if (this.order.booking_type === 'tent' && this.order.variant === '1') {
				this.order.price = '1';
			} else if (this.order.booking_type === 'tent' && this.order.variant === '2') {
				this.order.price = '2';
			} else if (this.order.booking_type === '2-bed' && this.order.variant === '1') {
				this.order.price = '3';
			} else if (this.order.booking_type === '2-bed' && this.order.variant === '2') {
				this.order.price = '4';
			} else if (this.order.booking_type === '3-bed' && this.order.variant === '1') {
				this.order.price = '5';
			} else if (this.order.booking_type === '3-bed' && this.order.variant === '2') {
				this.order.price = '6';
			} else if (this.order.booking_type === '4-bed' && this.order.variant === '1') {
				this.order.price = '7';
			} else if (this.order.booking_type === '4-bed' && this.order.variant === '2') {
				this.order.price = '8';
			} else if (this.order.booking_type === '5-bed' && this.order.variant === '1') {
				this.order.price = '9';
			} else if (this.order.booking_type === '5-bed' && this.order.variant === '2') {
				this.order.price = '10';
			}
        },
	},
	methods: {
		async showSummaryModal() {
			await this.validateForm();
			await this.translateOrderDetails();
			this.summaryReady = true;
		},
		validateForm() {
			if (this.order.first_name === '') {
				console.log('Imię');
			} else {
				console.log('Imię jest');
			}

			if (this.order.last_name=== '') {
				console.log('Nazwisko');
			} else {
				console.log('Nazwisko jest');
			}

			if (this.order.email === '') {
				console.log('Email');
			} else {
				console.log('Email jest');
			}

			if (this.order.booking_type === '') {
				console.log('Booking Type');
			} else {
				console.log('Booking jest');
			}

			if (this.order.variant === 'null') {
				console.log('Variant');
			} else {
				console.log('Variant jest');
			}
		},
		translateOrderDetails() {
			if (this.order.booking_type === 'tent') {
				this.booking_type_translated = 'Namiot';
			} else if (this.order.booking_type === '2-bed') {
				this.booking_type_translated = 'Pokój 2-osobowy';
			} else if (this.order.booking_type === '3-bed') {
				this.booking_type_translated = 'Pokój 3-osobowy';
			} else if (this.order.booking_type === '4-bed') {
				this.booking_type_translated = 'Pokój 4-osobowy';
			} else if (this.order.booking_type === '5-bed') {
				this.booking_type_translated = 'Pokój 5-osobowy';
			}

			if (this.order.variant === '1') {
				this.variant_translated = '22 - 25.06';
			} else if (this.order.variant === '2') {
				this.variant_translated = '23 - 25.06';
			}
		},
		submitOrder() {
			this.bookingTypeName();
			var data = {
				first_name:  this.order.first_name,
				last_name:  this.order.last_name,
				email:  this.order.email,
				paid:  this.order.paid,
				booking_type:  this.order.book,
				variant: this.order.variant,
				amount: this.order.amount,
			};

			console.log(data);

			OrderDataService.create(data)
				.then(response => {
					this.order.id = response.data.id;
					console.log(response.data);
					this.submitted = true;
				})
				.catch(e => {
					console.log(e);
				});

			this.order = {};
		},
		cleanSummary() {
			this.summaryReady = false;
		}
	},
}
</script>

<!-- TODO: 
1. Validate if first_name given
2. Validate if last_name given
3. Validate if email is correct
4. Validate if room chosen
5. Validate if variant given
6. Show calculated price
7. Mobile -->
