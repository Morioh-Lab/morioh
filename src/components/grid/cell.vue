<template>
    <div :class="classes">
        <slot />
    </div>

</template>


<script>
    import { computed } from 'vue';

    export default {
        name: "v-grid-cell",
        props: {
            span: {
                type: Number,
                validator: value => value >= 0 && value <= 12,
                default: 4
            },
            desktop: {
                type: Number,
                validator: value => value >= 0 && value <= 12,
                default: 0
            },
            tablet: {
                type: Number,
                validator: value => value >= 0 && value <= 12,
                default: 0
            },
            phone: {
                type: Number,
                validator: value => value >= 0 && value <= 12,
                default: 0
            },
            order: {
                type: Number,
                validator: value => value >= 0 && value <= 12,
                default: 0
            },

            align: {
                type: String,
                validator: value => ['top', 'bottom', 'middle'].indexOf(value) !== -1,
            },

            // order: {
            //     type: [String, Number],
            //     validator: value => {
            //         const num = Number(value);
            //         return isFinite(num) && num <= 12 && num > 0;
            //     },
            // }

        },

        setup(props, { emit, attrs, slots }) {

            const classes = computed(() => {
                let css = {};
                css[`mdc-layout-grid__cell--span-${props.span}`] = props.span > 0;
                css[`mdc-layout-grid__cell--span-${props.desktop}-desktop`] = props.desktop > 0;
                css[`mdc-layout-grid__cell--span-${props.tablet}-tablet`] = props.tablet > 0;
                css[`mdc-layout-grid__cell--span-${props.phone}-phone`] = props.phone > 0;
                css[`mdc-layout-grid__cell--align-${props.align}`] = !props.align;
                css[`mdc-layout-grid__cell--order-${props.order}`] = props.order > 0;
                return css;

            });

            return { el, classes };

        }
    }

</script>