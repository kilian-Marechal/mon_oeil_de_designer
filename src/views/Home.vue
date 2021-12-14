<template>
  <div class="comboDays-container section">
    <div class="combo"><p>5j d'affilé</p></div>
    <div class="h-line-container">
      <div class="h-line"></div>
      <div class="day1 dayBox">M</div>
      <div class="day2 dayBox">J</div>
      <div class="day3 dayBox">V</div>
      <div class="day4 dayBox">
        S
        <img src="../assets/svgs/Polygon.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="center-container">
    <h2 class="background-title">Bienvenue</h2>
    <div class="container">
      <div>
        <p class="mb-8">
          Score à battre : {{ $store.state.user.bestScore }}pts
        </p>
      </div>
      <h1 class="title mb-24">Entraînez votre oeil de designer</h1>
      <button class="play-button title">
        <img src="../assets/svgs/maskb.svg" alt="" /> Jouer
      </button>
    </div>
  </div>
  <Nav />
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {
    Nav
  }
};
</script>

<style lang="scss" scoped>
.comboDays-container {
  position: absolute;
  top: 0%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .combo {
    width: 125px;
    padding-right: 24px;
  }

  .h-line-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;

    .h-line {
      z-index: 1;
      width: 100%;
      height: 2.3px;
      background-color: $dark;
    }

    .dayBox {
      z-index: 2;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      width: 24px;
      height: 24px;
      border: 2.5px solid $dark;
      border-radius: 4px;
    }

    .day1 {
      left: calc(25% - 24px);
      background-color: $accent;
    }

    .day2 {
      left: calc(50% - 24px);
      background-color: $answer;
    }

    .day3 {
      left: calc(75% - 24px);
      background-color: $primary;
    }

    .day4 {
      left: calc(100% - 24px);
      background-color: $white;

      img {
        position: absolute;
        transform: translateY(-18px);
      }
    }
  }
}

.center-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  h1 {
    width: 260px;
  }
}

.background-title {
  left: calc(0% - 185px);
}
</style>
