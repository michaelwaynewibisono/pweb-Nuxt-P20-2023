<template>
  <div
    class="flex flex-col justify-center items-center text-center h-screen w-full"
  >
    <div class="text-4xl">
      404 <br />
      Not Found
    </div>
    <NuxtLink
      to="/"
      class="cursor-pointer rounded-[5px] text-[#FFFFFF] bg-[#3D6356] px-4 py-3 my-4"
    >
      Go Back Home
    </NuxtLink>
    <div>{{ res.data }}</div>
  </div>
</template>

<script setup>
const res = await useAsyncData(async () => {
  console.log(new Date());
  return new Promise((resolve) => {
    setTimeout(() => {
      const date = new Date();
      resolve(date);
    }, 2000);
    // const date = new Date();
    // resolve(date);
  });
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
