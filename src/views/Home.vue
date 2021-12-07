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
  name: "Home",
  components: {
    RankedUsersList,
    Nav
  }
};
</script>
