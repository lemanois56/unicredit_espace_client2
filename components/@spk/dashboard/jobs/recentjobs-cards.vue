<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardHeaderClass: String,
        title: String,
        showDropdown: { typr: Boolean, default: false },
        dropdownToggleClass: String,
        showViewallDropdown: { type: Boolean, default: String },
        dropdownMenuClass: String,
        liClass: String,
        ulClass: String,
        users: { type: Array, default: () => { } },
        nameClass: String,
        textClass: String,
        someContentClasss: String,
        dropdown: { type: Array, default: () => { } },
        cardBodyClass: String
    }
}
</script>
<template>
    <div :class="['card custom-card', customCardClass]">
        <div :class="['card-header', cardHeaderClass]">
            <div class="card-title">
                {{ title }}
            </div>
            <template v-if="showDropdown">
                <div class="dropdown">
                    <a href="javascript:void(0);" :class="dropdownToggleClass" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <template v-if="showViewallDropdown">
                            View All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                        </template>
                    </a>
                    <ul :class="dropdownMenuClass" role="menu">
                        <li v-for="(card, index) in dropdown" :key="index">
                            <a class="dropdown-item" href="javascript:void(0);">{{ card.name }}</a>
                        </li>
                    </ul>
                </div>
            </template>
        </div>
        <div :class="['card-body', cardBodyClass]">
            <PerfectScrollbar :class="ulClass" id="recent-jobs">
                <li :class="liClass" v-for="user, index in users" :key="index">
                    <a href="javascript:void(0);">
                        <div class="d-flex align-items-center">
                            <div class="me-2 lh-1">
                                <span :class="['avatar', 'avatar-md', 'avatar-rounded', user.bgColor || '']">
                                    <template v-if="user.avatar">
                                        <img :src="user.avatar" :alt="user.name" />
                                    </template>
                                    <template v-else>
                                        {{ user.initials }}
                                    </template>
                                </span>
                            </div>
                            <div class="flex-fill">
                                <p :class="nameClass">{{ user.name }}</p>
                                <p :class="textClass">{{ user.text }}</p>
                            </div>
                            <div class="text-end">
                                <p :class="contentClass">{{ user.content }}</p>
                                <span :class="[someContentClasss, user.color || '']">{{ user.somecontent }}</span>
                            </div>
                        </div>
                    </a>
                </li>
            </PerfectScrollbar>
        </div>
    </div>
</template>
<style scoped></style>