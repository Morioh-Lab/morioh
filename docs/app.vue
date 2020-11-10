<template>


    <menubar :open="open"></menubar>


    <div class="mdc-drawer-app-content">
        <navbar></navbar>
        <div class="main-content">
            <div class="mdc-top-app-bar--fixed-adjust">
                <router-view keep-alive :key="$route.fullPath"></router-view>
            </div>
        </div>
    </div>

</template>

<script>

    import { defineAsyncComponent, ref, provide } from "vue";

    export default {
        components: {
            navbar: defineAsyncComponent(() => import("./views/navbar.vue")),
            menubar: defineAsyncComponent(() => import("./views/menubar.vue")),
        },


        setup(props) {

            let open = ref(true);

            const toggle = () => {
                open.value = !open.value;
                console.log(open.value);
            }

            provide('toggle', toggle);

            // watch(open, open => {
            //   console.log(open);
            // })

            return {
                open
            }

        }


    }

</script>