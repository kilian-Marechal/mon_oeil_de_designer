<template>
  <div class="game-main-container">
    <img class="absolute-svgs" src="../assets/svgs/circleOrange.svg" alt="" />
    <img class="absolute-svgs" src="../assets/svgs/diamonCyan.svg" alt="" />
    <img class="absolute-svgs" src="../assets/svgs/diamondPurple.svg" alt="" />
    <img
      class="absolute-svgs"
      src="../assets/svgs/doubleCircleBlue.svg"
      alt=""
    />
    <img
      class="absolute-svgs"
      src="../assets/svgs/doubleTriangleOrange.svg"
      alt=""
    />
    <img class="absolute-svgs" src="../assets/svgs/rectangleBlue.svg" alt="" />
    <img
      class="absolute-svgs"
      src="../assets/svgs/squareDoublePurple.svg"
      alt=""
    />
    <img class="absolute-svgs" src="../assets/svgs/triangleOrange.svg" alt="" />
    <div class="countdown first">3</div>
    <div class="countdown second">2</div>
    <div class="countdown third">1</div>
  </div>
</template>

<script>
export default {
  name: "Game",

  data() {
    return {};
  },

  computed: {},

  methods: {}
};
</script>

<style lang="scss" scoped>
.game-main-container {
  position: relative;
  min-height: 100vh;

  .countdown {
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    font-size: 180px;
    font-family: "Manrope", sans-serif;
    color: $primary;
  }

  .first {
    animation: first-countdown-pop 2s ease 1s 1 running both;

    @keyframes first-countdown-pop {
      0% {
        opacity: 0;
      }
      50%,
      75% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  .second {
    animation: second-countdown-pop 2s ease 3.5s 1 running both;

    @keyframes second-countdown-pop {
      0% {
        opacity: 0;
      }
      50%,
      75% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  .third {
    animation: third-countdown-pop 2s ease 6s 1 running both;

    @keyframes third-countdown-pop {
      0% {
        opacity: 0;
      }
      50%,
      75% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}
</style>
