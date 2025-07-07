<script>
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
        spanIconClass: {
            type: String,
            defult: ''
        },
        name: {
            type: String,
            defult: ''
        },
        count: {
            type: String,
            defult: ''
        },
        badgeClass: {
            type: String,
            defult: ''
        },
        percentageClass: {
            type: String,
            defult: ''
        },
        percentage: {
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
                    <span :class="spanClass">
                        <i :class="spanIconClass"></i>
                    </span>
                </div>
                <div class="flex-fill">
                    <span class="fw-semibold text-muted d-block mb-2">{{ name }}</span>
                    <h5 class="fw-semibold mb-2">{{ count }}</h5>
                    <p class="mb-0">
                        <span :class="badgeClass">This Month</span>
                    </p>
                </div>
                <div>
                    <span :class="percentageClass">{{ percentage }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>