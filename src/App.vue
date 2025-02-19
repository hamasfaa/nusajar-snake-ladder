<script setup>
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { useQuestionStore } from "@/stores/questionStore";
import { SpeedInsights } from "@vercel/speed-insights/vue";

const QUESTION_STORE = useQuestionStore();

onMounted(() => {
  QUESTION_STORE.loadQuestions();
});
</script>

<template>
  <RouterView />
  <SpeedInsights />
</template>
