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
        rowClass: {
            type: String,
            defult: ''
        },
        colClass: {
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
        month: {
            type: String,
            defult: ''
        },
        statsIconClass: {
            type: String,
            defult: ''
        },
        badgeClass: {
            type: String,
            defult: ''
        },
        badgeIconClass: {
            type: String,
            defult: ''
        },
        svgIcon:
        {
            type: String,
            defult: ''
        },
        stats: {
            type: String,
            defult: ''
        },
        percentage: {
            type: String,
            defult: ''
        }
    }
}
</script>
<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <div :class="rowClass">
                <div :class="colClass">
                    <p class="mb-2">
                        <span class="fs-16">{{ name }}</span>
                    </p>
                    <p class="mb-2 fs-12">
                        <span class="fs-25 fw-semibold lh-1 vertical-bottom mb-0">{{ count }}</span>
                        <span class="d-block fs-10 fw-semibold text-muted">{{ month }}</span>
                    </p>
                    <a href="javascript:void(0);" class="fs-12 mb-0 text-primary">{{ stats }}<i
                            :class="statsIconClass"></i></a>
                </div>
                <div class="col-6">
                    <p :class="badgeClass"><i :class="badgeIconClass"></i>{{ percentage }}</p>
                    <p class="main-card-icon mb-0" v-html="svgIcon"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>