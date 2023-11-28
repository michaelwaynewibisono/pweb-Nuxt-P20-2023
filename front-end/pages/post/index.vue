<template>
  <div class="fixed z-50 w-full min-h-screen bg-[#2e2e2e] bg-opacity-50">
    <div
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F9F9F9] w-[90%] lg:w-[55%] px-11 py-12 rounded-xl"
    >
      <form @submit.prevent="submitForm" enctype="multipart/form-data">
        <div class="flex justify-between items-center">
          <NuxtLink to="/#create">
            <div
              class="cursor-pointer bg-[#2e2e2e] text-[#F8F8F8] hover:shadow-xl px-4 py-1 rounded-full"
            >
              Cancel
            </div>
          </NuxtLink>
          <button
            type="submit"
            class="bg-[#3D6356] text-[#F8F8F8] hover:shadow-xl px-4 py-1 rounded-full cursor-pointer"
          >
            Submit
          </button>
        </div>
        <div class="my-12"></div>
        <input
          type="text"
          v-model="formData.title"
          class="py-2 text-3xl outline-none bg-[#F9F9F9] w-full"
          placeholder="Title"
          required
        />

        <div class="my-3"></div>

        <input
          type="text"
          v-model="formData.author"
          class="py-2 text-lg outline-none bg-[#F9F9F9] w-full"
          placeholder="Author"
          required
        />
        <div class="my-5"></div>

        <textarea
          v-model="formData.text"
          class="resize-none outline-none bg-[#F9F9F9] w-full text-xl"
          placeholder="What's new?"
          rows="8"
          required
        />

        <div class="my-4"></div>
        <input
          type="file"
          @change="handleFileChange"
          required
          class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
        />
        <div class="my-6"></div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const router = useRouter();

const formData = ref({
  title: "",
  author: "",
  text: "",
  file: null,
});

const handleFileChange = (event) => {
  formData.value.file = event.target.files[0];
};

const submitForm = async () => {
  const data = new FormData();
  data.append("title", formData.value.title);
  data.append("author", formData.value.author);
  data.append("text", formData.value.text);
  data.append("file", formData.value.file);

  const response = await fetch("http://localhost:8000/api/blogs", {
    method: "POST",
    body: data,
  });

  const responseData = await response.json();
  console.log(responseData);

  router.push("/#blog");
  const form = document.querySelector("form");
  if (form) {
    form.reset();
  }

  // Reset form
  formData.value.title = "";
  formData.value.author = "";
  formData.value.text = "";
  formData.value.file = null;
};
</script>
