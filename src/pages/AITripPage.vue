<script setup>
import NavBar from '../components/NavBar.vue';
import Carousel from '../components/Carousel.vue';
import RatingCard from '../components/RatingCard.vue';
import { NButton, NCollapse, NCollapseItem } from 'naive-ui';
import { NDivider } from 'naive-ui';
import { Map, Calendar } from '@vicons/carbon'
const day1Places = [
    { name: "E'ling Park" },
    { name: "XiaoTianE (JianXin North Road)" },
    { name: "Jiefang Monument" },
    { name: "Latitude 29" },
    { name: "Loquat Hill Park" }
];

const day2Places = [
    { name: "Place Name 1" },
    { name: "Place Name 2" },
    { name: "Place Name 3" }
];

const day3Places = [
    { name: "Place Name 1" },
    { name: "Place Name 2" },
    { name: "Place Name 3" }
];
</script>

<template>
    <div>
        <NavBar />


        <div class="AITripMap">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222123.52259519082!2d106.38374252838942!3d29.554810841907383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x369334baf3e64f43%3A0xde9f8616dc88b321!2z5Lit5Zu96YeN5bqG5biC!5e0!3m2!1szh-CN!2stw!4v1719641301346!5m2!1szh-CN!2stw"
                width="400" height="600" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="AITripLeft">
            <div class="header">
                <div class="container">
                    <div class="box1">
                        <n-icon>
                            <Map style="color: #7446af;"></Map>
                        </n-icon>
                    </div>
                    <div class="box2" style="padding: 5px;">
                        <p style="color:darkgray;font-size: smaller;">This Trip is Powered
                            by
                            AI</p>
                    </div>
                </div>
                <div class="buttoncontainer">
                    <NButton class=" SaveItinerary">
                        ❤ Save Itinerary
                    </NButton>
                </div>
            </div>
            <h1 class="AITripTitle">Your Trip To Chongqing for 3 days</h1>
            <div class="Pagedescription">
                Welcome to Chongqing! Today is packed with exciting outdoor adventures and delicious dining
                experiences.
                Start your day at E'ling Park, where you can enjoy stunning views of the city and relax in
                nature.
                For lunch, head to XiaoTianE on JianXin North Road for some authentic local cuisine.
                After refueling, visit the iconic Jiefang Monument and soak in the historical significance.
                Then, treat yourself to a delightful meal at Latitude 29.
                End the day at Loquat Hill Park, a serene spot perfect for unwinding.
                Get ready for a day filled with exploration and memorable moments!
            </div>
            <n-divider class="AITripdivider" />
            <p class="AITripSubTitle">Places To Stay</p>
            <div class="AITripCarousel">
                <Carousel />
            </div>
            <n-divider class="AITripdivider" />
            <!--               <div class="app-bar">
            <div class="logo-container">
                <img class="logo" src="./icons8-map-marker-96_1.png" alt="logo">
                <a href="/" class="title">TravelMate</a>
            </div>
            <div class="search-container">
                <span>🔍</span>
                <input type="text" placeholder="Search">
            </div>
        </div> -->
            <p class="AITripSubTitle">Itinerary For You</p>
            <div class="ItineraryAll">
                <div title="Day 1">
                    <div class="container">
                        <div class="Daybox1">
                            <n-icon>
                                <Calendar style="color: #7446af;"></Calendar>
                            </n-icon>
                        </div>
                        <p class="AITripSubSubTitle">Day1</p>
                    </div>
                    <div class="day-description">
                        Welcome to Chongqing! Today is packed with exciting outdoor adventures and delicious dining
                        experiences.
                        Start your day at E'ling Park, where you can enjoy stunning views of the city and relax in
                        nature.
                        For lunch, head to XiaoTianE on JianXin North Road for some authentic local cuisine.
                        After refueling, visit the iconic Jiefang Monument and soak in the historical significance.
                        Then, treat yourself to a delightful meal at Latitude 29.
                        End the day at Loquat Hill Park, a serene spot perfect for unwinding.
                        Get ready for a day filled with exploration and memorable moments!
                    </div>
                    <view v-for="(place, index) in day1Places" :key="'day1-' + index">
                        <n-collapse arrow-placement="right">
                            <n-collapse-item :title="place.name" :name="'day1-place' + index">
                                <div class="AITripRatingCard">
                                    <RatingCard />
                                </div>
                            </n-collapse-item>
                        </n-collapse>
                    </view>
                </div>

                <div title="Day 2" name="day2">
                    <div class="container">
                        <div class="Daybox1">
                            <n-icon>
                                <Calendar style="color: #7446af;"></Calendar>
                            </n-icon>
                        </div>
                        <p class="AITripSubSubTitle">Day2</p>
                    </div>
                    <div class="day-description">
                        Welcome to Chongqing! Today is packed with exciting outdoor adventures and delicious dining
                        experiences.
                        Start your day at E'ling Park, where you can enjoy stunning views of the city and relax in
                        nature.
                        For lunch, head to XiaoTianE on JianXin North Road for some authentic local cuisine.
                        After refueling, visit the iconic Jiefang Monument and soak in the historical significance.
                        Then, treat yourself to a delightful meal at Latitude 29.
                        End the day at Loquat Hill Park, a serene spot perfect for unwinding.
                        Get ready for a day filled with exploration and memorable moments!
                    </div>
                    <view v-for="(place, index) in day2Places" :key="'day2-' + index">
                        <n-collapse arrow-placement="right">
                            <n-collapse-item :title="place.name" :name="'day2-place' + index">
                                <div class="AITripRatingCard">
                                    <RatingCard />
                                </div>
                            </n-collapse-item>
                        </n-collapse>
                    </view>
                </div>

                <div title="Day 3" name="day3">
                    <div class="container">
                        <div class="Daybox1">
                            <n-icon>
                                <Calendar style="color: #7446af;"></Calendar>
                            </n-icon>
                        </div>
                        <p class="AITripSubSubTitle">Day3</p>
                    </div>
                    <div class="day-description">
                        Welcome to Chongqing! Today is packed with exciting outdoor adventures and delicious dining
                        experiences.
                        Start your day at E'ling Park, where you can enjoy stunning views of the city and relax in
                        nature.
                        For lunch, head to XiaoTianE on JianXin North Road for some authentic local cuisine.
                        After refueling, visit the iconic Jiefang Monument and soak in the historical significance.
                        Then, treat yourself to a delightful meal at Latitude 29.
                        End the day at Loquat Hill Park, a serene spot perfect for unwinding.
                        Get ready for a day filled with exploration and memorable moments!
                    </div>
                    <view v-for="(place, index) in day3Places" :key="'day3-' + index">
                        <n-collapse arrow-placement="right">
                            <n-collapse-item :title="place.name" :name="'day3-place' + index">
                                <div class="AITripRatingCard">
                                    <RatingCard />
                                </div>
                            </n-collapse-item>
                        </n-collapse>
                    </view>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.AITripdivider {
    width: 40vw;
}

