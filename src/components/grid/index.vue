<template>
    <div :class="classes">
        <div class="mdc-layout-grid__inner">
            <slot />
        </div>
    </div>
</template>


<script>
    import { computed } from 'vue';

    export default {
        name: "v-grid",
        props: {
           
            fixedColumWidth: {
                type: Boolean,
                default: false
            },

            align: {
                type: String,
                validator: value => ['left', 'right'].indexOf(value) > -1,
            }

        },

        setup(props) {

            const classes = computed(() => {
                return {
                    'mdc-layout-grid': 1,
                    'mdc-layout-grid--fixed-column-width': props.fixedColumWidth,
                    'mdc-layout-grid--align-left': props.align === 'left',
                    'mdc-layout-grid--align-right': props.align === 'right',
                };

            });

            return { classes };

        }
    }

</script>