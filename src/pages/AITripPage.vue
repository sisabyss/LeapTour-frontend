<script setup>
import NavBar from '../components/NavBar.vue';
import Carousel from '../components/Carousel.vue';
import RatingCard from '../components/RatingCard.vue';
import { NButton, NCollapse, NCollapseItem } from 'naive-ui';
import { NDivider } from 'naive-ui';
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
            <div class="gmap_canvas">
                <iframe id="gmap_canvas"
                    src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
        </div>




        <div style="width:45vw;margin:30px">
            <NButton class="SaveItinerary">
                ❤ Save Itinerary
            </NButton>
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
            <n-collapse arrow-placement="right">
                <n-collapse-item title="Day 1" name="day1">
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
                </n-collapse-item>

                <n-collapse-item title="Day 2" name="day2">
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
                </n-collapse-item>

                <n-collapse-item title="Day 3" name="day3">
                    <view v-for="(place, index) in day3Places" :key="'day3-' + index">
                        <n-collapse arrow-placement="right">
                            <n-collapse-item :title="place.name" :name="'day3-place' + index">
                                <div class="AITripRatingCard">
                                    <RatingCard />
                                </div>
                            </n-collapse-item>
                        </n-collapse>
                    </view>
                </n-collapse-item>
            </n-collapse>
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
    width: 40vw;
}

.AITripTitle {
    width: 40vw;
    font-size: 2em;
    /* 设置字体大小 */
    font-weight: bold;
    /* 设置字体粗细 */
    color: #333;
    /* 设置字体颜色 */
    margin-top: 100px;
    margin-left: 30px;
    /* 设置边距 */
    text-align: center;
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

.AITripCarousel {
    margin: 30px;
    width: 30vw;
    align: center;
    height: auto;
}

.AITripMap {
    width: 40vw;
    height: 800px;
    margin: 30px;
    float: right;
}

.gmap_canvas iframe {
    width: 100%;
    height: 100%;
    border: none;
}

.SaveItinerary {
    background-color: #dfd3ee;
    color: #7446af;
    float: right;
    margin-right: 100px;
}
</style>
