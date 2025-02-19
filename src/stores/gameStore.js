import { defineStore } from "pinia";
import { useQuestionStore } from "@/stores/questionStore";
import { useBoardStore } from "@/stores/boardStore";

export const useGameStore = defineStore("game", {
    state: () => ({
        dice: 0,
        players: [],
        currentPlayer: 0,
        start: false,
        winner: null,
    }),
    actions: {
        addPlayer(playerName) {
            this.players.push({ name: playerName, position: 1, color: this.getRandomColor() });
        },
        removePlayer(index) {
            this.players.splice(index, 1);
        },
        nextPlayer() {
            this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
        },
        updatePlayerPosition(diceValue) {
            const BOARD_STORE = useBoardStore();

            const player = this.players[this.currentPlayer];
            player.position += diceValue;

            player.position = BOARD_STORE.checkPosition(player.position);

            if (player.position >= 100) {
                this.winner = player;
                this.start = false;
            }
        },
        rollDice(index) {
            this.updatePlayerPosition(index + 1);
        },
        determineWinner() {
            if (this.players.length > 0) {
                this.winner = this.players.reduce((max, player) =>
                    player.position > max.position ? player : max
                );
                // console.log(this.winner);
            }
        },
        resetGame() {
            this.dice = 0;
            this.currentPlayer = 0;
            this.start = false;
            this.winner = null;
            this.players = [];
            const QUESTION_STORE = useQuestionStore();
            QUESTION_STORE.resetQuestion();
        },
        getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
    },
});