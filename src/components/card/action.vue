<template>
    <div :class="classes">       
        <div v-if="$slots['buttons']" class="mdc-card__action-buttons">
            <slot name="buttons" />
        </div>
        <div v-if="$slots['icons']" class="mdc-card__action-icons">
            <slot name="icons" />
        </div>
        <slot />
    </div>

</template>


<script>
    import { computed } from 'vue';

    export default {
        name: "v-card-action",
        props: {
            fullBleed: Boolean

        },

        setup(props) {

            const classes = computed(() => {
                return {
                    'mdc-card__actions': 1,
                    'mdc-card__actions--full-bleed': props.fullBleed
                }

            });

            return { classes };

        }
    }

</script>