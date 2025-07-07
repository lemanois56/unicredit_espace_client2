<template lang="">
    <slot></slot>
</template>
<script>
import { switcherStore } from '@/stores/switcher';
export default {
    data() {
        return {
            switcher: switcherStore(),
        }
    },
};
</script>
<style lang=""></style>
