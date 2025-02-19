<template>
  <div class="mr-[2vw] bg-nusajarSecondary rounded-lg shadow-md p-4">
    <div class="text-center">
      <h1 class="font-semibold text-red-500">
        <span class="text-nusajarPrimaryDark text-[2vh]">
          Waktu Permainan Tersisa:
        </span>
      </h1>
      <p class="mt-[2vh] text-[4vh] font-bold">{{ formattedTime }}</p>
    </div>
  </div>
</template>

<script>
import { useGameStore } from "@/stores/gameStore";

export default {
  data() {
    return {
      time: 300,
      interval: null,
      GAME_STORE: useGameStore(),
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.time / 60);
      const seconds = this.time % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    },
  },
  watch: {
    "GAME_STORE.start"(newVal) {
      if (newVal) {
        this.startTimer();
      } else {
        this.resetTimer();
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    startTimer() {
      this.interval = setInterval(() => {
        if (this.time > 0) {
          this.time--;
        } else {
          clearInterval(this.interval);
          this.GAME_STORE.determineWInner();
        }
      }, 1000);
    },
    resetTimer() {
      clearInterval(this.interval);
      this.time = 300;
    },
  },
};
</script>
