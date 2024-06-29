<template>
    <div class="card-item" :style="{ minWidth: width }">
        <n-card>
            <img src="//i2.wp.com/shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image" />
            <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <n-button text class="button">操作按钮</n-button>
                </div>
            </div>
        </n-card>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: String,
            default: "20%",
        },
    },
    data() {
        return {
            currentDate: new Date().toLocaleDateString(),
        };
    },
};
</script>

<style lang="scss" scoped>
.card-item {
    padding: 10px;
    box-sizing: border-box;
}

.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}
</style>