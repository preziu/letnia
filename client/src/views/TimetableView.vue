<template>
    <HeaderComponent>
        <p>🎸 Występy z muzyką na żywo (koncerty)</p>
        <p>🎹 Dyskoteka (dj sety)</p>
        <p>🌞 Spotkania i warsztaty (plenerowe i pod dachem)</p>
        <h2></h2>
    </HeaderComponent>
    <p>Najmniejszy festiwal na Świecie. W sercu malowniczej wsi w magicznej Kotlinie Kłodzkiej.</p>
    <p>👉🏼Ty, Twoje ziomki i ziomki Twoich ziomków👈🏼</p>
    <p>🎸 muzyczka 🏓 zabawa 🌞 chill 🏖️</p>
    <p>IG: <a href="https://www.instagram.com/letniakolonia/">https://www.instagram.com/letniakolonia/</a> FB: <a href="https://www.facebook.com/letniakolonia/">https://www.facebook.com/letniakolonia/</a></p>
    <br>
    <div class="card card-secondary">
        <div class="card-header text-center">Oh jaka miła galeryjka</div>
        <div class="card-body">
            <div id="carousel" class="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/1.jpeg" alt="Ale jazdeczka!">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">Ale pływanko mmm!</h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/2.jpeg" alt="Zdróweczko ;)">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">Zdróweczko ;)</h3>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/3.jpeg" alt="Pozdrówki kochani <3">
                            <div class="mask rgba-black-light"></div>
                        </div>
                        <div class="carousel-caption">
                            <h3 class="h3-responsive">Pozdrówki kochani</h3>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
.carousel-item {
    height: 60vh;
}
    
</style>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
    name: "TimetableView",
    components: {
        HeaderComponent
    },
}
</script>
