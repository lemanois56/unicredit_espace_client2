<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        cardFooterClass: String,
        swiperImg: { type: Array, default: () => { } },
        dflexClass: String,
        collection: String,
        collectionClass: String,
        textClass: String,
        text: String,
        avatarClass: String,
        imgSrc: String,
        priceClass: String,
        price: String,
        cardFooterClass2: String,
        imgAvatarClass: String,
        faceSrc: String,
        checkIcon: String,
        checkIconClass: String,
        userNameClass: String,
        userName: String,
        name: String,
        nameClass: String,
        ShowDropdown: { type: Boolean, default: false },
        dropdownToggleClass: String,
        showVerticalIconDropdown: { type: Boolean, default: false },
        dropdowns: { type: Array, default: () => { } }
    }
}
</script>
<template>
    <div :class="['card custom-card', customCardClass]">
        <div :class="['card-body', cardBodyClass]">
            <div class="row g-2">
                <div class="col-6" v-for="(card, index) in swiperImg" :key="index">
                    <img :src="card.src" alt="" class="nft-featuredcollect-image">
                </div>
            </div>
        </div>
        <div :class="['card-footer', cardFooterClass]">
            <div :class="dflexClass">
                <div>
                    <div :class="collectionClass">{{ collection }}
                        <span :class="textClass">{{ text }}</span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <div class="me-2 lh-1">
                        <span :class="avatarClass">
                            <img :src="imgSrc" alt="">
                        </span>
                    </div>
                    <div>
                        <span :class="priceClass">{{ price }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div :class="['card-footer', cardFooterClass2]">
            <div class="d-flex align-items-center">
                <div class="d-flex align-items-center flex-fill">
                    <div class="me-2 lh-1">
                        <span :class="imgAvatarClass">
                            <img :src="faceSrc" alt="">
                            <a href="javascript:void(0);" :class="checkIconClass">
                                <i :class="checkIcon"></i>
                            </a>
                        </span>
                    </div>
                    <div>
                        <p :class="nameClass"><a href="javascript:void(0);">{{ name }}</a></p>
                        <p :class="userNameClass">{{ userName }}</p>
                    </div>
                </div>
                <template v-if="ShowDropdown">
                    <div class="dropdown">
                        <a href="javascript:void(0);" :class="dropdownToggleClass" data-bs-toggle="dropdown">
                            <template v-if="showVerticalIconDropdown">
                                <i class="fe fe-more-vertical"></i>
                            </template>
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="(card, index) in dropdowns" :key="index"><a class="dropdown-item"
                                    href="javascript:void(0);">{{ card.name
                                    }}</a></li>
                        </ul>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>