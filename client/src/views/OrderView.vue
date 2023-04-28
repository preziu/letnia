<template>
	<HeaderComponent>
		<div>
			<div class="d-flex justify-content-center">
				<img class="w-100" src="@/assets/img/zamawiam.png" alt="Zamawianko!">
			</div>
		</div>
	</HeaderComponent>
	<section v-if="!orderPlaced" class="section-xsm pb-2">
		<div class="card card-secondary">
			<div class="card-header text-center pt-2">
				<h6>Formularz zapisowy</h6>
			</div>
			<div class="card-body bg-white">
				<div>
					<p>W tym miejscu zarezerwujesz swoje miejsce na naszym festiwalu.</p>
					<p>Jeśli chcesz spać w pokoju to rezerwujesz cały pokój i wprowadzasz listę imion i nazwisk swoich współlokatorów.</p>
					<p>Jeśli chcesz spać w namiocie to po prostu kupujesz wejściówkę dla siebie - nie pobieramy opłaty za namioty ani za ich wielkość.</p>
					<p>W cenie każdego pakietu są śniadania oraz wstęp na wszystkie atrakcje i występy muzyczne. </p>
				</div>
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

						<div class="row form-group d-flex align-items-center justify-content-between mb-3 mt-5">
							<label class="col-sm form-check-label">Namiot a może pokój?</label>
							<div class="col-sm">
								<div class="row form-group d-flex flex-row justify-content-start mb-3 mt-3">
									<div v-if="bookingAvailabilities.tent" class="col-sm form-check form-check-radio mr-3">
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
									<div v-if="bookingAvailabilities.twoBed" class="col-sm form-check form-check-radio mr-3">
										<label class="form-check-label">
											<input 
												class="form-check-input"
												type="radio"
												name="booking_type"
												value="twoBed"
												v-model="order.booking_type"
											>
											<span class="form-check-sign"></span>
											Pokój 2-osobowy
										</label>
									</div>
									<div v-if="bookingAvailabilities.threeBed" class="col-sm form-check form-check-radio mr-3">
										<label class="form-check-label">
											<input 
												class="form-check-input"
												type="radio"
												name="booking_type"
												value="threeBed"
												v-model="order.booking_type"
											>
											<span class="form-check-sign"></span>
											Pokój 3-osobowy
										</label>
									</div>
									<div v-if="bookingAvailabilities.fourBed" class="col-sm form-check form-check-radio mr-3">
										<label class="form-check-label">
											<input 
												class="form-check-input"
												type="radio"
												name="booking_type"
												value="foruBed"
												v-model="order.booking_type"
											>
											<span class="form-check-sign"></span>
											Pokój 4-osobowy
										</label>
									</div>
									<div v-if="bookingAvailabilities.fiveBed" class="col-sm form-check form-check-radio mr-3">
										<label class="form-check-label">
											<input 
												class="form-check-input"
												type="radio"
												name="booking_type"
												value="fiveBed"
												v-model="order.booking_type"
											>
											<span class="form-check-sign"></span>
											Pokój 5-osobowy
										</label>
									</div>
								</div>
							</div>
						</div>

						<div class="row form-group d-flex align-items-center justify-content-between mb-3 mt-3">
							<label class="col-sm form-check-label">Kiedy wpadacie?</label>
							<div class="col-sm">
								<div class="form-group d-flex flex-row justify-content-between mb-3 mt-3">
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

				<div class="row d-flex justify-content-end mt-3 mr-3">
					<div>
						<button class="btn mr-2 m-1 btn-secondary text-nowrap" type="button" data-toggle="modal" data-target="#exampleModalCenter" data-backdrop="static" data-keyboard="false" v-on:click="showSummaryModal">
							<span class="btn-text">Dawaj do podsumowania</span>
						</button>
					</div>
					<div>
						<button class="btn mr-2 m-1 btn-primary" type="button">
							<span class="btn-text">Usuwam dane</span>
						</button>
					</div>
				</div>
			</div>

			<div v-if="errorsOccured" class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">Popraw formularz!</h5>
						</div>
						<div class="modal-body">
							<p>{{ this.first_name_validator }}</p>
							<p>{{ this.last_name_validator }}</p>
							<p>{{ this.email_validator }}</p>
							<p>{{ this.booking_type_validator }}</p>
							<p>{{ this.variant_validator }}</p>
						</div>
						<div class="modal-footer d-flex justify-content-center">
							<button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="cleanErrors">Ok! Poprawiam!</button>
						</div>
					</div>
				</div>
			</div>

			<div v-if="formReady" class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
							<button type="button" class="btn btn-success" v-on:click="submitOrder" data-dismiss="modal">Zgadza się!</button>
							<button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="cleanSummary">Muszę coś poprawić</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>

	<section v-else class="section-xsm pb-2">
		<div class="card card-secondary">
			<div class="card-header text-center pt-2">
				<h6>🫲 Zwycięstwo! 🫱</h6>
			</div>
			<div class="card-body bg-white">
				<p>Twoje zamówienie zostało zapisane!</p>
				<p>Na Twój email poleciało potwierdzenie rezerwacji!</p>
				<p>Masz 24h na dokonanie przelewu - sprawdzamy po 48h.</p>
				<p>Wszystkie szczegóły znajdziesz w mailu.</p>
			</div>
		</div>
	</section>
</template>

<style>
@media (max-width: 390px) {

}

</style>

<script>
import HeaderComponent from '../components/HeaderComponent';
import OrderDataService from '../services/OrderDataService';
import BookingDataService from '../services/BookingDataService';

