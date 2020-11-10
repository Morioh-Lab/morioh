<template>
    <component :class="classes" ref="el" :is="tag" :to="to">
        <span class="mdc-list-item__ripple"></span>
        <span v-if="$slots['graphic']" class="mdc-list-item__graphic">
            <slot name="graphic" />
        </span>
        <slot />
        <span v-if="$slots['text'] || $slots['primary'] || $slots['secondary']" class="mdc-list-item__text">
            <slot name="text" />
            <span v-if="$slots['primary']" class="mdc-list-item__primary-text">
                <slot name="primary" />
            </span>
            <span v-if="$slots['secondary']" class="mdc-list-item__secondary-text">
                <slot name="secondary" />
            </span>
        </span>
        <span v-if="$slots['meta']" class="mdc-list-item__meta">
            <slot name="meta" />
        </span>

    </component>

</template>

<script>
    import { ref, computed } from 'vue';

    export default {
        name: "v-list-item",
        props: {
            to: String,
            activated: Boolean,
            selected: Boolean,
            disabled: Boolean
        },

        setup(props, { emit, attrs, slots }) {

            const el = ref(null);

            const tag = computed(() => {
                return props.to ? 'router-link' : 'div';
            });

            const classes = computed(() => {
                return {
                    'mdc-list-item': 1,
                    'mdc-list-item--activated': props.activated,
                    'mdc-list-item--selected': props.selected,
                    'mdc-list-item--disabled': props.disabled
                }
            });

            return { el, tag, classes };

        }
    }

</script>