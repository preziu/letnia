<template>
    <footer class="">
        <nav id="navbar-footer" 
            class="
                navbar
                navbar-main
                navbar-expand-lg
                navbar-dark
                justify-content-between
                navbar-footer
                ">
            <ul class="
                navbar-nav
                navbar-nav-hover
                flex-row
                align-items-center
                ">
                <li class="nav-item">
                    <a href="index.html" class="nav-link" role="button">
                        <span class="nav-link-inner-text">📺 Start</span>
                    </a>
                </li>
            </ul>
            <div class="time text-center">9:16 pm</div>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'NavFooter',
};

</script>

<style>
.navbar-footer {
    bottom: 0;
}
</style>
