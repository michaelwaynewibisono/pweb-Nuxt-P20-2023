<template>
  <div
    class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 w-full p-6"
  >
    <div v-for="department in departments" :key="department.id">
      <div
        class="bg-[#B3C9A7] px-4 py-8 flex flex-col items-center rounded-md"
        data-aos="zoom-in-up"
        data-aos-delay="300"
      >
        <img :src="department.photo" alt="department" />
        <div class="py-4 text-4xl font-semibold">{{ department.title }}</div>
        <div>{{ department.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      departments: [
        {
          id: 1,
          photo: "/icon/Icon_Adkesma.svg",
          title: "ADKESMA",
          desc: "Advokasi kesejahteraan mahasiswa",
        },
        {
          id: 2,
          photo: "/icon/Icon_Dagri.svg",
          title: "DAGRI",
          desc: "Dalam Negeri",
        },
        {
          id: 3,
          photo: "/icon/Icon_Hublu.svg",
          title: "HUBLU",
          desc: "Hubungan Luar",
        },
        {
          id: 4,
          photo: "/icon/Icon_KWU.svg",
          title: "KWU",
          desc: "Kewirausahaan",
        },
        {
          id: 5,
          photo: "/icon/Icon_Medfo.svg",
          title: "MEDFO",
          desc: "Media Informasi",
        },
        {
          id: 6,
          photo: "/icon/Icon_PSDM.svg",
          title: "PSDM",
          desc: "Pengembangan Sumber Daya Mahasiswa",
        },
        {
          id: 7,
          photo: "/icon/Icon_Ristek.svg",
          title: "RISTEK",
          desc: "Riset dan Teknologi",
        },
      ],
    };
  },
};
</script>
