<template>
  <div class="">
    <RankedUsersList />
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import RankedUsersList from "@/components/UsersList.vue";
import Nav from "@/components/Nav.vue";

export default {
  name: "Leaderboard",
  components: {
    RankedUsersList,
    Nav
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
