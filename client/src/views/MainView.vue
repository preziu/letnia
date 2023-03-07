<template>
    <div class="container">
        <section class="section-sm">
            <div class="row d-flex justify-content-center">
                <img alt="Letnia logo" class="logo top position-absolute" src="@/assets/img/3d2.gif" />
                <img alt="2023" class="year position-relative top w-50" src="@/assets/img/2023.png" />
            </div>
        </section>

        <section class="section-sm fixed-bottom menu">
            <div class="row">
                <div class="col-sm-12 col-md-3">
                    <router-link to="/booking">
                        <img src="@/assets/img/DiskDrive.png"/>
                        <div class="text-primary">Zarezerwuj wczasy</div>
                    </router-link>
                </div>
                <div class="col-sm-12 col-md-3">
                    <router-link to="/timetable">
                        <img src="@/assets/img/Volume.png" alt="" />
                        <div class="text-primary">Plan zajec</div>
                    </router-link>
                </div>
                <div class="col-sm-12 col-md-3">
                    <router-link to="/stay">
                        <img src="@/assets/img/Internet.png" alt="" />
                        <div class="text-primary">Osrodek wypoczynkowy</div>
                    </router-link>
                </div>
                <div class="col-sm-12 col-md-3">
                    <router-link to="/merch">
                        <img src="@/assets/img/Paint.png" alt="" />
                        <div class="text-primary">Kup akcesoria</div>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
</script>

<style>
@media (max-width: 390px) {
    .row {
        min-width: 300px;
        height: 100%;
    }
    .row > div {
        margin-top: 2em !important;
    }
}

.logo {
    max-height: 80vh;
    max-width: 80%;
}

.year {
    z-index: -1;
}

.menu {
    margin-bottom: 10em;
}

a {
    text-decoration: none !important;
}
</style>
