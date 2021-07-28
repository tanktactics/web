<template>
  <div>
    <!-- <h1>{{ $t("message") }}</h1> -->
    <div class="tmp-container">
      <GameViewer :game-data="gameData" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tmp-container {
  margin: 90px auto;
  width: 95%;
  max-width: 1000px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

import GameViewer from "@/components/base/GameViewer.vue";

export default defineComponent({
  name: "Home",
  components: {
    GameViewer,
  },
  setup() {
    return {
      // Ff hard-coden
      gameData: {
        eventListeners: [
          {
            evtName: "points-given",
          },
        ],
        name: "game-2",
        boardWidth: 96,
        boardHeight: 60,
        id: "3b8ca439-ece3-4bf0-b935-ecec07cd9d54",
        players: [
          {
            id: 0,
            name: "Brave_Chicken#7998",
            icon: "https://cdn.discordapp.com/avatars/326072736717733909/87e8541181776b6e2da821ecbf5a6ae5.png",
            points: 3,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 17,
              y: 13,
            },
            distance: 78,
            distance2: 90.55385138137417,
          },
          {
            id: 2,
            name: "Kuhn#2995",
            icon: "https://cdn.discordapp.com/avatars/264498576892100608/ec67a8253f0c327dd8f9d71f617f3f97.png",
            points: 3,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 58,
              y: 57,
            },
            distance: 37,
            distance2: 37.05401462729781,
          },
          {
            id: 3,
            name: "Lau#1337",
            icon: "https://cdn.discordapp.com/avatars/764591424502235157/a_e29845e6da6dad6e0c58b23b3e6c1e9e.png",
            points: 3,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 28,
              y: 47,
            },
            distance: 67,
            distance2: 68.06614430096654,
          },
          {
            id: 5,
            name: "uniflex#0001",
            icon: "https://cdn.discordapp.com/avatars/783447871596920892/a_693a03f3db79b9e97ae9fa0b56b5ba38.png",
            points: 3,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 32,
              y: 46,
            },
            distance: 63,
            distance2: 64.32728814430156,
          },
          {
            id: 6,
            name: "Wouter#3441",
            icon: "https://cdn.discordapp.com/avatars/262522481376493568/976dee75bbf2b8da504471a9f83d2e78.png",
            points: 3,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 6,
              y: 25,
            },
            distance: 89,
            distance2: 95.2732911156112,
          },
          {
            id: 7,
            name: "HIHIQY1#6817",
            icon: "https://cdn.discordapp.com/avatars/310015397049008128/0793f6b2fd92124a65a789b647a5f6e1.png",
            points: 3,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 69,
              y: 26,
            },
            distance: 33,
            distance2: 42.01190307520001,
          },
          {
            id: 8,
            name: "Kees#6957",
            icon: "https://cdn.discordapp.com/avatars/246599730979799040/9c93dd820627e06fbe52923591815e4c.png",
            points: 3,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 4,
              y: 20,
            },
            distance: 91,
            distance2: 99.00505037623081,
          },
          {
            id: 9,
            name: "QkeleQ10#8482",
            icon: "https://cdn.discordapp.com/avatars/807917674477649943/07b4c1e114bde77207fd1320168550cc.png",
            points: 3,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 74,
              y: 20,
            },
            distance: 39,
            distance2: 44.294469180700204,
          },
          {
            id: 11,
            name: "sting#1234",
            icon: "https://cdn.discordapp.com/avatars/125916793817530368/a_4bfcf0f0604df2ce64d9cc40bea3d39c.png",
            points: 3,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 92,
              y: 32,
            },
            distance: 27,
            distance2: 27.16615541441225,
          },
          {
            id: 10,
            name: "Siem#1337",
            icon: "https://cdn.discordapp.com/avatars/195835034559709184/87e918969d6ef189add67f86e2f61c4f.png",
            points: 2,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 81,
              y: 22,
            },
            distance: 37,
            distance2: 39.56008088970496,
          },
          {
            id: 4,
            name: "Martijn#6372",
            icon: "https://cdn.discordapp.com/avatars/585495804932784173/d81440e9c982fdc67de05b3fbf246e19.png",
            points: 2,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 68,
              y: 8,
            },
            distance: 51,
            distance2: 57.706152185014034,
          },
          {
            id: 1,
            name: "Jip#9051",
            icon: "https://cdn.discordapp.com/avatars/159704489970892800/a_1559c4dc542fce82a9a7c42c8f346d8c.png",
            points: 0,
            range: 2,
            health: 3,
            kills: 0,
            coords: {
              x: 66,
              y: 3,
            },
            distance: 56,
            distance2: 63.06346010171025,
          },
        ],
      },
    };
  },
});
</script>
