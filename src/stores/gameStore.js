import { defineStore } from "pinia";
import { useQuestionStore } from "./questionStore";

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
            this.players.push({ name: playerName, position: 1 });
        },
        removePlayer(index) {
            this.players.splice(index, 1);
        },
        nextPlayer() {
            this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
        },
        updatePlayerPosition(diceValue) {
            const player = this.players[this.currentPlayer];
            player.position += diceValue;
            if (player.position >= 100) {
                this.winner = player;
                this.start = false;
            }
        },
        rollDice(index) {
            this.updatePlayerPosition(index + 1);
        },
        determineWInner() {
            if (this.players.length > 0) {
                this.winner = this.players.reduce((max, player) =>
                    player.position > max.position ? player : max
                );
                this.start = false;
                const QUESTION_STORE = useQuestionStore();
                QUESTION_STORE.resetQuestion();
            }
        }
    },
});