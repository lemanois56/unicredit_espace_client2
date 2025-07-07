<script lang="js">
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
        svgSpanClass: {
            type: String,
            defult: ''
        },
        riIconClass: {
            type: String,
            defult: ''
        },
        percentageColor: {
            type: String,
            defult: ''
        },
        percentage: {
            type: String,
            defult: ''
        },
        month: {
            type: String,
            defult: ''
        },
        text: {
            type: String,
            defult: ''
        },
        count: {
            type: String,
            defult: ''
        },
        svgIcon: {
            type: String,
            defult: ''
        },
    }
}
</script>
<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <div class="d-flex flex-wrap align-items-top">
                <div class="me-3 lh-1">
                    <span :class="svgSpanClass" v-html="svgIcon"></span>
                </div>
                <div>
                    <p class="mb-1 text-muted">{{ text }}</p>
                    <h5 class="fw-semibold mb-2">{{ count }}</h5>
                    <p class="fs-11 text-muted mb-0">
                        <span :class="percentageColor">{{ percentage }}
                            <i :class="riIconClass"></i>
                        </span> {{ month }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>