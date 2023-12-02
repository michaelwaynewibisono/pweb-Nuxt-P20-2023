<template>
  <!-- Desktop Mode -->
  <div
    class="relative hidden lg:flex min-h-[100vh] w-full items-center px-12 bg-[#DBE2BD]"
  >
    <NuxtImg src="/flower.svg" class="w-[25rem] absolute right-0"></NuxtImg>
    <!-- <NuxtImg src="/leaf_2.svg" class="absolute left-0 bottom-0"></NuxtImg> -->
    <div>
      <div
        data-aos="zoom-in-up"
        class="text-7xl text-left font-bold block flex flex-col gap-6"
      >
        <div>Internship</div>
        <div>Keluarga Mahasiwa</div>
        <div class="text-[#3D6356]">Teknologi Informasi</div>
        <div class="text-lg font-normal">
          Institut Teknologi Sepuluh Nopember
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Mode -->
  <div
    class="relative lg:hidden block min-h-screen flex flex-row justify-center items-center w-full bg-[#DBE2BD]"
  >
    <NuxtImg
      src="/flower.svg"
      class="w-[25rem] absolute right-0 opacity-50"
    ></NuxtImg>
    <div class="block text-center z-10 px-[0.5rem]">
      <div class="sm:text-[3rem] text-[2rem] font-bold block m-auto">
        <div>
          Internship <br />
          Keluarga Mahasiswa
        </div>
        <div class="text-[#3D6356]">Teknologi Informasi</div>
        <div class="text-[1rem] mt-3 font-normal">
          Institut Teknologi Sepuluh Nopember
        </div>
      </div>
    </div>
  </div>
</template>
