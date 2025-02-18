<template>
  <div
    class="bg-black/[50%] h-[100vh] flex justify-center font-nusajar tracking-widest"
  >
    <div class="pt-[4vh] flex justify-center">
      <div class="block mr-[0.5vw] space-y-7">
        <div class="animate-floaty-horizontal">
          <Question />
        </div>
        <div class="animate-floaty">
          <StopWatch />
        </div>
      </div>
      <Board class="animate-floaty" />
      <div class="pt-[7vh] block ml-[2vw]">
        <Leaderboard class="animate-floaty-diagonal" />
        <Dice class="animate-floaty-horizontal" />
      </div>
    </div>
  </div>
  <div class="absolute top-4 right-4 flex gap-4 items-center z-100">
    <button
      @click="toggleFullScreen"
      class="p-2 rounded shadow text-3xl bg-white/[50%]"
    >
      <span class="material-symbols-outlined">
        {{ isFullScreen ? "close_fullscreen" : "fullscreen" }}
      </span>
    </button>
  </div>
  <AddPlayer />
</template>

<script>
import Leaderboard from "@/components/Leaderboard.vue";
import Dice from "@/components/Dice.vue";
import Question from "@/components/Question.vue";
import Board from "@/components/Board.vue";
import StopWatch from "@/components/StopWatch.vue";
import AddPlayer from "@/components/AddPlayer.vue";

export default {
  components: {
    Leaderboard,
    Dice,
    Question,
    Board,
    StopWatch,
    AddPlayer,
  },
  data() {
    return {
      isFullScreen: false,
    };
  },
  methods: {
    toggleFullScreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        this.isFullScreen = true;
      } else {
        document.exitFullscreen();
        this.isFullScreen = false;
      }
    },
  },
};
</script>

<style scoped>
@keyframes floaty {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes floaty-horizontal {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes floaty-diagonal {
  0% {
    transform: translate(0%, 0%);
  }
  50% {
    transform: translate(10px, -10px);
  }
  100% {
    transform: translate(0%, 0%);
  }
}

.animate-floaty {
  animation: floaty 2s ease-in-out infinite;
}

.animate-floaty-horizontal {
  animation: floaty-horizontal 2s ease-in-out infinite;
}

.animate-floaty-diagonal {
  animation: floaty-diagonal 2s ease-in-out infinite;
}
</style>
