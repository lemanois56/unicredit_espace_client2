<script lang="ts">
export default {
    props: {
        customCardClass: {
            type: String,
            defult: ''
        },
        cardBodyClass: {
            type: String,
            defult: ''
        },
        spanClass: {
            type: String,
            defult: ''
        },
        svgIcon: {
            type: String,
            defult: ''
        },
        count: {
            type: String,
            defult: ''
        },
        riIconColor: {
            type: String,
            defult: ''
        },
        riIconClass: {
            type: String,
            defult: ''
        },
        percentage: {
            type: String,
            defult: ''
        },
        text: {
            type: String,
            defult: ''
        },
    }
}
</script>
<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <div class="d-flex align-items-top">
                <div class="me-3">
                    <span :class="spanClass" v-html="svgIcon"></span>
                </div>
                <div class="flex-fill">
                    <div class="d-flex mb-1 align-items-top justify-content-between">
                        <h5 class="fw-semibold mb-0 lh-1">{{ count }}</h5>
                        <div :class="riIconColor">
                            <i :class="riIconClass"></i>{{ percentage }}
                        </div>
                    </div>
                    <p class="mb-0 fs-10 op-7 text-muted fw-semibold">{{ text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>