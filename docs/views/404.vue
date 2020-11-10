<template>
    <div class="card mb-15">
        <!-- <div class="overlay overlay-hover animation-hover text-center">
            <img src="https://i.imgur.com/9pgDFmY.png" class="overlay-figure overlay-scale img-fluid"
                alt="404 page not found">

           

        </div> -->
        <div class="card-body text-center">
            <div class="mb-15">
                <i class="fa-5x far fa-exclamation-triangle text-warning"></i>
            </div>

            <h4>This page isn't available</h4>
            <h5>The link you followed may be broken, or the page may have been removed.</h5>

            <div class="mb-15">
                <router-link class="btn btn-outline-primary" to="/">HOME PAGE</router-link>
            </div>
        </div>
    </div>

</template>