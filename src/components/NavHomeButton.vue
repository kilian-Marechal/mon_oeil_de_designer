<template>
  <div class="nav-subcontainer">
    <div class="nav-button-container active" v-if="isHome">
      <img src="../assets/svgs/ButtonHomeActive.svg" alt="" />
      <button></button>
    </div>
    <div class="nav-button-container not-active" v-else>
      <img src="../assets/svgs/ButtonHome.svg" alt="" />
      <button class="not-active" @click="goToHome()"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavHomeButton",
  computed: {
    isHome() {
      return this.$route.name === "Home";
    }
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-button-container {
  margin: 0px 8vw;
}
</style>
