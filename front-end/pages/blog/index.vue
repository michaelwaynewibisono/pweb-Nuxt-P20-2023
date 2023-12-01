<template>
    <div
      class="fixed bg-[#2e2e2e] bg-opacity-50 h-screen w-full z-50"
      :style="{ display: isOpen ? 'block' : 'none' }"
    ></div>
    <LazyNavbar custom="sticky" />
    <div>
      <h1>Blogs</h1>
      <div v-for="blog in blogs" :key="blog.id">
        <h2>{{ blog.title }}</h2>
        <p><strong>Author:</strong> {{ blog.author }}</p>
        <p>{{ blog.text }}</p>
        <!-- <p><strong>Likes:</strong> {{ blog.likes }}</p> -->
        <p><strong>Department:</strong> {{ blog.department }}</p>
        <NuxtImg
          :src="'http://localhost:8000' + blog.url"
          :alt="blog.title"
          width="300"
        />
        <hr />
        <div @click="button">
          <h1 class="font-bold cursor-pointer" @click="openEditBlog(blog)">
            EDIT
          </h1>
        </div>
        <h1 class="font-bold cursor-pointer" @click="deleteBlog(blog.id)">
          DELETE
        </h1>
      </div>
    </div>
  
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
  
  <script>
  export default {
    data() {
      return {
        blogs: [],
        editBlogData: {},
        isOpen: false,
      };
    },
    async mounted() {
      await this.useAsyncData();
    },
  
    methods: {
      button() {
        this.isOpen = !this.isOpen;
      },
  
      async useAsyncData() {
        try {
          const response = await fetch("http://localhost:8000/api/blogs");
          const data = await response.json();
          this.blogs = data.docs;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
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
  