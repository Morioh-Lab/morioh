<template>
    <div class="mdc-dialog" :class="classes" ref="el">
        <div class="mdc-dialog__container">
            <div class="mdc-dialog__surface" role="alertdialog" aria-modal="true" :aria-labelledby="title_id"
                :aria-describedby="content_id">
                <h2 class="mdc-dialog__title" :id="title_id" v-text="title"></h2>
                <div class="mdc-dialog__content" :id="content_id">
                    <slot />
                </div>
                <div v-if="$slots.actions" class="mdc-dialog__actions">
                    <slot name="actions"></slot>
                </div>
            </div>
        </div>
        <div class="mdc-dialog__scrim"></div>
    </div>
</template>


<script>

    import { computed, ref, watch, onMounted, onUnmounted } from 'vue';
    import { MDCDialog } from '@material/dialog';
    import { id } from '../../utils';

    export default {
        name: "v-dialog",
        props: {
            id: {
                type: String,
                default: () => {
                    return id('dialog');
                }
            },
            open: Boolean,
            stacked: Boolean,
            scrollable: Boolean,
            title: String,
        },

        setup(props, { emit }) {

            const el = ref(null);
            const title_id = props.id + 'title';
            const content_id = props.id + 'content';

            let mdc = null;
            const destroy = () => { if (mdc) mdc.destroy() };

            onMounted(() => {
                destroy();
                mdc = MDCDialog.attachTo(el.value);
                props.open ? mdc.open() : mdc.close();
                mdc.listen('MDCDialog:opening', ({ detail }) => {
                    emit('opening', detail);
                });
                mdc.listen('MDCDialog:opened', ({ detail }) => {
                    emit('opened', detail);
                });
                mdc.listen('MDCDialog:closing', ({ detail }) => {
                    emit('closing', detail);
                });
                mdc.listen('MDCDialog:closed', ({ detail }) => {
                    emit('closed', detail);
                });

            });

            onUnmounted(destroy);

            watch(() => props.open, (open) => {
                if (mdc)
                    open ? mdc.open() : mdc.close();

            });

            const classes = computed(() => {
                return {
                    'mdc-dialog': 1,
                    'mdc-dialog--scrollable': props.scrollable,
                    'mdc-dialog--stacked': props.stacked

                };

            });

            return { el, classes, title_id, content_id };

        }
    }

</script>