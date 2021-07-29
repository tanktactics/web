<template>
  <div class="game-viewer-wrapper">
    <div class="header">
      <Heading1 subheading="Tank Tactics">
        <span>{{ gameData.name }}</span>
      </Heading1>
      <!-- TODO: add scroll dragging -->
      <div
        class="players"
        ref="scroll"
        @mousemove="mouseMoveHandler"
        @mouseup="mouseUpHandler"
      >
        <div v-for="(player, index) in gameData.players" :key="index">
          <Avatar :url="player.icon" />
          <HoverCard
            class="hover-card"
            :username="player.name"
            :points="player.points"
            :health="player.health"
            :range="player.range"
            :kills="player.kills"
          />
        </div>
      </div>
    </div>

    <div class="board">
      <div
        class="row"
        v-for="y of Array(gameData.boardHeight)
          .fill(0)
          .map((_, i) => i)"
        :key="`y-${y}`"
      >
        <div
          class="column"
          v-for="x of Array(gameData.boardWidth)
            .fill(0)
            .map((_, i) => i)"
          :key="`x-${x}`"
        >
          <Cell v-html="getCellHtml(x, y)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: var(--gap);
  align-items: center;
  margin-bottom: var(--gap);
}

.players {
  width: 100%;
  display: flex;
  gap: var(--gap);
  cursor: pointer;
  overflow-x: scroll;

  .avatar:hover ~ .hover-card {
    visibility: visible;
    opacity: 1;
  }
}

.hover-card {
  visibility: hidden;
  opacity: 0;
}

.board {
  width: 100%;
  max-height: 90vh;
  overflow-x: auto; // Overflow is just temp.
  overflow-y: auto;
  border: var(--border);
  --gap: 1px;

  .row {
    display: flex;
    flex-wrap: nowrap;
  }

  .cell {
    width: 1rem;
    height: 1rem;
    min-width: 1rem;
    background: var(--content);
    margin: var(--gap);
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Heading1 from "@/components/util/Heading1.vue";
import Cell from "@/components/util/Cell.vue";
import HoverCard from "@/components/base/HoverCard.vue";
import Avatar from "@/components/base/Avatar.vue";
import { Player } from "@/types/player";

export default defineComponent({
  components: {
    Heading1,
    Cell,
    HoverCard,
    Avatar,
  },
  props: {
    gameData: {
      type: Object,
      required: true,
    },
  },
  setup(props: any) {
    const getCellHtml = (x: number, y: number) => {
      const players = props.gameData.players;

      const closestPlayers = players
        .map((player: Player) => {
          let disX = Math.abs(player.coords.x - x);
          let disY = Math.abs(player.coords.y - y);

          let distance = Math.max(disX, disY);
          let distance2 = Math.sqrt(disX * disX + disY * disY);

          player.distance = distance;
          player.distance2 = distance2;
          return player;
        })
        .sort((a: any, b: any) => a.distance - b.distance);

      // let color = closestPlayers[0].t ?? "red";

      if (closestPlayers[0].distance === 0) {
        return "t";
      }

      for (const player of players) {
        if (player.coords.x == x && player.coords.y == y) {
          return `<img src="${player.icon}" width="100%" height="100%" alt="${player.name}" />`;
        }
      }

      return "";
    };

    return {
      getCellHtml,
    };
  },
});
</script>
