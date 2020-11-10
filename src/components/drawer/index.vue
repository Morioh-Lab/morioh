<template>
    <div :class="classes" ref="el">
        <div v-if="$slots.header || title || subtitle" class="mdc-drawer__header">
            <h3 v-if="title" class="mdc-drawer__title">
                {{ title }}
            </h3>
            <h6 v-if="subtitle" class="mdc-drawer__subtitle">
                {{ subtitle }}
            </h6>
            <slot name="header" />
        </div>
        <div class="mdc-drawer__content">
            <slot />
        </div>
    </div>
    <div class="mdc-drawer-scrim" v-if="modal"></div>

</template>

<script>

    import { ref, onMounted, onUnmounted, watch, computed } from 'vue';
    import { MDCDrawer } from '@material/drawer';

    export default {
        name: "v-drawer",
        // model: {
        //     prop: 'open'
        // },
        props: {
            modal: Boolean,
            dismissible: Boolean,
            open: {
                type: Boolean,
                default: false

            },
            title: String,
            subtitle: String,
        },

        setup(props, { emit }) {

            const el = ref(null);

            // const { raised, unelevated, outlined, dense, ripple } = toRefs(props);

            const open = ref(props.open);

            let mdc = null;
            const destroy = () => { if (mdc) mdc.destroy() };

            onMounted(() => {
                destroy();

                mdc = MDCDrawer.attachTo(el.value);
                mdc.listen('MDCDrawer:closed', () => {
                    emit('change', false);
                    emit('close');
                });
                mdc.listen('MDCDrawer:opened', () => {
                    emit('change', true);
                    emit('open');
                });

                mdc.open = props.open;

            });
            onUnmounted(destroy);

            // watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
            //     /* ... */
            // })         

            // watch(open, (open) => {
            //     mdc.open = open.value;

            //     console.log(open.value);
            // });

            // watch((props.open, open => {

            //     mdc.open = open.value;

            //     console.log(open);

            // }));

            // watch(open, (open, prevCount) => {
            //     /* ... */
            //     mdc.open = open.value;
            //     console.log(open);
            // })

            watch(() => props.open, (first, second) => {
                console.log(
                    "Watch props.selected function called with args:",
                    first,
                    second
                );
                mdc.open = first;

            });

            // const model = computed(() => {
            //     set(value){

            //         this.$emit('change', value)
            //     }
            // });

            const classes = computed(() => {
                return {
                    'mdc-drawer': 1,
                    'mdc-drawer--dismissible': props.dismissible && !props.modal,
                    'mdc-drawer--modal': props.modal

                }
            });

            return { el, classes };

        }

    }

</script>