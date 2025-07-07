<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        card: Object,
    }
}
</script>

<template>
    <div :class="['card custom-card', customCardClass]">
        <div :class="['card-body', cardBodyClass]">
            <div class="btn-list float-end">
                <a href="javascript:void(0);" class="avatar avatar-sm avatar-rounded bg-light text-default"
                    data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to wishlist"
                    data-bs-original-title="Add to wishlist"><span><i class="bi bi-heart"></i></span></a>
                <a href="javascript:void(0);" class="avatar avatar-sm avatar-rounded bg-warning-transparent"
                    data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Featured Jobs"
                    data-bs-original-title="Featured Jobs"><span><i class="bi bi-star-fill"></i></span></a>
            </div>
            <div class="d-flex mb-3 flex-wrap gap-2">
                <div>
                    <span class="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border"
                        v-html="card.icon"></span>
                </div>
                <div class="ms-2">
                    <h5 class="fw-semibold mb-0 d-flex align-items-center"><a href="javascript:void(0);"> {{ card.title
                    }}</a></h5>
                    <a href="javascript:void(0);"><i class="bi bi-building"></i> {{ card.company }}</a>
                </div>
            </div>
            <div class="popular-tags mb-3">
                <a href="javascript:void(0);" v-for="(badge, index) in card.badgeIcon" :key="index"
                    class="badge rounded-pill bg-light text-default"><i
                        :class="`bi bi-${badge.iconClass} text-muted me-1`"></i> {{ badge.badgeText }}</a>
            </div>
            <div class="d-flex justify-content-between">
                <h6 class="fw-semibold mb-0">{{ card.salary }}</h6>
                <a href="" class="text-primary fw-semibold fs-14">
                    Apply Now <i class="fe fe-arrow-right"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoprd></style>
