<template>
    <section class="section-sm">
		<div class="d-flex">
			<div>
				<router-link to="/">
                    <img src="@/assets/img/MyComputer.png" />
                    <div class="mt-1">Strona główna</div>
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
