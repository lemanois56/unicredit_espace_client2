<template>
    <div class="card custom-card " :class="customCardClass">
        <div class="card-body" :class="bodyClass">
            <div class="d-flex align-items-top justify-content-between">
                <div>
                    <span :class="spanClass">
                        <i :class="iconClass"></i>
                    </span>
                </div>
                <div class="flex-fill ms-3">
                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                        <div>
                            <p class="text-muted mb-0">{{ name }}</p>
                            <h4 class="fw-semibold mt-1">{{ count }}</h4>
                        </div>
                        <div :id="chartId">
                            <template v-if="options && series">
                                <apexchart width="100px" height="40px" type="line" :options="options" :series="series">
                                </apexchart>
                            </template>
                            <template v-else>
                                <img :src="srcClass" alt="" :class="imgClass">
                            </template>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mt-1">
                        <div>
                            <a href="javascript:void(0);" :class="viewAllColor">{{ all }}
                                <i :class="arrowClass"></i>
                            </a>
                        </div>
                        <div class="text-end">
                            <p class="mb-0" :class="percentageColor">{{ percentage }}</p>
                            <span class="op-7 fs-11" :class="monthClass">{{ month }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
    props: {
        name: String,
        count: String,
        percentage: String,
        percentageColor: String,
        customCardClass: String,
        bodyClass: String,
        spanClass: String,
        iconClass: String,
        arrowClass: String,
        monthClass: String,
        chartId: String,
        viewAllColor: String,
        options: Object,
        series: Object,
        all: String,
        month: String,
        imgClass: String,
        srcClass: String,
    },
}
</script>

<style scoped></style>
