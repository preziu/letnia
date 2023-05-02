<template>
    <HeaderComponent>
        <div>
            <div class="d-flex justify-content-center">
                <img class="d-block w-50" src="@/assets/img/regle.png">
            </div>
        </div>
    </HeaderComponent>
    <div class="card-body bg-white mb-2">
        <p class="mt-1">⛰️ REGLE to nie kolejny obiekt noclegowy - to miejsce wypoczynku i spotkań, z ciekawą historią, które znamy od dziecka i zawsze marzyliśmy, żeby organizować tu mały, klimatyczny festiwal 🎉</p>
        <p>🏨 Ośrodek mieści się w dawnych zabudowaniach klasztornych i gospodarskich zakonu żeńskiego wzniesionego w latach 1765 – 1815. Piaskowiec z XVIII wieku przeplata się tu z modernistyczną wizją PRLu, a wszystko doprowadzone jest do współczesnych standardów 🚀</p>
        <p>❤️ Wspaniałe miejsce z dobrą energią - dla amatorów aktywnego spędzania czasu i miłośników miejsc ustronnych, z duszą ❤️</p>
    </div>
</template>

<style>
    
</style>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
    name: "StayView",
    components: {
        HeaderComponent
    },
}
</script>
