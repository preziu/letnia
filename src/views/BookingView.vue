<template>
	<div class="container">
		<form class="signup-form" @submit.prevent="onSubmit">
			<div class="row mb-md-5 mt-md-5">
				<h6>Formularz zapisowy</h6>
			</div>
			<div class="form-group d-flex align-items-center justify-content-between mb-md-1 mt-md-1">
				<label for="default" class="mr-3">Imię i nazwisko</label>
				<input id="default" type="text" class="form-control w-75" v-model="name"/>
			</div>
			<div class="form-group d-flex align-items-center justify-content-between mb-md-1 mt-md-1">
				<label for="default" class="mr-3">Adres email</label>
				<input id="default" type="email" class="form-control w-75" v-model="email"/>
			</div>
			
			
			<div class="form-group d-flex align-items-center justify-content-between mb-md-1 mt-md-1">
				<label class="form-check-label">Wybierz wariant</label>
				<select v-model="variant">
					<option value="1">Namiot</option>
					<option value="2">Rojber</option>
					<option value="3">Rzezimieszek</option>
				</select>
			</div>
			<div v-if="stay" class="form-group d-flex align-items-center justify-content-between mb-md-1 mt-md-1">
				<label class="form-check-label">Ile osób w pokoju?</label>
				<select v-model.number="room">
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
			</div>
		</form>
	</div>

	<button class="btn mr-2 mb-2 btn-primary" type="button" v-on:click="onSubmit">
		<span class="btn-text">Potwierdź</span>
	</button>
	<button class="btn mr-2 mb-2 btn-primary" type="button">
		<span class="btn-text">Usuń</span>
	</button>
</template>

<script>
export default {
	name: "BookingView",
	data() {
		return {
			name: '',
			email: '',
			variant: null,
			room: null,
			stay: false
		}
	},
	watch: {
		variant(newVariant, oldVariant) {
			console.log(newVariant + " " + oldVariant + " " + this.stay);
			if (newVariant == 1) {
				this.stay = false; 
			} else {
				this.stay = true;
			}
		},
	},
	methods: {
		onSubmit() {
			let order = {
				name: this.name,
				email: this.email,
				variant: this.variant,
				room: this.room,
			}

			this.name = '';
			this.email = '';
			this.variant = null;
			this.room = null;
			console.log(order);
		}
	},
}
</script>
