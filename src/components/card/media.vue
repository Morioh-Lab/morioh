<template>
    <div :class="classes" :style="style">
        <div class="mdc-card__media-content">
            <slot />
        </div>
    </div>
</template>


<script>

    import { computed } from "vue";
    export default {
        name: 'v-card-media',

        props: {
            src: String,
            square: Boolean,
            rectangle: { type: Boolean, default: true }
        },

        setup(props) {

            const style = computed(() => {
                return props.src ? `background-image: url(${props.src});` : null
            });

            const classes = computed(() => {
                return {
                    'mdc-card__media': 1,
                    'mdc-card__media--16-9': props.rectangle,
                    'mdc-card__media--square': props.square
                }
            });

            return { style, classes };

        }
    }
</script>