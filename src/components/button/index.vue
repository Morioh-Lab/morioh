<template>
    <!-- <router-link v-if="to" :to="to" :class="['mdc-button',classes]" ref="el" role="button" >
        <div class="mdc-button__ripple"></div>
        <slot name="before">
            <i v-if="icon" class="material-icons mdc-icon-button__icon" aria-hidden="true" v-text="icon"></i>
        </slot>
        <span class="mdc-button__label">
            <slot /></span>
        <slot name="after" />
    </router-link>
    <button v-else :class="['mdc-button',classes]" ref="el" role="button">
        <div class="mdc-button__ripple"></div>
        <slot name="before">
            <i v-if="icon" class="material-icons mdc-button__icon" aria-hidden="true" v-text="icon"></i>
        </slot>
        <span class="mdc-button__label">
            <slot /></span>
        <slot name="after" />
    </button> -->
    <component :is="tag" :class="classes" ref="el" role="button" :to="to">
        <span class="mdc-button__ripple"></span>
        <slot name="before">
            <i v-if="icon" class="material-icons mdc-button__icon" aria-hidden="true" v-text="icon"></i>
        </slot>
        <span class="mdc-button__label">
            <slot /></span>
        <slot name="after" />
    </component>

</template>

<script>

    import { ref, onMounted, onUnmounted, watch, toRefs, computed } from 'vue';

    export default {
        name: "v-btn",
        props: {

            raised: {
                type: Boolean,
                default: false
            },
            unelevated: {
                type: Boolean,
                default: false
            },
            outlined: {
                type: Boolean,
                default: false
            },
            dense: {
                type: Boolean,
                default: false
            },
            to: {
                type: String
            },
            ripple: {
                type: Boolean,
                default: true
            },
            icon: String
        },

        setup(props, context) {

            const el = ref(null);

            // const { raised, unelevated, outlined, dense, ripple } = toRefs(props);


            // let mdc = null;
            // const destroy = () => { if (mdc) mdc.destroy() };

            // const attach = function () {
            //     if (ripple.value) {
            //         destroy();
            //         //mdc = MDCRipple.attachTo(document.querySelector('#' + id.value));
            //         //mdc = MDCRipple.attachTo(document.getElementById(id.value));
            //         mdc = MDCRipple.attachTo(el.value);

            //     } else {
            //         destroy();
            //     }

            // }

            // onMounted(attach);
            // onUnmounted(destroy);

            // watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
            //     /* ... */
            // })

            const tag = computed(() => {
                return props.to ? 'router-link' : 'button';
            });

            const classes = computed(() => {
                return {
                    'mdc-button': 1,
                    'mdc-button--raised': props.raised,
                    'mdc-button--unelevated': props.unelevated,
                    'mdc-button--outlined': props.outlined,
                    'mdc-button--dense': props.dense
                }
            });

            return { el, tag, classes };

        }

    }

</script>