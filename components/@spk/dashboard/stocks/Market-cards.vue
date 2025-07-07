<script lang="js">
export default {
    props: {
        customCardBody: {
            type: String,
            defult: ''
        },
        spanClass: {
            type: String,
            defult: ''
        },
        iconClass: {
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
        percentage: {
            type: String,
            defult: ''
        },
        count: {
            type: String,
            defult: ''
        },
    }
}
</script>
<template>
    <div class="card custom-card" :class="customCardBody">
        <div class="card-body">
            <div class="d-flex flex-wrap align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <div class="me-2">
                        <span :class="spanClass">
                            <i :class="iconClass"></i>
                        </span>
                    </div>
                    <div>
                        <span class="d-block fw-semibold">{{ name }}</span>
                        <span class="d-block">{{ money }}</span>
                    </div>
                </div>
                <div class="text-end text-danger fs-12">
                    <span class="d-block">{{ percentage }}</span>
                    <span class="d-block">{{ count }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>