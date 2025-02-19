<template>
  <Teleport to="body">
    <div
      v-if="showRegulations"
      class="fixed inset-0 flex items-center justify-center bg-black/20 z-50 font-nusajar tracking-widest"
    >
      <div
        class="w-[22vw] h-[60vh] bg-nusajarSecondary overflow-auto rounded-lg shadow-md p-4 flex flex-col"
      >
        <h2 class="text-center font-bold text-[2.5vh] text-nusajarPrimary mb-4">
          Peraturan Permainan
        </h2>
        <ol
          class="list-decimal list-inside text-[2vh] text-nusajarPrimaryDark space-y-2"
        >
          <li>Masukkan nama pemain dan mulai permainan</li>
          <li>Maksimal hanya 6 pemain yang diperbolehkan</li>
          <li>
            Setelah permainan dimulai, pemain harus menjawab pertanyaan pilihan
            ganda
          </li>
          <li>
            Hanya jika menjawab pertanyaan dengan benar, pemain diperbolehkan
            melempar dadu
          </li>
          <li>
            Jika pemain menjawab pertanyaan dengan salah, pemain harus
            melewatkan giliran
          </li>
          <li>
            Pemain yang mencapai kotak ke-100 pertama kali akan menjadi pemenang
          </li>
        </ol>
        <button
          @click="closeRegulations"
          class="bg-green-600 text-white px-4 py-2 mt-4 rounded self-center"
        >
          Tutup
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { Teleport } from "vue";

export default {
  components: { Teleport },
  data() {
    return {
      showRegulations: true,
    };
  },
  methods: {
    closeRegulations() {
      this.showRegulations = false;
    },
  },
};
</script>