export default {
	name: "OrderView",
	components: {
		HeaderComponent
	},
	data() {
		return {
			order: {
				id: null,
				first_name: '',
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
			formReady: false,
			orderPlaced: false,
			errorsOccured: false,
			bookingsData: {},
			bookingAvailabilities: {
				tent: true,
				twoBed: true,
				threeBed: true,
				fourBed:true,
				fiveBed: true
			}
,		}
	},
	mounted() {
		this.loadBookings();
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
			} else if (this.order.booking_type === 'twoBed' && this.order.variant === '1') {
				this.order.price = '3';
			} else if (this.order.booking_type === 'twoBed' && this.order.variant === '2') {
				this.order.price = '4';
			} else if (this.order.booking_type === 'threeBed' && this.order.variant === '1') {
				this.order.price = '5';
			} else if (this.order.booking_type === 'threeBed' && this.order.variant === '2') {
				this.order.price = '6';
			} else if (this.order.booking_type === 'foruBed' && this.order.variant === '1') {
				this.order.price = '7';
			} else if (this.order.booking_type === 'foruBed' && this.order.variant === '2') {
				this.order.price = '8';
			} else if (this.order.booking_type === 'fiveBed' && this.order.variant === '1') {
				this.order.price = '9';
			} else if (this.order.booking_type === 'fiveBed' && this.order.variant === '2') {
				this.order.price = '10';
			}
        },
	},
	methods: {
		async showSummaryModal() {
			await this.validateForm();
			await this.translateOrderDetails();
			if (!this.errorsOccured) {
				this.formReady = true;
			}
		},
		validateForm() {
			if (!this.order.first_name) {
				this.first_name_validator = 'Podaj imię'
				this.errorsOccured = true
			}

			if (!this.order.last_name) {
				this.last_name_validator = 'Podaj nazwisko'
				this.errorsOccured = true
			}

			if (!this.order.email) {
				this.email_validator = 'Adres email jest wymagany do złozenia zamówienia'
				this.errorsOccured = true
			} else {
				const emailRegex = /\S+@\S+\.\S+/
				if (!emailRegex.test(this.order.email)) {
				this.email_validator = 'Adres email jest nieprawidłowy, jeśli to nie jest błąd, zgłoś się do nas na FB'
				this.errorsOccured = true
				}
			}

			if (!this.order.variant) {
				this.variant_validator = 'Daj znać kiedy wpadasz'
				this.errorsOccured = true
			}

			if (!this.order.booking_type) {
				this.booking_type_validator = 'Daj znać czy zamawiasz pobyt w namiocie a moze w pokoju?'
				this.errorsOccured = true
			}
		},
		translateOrderDetails() {
			if (this.order.booking_type === 'tent') {
				this.booking_type_translated = 'Namiot';
			} else if (this.order.booking_type === 'twoBed') {
				this.booking_type_translated = 'Pokój 2-osobowy';
			} else if (this.order.booking_type === 'threeBed') {
				this.booking_type_translated = 'Pokój 3-osobowy';
			} else if (this.order.booking_type === 'foruBed') {
				this.booking_type_translated = 'Pokój 4-osobowy';
			} else if (this.order.booking_type === 'fiveBed') {
				this.booking_type_translated = 'Pokój 5-osobowy';
			}

			if (this.order.variant === '1') {
				this.variant_translated = '22 - 25.06';
			} else if (this.order.variant === '2') {
				this.variant_translated = '23 - 25.06';
			}
		},
		async submitOrder() {
			this.orderPlaced = true;
			var data = {
				first_name: this.order.first_name,
				last_name: this.order.last_name,
				email: this.order.email,
				paid: false,
				booking_type: this.order.booking_type,
				variant: this.order.variant,
				amount: this.order.amount,
			};

			await OrderDataService.create(data);

			if (this.order.booking_type === 'tent') {
				this.bookingsData.data[0].tent = this.bookingsData.data[0].tent - 1;
			} else if (this.order.booking_type === 'twoBed') {
				this.bookingsData.data[0].twoBed = this.bookingsData.data[0].twoBed - 1;
			} else if (this.order.booking_type === 'threeBed') {
				this.bookingsData.data[0].threeBed = this.bookingsData.data[0].threeBed - 1;
			} else if (this.order.booking_type === 'foruBed') {
				this.bookingsData.data[0].foruBed = this.bookingsData.data[0].foruBed - 1;
			} else if (this.order.booking_type === 'fiveBed') {
				this.bookingsData.data[0].fiveBed = this.bookingsData.data[0].fiveBed - 1;
			}


			await BookingDataService.update(this.bookingsData.data[0].id, this.bookingsData.data[0]);

			this.loadBookings();
			this.order = {};
		},
		cleanSummary() {
			this.formReady = false;
			this.orderPlaced = false;
		},
		cleanErrors() {
			this.errorsOccured = false;
			this.first_name_validator = '';
			this.last_name_validator = '';
			this.email_validator = '';
			this.variant_validator = '';
			this.booking_type_validator = '';
		},
		loadBookings() {
			BookingDataService.findAll()
            .then(response => {
				if (response.data[0].tent < 1) {
					this.bookingAvailabilities.tent = false;
				} 
				if (response.data[0].twoBed < 1) {
					this.bookingAvailabilities.twoBed = false;
				} 
				if (response.data[0].threeBed < 1) {
					this.bookingAvailabilities.threeBed = false;
				}
				if (response.data[0].fourBed < 1) {
					this.bookingAvailabilities.fourBed = false;
				} 
				if (response.data[0].fiveBed < 1) {
					this.bookingAvailabilities.fiveBed = false;
				}
                this.bookingsData = response;
            })
            .catch(e => {
                console.log(e);
            });
		}
	},
}
</script>
