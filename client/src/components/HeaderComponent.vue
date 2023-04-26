<template>
    <section class="section-xsm">
		<div class="d-flex">
			<div class="mr-4">
				<router-link to="/">
                    <img src="@/assets/img/MyComputer.png" />
                    <div class="mt-1 hover text-info">Strona główna</div>
                </router-link>
            </div>
			<div class="flex-grow-1">
				<slot />
			</div>
		</div>
	</section>
</template>

<script>
export default {
    name: "HeaderComponent",
}
</script>

<style scoped>
@media (max-width: 390px) {
    .section-xsm {
		margin-top: 20px;
		margin-bottom: 20px;
	}
}
</style>
