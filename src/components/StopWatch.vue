<template>
  <div class="mr-[2vw] bg-nusajarSecondary rounded-lg shadow-md p-4">
    <div class="text-center">
      <h1 class="font-semibold text-red-500">
        <span class="text-nusajarPrimaryDark text-[2vh]"
          >Waktu Permainan Tersisa:
        </span>
      </h1>
      <p class="mt-[2vh] text-[4vh] font-bold">{{ formattedTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 300,
      interval: null,
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
  mounted() {
    this.startTimer();
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
        }
      }, 1000);
    },
  },
};
</script>
