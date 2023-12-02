<template>
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
          {{ truncateTitle(blog.title) }}
        </div>
        <p class="text-left">
          {{ truncateText(blog.text) }}
        </p>
        <br />
        <div class="flex flex-row justify-between items-center w-full">
          <div @click="read">
            <div
              class="bg-[#F8F8F8] text-[#3D6356] hover:shadow-xl px-4 py-1 rounded-full cursor-pointer"
              @click="readImg(blog)"
            >
              Read More
            </div>
          </div>
          <div class="flex gap-3">
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
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit -->
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

  <!-- Read More -->
  <ReadMore :show="pop" :displayImg="displayImg" @close="read" />
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      displayImg: null,
      pop: false,
      editBlogData: {},
      isOpen: false,
    };
  },
  async mounted() {
    await this.useAsyncData();
  },

  methods: {
    //Update Like
    async increment(blogId) {
      try {
        const blog = this.blogs.find((blog) => blog.id === blogId);

        // If likes are not defined or null, set default value to 0
        if (!blog.likes && blog.likes !== 0) {
          blog.likes = 0;
        }

        // Increment likes locally and send PUT request to update likes on the API
        blog.likes++;

        const response = await fetch(
          `http://localhost:8000/api/blogs/${blogId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ likes: blog.likes }),
          }
        );

        if (response.ok) {
          console.log(`Likes for blog ${blogId} updated successfully!`);
        } else {
          // Revert local increment on API request failure
          blog.likes--;
          console.error(`Failed to update likes for blog ${blogId}`);
        }
      } catch (error) {
        // Revert local increment on API request failure
        blog.likes--;
        console.error("Error updating likes:", error);
      }
    },

    //Read Blog
    async useAsyncData() {
      const response = await fetch("http://localhost:8000/api/blogs");
      const data = await response.json();
      this.blogs = data.docs;
    },
    readImg(blog) {
      this.displayImg = blog;
    },

    read() {
      this.pop = !this.pop;
    },

    truncateTitle(title) {
      if (title.length > 10) {
        return title.substring(0, 10) + "...";
      }
      return title;
    },
    truncateText(text) {
      if (text.length > 200) {
        return text.substring(0, 200) + "...";
      }
      return text;
    },

    //Edit Blog
    button() {
      this.isOpen = !this.isOpen;
    },
    openEditBlog(blog) {
      this.editBlogData = { ...blog };
    },
    async updateBlog() {
      try {
        const { id, ...updatedData } = this.editBlogData;
        const response = await fetch("http://localhost:8000/api/blogs/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        });
        if (response.ok) {
          const putIndex = this.blogs.findIndex((blog) => blog.id === id);
          this.blogs[putIndex] = { id, ...updatedData };
          console.log("Blog updated successfully!");
        }
      } catch (error) {
        console.error("Error updating blog:", error);
      }
    },

    //Delete Blog
    async deleteBlog(id) {
      if (confirm("Do you really want to delete?")) {
        try {
          const response = await fetch(
            "http://localhost:8000/api/blogs/" + id,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            this.blogs = this.blogs.filter((blog) => blog.id !== id);
          }
        } catch (error) {
          console.error("Error deleting data:", error);
        }
      }
    },
  },
};
</script>
