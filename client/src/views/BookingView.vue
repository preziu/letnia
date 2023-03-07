<template>
	<HeaderComponent>
		<div>
			<div class="d-flex justify-content-center">
				<img class="d-block w-50" src="@/assets/img/Zamawiam.png" alt="Ale jazdeczka!">
			</div>
			<div>Tu mozna zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu mozna zamówić wloteczkę na super mikro festiwalik w goorach!</div>
			<div>Tu mozna zamówić wloteczkę na super mikro festiwalik w goorach!</div>
		</div>
	</HeaderComponent>
	<section class="section-sm">
		<div class="card card-tertiary">
			<div class="card-header text-center pt-2">
				<h6>Formularz zapisowy</h6>
			</div>
			<div class="card-body">
				<div class="container">
					<form class="signup-form" @submit.prevent="onSubmit">
						<div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
							<label for="default" class="mr-3">Kto dokonuje rezerwacji</label>
							<input id="default" type="text" class="form-control w-75" v-model="first_name"/>
						</div>

						<div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
							<label for="default" class="mr-3">Nazwisko rezerwanta</label>
							<input id="default" type="text" class="form-control w-75" v-model="last_name"/>
						</div>

						<div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
							<label for="default" class="mr-3">Adres internetowej skrzynki pocztowej</label>
							<input id="default" type="email" class="form-control w-75" v-model="email"/>
						</div>

						<div class="form-group d-flex align-items-center justify-content-between mb-3 mt-3">
							<label class="form-check-label">Pokoik dla ilu dusz?</label>
							<div class="form-group d-flex flex-row justify-content-start mb-3 mt-3">
								<div class="form-check form-check-radio mr-3">
									<label class="form-check-label">
										<input 
											class="form-check-input"
											type="radio"
											name="room"
											value="1"
											v-model="room"
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
											name="room"
											value="2"
											v-model="room"
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
											name="room"
											value="3"
											v-model="room"
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
											name="room"
											value="4"
											v-model="room"
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
											name="room"
											value="5"
											v-model="room"
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
											v-model="variant"
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
											v-model="variant"
										>
										<span class="form-check-sign"></span>
										23 - 25.06
									</label>
								</div>
							</div>
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
					<button class="btn me-2 mr-2 btn-success text-nowrap" type="button" v-on:click="onSubmit">
						<span class="btn-text">Dawaj do podsumowania</span>
					</button>
					<button class="btn me-2 mr-2 btn-danger" type="button">
						<span class="btn-text">Usuwam dane</span>
					</button>
				</div>
			</div>

		</div>
	</section>
</template>

<style>
.card-header {
	background-image: url("../assets/img/rivets.png") !important;
}
@media (max-width: 390px) {

}
	
</style>

<script>
import HeaderComponent from '../components/HeaderComponent';

export default {
	name: "BookingView",
	components: {
		HeaderComponent
	},
	data() {
		return {
			first_name: '',
			last_name: '',
			email: '',
			room: null,
			variant: null,
			showPrice: true,
		}
	},
	computed: {
		
	},
	methods: {
		onSubmit() {
			let order = {
				first_name: this.first_name,
				last_name: this.last_name,
				email: this.email,
				room: this.room,
				variant: this.variant,
			}

			this.first_name = '';
			this.last_name = '';
			this.email = '';
			this.room = null;
			this.variant = null;
			console.log(order);
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
