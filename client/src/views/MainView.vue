<template>
    <div class="container">
        <div class="row d-flex justify-content-center">
            <img alt="Letnia logo" class="logo top position-relative" src="@/assets/img/3d2.gif" />
            <img alt="2025" class="year position-absolute top mt-5" src="@/assets/img/2025.png" />
        </div>

        <div class="row align-items-center">
            <div class="col-sm-12 col-md-3">
                <router-link to="/order">
                    <img src="@/assets/img/DiskDrive.png"/>
                    <div class="text-primary hover">Zarezerwuj wczasy</div>
                </router-link>
            </div>
            <div class="col-sm-12 col-md-3 mt-3">
                <router-link to="/timetable">
                    <img src="@/assets/img/Volume.png" alt="" />
                    <div class="text-primary hover">Plan zajęć</div>
                </router-link>
            </div>
            <div class="col-sm-12 col-md-3 mt-3">
                <router-link to="/stay">
                    <img src="@/assets/img/Internet.png" alt="" />
                    <div class="text-primary hover">Ośrodek wypoczynkowy</div>
                </router-link>
            </div>
            <div class="col-sm-12 col-md-3 mt-3">
                <img src="@/assets/img/Paint.png" alt="" />
                <div class="text-primary">Już niebawem!</div>
            </div>
        </div>
        <div class="row mt-5 d-flex justify-content-center mb-5">
            <div class="mr-1 text-primary col-sm-12">
            letniakolonia@regle.com.pl
            </div>
            <div class="text-primary col-sm-12">
                665 999 177
            </div>
            <div class="przemunio text-primary col-sm-12">
                <br>made by Przemunio ✌️
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.hover:hover {
    color: blue !important;
    cursor: pointer !important;
}

.logo {
    max-height: 80vh;
    max-width: 80%;
}

.year {
    z-index: -1;
    max-width: 35%;
}

a {
    text-decoration: none !important;
}

.przemunio {
    font-size: 0.8em;
}
</style>
