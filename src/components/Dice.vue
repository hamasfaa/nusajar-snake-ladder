<template>
  <div class="flex flex-col items-center mt-[2vh]">
    <img :src="diceImage" alt="dice" class="w-[8vw] mb-[1vh]" />
    <button
      class="w-[6vw] h-[3.5vh] text-[1.7vh] text-white bg-red-500 rounded mt-[1vh] hover:bg-red-600 transition-colors duration-200"
      @click="rollDice"
    >
      Roll Dice
    </button>
  </div>
</template>

<script>
import Dice1Image from "@/assets/dice-1.png";
import Dice2Image from "@/assets/dice-2.png";
import Dice3Image from "@/assets/dice-3.png";
import Dice4Image from "@/assets/dice-4.png";
import Dice5Image from "@/assets/dice-5.png";
import Dice6Image from "@/assets/dice-6.png";

export default {
  data() {
    return {
      diceImages: [
        Dice1Image,
        Dice2Image,
        Dice3Image,
        Dice4Image,
        Dice5Image,
        Dice6Image,
      ],
      diceImage: Dice1Image,
    };
  },
  methods: {
    rollDice() {
      const randomIndex = Math.floor(Math.random() * this.diceImages.length);
      this.diceImage = this.diceImages[randomIndex];
    },
  },
};
</script>
