<script setup>
import { NButton, NSpace } from 'naive-ui';
</script>

<template>
	<header class="HomeHeader">
		<nav class="HeaderNav">
			<div class="HeaderLogoBox">
				<n-icon size="40">
					<a href="https://vitejs.dev" target="_blank">
						<img src="/vite.svg" class="logo" alt="Vite logo" />
					</a>
				</n-icon>
				<router-link />
			</div>

			<!-- <n-space horizonal class="HeaderRouterBox"> -->
			<div class="HeaderRouterBox">
				<n-button ghost> Discover </n-button>
				<n-button ghost> Trips </n-button>
				<n-button ghost> Review </n-button>
				<n-button ghost> More </n-button>
			</div>
			<!-- </n-space> -->
			<div>
				<n-button ghost> Discover </n-button>
				<n-icon size="40">
					<a href="https://vuejs.org/" target="_blank">
						<img src="/vite.svg" class="logo vue" alt="Vue logo" />
					</a>
				</n-icon>
				<router-link />
			</div>
		</nav>
	</header>

	<div class="H1Box">
		<h1 class="H1Content">Where to?</h1>
	</div>

	<div class="SearchBarRouters">
		<n-space horizonal>
			<n-button>Search all</n-button>
			<n-button>Hotels</n-button>
			<n-button>Things to Do</n-button>
			<n-button>Restaurants</n-button>
			<n-button>Vacation Rentals</n-button>
		</n-space>
	</div>

	<div class="SearchBar">
		<!-- <div>
			<n-button circle> </n-button>
			<n-input placeholder="Place to go, things to do, hotels..." />
		</div>
		<span>
			<n-button>Search</n-button>
		</span> -->
		<form role="search"></form>
	</div>

	<div className="container mx-auto p-4 relative flex justify-center items-center">
		<img src="../assets/whereto.webp" alt="BG" className="object-cover md:w-full md:h-[22em] h-[20em]" />
		<div className="absolute w-[85%] md:w-10/12">
			<form className="relative" onSubmit="{handleSubmit}">
				<svg
					className="h-6 w-6 absolute left-3 top-1/4"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="{2}"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<input type="text" placeholder="Where to?" className="bg-white rounded-full w-full pl-12 py-3 shadow-xl focus:outline-none" />
			</form>
		</div>
	</div>
</template>

<style>
.HomeHeader {
	position: sticky;
	margin-top: 0.1%;
	width: 100%;
	box-sizing: border-box;
	background-color: white;
}

.HeaderNav {
	display: flex;
	padding-left: 24%;
	padding-right: 24%;
	height: 60px;
	justify-content: space-between;
}

.HeaderRouterBox {
	justify-content: center;
	margin: 0;
	padding: 0;
}

.H1Box {
	box-sizing: border-box;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
}

.H1Content {
	text-align: center;
	font-style: normal;
	font: var(normal 900 54px/65px 'Trip Sans VF', 'Trip Sans', Arial, sans-serif);
	color: rgb(0, 0, 0);
	font-family: 'Trip Sans VF', 'Trip Sans', Arial, sans-serif;
	font-size: 54px;
}

.SearchBarRouters {
	display: flex;
	justify-content: center;
	text-align: center;
	position: relative;
}

.SearchBar {
	box-sizing: border-box;
	max-width: 100%;
	padding-left: 24px;
	padding-right: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
