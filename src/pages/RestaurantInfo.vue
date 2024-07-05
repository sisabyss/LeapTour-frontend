<style scoped>
.rounded {
    border-radius: 15px; 
}

.carousel-img {
  width: 100%;
  height: 390px;
  object-fit: cover;
  border-radius: 15px;
  
}
</style>

<template>
    <NavBar />
    <!-- 回退标签 -->
    <div class="border-b w-full h-fit flex justify-between items-center sticky top-0 bg-white z-20">
        <div class="container mx-auto px-4"><a href="/restaurants">
                <div class="w-fit border-r py-3 pl-3 pr-3 md:pl-0 md:pr-4 cursor-pointer flex item-center"><svg
                        class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    <p>Back to all restaurants</p>
                </div>
            </a></div>
    </div>

    <!-- 餐馆简介 -->
    <div class="container mx-auto px-4 pt-4">
        <!-- 餐馆标题 -->
        <h1 class="font-bold text-lg md:text-[35px] my-2 md:my-4">{{Rest?.name}}</h1>
        <p class="my-2 text-sm flex flex-wrap leading-relaxed">
            <!-- 评分星星 -->
            <span class="flex items-center mr-2">
                <span
                    id="1719663376958" role="button" tabindex="-1" class="flex mr-2"
                    style="border: none; outline: 0px;">
                    <n-rate readonly :default-value="Number(Rest?.rating)" />  
                            <!-- 评论条数和排名 -->
                        </span>{{Rest?.review_num}} Reviews</span>~ #{{Rest?.rank}} ~ $$ - $$$</p>
        <div class="text-sm flex flex-wrap items-center my-2 leading-relaxed">
            <p class="flex items-center mr-2"><svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"></path>
                </svg>
                <!-- 地点 -->
                <span class="underline decoration-dotted decoration-gray-400">{{Rest?.location}}</span></p>
            <p class="hidden md:flex items-center mr-2"><svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                    </path>
                    <!-- 餐厅电话 -->
                </svg><a href="tel:{{Rest?.phone}}" class="underline decoration-dotted decoration-gray-400">{{Rest?.phone}}</a></p>
            <p class="hidden md:flex items-center mr-2"><svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clip-rule="evenodd"></path>
                </svg>
                <!-- 餐厅网址 -->
                <a href="{{Rest?.website}}" target="_blank"
                    class="underline decoration-dotted decoration-gray-400">Website<svg class="h-3 w-3 ml-1 inline"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                        </path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z">
                        </path>
                    </svg></a></p>
        </div>
    </div>


    <div style="background-color: #f2f2f2">
    <!-- 图片 -->
    <div class="container mx-auto grid grid-cols-2" style="height: 400px">
        <div class="col-span-2" style="padding:2%;">
            <n-carousel autoplay>
                <img
                class="carousel-img"
                src="{{ Rest?.img1 }}"
                >
                <img
                class="carousel-img"
                src="{{ Rest?.img2 }}""
                >
                <img
                class="carousel-img"
                src="{{ Rest?.img3 }}""
                >
                <img
                class="carousel-img"
                src="{{ Rest?.img4 }}"
                >
            </n-carousel>
        </div>
    </div>

    <!-- 简介卡片和评论卡片 -->
    <div class="container mx-auto px-4 pb-4">
        <!-- 手机端的按钮,在web端,这些按钮会被隐藏 -->
        <div class="flex bg-white shadow-sm rounded-b p-2 md:hidden border border-t-0 mb-2 rounded">
            <p class="flex flex-col items-center justify-center w-full"><svg class="h-7 w-7 mx-1"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                    </path>
                </svg><a href="{{ Rest?.phone }}" class="underline decoration-dotted decoration-gray-400">Call</a></p>
            <p class="flex flex-col items-center justify-center w-full"><svg class="h-7 w-7 mx-1"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clip-rule="evenodd"></path>
                </svg>
                <a href="{{ Rest?.website}}" target="_blank"
                    class="underline decoration-dotted decoration-gray-400">Website<svg class="h-3 w-3 ml-1 inline"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                        </path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z">
                        </path>
                    </svg></a></p>
        </div>
        
        <!-- 简介卡片 -->
        <div class="md:grid grid-cols-1 md:grid-cols-6 gap-3 pb-10">
            <div class="col-span-6 bg-white my-1 mx-0 space-y-2"></div>
            <!-- 第一个简介小卡,包括评分和排名 -->
            <div class="col-span-2 bg-white border border-gray-200 p-4 my-1 mx-0 shadow-sm space-y-3 md:space-y-4 rounded">
                <h2 class="font-medium text-lg">Ratings &amp; Recognitions</h2>
                <p class="my-2 flex flex-wrap items-center"><span
                        class="font-semibold text-lg md:text-3xl">{{ Rest?.rating }}</span>
                        <span id="1719663376958" role="button"
                        tabindex="-1" class="flex mx-2" style="border: none; outline: 0px;">
                        <n-rate readonly :default-value="Number(Rest?.rating)" /></span>
                            <span class="text-sm font-medium">{{Rest?.review_num}} Reviews </span></p>
                <p class="my-2 text-sm">#{{ Rest?.rank }}</p>
            </div>

            <!-- 第二个简介小卡,包括一些tag -->
            <div class="col-span-2 bg-white border border-gray-200 p-4 my-1 mx-0 shadow-sm space-y-3 md:space-y-4 rounded">
                <h2 class="font-medium text-lg">Details</h2>
                <div class="text-xs space-y-2">
                    <h3 class="font-medium uppercase">Cuisine</h3>
                    <p><span class="bg-gray-200 rounded-full py-1 px-2 mb-2 mr-2 inline-block">{{ Rest?.Ctag1 }}</span><span class="bg-gray-200 rounded-full py-1 px-2 mb-2 mr-2 inline-block">{{ Rest?.Ctag2 }}</span><span class="bg-gray-200 rounded-full py-1 px-2 mb-2 mr-2 inline-block">{{ Rest?.Ctag3 }}</span></p>
                </div>
                <div class="text-xs space-y-2">
                    <h3 class="font-medium uppercase">Special Diet</h3>
                    <p><span class="bg-gray-200 rounded-full py-1 px-2 mb-2 mr-2 inline-block">{{ Rest?.Dtag1 }}</span><span class="bg-gray-200 rounded-full py-1 px-2 mb-2 mr-2 inline-block">{{ Rest?.Dtag2 }}</span><span class="bg-gray-200 rounded-full py-1 px-2 mb-2 mr-2 inline-block">Gluten
                            {{ Rest?.Dtag3 }}</span></p>
                </div>
            </div>

            <!-- 第三个简介小卡,包括地址,电话和网址 -->
            <div class="col-span-2 bg-white border border-gray-200 p-4 my-1 mx-0 shadow-sm space-y-3 md:space-y-4 rounded">
                <h2 class="font-medium text-lg">Contact Details</h2>
                <div class="flex items-start mr-2 text-sm">
                    <div class="w-1/12"><svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"></path>
                        </svg></div><span class="underline decoration-dotted decoration-gray-400">{{Rest?.location}}</span>
                </div>
                <div class="flex items-center mr-2 text-sm">
                    <div class="w-1/12"><svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                            </path>
                        </svg></div><a href="tel:{{Rest?.phone}}"
                        class="underline decoration-dotted decoration-gray-400">{{Rest?.phone}}</a>
                </div>
                <div class="flex items-center mr-2 text-sm">
                    <div class="w-1/12"><svg class="h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                                clip-rule="evenodd"></path>
                        </svg></div><a href="{{Rest?.website}}" target="_blank"
                        class="underline decoration-dotted decoration-gray-400">Website<svg class="h-3 w-3 ml-1 inline"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z">
                            </path>
                            <path
                                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z">
                            </path>
                        </svg></a>
                </div>
            </div>


            <!-- 评论区 -->
            <div class="md:col-span-6 xl:col-span-6 bg-white border border-gray-200 p-4 my-1 mx-0 shadow-sm rounded">
                <h2 class="font-semibold text-lg md:text-2xl">Reviews <span class="text-gray-400">(131)</span></h2>
                <div class="h-[1px] bg-gray-300 my-3 md:my-4"></div>
                <!-- 调入评论区,两个评论卡片间插入一个间隔块 -->
                <FoodCommentCard/>

                <div class="h-[1px] col-span-12 bg-gray-200 my-10"></div>

                <FoodCommentCard/>

                <div class="h-[1px] col-span-12 bg-gray-200 my-10"></div>

                <FoodCommentCard/>

                <div class="h-[1px] col-span-12 bg-gray-200 my-10"></div>

                <FoodCommentCard/>

                
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import FoodCommentCard from '../components/FoodCommentCard.vue';
import { NCarousel } from 'naive-ui';
import { NRate } from 'naive-ui';
import { Restart } from '@vicons/carbon';
</script>