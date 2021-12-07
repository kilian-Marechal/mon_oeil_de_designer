<template>
  <UserProfileSection />
  <UserGoal />
  <UserAlerts />
  <UserAbout />
  <Nav />
</template>

<script>
import UserProfileSection from "@/components/UserProfileSection.vue";
import UserGoal from "@/components/UserGoal.vue";
import UserAlerts from "@/components/UserAlerts.vue";
import UserAbout from "@/components/UserAbout.vue";
import Nav from "@/components/Nav.vue";

export default {
  components: {
    UserProfileSection,
    UserGoal,
    UserAlerts,
    UserAbout,
    Nav
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped></style>
