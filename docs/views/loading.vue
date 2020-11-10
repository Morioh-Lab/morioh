<template>
    <div class="card">
        <div class="card-body">
            <content-loader class="w-full" :height="400" :speed="3" primaryColor="#f3f3f3" secondaryColor="#ecebeb">
                <!-- <circle cx="30" cy="30" r="20" />
                        <rect x="75" y="13" rx="4" ry="4" width="100" height="10" />
                        <rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
                        <rect x="0" y="70" rx="5" ry="5" width="100%" height="400" /> -->
                <circle cx="15" cy="15" r="15" />
                <rect x="35" y="5" rx="4" ry="4" width="117" height="6.4" />
                <rect x="35" y="20" rx="3" ry="3" width="85" height="6.4" />
                <rect x="0" y="40" rx="3" ry="3" width="100%" height="6.4" />
                <rect x="0" y="60" rx="3" ry="3" width="90%" height="6.4" />
                <!-- <rect x="0" y="120" rx="3" ry="3" width="80%" height="6.4" />                                 -->
                <rect x="0" y="80" rx="3" ry="3" width="100%" height="150" />

            </content-loader>
        </div>
    </div>
</template>


<script>

    import { ContentLoader } from 'vue-content-loader';
    export default {

        components: {
            ContentLoader
        }

    }
</script>