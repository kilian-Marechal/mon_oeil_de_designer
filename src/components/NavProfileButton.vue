<template>
  <div class="nav-subcontainer">
    <div class="nav-button-container active" v-if="isProfile">
      <img src="../assets/svgs/ButtonProfileActive.svg" alt="" />
      <button></button>
    </div>
    <div class="nav-button-container not-active" v-else>
      <img src="../assets/svgs/ButtonProfile.svg" alt="" />
      <button class="not-active" @click="goToProfile()"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavProfileButton",
  computed: {
    isProfile() {
      return this.$route.name === "Profile";
    }
  },
  methods: {
    goToProfile() {
      this.$router.push("/profile");
    }
  }
};
</script>

<style lang="scss" scoped></style>