.Pagedescription {
    margin: 30px;
    width: 40vw;
    height: auto;
}

.ItineraryAll {
    margin: 30px;
    height: auto;
    width: 40vw;
}

.day-description {
    margin-bottom: 10px;
    font-size: 16px;
    height: auto;
    width: 40vw;
}

.AITripRatingCard {
    margin-top: 10px;
    height: auto;
    width: 35vw;
}

.AITripTitle {
    width: 40vw;
    font-size: 2em;
    /* 设置字体大小 */
    font-weight: bold;
    /* 设置字体粗细 */
    color: #333;
    /* 设置字体颜色 */
    margin-left: 30px;
    /* 设置边距 */
    text-align: left;
    /* 设置文本对齐方式 */
    padding-bottom: 10px;
    /* 设置内边距 */
}

.AITripSubTitle {
    width: 40vw;
    font-size: 1.3em;
    /* 设置字体大小 */
    font-weight: bold;
    /* 设置字体粗细 */
    color: #333;
    /* 设置字体颜色 */
    margin: 30px;
    /* 设置边距 */
    text-align: left;
    /* 设置文本对齐方式 */
    padding-bottom: 0px;
    /* 设置内边距 */
}

.AITripSubSubTitle {
    width: 40vw;
    font-size: 1.2em;
    /* 设置字体大小 */
    font-weight: bold;
    /* 设置字体粗细 */
    color: #333;
    /* 设置字体颜色 */
    padding-bottom: 0px;
    /* 设置内边距 */
    padding: 5px;
}

.AITripCarousel {
    margin: 30px;
    width: 30vw;
    align: center;
    height: auto;
}

.AITripMap {
    position: fixed;
    top: 40px;
    right: 0px;
    width: 40vw;
    height: 800px;
    margin: 30px;
    padding-right: 30px;
    float: right;
}

.SaveItinerary {
    border-radius: 10px;
    background-color: #dfd3ee;
    color: #7446af;
    float: right;
    margin-right: 100px;
}

.container {
    display: flex;
    margin: 30px;
    bottom: 0px;
}

.buttoncontainer {
    display: flex;
    margin: 30px;
    bottom: 0px;
}


.box {
    height: auto;
    /* 默认高度，根据内容自动调整 */
    border: 1px solid #ccc;
    /* 边框样式，可选 */
}

.box1 {
    width: 20px;
    height: 20px;
}

.Daybox1 {
    width: 20px;
    height: 20px;
    padding-top: 10px;
}

.box2 {
    width: 55%;
}

.box1,
.box2 {
    align-self: stretch;
}

.Daybox1,
.AITripSubSubTitle {
    align-self: stretch;
}

.header {
    width: 45vw;
    display: flex;
    justify-content: space-between;
    margin: 0px;
}

.AITripLeft {
    width: 50vw;
    margin-left: 120px;
}
</style>
