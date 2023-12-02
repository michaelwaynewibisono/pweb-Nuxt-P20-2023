<template>
  <div id="blog">
    <ul v-if="!pending && !error">
      <div
        class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 py-6 px-12 gap-4"
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

// Read Blogs
const blogs = ref([]);
const pending = ref(false);
const error = ref(null);

const truncateText = (content, maxLength) => {
  if (content.length > maxLength) {
    return content.substring(0, maxLength) + "...";
  }
  return content;
};

const fetchBlogs = async () => {
  pending.value = true;
  try {
    const response = await fetch("http://localhost:8000/api/blogs");
    const data = await response.json();
    blogs.value = data.docs;
    blogs.value = data.docs.map((blog) => ({
      ...blog,
      title: truncateText(blog.title, 15),
      text: truncateText(blog.text, 200),
    }));
  } catch (err) {
    error.value = err.message;
  } finally {
    pending.value = false;
  }
};

onMounted(() => {
  fetchBlogs();
});

//Update Likes
const increment = async (blogId) => {
  const blog = blogs.value.find((blog) => blog.id === blogId);
  if (!blog.likes && blog.likes !== 0) {
    blog.likes = 0;
  }
  blog.likes++;
  await fetch(`http://localhost:8000/api/blogs/${blogId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: blog.likes }),
  });
};

//Delete Blog
const deleteBlog = async (id) => {
  if (confirm("Do you really want to delete?")) {
    const response = await fetch("http://localhost:8000/api/blogs/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      blogs.value = blogs.value.filter((blog) => blog.id !== id);
    }
  }
};
</script>
