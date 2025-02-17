<template>
  <div class="block">
    <img :src="SnakeLadder" alt="" class="absolute h-[87vh]" />
    <table v-if="boardStore.board.length" class="mt-[1vh] ml-[1.5vh]">
      <tr v-for="(row, rowIndex) in boardStore.board" :key="rowIndex">
        <td
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          :id="cell.id"
          :style="{ backgroundColor: cell.backgroundColor }"
          class="align-top min-w-[8.5vh] max-w-[8.5vh] w-[8.5vh] h-[8.5vh] border-solid border-2 border-black"
        >
          {{ cell.number }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useBoardStore } from "@/stores/boardStore";
import SnakeLadder from "@/assets/snake-ladder.png";

export default {
  setup() {
    const boardStore = useBoardStore();

    onMounted(() => {
      boardStore.initBoard();
    });

    return {
      boardStore,
    };
  },
  data() {
    return {
      SnakeLadder,
    };
  },
};
</script>
