<template>
  <div class="nav-container">
    <NavProfileButton />
    <NavHomeButton />
    <NavLeaderboardButton />
  </div>
</template>

<script>
import NavHomeButton from "@/components/NavHomeButton.vue";
import NavProfileButton from "@/components/NavProfileButton.vue";
import NavLeaderboardButton from "@/components/NavLeaderboardButton.vue";

export default {
  components: {
    NavProfileButton,
    NavHomeButton,
    NavLeaderboardButton
  },
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.nav-container {
  z-index: 30;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  margin: 30px auto 0px auto;
  padding: 8px 0;
  background-color: $white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
</style>
