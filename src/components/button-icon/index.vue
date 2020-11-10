<template>
    <router-link ref="el" v-if="to" :to="to" role="button" class="mdc-icon-button"
        :class="{'mdc-icon-button--on': value}">
        <slot>
            <i v-if="icon" class="material-icons mdc-button__icon" aria-hidden="true" v-text="icon"></i>
        </slot>
    </router-link>
    <button ref="el" role="button" class="mdc-icon-button" :class="{'mdc-icon-button--on': value}" v-else>
        <slot>
            <i v-if="icon" class="material-icons mdc-icon-button__icon" aria-hidden="true" v-text="icon"></i>
        </slot>
        <slot v-if="toggle" name="on">
            <i v-if="on" class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on" aria-hidden="true"
                v-text="on"></i>
        </slot>
        <slot v-if="toggle" name="off">
            <i v-if="off" class="material-icons mdc-icon-button__icon" aria-hidden="true" v-text="off"></i>
        </slot>
    </button>

</template>

<script>
    import { ref, onMounted, onUnmounted, watch, toRefs, computed } from 'vue';
    // import { MDCRipple } from '@material/ripple';
    import { MDCIconButtonToggle } from '@material/icon-button';
    // import { id } from '../utils.js';

    export default {
        name: "v-btn-icon",
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            // id: {
            //     type: String,
            //     default: () => {
            //         return id();
            //     }
            // },
            value: {
                type: Boolean,
                default: false
            },
            to: String,
            icon: String,
            on: String,
            off: String,
            toggle: {
                type: Boolean,
                default: false
            },
        },

        setup(props, context) {

            const el = ref(null);

            // const { value } = toRefs(props);

            let mdc = null, rip = null;
            const destroy = () => {
                if (mdc) mdc.destroy();
                if (rip) rip.destroy();
            };

            const attach = function () {
                // const el = document.getElementById(props.id);
                destroy();

                mdc = new MDCIconButtonToggle(el.value);

                if (props.toggle) {

                    // For default and custom icon button
                    mdc.listen('MDCIconButtonToggle:change', ({ detail }) => {
                        props.value = detail.isOn;
                    });
                    mdc.on = props.value;
                }
                mdc.unbounded = false;

            }

            onMounted(attach);
            onUnmounted(destroy);

            // watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
            //     /* ... */
            // })

            // const classes = computed(() => {
            //     return {
            //         'mdc-icon-button--on': value.value,
            //         'mdc-button--raised': raised.value,
            //         'mdc-button--unelevated': unelevated.value,
            //         'mdc-button--outlined': outlined.value,
            //         'mdc-button--dense': dense.value
            //     }
            // });

            return { el };

        }
    }
</script>