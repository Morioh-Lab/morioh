<template>
    <div :class="classes" class="mdc-form-field" ref="el">
        <slot />
    </div>
</template>


<script>
    import { ref, computed } from 'vue';
    import { MDCFormField } from '@material/form-field'

    export default {
        name: "v-form-field",
        props: {

            alignEnd: {
                type: Boolean,
                default: false
            },
            nowrap: {
                type: Boolean,
                default: false
            },           

        },

        setup(props) {

            const el = ref(null);
            let mdc = null;
            const destroy = () => { if (mdc) mdc.destroy() };

            onMounted(() => {
                destroy();
                mdc = MDCFormField.attachTo(el.value);
            });

            onUnmounted(destroy);

            const classes = computed(() => {
                return {
                    'mdc-form-field--align-end': props.alignEnd,
                    'mdc-form-field--nowrap': props.nowrap
                };

            });

            return { el, classes };

        }
    }

</script>