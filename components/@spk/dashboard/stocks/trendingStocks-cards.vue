<script lang="js">
export default {
    props: {
        customCardClass: {
            type: String,
            defult: ''
        },
        iconClass: {
            type: String,
            defult: ''
        },
        count: {
            type: String,
            defult: ''
        },
        name: {
            type: String,
            defult: ''
        },
        money: {
            type: String,
            defult: ''
        },
        percentageIconClass: {
            type: String,
            defult: ''
        },
        percentage: {
            type: String,
            defult: ''
        },
        shortClass: {
            type: String,
            defult: ''
        },
        buyClass: {
            type: String,
            defult: ''
        },
    }
}
</script>
<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
            <div class="d-flex flex-fill align-items-center">
                <div class="me-2">
                    <span class="avatar avatar-rounded bg-light p-2">
                        <i :class="iconClass"></i>
                    </span>
                </div>
                <div class="lh-1">
                    <span class="fw-semibold d-block mb-2 text-default">{{ name }}</span>
                    <span class="d-block text-muted fs-12">{{ count }}</span>
                </div>
            </div>
            <div class="text-success fs-12 text-end">
                <span class="d-block">{{ percentage }}<i :class="percentageIconClass"></i></span>
                <span class="d-block">{{ money }}</span>
            </div>
        </div>
        <div class="d-flex gap-2">
            <button type="button" :class="shortClass">Short</button>
            <button type="button" :class="buyClass">Buy</button>
        </div>
    </div>
</template>
<style scoped></style>