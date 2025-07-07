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
        percentage: {
            type: String,
            defult: ''
        },
        iconClass: {
            type: String,
            defult: ''
        },
        tiIconClass: {
            type: String,
            defult: ''
        },
        tiSpanClass: {
            type: String,
            defult: ''
        },
        month: {
            type: String,
            defult: ''
        },
    }
}
</script>
<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <div>
                <p class="mb-2">{{ name }}</p>
                <h4 class="mb-0 fw-semibold mb-2">{{ count }}</h4>
                <span :class="badgeClass">{{ percentage }} <i :class="iconClass"></i></span><span
                    class="text-muted fs-11 ms-1">{{ month }}</span>
            </div>
            <div>
                <span :class="tiSpanClass">
                    <i :class="tiIconClass"></i>
                </span>
            </div>
        </div>
    </div>
</template>
<style scoped></style>