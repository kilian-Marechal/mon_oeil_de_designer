<template>
  <div class="user-goal section">
    <h2 class="title mb-24">Mon Objectif</h2>
    <div class="possible-goals">
      <div
        class="goal-container mr-16"
        :class="{ active: $store.state.user.goal.zen }"
        @click="zenToggle"
      >
        <p>Zen</p>
        <p>200pts/jour</p>
      </div>
      <div
        class="goal-container mr-16"
        :class="{ active: $store.state.user.goal.motivated }"
        @click="motivatedToggle"
      >
        <p>Motivé</p>
        <p>400pts/jour</p>
      </div>
      <div
        class="goal-container"
        :class="{ active: $store.state.user.goal.intensive }"
        @click="intensiveToggle"
      >
        <p>Intensif</p>
        <p>800pts/jour</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserGoal",
  data() {
    return {
      // zen: false,
      // motivated: false,
      // intensive: false
    };
  },
  // mounted() {
  //   if (localStorage.zen) {
  //     this.zen = localStorage.zen;
  //   }
  //   if (localStorage.motivated) {
  //     this.motivated = localStorage.motivated;
  //   }
  // },
  // watch: {
  //   zen(newZen) {
  //     localStorage.zen = newZen;
  //   },
  //   motivated(newMotivated) {
  //     localStorage.motivated = newMotivated;
  //   },
  //   intensive(newIntensive) {
  //     localStorage.intensive = newIntensive;
  //   }
  // },
  methods: {
    zenToggle: function () {
      if (this.$store.state.user.goal.zen == false) {
        this.$store.state.user.goal.zen = !this.$store.state.user.goal.zen;
      }
      if (this.$store.state.user.goal.motivated == true) {
        this.$store.state.user.goal.motivated =
          !this.$store.state.user.goal.motivated;
      }
      if (this.$store.state.user.goal.intensive == true) {
        this.$store.state.user.goal.intensive =
          !this.$store.state.user.goal.intensive;
      }
    },
    motivatedToggle: function () {
      if (this.$store.state.user.goal.motivated == false) {
        this.$store.state.user.goal.motivated =
          !this.$store.state.user.goal.motivated;
      }
      if (this.$store.state.user.goal.zen == true) {
        this.$store.state.user.goal.zen = !this.$store.state.user.goal.zen;
      }
      if (this.$store.state.user.goal.intensive == true) {
        this.$store.state.user.goal.intensive =
          !this.$store.state.user.goal.intensive;
      }
    },
    intensiveToggle: function () {
      if (this.$store.state.user.goal.intensive == false) {
        this.$store.state.user.goal.intensive =
          !this.$store.state.user.goal.intensive;
      }
      if (this.$store.state.user.goal.motivated == true) {
        this.$store.state.user.goal.motivated =
          !this.$store.state.user.goal.motivated;
      }
      if (this.$store.state.user.goal.zen == true) {
        this.$store.state.user.goal.zen = !this.$store.state.user.goal.zen;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.user-goal {
  width: 100%;

  .possible-goals {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .goal-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 120px;
      padding: 8px 6px 8px 8px;
      border-radius: 2px;
      cursor: pointer;
      transition: 200ms ease-out;
      will-change: background-color, transform;
    }

    .active {
      background-color: $primary;
      transform: translateY(-2px);
    }
  }
}
</style>
