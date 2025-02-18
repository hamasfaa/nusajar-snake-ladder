import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
    state: () => ({
        dice: 0,
        players: [],
        currentPlayer: 0,
        start: false,
    }),
    actions: {
        addPlayer(playerName) {
            this.players.push({ name: playerName, position: 1 });
        },
        nextPlayer() {
            this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
        },
        updatePlayerPosition(diceValue) {
            this.players[this.currentPlayer].position += diceValue;
        },
        rollDice(index) {
            this.updatePlayerPosition(index + 1);
        },
    },
});