<template>

    <div class="mdc-checkbox" ref="el">
        <input type="checkbox" v-model="model" class="mdc-checkbox__native-control" :id="id" />
        <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
        </div>
        <div class="mdc-checkbox__ripple"></div>
    </div>
    <label v-if="label" :for="id">{{label}}</label>

</template>

<script>
    
    import { ref, onMounted, onUnmounted, watch, toRefs, computed } from 'vue';

    import { MDCCheckbox } from '@material/checkbox';

    export default {
        name: "v-checkbox",
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            id: {
                type: String,
                default: () => {
                    return id();
                }
            },
            indeterminate: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            checked: {
                type: Boolean,
                default: false
            },
            label: String
        },

        setup(props, context) {

            const el = ref(null);
           // const { indeterminate, disabled, checked } = toRefs(props);

            let mdc = null;
            const destroy = () => { if (mdc) mdc.destroy() };          

            onMounted(() => {
                destroy();
                mdc = MDCCheckbox.attachTo(el.value);
                mdc.indeterminate = props.indeterminate;
                mdc.disabled = props.disabled;
            });
            onUnmounted(destroy);

            // watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
            //     /* ... */
            // })

            const classes = computed(() => {
                return {
                    'mdc-button--raised': props.raised,
                    'mdc-button--unelevated': props.unelevated,
                    'mdc-button--outlined': props.outlined,
                    'mdc-button--dense': props.dense
                }
            });

            return { el, classes };

        }

    }

</script>