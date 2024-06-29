<script setup>
import Carousel from './Carousel.vue';
</script>

<template>
    <div >
        <div class="container">
            <div class="box box1" id="lunboqi"><Carousel /></div>
            <div class="box box2" id="neirong">
                <div class="card-content">
                <h5 class="title">Place Name</h5>
                <div class="info">
                    <span class="label">Price</span>
                    <span class="value">Price Level</span>
                </div>
                <div class="info">
                    <span class="label">Rating</span>
                    <span class="value">
                        <span class="rating">⭐⭐⭐⭐⭐</span>
                        <span>out of 123 reviews</span>
                    </span>
                </div>
                <div class="info">
                    <span class="label">Ranking</span>
                    <span class="value">Ranking Info</span>
                </div>
                <div class="tags">
                    <span class="tag">Tag 1</span>
                    <span class="tag">Tag 2</span>
                    <span class="tag">Tag 3</span>
                </div>
                <div class="additional-info">
                    <div class="address">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width: 16px; height: 16px; margin-right: 5px;"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                        </svg>
                        Address Info
                    </div>
                    <div class="phone">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width: 16px; height: 16px; margin-right: 5px;"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.27 15.32C15.52 15.07 15.87 14.96 16.21 15.01C17.26 15.18 18.34 15.27 19.43 15.27C19.97 15.27 20.43 15.73 20.43 16.27V20.43C20.43 20.97 19.97 21.43 19.43 21.43C10.39 21.43 2.57 13.61 2.57 4.57C2.57 4.03 3.03 3.57 3.57 3.57H7.73C8.27 3.57 8.73 4.03 8.73 4.57C8.73 5.66 8.82 6.74 8.99 7.79C9.04 8.13 8.93 8.48 8.68 8.73L6.62 10.79Z" />
                        </svg>
                        Phone Info
                    </div>
                </div>
                <div class="actions">
                    <button class="btn">TripAdvisor</button>
                    <button class="btn">Website</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.RestaurantCard {
    width: 100%;
    height: 100%;
    display: flex;
}

.container {
  display: flex;
}

.box {
  height: auto; /* 默认高度，根据内容自动调整 */
  border: 1px solid #ccc; /* 边框样式，可选 */
  padding: 10px; /* 内边距，可选 */
}

.box1 {
  width: 35%;
}

.box2 {
  width: 55%;
}

/* 确保两个盒子高度一致 */
.box1, .box2 {
  align-self: stretch; /* 或者使用 'stretch' 让盒子高度填满父容器 */
}

.card-content {
    padding: 16px;
    height: 100%;
    flex: 1;
}

.title {
    margin: 0 0 16px;
    font-size: 1.5rem;
    font-weight: bold;
}

.info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.label {
    font-weight: bold;
}

.value {
    display: flex;
    align-items: center;
}

.rating {
    margin-right: 8px;
}

.tags {
    margin: 16px 0;
}


.tag {
    display: inline-block;
    background-color: #e0e0e0;
    padding: 4px 8px;
    margin: 4px 4px 4px 0;
    border-radius: 4px;
}

.additional-info {
    margin: 16px 0;
}

.additional-info>div {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.actions {
    display: flex;
    justify-content: space-between;
}

.btn {
    padding: 8px 16px;
    background-color: #1976d2;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn:hover {
    background-color: #1565c0;
}
</style>
