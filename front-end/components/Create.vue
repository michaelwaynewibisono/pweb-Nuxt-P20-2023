<template>
  <div
    class="hidden lg:flex justify-center items-center gap-16 w-full bg-[#DBE2BD] h-[70vh] px-6"
    id="create"
  >
    <div data-aos="zoom-in">
      <div class="text-5xl font-bold">
        Want to Submit <br />
        a Progress?
      </div>
      <div class="my-10"></div>
      <NuxtLink
        to="/post"
        class="bg-[#3D6356] text-lg text-[#DBE2BD] hover:shadow-xl px-4 py-2 rounded-full"
        >Submit Now</NuxtLink
      >
    </div>
    <div>
      <!-- <NuxtImg src="/pictures.png" class="w-[40rem]" alt="pictures"></NuxtImg> -->
      <img
        data-aos="fade-up"
        src="/pictures.png"
        alt="pictures"
        class="w-[40rem]"
      />
    </div>
  </div>
  <div class="lg:hidden block text-center py-12" id="post">
    <div>
      <div class="text-4xl font-bold">
        Want to Submit <br />
        a Progress?
      </div>
      <div class="my-8"></div>
      <NuxtLink
        to="/post"
        class="bg-[#3D6356] text-lg text-[#DBE2BD] hover:shadow-xl px-5 py-2 rounded-full"
        >Submit Now</NuxtLink
      >
    </div>
  </div>
</template>
