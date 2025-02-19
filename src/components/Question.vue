<template>
  <div class="items-center justify-center">
    <div
      class="w-[22vw] h-[60vh] mt-[10vh] mr-[2vw] bg-nusajarSecondary rounded-lg shadow-md p-4"
    >
      <div class="text-[1.7vh] text-center">
        <h1 class="font-semibold text-red-500">
          <span class="text-nusajarPrimaryDark">Waktu Tersisa: </span
          >{{ formattedTime }}
        </h1>
      </div>
      <div class="text-[1.7vh] text-center">
        <h1 class="font-semibold text-[3vh] text-nusajarPrimary">
          Pertanyaan untuk {{ currentPlayerName }}
        </h1>
      </div>
      <div class="w-[16vw] mx-auto">
        <p class="text-center font-bold text-[2vh]">
          {{ currentQuestion.question }}
        </p>
        <label
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          class="block pb-[2vh] text-[1.7vh] hover:text-nusajarPrimaryDark transition-colors duration-200"
        >
          <input
            type="radio"
            name="mcq"
            :value="option.key"
            v-model="selectedAnswer"
          />{{ option.value }}
        </label>
        <div class="text-center">
          <button
            class="w-[6vw] h-[3.5vh] text-[1.7vh] text-white bg-green-600 rounded hover:bg-green-700 transition-colors duration-200"
            @click="handleSubmitAnswer"
            :disabled="answered"
            :class="{ 'cursor-not-allowed': answered }"
          >
            JAWAB
          </button>
        </div>
        <div class="block text-center items-center mt-[1vh]">
          <label
            v-if="correctAnswer"
            class="block font-semibold text-green-500 text-[1.7vh]"
          >
            Jawaban kamu benar, kamu bisa mengocok dadu
          </label>
          <label
            v-else-if="answered"
            class="block font-semibold text-red-500 text-[1.7vh]"
          >
            Jawaban kamu salah, jawaban yang benar adalah
            <span class="text-green-500"> {{ currentQuestion.answer }}</span>
          </label>
          <button
            class="w-[6vw] h-[3.5vh] text-[1.7vh] text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200 mt-[2vh]"
            :disabled="!answered || (correctAnswer && !diceRolled)"
            :class="{
              'cursor-not-allowed': !answered || (correctAnswer && !diceRolled),
            }"
            @click="nextQuestion"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuestionStore } from "@/stores/questionStore";
import { useGameStore } from "@/stores/gameStore";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      selectedAnswer: null,
      time: 30,
      interval: null,
      GAME_STORE: useGameStore(),
    };
  },
  computed: {
    ...mapState(useQuestionStore, [
      "currentQuestion",
      "answered",
      "correctAnswer",
      "diceRolled",
    ]),
    ...mapState(useGameStore, ["players", "currentPlayer"]),
    currentPlayerName() {
      return this.players[this.currentPlayer]?.name || "";
    },
    formattedTime() {
      const minutes = Math.floor(this.time / 60);
      const seconds = this.time % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    },
  },
  methods: {
    ...mapActions(useQuestionStore, ["generateQuestion", "submitAnswer"]),
    ...mapActions(useGameStore, ["nextPlayer", "rollDice"]),
    handleSubmitAnswer() {
      if (this.selectedAnswer) {
        this.submitAnswer(this.selectedAnswer);
        clearInterval(this.interval);
      }
    },
    nextQuestion() {
      const QUESTION_STORE = useQuestionStore();
      if (
        QUESTION_STORE.currentQuestionIndex <
        QUESTION_STORE.questions.length - 1
      ) {
        this.generateQuestion();
        this.selectedAnswer = null;
        this.time = 30;
        this.startTimer();
        this.nextPlayer();
      } else {
        this.GAME_STORE.determineWInner;
        QUESTION_STORE.resetQuestion();
      }
    },
    startTimer() {
      this.interval = setInterval(() => {
        if (this.time > 0) {
          this.time--;
        } else {
          clearInterval(this.interval);
          if (!this.answered) {
            this.submitAnswer(null);
          }
        }
      }, 1000);
    },
    resetTimer() {
      clearInterval(this.interval);
      this.time = 30;
    },
  },
  mounted() {
    const QUESTION_STORE = useQuestionStore();
    QUESTION_STORE.loadQuestions();
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
};
</script>
