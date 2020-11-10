<template>
    <div :class="classes">          
        <slot />
    </div>
</template>


<script>
    import { computed } from 'vue';

    export default {
        name: "v-card",
        props: {
            outlined: Boolean,          
        },

        setup(props) {

            const classes = computed(() => {
                return {
                    'mdc-card': 1,
                    'mdc-card--outlined': props.outlined
                   
                };

            });

            return { classes };

        }
    }

</script>