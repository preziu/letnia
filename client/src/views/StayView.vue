<template>
    <HeaderComponent>
        <div>
            <div class="d-flex justify-content-center">
                <img class="d-block w-50" src="@/assets/img/regle.png">
            </div>
        </div>
    </HeaderComponent>
    <div class="card-body bg-white mb-2">
        <p class="mt-1">Regle to nie kolejny obiekt noclegowy - to miejsce wypoczynku i spotkań, z ciekawą historią.</p>
        <p>Ośrodek REGLE mieści się w dawnych zabudowaniach klasztornych i gospodarskich zakonu żeńskiego wzniesionego w latach 1765 – 1815. Wnętrza Ośrodka zostały starannie odremontowane, przy zachowaniu zabytkowego charakteru.</p>
        <p>Wspaniałe miejsce z dobrą energią - dla amatorów górskich wędrówek, jazdy na rowerze, grzybobrania,a w sezonie zimowym także narciarstwa i snowboardingu.</p>
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
