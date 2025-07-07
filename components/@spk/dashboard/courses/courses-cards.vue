<script lang="js">
export default {
    props: {
        customCardClass: {
            type: String,
            default: ''
        },
        cardBodyClass: {
            type: String,
            default: ''
        },
        spanClass: {
            type: String,
            default: ''
        },
        iconClass: {
            type: String,
            default: ''
        },
        count: {
            type: String,
            default: ''
        },
        trendingClass: {
            type: String,
            default: ''
        },
        trendingIconClass: {
            type: String,
            default: ''
        },
        percentage: {
            type: String,
            default: ''
        },
        viewallClass: {
            type: String,
            default: ''
        },
        viewallIconClass: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
    }
}
</script>
<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <div class="d-flex flex-wrap align-items-top gap-2">
                <div class="me-1">
                    <span :class="spanClass">
                        <i :class="iconClass"></i>
                    </span>
                </div>
                <div class="flex-fill">
                    <h5 class="d-block fw-semibold fs-18 mb-1">{{ count }}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="text-muted fs-12">{{ name }}</div>
                        <div :class="trendingClass">
                            <i :class="trendingIconClass"></i>{{ percentage }}
                        </div>
                    </div>
                    <a href="javascript:void(0);" :class="viewallClass">View All
                        <i :class="viewallIconClass"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>