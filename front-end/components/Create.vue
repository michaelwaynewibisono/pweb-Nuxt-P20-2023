<template>
  <div
    class="hidden lg:flex justify-center items-center gap-28 w-full bg-[#DBE2BD] h-[70vh]"
    id="create"
  >
    <div>
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
      <!-- <NuxtImg class="w-[40rem]" src="/pictures.png" /> -->
      <NuxtImg
        src="../public/pictures.png"
        class="w-[40rem]"
        alt="pictures"
      ></NuxtImg>
    </div>
  </div>
  <div
    class="lg:hidden flex flex-col justify-center items-center w-full bg-[#DBE2BD] h-auto px-[10%] py-[10%]"
    id="post"
  >
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
