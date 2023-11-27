<template>
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
      <h1 class="font-bold cursor-pointer" @click="openEditForm(blog)">EDIT</h1>
      <h1 class="font-bold cursor-pointer" @click="deleteBlog(blog.id)">
        DELETE
      </h1>
    </div>
  </div>

  <div>
    <h1>Edit Blog</h1>
    <form @submit.prevent="updateBlog">
      <input
        type="text"
        v-model="editBlogData.title"
        class="my-2 p-2 border rounded"
        placeholder="Title"
        required
      />

      <input
        type="text"
        v-model="editBlogData.author"
        class="my-2 p-2 border rounded"
        placeholder="Author"
        required
      />

      <textarea
        v-model="editBlogData.text"
        class="my-2 p-2 border rounded"
        placeholder="Blog Content"
        rows="6"
        required
      ></textarea>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
        Update
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      showEditForm: false, // State variable to control edit form display
      editBlogData: {},
    };
  },
  async mounted() {
    await this.useAsyncData();
  },
  methods: {
    async useAsyncData() {
      try {
        const response = await fetch("http://localhost:8000/api/blogs");
        const data = await response.json();
        this.blogs = data.docs;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    openEditForm(blog) {
      // Assuming you want to populate the form fields when editing
      this.editBlogData = { ...blog };
      this.showEditForm = true; // Display the edit form
    },

    async updateBlog() {
      try {
        const { id, ...updatedData } = this.editBlogData; // Extract id and updated data
        const response = await fetch(`http://localhost:8000/api/blogs/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData), // Send updated data in the body
        });
        if (response.ok) {
          // Optionally, update the UI or perform other actions after successful update
          console.log("Blog updated successfully!");
        }
      } catch (error) {
        console.error("Error updating blog:", error);
      } finally {
        // Hide the edit form regardless of success or failure
        this.showEditForm = false;
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
