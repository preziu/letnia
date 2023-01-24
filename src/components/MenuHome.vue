<template lang="">
    <div class="container">
        <div class="row">
            <div class="col">
                <router-link to="/booking">
                    <img src="../assets/img/DiskDrive.png" alt="">
                    <div class="text-primary">
                        Zarezerwuj wczasy
                    </div>
                </router-link>
            </div>
            <div class="col">
                <img src="../assets/img/Volume.png" alt="">
                <div class="text-primary">
                    Plan zajec
                </div>
                
            </div>
            <div class="col">
                <img src="../assets/img/Internet.png" alt="">
                <div class="text-primary">
                    Osrodek wypoczynkowy
                </div>
            </div>
            <div class="col">
                <img src="../assets/img/Paint.png" alt="">
                <div class="text-primary">
                    Kup akcesoria
                </div>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
</script>

<style>
@media (max-width: 390px) {
    .col {
        min-width: 300px;
        height: 100%;
        margin-top: 2em
    }
}

@media (max-width: 1180px) {
    .col {
        min-width: 400px;
        height: 100%;
        margin-top: 3em
    }
}

a {
    text-decoration: none !important;
}
    
</style>
