<script lang="js">
export default {
    props: {
        custoCardClass: String,
        cardBodyClass: String,
        dflexClass: String,
        chartId: String,
        series: Object,
        options: Object,
        type: String,
        height: String,
        width: String,
        textClass: String,
        titleClass: String,
        text: String,
        title: String,
    }
}
</script>
<template>
    <div :class="['card custom-card', custoCardClass]">
        <div :class="['card-body', cardBodyClass]">
            <div :class="dflexClass">
                <div :id="chartId">
                    <apexchart :width="width" :height="height" :type="type" :options="options" :series="series">
                    </apexchart>
                </div>
                <div class="p-2">
                    <p :class="titleClass">{{ title }}</p>
                    <h5 :class="textClass">{{ text }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>