<template>
  <Teleport to="body">
    <div
      v-if="GAME_STORE.winner"
      class="fixed inset-0 flex items-center justify-center bg-black/20 z-50 font-nusajar tracking-widest"
    >
      <div
        class="w-[22vw] h-[60vh] bg-nusajarSecondary overflow-auto rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
      >
        <img :src="TROPHY" alt="Trophy" class="mx-auto w-[10vw]" />
        <label
          for=""
          class="font-normal block text-[2vh] mt-4 text-nusajarPrimary"
          >Selamat, Pemenang!</label
        >
        <div class="mt-2">
          <p class="font-medium text-[2vh] text-nusajarPrimaryDark">
            {{ GAME_STORE.winner.name }}
          </p>
        </div>
        <button
          @click="restartGame"
          class="bg-green-600 text-white px-4 py-2 mt-4 rounded"
        >
          Mulai Lagi
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { useGameStore } from "@/stores/gameStore";
import { Teleport } from "vue";
import TROPHY from "@/assets/trophy.png";

export default {
  components: { Teleport },
  data() {
    return {
      GAME_STORE: useGameStore(),
      TROPHY,
    };
  },
  methods: {
    restartGame() {
      this.GAME_STORE.start = false;
      this.GAME_STORE.winner = null;
      this.GAME_STORE.players.forEach((player) => {
        player.position = 1;
      });
      this.GAME_STORE.currentPlayer = 0;
    },
  },
};
</script>
