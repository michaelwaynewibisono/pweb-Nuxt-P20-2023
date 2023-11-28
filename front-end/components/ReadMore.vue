<template>
  <div
    class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] w-[95%] py-4 px-14 rounded-xl z-50"
    v-if="show"
  >
    <div class="flex flex-col justify-center h-[90vh]">
      <div class="flex justify-between">
        <div></div>
        <div
          class="mb-4 cursor-pointer bg-[#2e2e2e] text-[#F8F8F8] hover:shadow-xl px-4 py-1 rounded-full"
          @click="close"
        >
          Cancel
        </div>
      </div>
      <div class="flex items-center gap-10">
        <NuxtImg
          :src="displayImg ? 'http://localhost:8000' + displayImg.url : ''"
          :alt="displayImg ? displayImg.title : ''"
          class="w-96 h-full object-cover"
        ></NuxtImg>
        <div>
          <h1 class="text-4xl font-semibold">{{ displayImg.title }}</h1>
          <p class="text-lg my-4">by {{ displayImg.author }}</p>
          <p class="text-lg h-80 overflow-y-auto">{{ displayImg.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    displayImg: {
      type: Object,
      default: null,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
