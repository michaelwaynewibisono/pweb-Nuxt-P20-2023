<template>
  <LazyNavbar custom="sticky" />
  <div v-if="blog" class="py-12 flex justify-center bg-[#DBE2BD]">
    <div class="lg:w-[50%] w-full px-12 flex flex-col gap-8">
      <div class="text-5xl font-bold">{{ blog.title }}</div>
      <div class="text-lg">by {{ blog.author }}</div>
      <div class="w-full flex justify-center">
        <NuxtImg
          :src="'http://localhost:8000' + blog.url"
          class="w-full h-full rounded-lg"
        ></NuxtImg>
      </div>
      <div class="text-lg leading-8">{{ blog.text }}</div>
      <div class="flex justify-between items-center">
        <div></div>
        <div class="fill-[#2e2e2e] cursor-pointer" @click="button">
          <svg
            @click="openEditBlog(blog)"
            xmlns="http://www.w3.org/2000/svg"
            height="1.25em"
            viewBox="0 0 512 512"
          >
            <path
              d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <p v-else>Loading...</p>
  <LazyFooter />

  <!-- Edit Blog -->
  <div
    class="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F9F9F9] w-[90%] lg:w-[55%] px-11 py-12 rounded-xl"
    :style="{ display: isOpen ? 'block' : 'none' }"
  >
    <form @submit.prevent="updateBlog" enctype="multipart/form-data">
      <div class="flex justify-between items-center w-full">
        <div
          class="cursor-pointer bg-[#2e2e2e] text-[#F8F8F8] hover:shadow-xl px-4 py-1 rounded-full"
          @click="button"
        >
          Cancel
        </div>
        <button
          type="submit"
          class="bg-[#3D6356] text-[#F8F8F8] hover:shadow-xl px-4 py-1 rounded-full"
          @click="button"
        >
          Update
        </button>
      </div>
      <div class="my-12"></div>
      <input
        type="text"
        v-model="editBlogData.title"
        class="py-2 text-3xl outline-none bg-[#F9F9F9] w-full"
        placeholder="Title"
        required
      />

      <div class="my-3"></div>

      <input
        type="text"
        v-model="editBlogData.author"
        class="py-2 text-lg outline-none bg-[#F9F9F9] w-full"
        placeholder="Author"
        required
      />
      <div class="my-5"></div>

      <textarea
        v-model="editBlogData.text"
        class="resize-none outline-none bg-[#F9F9F9] w-full text-xl"
        placeholder="What's new?"
        rows="8"
        required
      />
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// Read Blog by ID
const blog = ref(null);
const router = useRouter();

const fetchBlog = async () => {
  const id = router.currentRoute.value.params.id;
  const response = await fetch(`http://localhost:8000/api/blogs/${id}`);
  const data = await response.json();
  blog.value = data;
};

onMounted(() => {
  fetchBlog();
});

//Edit Blog
const isOpen = ref(false);
const editBlogData = ref({});
const blogs = ref([]);

const button = () => {
  isOpen.value = !isOpen.value;
};

const openEditBlog = (blog) => {
  editBlogData.value = { ...blog };
};

const updateBlog = async () => {
  const { id, ...updatedData } = editBlogData.value;
  await fetch(`http://localhost:8000/api/blogs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const putIndex = blogs.value.findIndex((blog) => blog.id === id);
  blogs.value[putIndex] = { id, ...updatedData };
  console.log("Blog updated successfully!");
  router.go();
};
</script>
