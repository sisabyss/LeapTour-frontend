<template>
  <div class="container mx-auto p-4 relative flex justify-center items-center">
    <img src="@/assets/whereto.webp" alt="BG" class="object-cover md:w-full md:h-[22em] h-[20em]" />
    <!-- Search Input Field -->
    <div class="absolute w-[85%] md:w-10/12">
      <form class="relative" onSubmit="{handleSubmit}">
        <svg
          class="h-6 w-6 absolute left-3 top-1/4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="{2}"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Where to?"
          class="bg-white rounded-full w-full pl-12 py-3 shadow-xl focus:outline-none"
          value="Places to go, things to do, hotels..."
        />
      </form>
    </div>
  </div>
</template>
