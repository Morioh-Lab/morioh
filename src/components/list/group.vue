<template>
    <div class="mdc-list-group">
        <h3 v-if="subheader" class="mdc-list-group__subheader">
            {{ subheader }}
        </h3>
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'v-list-group',
        props: {
            subheader: String
        }
    }
</script>