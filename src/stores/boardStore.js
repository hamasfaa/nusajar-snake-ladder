import { defineStore } from "pinia";

export const useBoardStore = defineStore("board", {
    state: () => ({
        board: [],
        snakeLadder: {
            snakeBite: [48, 67, 74, 79, 83, 96],
            snakeLand: [28, 24, 52, 59, 19, 76],
            ladderClimb: [8, 18, 27, 60, 68],
            ladderLand: [13, 65, 46, 61, 89]
        }
    }),
    actions: {
        initBoard() {
            let tableData = [];
            let count = 100;
            const boxColour = '#5d5ada';

            for (let i = 0; i < 5; i++) {
                // Bagian row pertama
                let row1 = [];
                for (let j = 0; j < 10; j++) {
                    let backgroundColor = (count % 2 === 0) ? '#edecff' : boxColour;
                    row1.push({
                        number: count,
                        backgroundColor,
                        id: `box${count}`,
                    });
                    count--;
                }
                count = count - 9;

                // Bagian row kedua
                let row2 = [];
                for (let j = 0; j < 10; j++) {
                    let backgroundColor = (count % 2 === 0) ? '#edecff' : boxColour;
                    row2.push({
                        number: count,
                        backgroundColor,
                        id: `box${count}`,
                    });
                    count++;
                }
                count = count - 11;

                tableData.push(row1);
                tableData.push(row2);
            }
            this.board = tableData;
        }
    },
});