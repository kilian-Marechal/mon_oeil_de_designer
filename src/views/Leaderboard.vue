<template>
  <div class="">
    <RankedUsersList />
  </div>
</template>

<script>
// @ is an alias to /src
import RankedUsersList from "@/components/UsersList.vue";

export default {
  name: "Leaderboard",
  components: {
    RankedUsersList
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
