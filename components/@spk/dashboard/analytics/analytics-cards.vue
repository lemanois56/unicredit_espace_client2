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
        mainDivClass: {
            type: String,
            defult: ''
        },
        tiIconSpanClass: {
            type: String,
            defult: ''
        },
        tiIconClass: {
            type: String,
            defult: ''
        },
        options: {
            type: String,
            defult: ''
        },
        series: {
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
        text: {
            type: String,
            defult: ''
        },
        showIcon: {
            type: Boolean,
            defult: false,
        },
        showChart: {
            type: Boolean,
            default: false
        },
        showChart: {
            type: String,
            defult: ''
        },
        chartId: {
            type: String,
            defult: ''
        },
        width: {
            type: Number,
            default: ''
        }
    }
}
</script>
<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <div :class="mainDivClass">
                <div>
                    <h6 class="fw-semibold mb-3">{{ name }}</h6>
                    <span class="fs-25 fw-semibold">{{ count }}</span>
                    <span :class="tiIconSpanClass">{{ text }} <i :class="tiIconClass"></i></span>
                </div>
                <template v-if="showIcon">
                    <div>
                        <span class="avatar avatar-md bg-secondary">
                            <i class="ri-user-3-line"></i>
                        </span>
                    </div>
                </template>
                <template v-if="showChart">
                    <div :id="chartId" :class="chartClass">
                        <apexchart height="40px" :width="width" type="line" :options="options" :series="series">
                        </apexchart>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<style scoped></style>