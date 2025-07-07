<template lang="">
    <customPageSwitcher/>
    <slot></slot>
    <BackToTop />
</template>
<script>
import customPageSwitcher from "@/components/common/customPageSwitcher.vue";
import BackToTop from "@/components/common/backtotop.vue"
export default {
    components: {
        customPageSwitcher,
        BackToTop
    },
    mounted() {
        document.body.classList.add('landing-body');
    },
    unmounted() {
        document.body.classList.remove('landing-body');
    },
};
</script>
<style lang=""></style>
