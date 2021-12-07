<template>
  <div class="nav-subcontainer">
    <div class="nav-button-container active" v-if="isLeaderboard">
      <img src="../assets/svgs/ButtonPodiumActive.svg" alt="" />
      <button></button>
    </div>
    <div class="nav-button-container not-active" v-else>
      <img src="../assets/svgs/ButtonPodium.svg" alt="" />
      <button class="not-active" @click="goToLeaderboard()"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavProfileButton",
  computed: {
    isLeaderboard() {
      return this.$route.name === "Leaderboard";
    }
  },
  methods: {
    goToLeaderboard() {
      this.$router.push("/leaderboard");
    }
  }
};
</script>

<style lang="scss" scoped></style>
