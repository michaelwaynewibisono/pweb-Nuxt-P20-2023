<template>
  <!-- Desktop Mode -->
  <div
    class="relative hidden lg:flex min-h-[100vh] w-full justify-center items-center bg-[#DBE2BD]"
  >
    <div class="">
      <div class="text-5xl font-bold block my-auto">
        <div>Internship Keluarga Mahasiswa</div>
        <div class="text-[#3D6356] mt-2">Teknologi Informasi</div>
        <div class="text-lg mt-6 font-normal">
          Institut Teknologi Sepuluh Nopember
        </div>
      </div>
    </div>
    <NuxtImg
      src="/flower.svg"
      class="w-[25rem] absolute right-0 opacity-50"
    ></NuxtImg>
    <div>
      <NuxtImg
        src="/leaf_2.svg"
        class="absolute left-0 bottom-0 opacity-50"
      ></NuxtImg>
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
