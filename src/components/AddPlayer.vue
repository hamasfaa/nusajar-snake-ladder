<template>
  <Teleport to="body">
    <div
      v-if="!GAME_STORE.start"
      class="fixed inset-0 flex items-center justify-center bg-black/20 z-50 font-nusajar tracking-widest"
    >
      <div
        class="w-[22vw] h-[60vh] bg-nusajarSecondary overflow-auto rounded-lg shadow-md p-4"
      >
        <div class="pt-[2vh] text-center">
          <label class="font-normal text-[2vh] text-nusajarPrimary">
            Tambah Pemain (1-6 Pemain)
          </label>
          <div class="mt-2">
            <input
              type="text"
              v-model="newPlayer"
              placeholder="Masukkan nama pemain"
              class="border rounded p-2 w-full"
            />
            <button
              @click="addPlayer"
              class="bg-green-600 text-white px-4 py-2 mt-2 rounded"
              :disabled="players.length >= 6"
              :class="{ 'cursor-not-allowed': players.length >= 6 }"
            >
              Tambah
            </button>
          </div>
        </div>
        <div class="text-center mt-4">
          <label class="font-normal text-[2vh] text-nusajarPrimary">
            Daftar Pemain
          </label>
          <div class="mt-2">
            <div
              v-for="(player, index) in players"
              :key="player.name"
              class="flex items-center justify-between bg-nusajarPrimary/[50%] rounded hover:bg-nusajarPrimary transition-colors duration-200 py-2 px-4 mb-2"
            >
              <label class="font-medium text-[1.7vh] text-nusajarPrimaryDark">
                {{ player.name }}
              </label>
              <button
                @click="removePlayer(index)"
                class="text-red-600 px-2 py-1 rounded cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
          <button
            @click="startGame"
            :disabled="players.length === 0"
            :class="{ 'cursor-not-allowed': players.length === 0 }"
            class="bg-green-600 text-white px-4 py-2 mt-2 rounded"
          >
            Mulai
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { useGameStore } from "@/stores/gameStore";
import { Teleport } from "vue";
export default {
  components: { Teleport },
  data() {
    const GAME_STORE = useGameStore();
    return {
      newPlayer: "",
      GAME_STORE,
    };
  },
  computed: {
    players() {
      const GAME_STORE = useGameStore();
      return GAME_STORE.players;
    },
  },
  methods: {
    addPlayer() {
      const GAME_STORE = useGameStore();
      if (this.newPlayer.trim()) {
        GAME_STORE.addPlayer(this.newPlayer.trim());
        this.newPlayer = "";
      }
    },
    startGame() {
      const GAME_STORE = useGameStore();
      GAME_STORE.start = true;
    },
    removePlayer(index) {
      const GAME_STORE = useGameStore();
      GAME_STORE.removePlayer(index);
    },
  },
};
</script>
