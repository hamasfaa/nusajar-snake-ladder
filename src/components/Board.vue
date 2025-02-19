<template>
  <div class="block">
    <img :src="SnakeLadder" alt="" class="absolute h-[87vh]" />
    <table v-if="BOARD_STORE.board.length" class="mt-[1vh] ml-[1.5vh]">
      <tr v-for="(row, rowIndex) in BOARD_STORE.board" :key="rowIndex">
        <td
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          :id="cell.id"
          :style="{ backgroundColor: cell.backgroundColor }"
          class="align-top min-w-[8.5vh] max-w-[8.5vh] w-[8.5vh] h-[8.5vh] border-solid border-2 border-black"
        >
          {{ cell.number }}
          <div
            v-for="player in playersInCell(cell.number)"
            :key="player.name"
            class="rounded-full relative"
            :style="{ backgroundColor: player.color }"
            :class="
              playersInCell(cell.number).length > 5
                ? 'w-[0.8vh] h-[0.8vh]'
                : playersInCell(cell.number).length > 4
                ? 'w-[1vh] h-[1vh]'
                : playersInCell(cell.number).length > 3
                ? 'w-[1.2vh] h-[1.2vh]'
                : 'w-[1.5vh] h-[1.5vh]'
            "
          ></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useBoardStore } from "@/stores/boardStore";
import { useGameStore } from "@/stores/gameStore";
import SnakeLadder from "@/assets/snake-ladder.png";

export default {
  setup() {
    const BOARD_STORE = useBoardStore();
    const GAME_STORE = useGameStore();

    onMounted(() => {
      BOARD_STORE.initBoard();
    });

    const playersInCell = (cellNumber) => {
      return GAME_STORE.players.filter(
        (player) => player.position === cellNumber
      );
    };

    return {
      BOARD_STORE,
      playersInCell,
    };
  },
  data() {
    return {
      SnakeLadder,
    };
  },
};
</script>
