<template>
  <!-- Desktop Mode -->
  <div
    :class="[
      custom,
      'flex justify-between items-center min-h-[8vh] px-6 py-6 lg:py-4 top-0 w-full bg-[#DBE2BD] z-40',
    ]"
  >
    <NuxtLink to="/"
      ><div class="font-bold text-xl">IT MAGANG BLOG</div></NuxtLink
    >
    <div
      class="hidden lg:flex text-[#514D4B] font-semibold absolute gap-6 left-1/2 transform -translate-x-1/2"
    >
      <NuxtLink to="/"
        ><div class="cursor-pointer hover:text-[#000000]">Home</div></NuxtLink
      >
      <NuxtLink to="#about"
        ><div class="cursor-pointer hover:text-[#000000]">
          About Us
        </div></NuxtLink
      >
      <NuxtLink to="#department"
        ><div class="cursor-pointer hover:text-[#000000]">
          Department
        </div></NuxtLink
      >
      <NuxtLink to="#contact"
        ><div class="cursor-pointer hover:text-[#000000]">
          Contact
        </div></NuxtLink
      >
    </div>
    <NuxtLink to="#blog">
      <div
        class="hidden lg:block bg-[#609D8A] hover:bg-[#3D6356] text-xl text-[#FFFFFF] py-2 px-4 cursor-pointer rounded-[3px]"
      >
        Blog
      </div>
    </NuxtLink>
    <div class="lg:hidden block cursor-pointer" @click="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.75em"
        viewBox="0 0 448 512"
      >
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </div>
  </div>

  <!-- Mobile Mode -->
  <div
    class="duration-200 lg:hidden h-screen w-full fixed flex flex-col justify-around items-center bg-[#3D6356] z-50"
    :style="{ transform: isActive ? '' : 'translateX(-100%)' }"
  >
    <div
      class="text-[#FFFFFF] text-xl flex flex-col gap-4 font-semibold text-center"
    >
      <NuxtLink to="/"><div class="cursor-pointer">Home</div></NuxtLink>
      <NuxtLink to="#about"
        ><div class="cursor-pointer">About Us</div></NuxtLink
      >
      <NuxtLink to="#department"
        ><div class="cursor-pointer">Department</div></NuxtLink
      >
      <NuxtLink to="#contact"
        ><div class="cursor-pointer">Contact</div></NuxtLink
      >
      <NuxtLink to="#blog">
        <div
          class="absolute left-1/2 transform -translate-x-1/2 bg-[#FFFFFF] hover:bg-[#F2F2F2] text-xl text-[#3D6356] py-2 px-4 cursor-pointer rounded-[3px] mt-6"
        >
          Blog
        </div>
      </NuxtLink>
    </div>
    <div class="cursor-pointer fill-[#FFFFFF]" @click="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 384 512"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    custom: {
      type: String,
      default: "fixed",
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    button() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
