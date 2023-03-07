<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <img alt="Letnia logo" class="logo" src="@/assets/img/3d2.gif" />
        </div>
    

        <div class="row menu">
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

a {
    text-decoration: none !important;
}
</style>
