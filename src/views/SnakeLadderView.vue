<template>
  <div class="bg-black/[50%] h-[100vh] flex justify-center">
    <div class="">
      <Question />
    </div>
    <div class="pt-[7vh] block ml-[2vw]">
      <Leaderboard />
      <Dice />
    </div>
  </div>
</template>

<script>
import Leaderboard from "@/components/Leaderboard.vue";
import Dice from "@/components/Dice.vue";
import Question from "@/components/Question.vue";
export default {
  components: {
    Leaderboard,
    Dice,
    Question,
  },
};
</script>
