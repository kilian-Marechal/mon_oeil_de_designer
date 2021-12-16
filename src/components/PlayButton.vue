<template>
  <button @click="goToGame()" class="play-button title">
    <img src="../assets/svgs/maskb.svg" alt="" /> Jouer
  </button>
</template>

<script>
export default {
  name: "NavHomeButton",
  methods: {
    goToGame() {
      this.$router.push("/game");
    }
  }
};
</script>

<style lang="scss" scoped></style>
