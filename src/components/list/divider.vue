<template>
    <hr role="separator" :class="classes" />
</template>

<script>
    import { computed } from 'vue';

    export default {
        name: "v-list-divider",
        props: {
            padded: {
                type: Boolean,
                default: false
            },
            inset: {
                type: Boolean,
                default: false
            }

        },

        setup(props) {

            const classes = computed(() => {
                return {
                    'mdc-list-divider': 1,
                    'mdc-list-divider--padded': props.padded,
                    'mdc-list-divider--inset': props.inset
                }
            });
            return { classes };

        }
    }

</script>