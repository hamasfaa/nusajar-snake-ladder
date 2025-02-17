<template>
  <div class="bg-black/[50%] h-[100vh] flex justify-center">
    <div class="">
      <Question />
    </div>
    <div class="pt-[4vh] flex justify-center">
      <Board />
      <div class="pt-[7vh] block ml-[2vw]">
        <Leaderboard />
        <Dice />
      </div>
    </div>
  </div>
</template>

<script>
import Leaderboard from "@/components/Leaderboard.vue";
import Dice from "@/components/Dice.vue";
import Question from "@/components/Question.vue";
import Board from "@/components/Board.vue";
export default {
  components: {
    Leaderboard,
    Dice,
    Question,
    Board,
  },
};
</script>
