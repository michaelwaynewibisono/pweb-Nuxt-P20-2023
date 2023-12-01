<template>
  <LazyNavbar custom="sticky" />
  <div class="bg-DBE2BD min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-2 text-3D6356">Meet Our Team</h1>
      <h2 class="text-lg font-semibold mb-4 text-3D6356">Kelompok 20</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="member in team"
          :key="member.id"
          class="p-4 border rounded-md bg-514D4B text-white max-w-sm"
        >
          <img
            :src="member.photo"
            alt="Team Member"
            class="w-full h-96 object-cover mb-4 rounded-md"
          />
          <h2 class="text-lg font-semibold mb-2">{{ member.name }}</h2>
          <p class="text-609D8A">{{ member.NRP }}</p>
          <p class="text-B3C9A7">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
  <LazyFooter />
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          id: 1,
          name: "Michael Wayne",
          NRP: "5027221037",
          photo: "/mike.jpeg",
        },
        {
          id: 2,
          name: "Refaldi Agustian",
          NRP: "5027211015",
          photo: "/faldi2.png",
        },
        {
          id: 3,
          name: "Khansa Adia Rahma",
          NRP: "5027221071",
          photo: "/khansa2.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-DBE2BD {
  background-color: #dbe2bd;
}

.text-3D6356 {
  color: #3d6356;
}

.bg-514D4B {
  background-color: #514d4b;
}

.text-609D8A {
  color: #609d8a;
}

.text-B3C9A7 {
  color: #b3c9a7;
}
</style>
