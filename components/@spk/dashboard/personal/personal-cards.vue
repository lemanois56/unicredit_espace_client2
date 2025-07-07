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
        name: {
            type: String,
            required: true
        },
        points: {
            type: Number,
            required: true
        },
        avatarClass: {
            type: String,
            default: ''
        },
        iconClass: {
            type: String,
            default: ''
        },
        count: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            default: ''
        },
        messages: {
            type: String,
            default: ''
        },
        options: {
            type: Object,
            required: true
        },
        series: {
            type: Array,
            required: true
        }
    }
}
</script>

<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <div class="p-4">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="mb-3">
                        <span class="d-block fw-semibold fs-15">{{ name }}</span>
                        <span class="text-muted fs-12 d-block">{{ points }}</span>
                    </div>
                    <div>
                        <span :class="avatarClass">
                            <i :class="iconClass"></i>
                        </span>
                    </div>
                </div>
                <div>
                    <p class="mb-0">
                        <span class="fs-24 fw-semibold">{{ count }}</span>
                        <span class="text-muted fs-12 ms-1">{{ text }}</span>
                    </p>
                    <span class="text-muted">{{ messages }}</span>
                </div>
            </div>
            <apexchart height="115px" type="area" :options="options" :series="series"></apexchart>
        </div>
    </div>
</template>

<style scoped></style>
