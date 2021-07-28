<template>
  <div class="game-viewer-wrapper">
    <Heading1 subheading="Tank Tactics">{{ gameData.name }}</Heading1>

    <div class="board">
      <panZoom selector=".zoomable">
        <div class="zoomable">
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
              :key="`y-${x}`"
            >
              <Cell v-html="getCellHtml(x, y)" />
            </div>
          </div>
        </div>
      </panZoom>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.board {
  width: 100%;
  max-height: 90vh;
  overflow-x: auto; // Overflow is just temp.
  overflow-y: auto;
  border: 1px solid var(--border);
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

<script>
import Heading1 from "@/components/util/Heading1.vue";
import Cell from "@/components/util/Cell.vue";

export default {
  components: {
    Heading1,
    Cell,
  },
  props: {
    gameData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log(props.gameData);

    const getCellHtml = (x, y) => {
      let players = props.gameData.players;
      // console.log(players);

      let closestPlayers = players
        .map((player) => {
          let distance = Math.max(disX, disY);

          let disX = Math.abs(player.x - x);
          let disY = Math.abs(player.y - y);
          let distance2 = Math.sqrt(disX * disX + disY * disY);

          player.distance = distance;
          player.distance2 = distance2;
          return player;
        })
        .sort((a, b) => a.distance - b.distance);

      // let color = closestPlayers[0].t ?? "red";

      if (closestPlayers[0].distance === 0) {
        return "t";
      }
      return "";
    };

    return {
      getCellHtml,
    };
  },
};
</script>
