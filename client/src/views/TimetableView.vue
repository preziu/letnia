<template>
    <HeaderComponent>
        <div>
			<div class="d-flex justify-content-center">
				<img class="w-100" src="@/assets/img/zabawa.png" alt="Zamawianko!">
			</div>
		</div>
    </HeaderComponent>
    <div class="card-body bg-white mb-2">
        <p class="mt-1">🎸 Występy z muzyką na żywo (koncerty)</p>
        <p>🎹 Dyskoteka (dj sety)</p>
        <p>🌞 Spotkania i warsztaty (plenerowe i pod dachem)</p>
        <p>Najmniejszy festiwal na Świecie. W sercu malowniczej wsi w magicznej Kotlinie Kłodzkiej.</p>
        <p>👉🏼Ty, Twoje ziomki i ziomki Twoich ziomków👈🏼</p>
        <p>🎸 muzyczka 🏓 zabawa 🌞 chill 🏖️</p>
        <p>IG: <a href="https://www.instagram.com/letniakolonia/" target="_blank">https://www.instagram.com/letniakolonia/</a> FB: <a href="https://www.facebook.com/letniakolonia/" target="_blank">https://www.facebook.com/letniakolonia/</a></p>
    </div>
    <div class="card card-secondary">
        <div class="card-header text-center pt-3">
            <h6>Zobacz co się działo ostatnio!</h6>
        </div>
        <div class="card-body">
            <div id="carousel" class="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                    <li data-target="#carousel" data-slide-to="3"></li>
                    <li data-target="#carousel" data-slide-to="4"></li>
                    <li data-target="#carousel" data-slide-to="5"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/1.jpg">
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/2.jpg">
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/3.jpg">
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/4.jpg">
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/5.jpg">
                            <div class="mask rgba-black-light"></div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="view">
                            <img class="d-block w-100" src="@/assets/img/gallery/6.jpg">
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
    <div class="pb-4"></div>
</template>

<style>
@media (max-width: 390px) {
    .carousel-caption {
        display: none;
    }
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
