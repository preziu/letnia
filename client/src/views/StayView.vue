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
    <div class="card card-secondary">
        <div class="card-header text-center pt-3">
            <h6>Kiedyś to było</h6>
        </div>
        <div class="card-body">
            <div id="carousel" class="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                    <li data-target="#carousel" data-slide-to="3"></li>
                    <li data-target="#carousel" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/7.jpg">
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/8.jpg">
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/9.jpg">
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/10.jpg">
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/11.jpg">
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Poprzednie</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Następne</span>
                </a>
            </div>
        </div>
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
