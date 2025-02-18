<template>
  <div>
    <div
      class="w-[22vw] h-[60vh] bg-nusajarSecondary overflow-auto rounded-lg shadow-md p-4"
    >
      <div class="pt-[2vh] text-center">
        <label class="font-normal text-[2vh] text-nusajarPrimary">
          Posisi Pemain
        </label>
        <div
          v-for="player in players"
          :key="player.name"
          class="flex font-bold justify-center mt-2"
        >
          <p class="text-left w-[15vw] text-[2vh] text-nusajarPrimaryDark">
            {{ player.name }}
          </p>
          <p class="text-center pl-[2vw] text-[2vh] text-nusajarPrimaryDark">
            at {{ player.position }}
          </p>
        </div>
      </div>
      <div class="text-center mt-4">
        <label class="font-normal text-[2vh] text-nusajarPrimary">
          Peringkat Pemain
        </label>
        <div class="flex flex-col items-center justify-center mt-2">
          <div
            v-for="(player, index) in sortedPlayers"
            :key="player.name"
            class="flex items-center justify-between w-full bg-nusajarPrimary/[50%] rounded hover:bg-nusajarPrimary transition-colors duration-200 py-2 px-4 mb-2"
          >
            <label class="font-medium text-[1.7vh] text-nusajarPrimaryDark">
              {{ player.name }}
            </label>
            <label class="font-medium text-[1.7vh] text-nusajarPrimaryDark">
              {{ index + 1 }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGameStore } from "@/stores/gameStore";
export default {
  computed: {
    players() {
      const GAME_STORE = useGameStore();
      return GAME_STORE.players;
    },
    sortedPlayers() {
      return [...this.players].sort((a, b) => b.position - a.position);
    },
  },
};
</script>
