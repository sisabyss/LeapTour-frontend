<template>
    <div>
        <!-- Navbar -->
        <div id="header" class="sticky">
            <div id="navbar">
                <div id="navRight-section">
                    <a href="#"><i class="fa-solid fa-pencil"></i>Review</a>
                    <a href="#"><i class="fa-regular fa-heart"></i>Trips</a>
                    <a href="#"><i class="fa-regular fa-bell"></i>Alerts</a>
                    <router-link to="SignIn.vue"><button class="btn btn-default">登录</button></router-link>
                    <a href="#"><i class="fa-solid fa-cart-shopping"></i>Baskets</a>
                </div>
            </div>
        </div>

        <!-- Main-container -->
        <div id="main-container">
            <!-- Title and Search Bar -->
            <div id="nav2">
                <div class="title-section">
                    <h1>Where to?</h1>
                </div>
                <div class="tabs-section">
                    <div class="tabs" role="tablist">
                        <button class="tab" role="tab" type="button" aria-selected="true">
                            <span class="tab-text">Search All</span>
                        </button>
                        <button class="tab" role="tab" type="button" aria-selected="false" tabindex="-1">
                            <a href="/Hotels" class="tab-link">Hotels</a>
                        </button>
                        <button class="tab" role="tab" type="button" aria-selected="false" tabindex="-1">
                            <a href="/Attractions" class="tab-link">Things to Do</a>
                        </button>
                        <button class="tab" role="tab" type="button" aria-selected="false" tabindex="-1">
                            <a href="/Restaurants" class="tab-link">Restaurants</a>
                        </button>
                        <button class="tab" role="tab" type="button" aria-selected="false" tabindex="-1">
                            <a href="/Rentals" class="tab-link">Vacation Rentals</a>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Slider and Content -->
            <div id="slider">
                <div id="overlay"></div>
                <div id="content">
                    <h1>Hotels and Places to Stay</h1>
                </div>
            </div>
            <div id="box">
                <div id="left">
                    <!-- Map -->
                    <div class="map">
                        <div class="gmap_canvas">
                            <iframe id="gmap_canvas"
                                src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>

                    <!-- Filters -->
                    <div id="filters">
                        <!-- COVID-19 -->
                        <div id="covid">
                            <h3>COVID-19 <i class="fa-solid fa-circle-info"></i> <i class="fa-solid fa-angle-down"></i>
                            </h3>
                            <input type="checkbox"> Properties taking safety measures
                            <img src="https://static.tacdn.com/img2/icons/illustration-handwash.svg" alt="">
                        </div>

                        <!-- Deals -->
                        <div id="deals">
                            <h3>Deals <i class="fa-solid fa-angle-down"></i></h3>
                            <input type="checkbox"> Free Cancellation <i class="fa-solid fa-circle-info"></i><br>
                            <input type="checkbox"> Reserve now, pay at stay <i class="fa-solid fa-circle-info"></i><br>
                            <input type="checkbox"> Properties with special offers
                        </div>

                        <!-- Sort Options -->
                        <div id="sort_btn">
                            <h3>Best Values</h3>
                            <button id="sort_lth">
                                <input type="radio"> Price low to high
                            </button>
                            <button id="sort_htl">
                                <input type="radio"> Price high to low
                            </button>
                        </div>

                        <!-- Categories -->
                        <div id="sort_cc">
                            <h3>Categories</h3>
                            <button id="filter_ac">
                                <input type="radio"> AC
                            </button>
                            <button id="filter_nonac">
                                <input type="radio"> Non AC
                            </button>
                        </div>

                        <!-- Traveller Rating -->
                        <div id="rate">
                            <h3>Traveller Rating</h3>
                            <button id="ratingLH">
                                <input type="radio"> Rating > ⭐⭐⭐⭐
                            </button>
                            <button id="ratingHL">
                                <input type="radio"> Rating < ⭐⭐⭐⭐ </button>
                        </div>
                    </div>
                </div>

                <!-- Right Content -->
                <div id="container">
                    <div id="c1">
                        <div id="static">
                            <h1 id="pop">Popular Hotels</h1>
                            <div id="one">
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/88/be/09/caption.jpg?w=300&h=300&s=1"
                                    alt="" />
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/88/be/20/caption.jpg?w=300&h=300&s=1"
                                    alt="" />
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/88/be/94/caption.jpg?w=300&h=300&s=1"
                                    alt="" />
                                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/88/be/e8/caption.jpg?w=300&h=300&s=1"
                                    alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="price_sort">
                        <h3>Properties in Hotel</h3>
                    </div>
                    <div id="c2"></div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div id="main-footer"></div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style scoped>
#header {
    border: none;
}

#navRight-section a {
    margin: 0 10px;
}

#main-container {
    padding: 20px;
}

.title-section h1 {
    font-size: 2em;
    text-align: center;
}

.tabs {
    display: flex;
    justify-content: center;
}

.tab {
    margin: 0 10px;
}

#slider {
    position: relative;
    height: 300px;
    background: url('https://your-image-url-here') no-repeat center center;
    background-size: cover;
}

#overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

#content {
    position: relative;
    color: #fff;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
}

#box {
    display: flex;
}

#left {
    flex: 1;
    padding: 20px;
}

#container {
    flex: 3;
    padding: 20px;
}

.map iframe {
    width: 100%;
    height: 200px;
}

#covid img {
    display: block;
    margin: 10px 0;
}

#filters div {
    margin-bottom: 20px;
}

#static #pop {
    font-size: 1.5em;
}

#one img {
    width: 100px;
    height: 100px;
    margin: 5px;
}
</style>