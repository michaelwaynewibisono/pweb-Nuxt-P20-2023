<template>
  <div>
    <ul v-if="!pending && !error">
      <div
        class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 py-6 px-6 lg:px-6 gap-4"
        id="blog"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div
          class="relative flex flex-col items-center bg-[#3D6356] text-[#DBE2BD] rounded-2xl border-2 border-[#3D6356]"
          v-for="blog in blogs"
          :key="blog.id"
        >
          <NuxtImg
            :src="'http://localhost:8000' + blog.url"
            :alt="blog.title"
            class="w-full h-80 object-cover rounded-2xl"
          />
          <div class="w-full px-8 pt-4 pb-8">
            <div class="flex justify-between items-center items-center">
              <div></div>
              <div class="flex gap-2 items-center text-lg">
                <div
                  @click="increment(blog.id)"
                  class="fill-[#C70039] cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                    />
                  </svg>
                </div>
                <div class="select-none">{{ blog.likes }}</div>
              </div>
            </div>
            <div class="my-4 text-4xl text-left font-semibold">
              {{ blog.title }}
            </div>
            <p class="text-left">
              {{ blog.text }}
            </p>
            <br />
            <div class="flex flex-row justify-between items-center w-full">
              <RouterLink :to="`/blog/${blog.id}`">
                <div
                  class="bg-[#F8F8F8] text-[#3D6356] hover:shadow-xl px-4 py-1 rounded-full cursor-pointer"
                >
                  Read More
                </div>
              </RouterLink>
              <!-- <div class="flex gap-3">
                <div class="fill-[#FFFFFF] cursor-pointer" @click="button">
                  <svg
                    @click="openEditBlog(blog)"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                    />
                  </svg>
                </div>
                <div
                  class="fill-[#FFFFFF] cursor-pointer"
                  @click="deleteBlog(blog.id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </ul>
    <p v-if="pending">Loading...</p>
    <p v-if="error">Error: {{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const blogs = ref([]);
const pending = ref(false);
const error = ref(null);

const fetchData = async () => {
  pending.value = true;
  try {
    const response = await fetch("http://localhost:8000/api/blogs");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    blogs.value = data.docs;
  } catch (err) {
    error.value = err.message;
  } finally {
    pending.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>
