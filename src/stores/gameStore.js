import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
    state: () => ({
        dice: 0,
        players: [],
        currentPlayer: 0,
    }),
    actions: {
        addPlayer(playerName) {
            this.players.push({ name: playerName, position: this.players.length + 1 });
        },
    },
});