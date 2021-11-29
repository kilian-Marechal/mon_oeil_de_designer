<template>
  <div class="">
    <RankedUsersList />
  </div>
</template>

<script>
// @ is an alias to /src
import RankedUsersList from "@/components/UsersList.vue";

export default {
  name: "Home",
  components: {
    RankedUsersList
  }
};
</script>
