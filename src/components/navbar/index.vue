<template>
    <div :class="classes" ref="el">
        <div class="mdc-top-app-bar__row">
            <div class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <slot name="start" />
                <button v-if="icon" class="mdc-top-app-bar__navigation-icon material-icons mdc-icon-button"
                    aria-label="Open navigation menu" v-text="icon"></button>
                <span v-if="title" class="mdc-top-app-bar__title" v-text="title"></span>

            </div>
            <div class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                <slot name="end" />
            </div>
        </div>
    </div>

</template>


<script>
    import { ref, onMounted, onUnmounted, computed } from 'vue';
    // import { MDCRipple } from '@material/ripple';
    // import { MDCIconButtonToggle } from '@material/icon-button';
    import { MDCTopAppBar } from '@material/top-app-bar';

    export default {
        name: "v-navbar",
        props: {

            threshold: {
                type: Number,
                default: 120
            },
            fixed: {
                type: Boolean,
                default: false
            },

            shrinkOnScroll: {
                type: Boolean,
                default: false
            },
            icon: String,

            title: String,
            // short, short-collapsed, prominent, dense
            mode: String,

        },

        setup(props, { emit, attrs, slots }) {

            const el = ref(null);
            let shrink = ref(false);
            let mdc = null, prevY = 0;
            // const { type, fixed } = toRefs(props);

            const classes = computed(() => {
                let obj = {
                    'mdc-top-app-bar': true,
                    'mdc-top-app-bar--fixed': props.fixed,
                    'mdc-top-app-bar--dense': shrink.value
                }
                if (props.mode) {
                    obj[`mdc-top-app-bar--${props.mode}`] = true;
                }
                return obj;
            });

            const scroll = () => {
                const y = window.pageYOffset || document.documentElement.scrollTop;
                // Stop executing this function if the difference between
                // current scroll position and last scroll position is less than some offset
                if (y < 0 || Math.abs(y - prevY) < props.threshold) {
                    return;
                }
                shrink.value = y > prevY;
                prevY = y;

            };

            const destroy = () => {
                if (mdc) mdc.destroy();

                if (typeof window !== undefined && props.shrinkOnScroll) {
                    window.removeEventListener('scroll', scroll);
                }
            };

            onMounted(() => {
                destroy();
                mdc = MDCTopAppBar.attachTo(el.value);
                // mdc.listen('MDCTopAppBar:nav', () => {
                //     emit('nav', {});
                // });

                if (typeof window !== undefined && props.shrinkOnScroll) {
                    window.addEventListener('scroll', scroll);
                }
            });
            onUnmounted(destroy);

            return { el, classes };

        }
    }

</script>