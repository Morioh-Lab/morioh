<template>
    <div :class="classes" ref="el" v-bind="attrs">
        <slot />
    </div>
</template>


<script>
    import { ref, computed, onMounted, onUnmounted } from 'vue';
    import { MDCList } from '@material/list';

    export default {
        name: "v-list",
        model: {
            prop: 'selectedIndex',
            event: 'change',
        },

        props: {
            nonInteractive: { type: Boolean, default: false },
            dense: Boolean,
            avatar: Boolean,
            thumbnail: Boolean,
            icon: Boolean,
            video: Boolean,
            textual: Boolean,
            twoLine: Boolean,
            singleSelection: Boolean,
            wrapFocus: Boolean,
            vertical: Boolean,
            selectedIndex: { type: [String, Number, Array] },
            ariaOrientation: { type: String, default: 'vertical' },
            typeAhead: Boolean,

        },

        setup(props) {

            const el = ref(null);
            let mdc = null;
            const destroy = () => { if (mdc) mdc.destroy() };

            onMounted(() => {
                destroy();
                mdc = MDCList.attachTo(el.value);
                mdc.vertical = props.vertical;
                mdc.wrapFocus = props.wrapFocus;
                mdc.selectedIndex = props.selectedIndex;

            });

            onUnmounted(destroy);

            const classes = computed(() => {
                return {
                    'mdc-list': 1,
                    'mdc-list--dense': props.dense,
                    'mdc-list--avatar-list': props.avatar,
                    'mdc-list--two-line': props.twoLine,
                    'mdc-list--non-interactive': props.nonInteractive,
                    'mdc-list--textual-list': props.textual,
                    'mdc-list--icon-list': props.icon,
                    'mdc-list--thumbnail-list': props.thumbnail,
                    'mdc-list--video-list': props.video
                }

            });

            const attrs = computed(() => {
                return {
                    'aria-orientation': props.ariaOrientation,
                    'role': props.singleSelection ? 'listbox' : 'list'
                }

            });

            return { el, classes, attrs };

        }
    }

</script>