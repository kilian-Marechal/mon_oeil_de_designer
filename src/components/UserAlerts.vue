<template>
  <div class="alert-container section">
    <h2 class="title mb-24">Mes rappels</h2>
    <p class="mb-24">
      Recevoir un rappel à
      <input
        class="alarm-timer"
        type="text"
        v-model="$store.state.user.alert"
      />
    </p>
    <div class="days-container">
      <button
        class="day"
        :class="{ active: $store.state.user.pickedDays.monday }"
        @click="mondayToggle"
      >
        Lu
      </button>
      <button
        class="day"
        :class="{ active: $store.state.user.pickedDays.tuesday }"
        @click="tuesdayToggle"
      >
        Ma
      </button>
      <button
        class="day"
        :class="{ active: $store.state.user.pickedDays.wednesday }"
        @click="wednesdayToggle"
      >
        Me
      </button>
      <button
        class="day"
        :class="{ active: $store.state.user.pickedDays.thursday }"
        @click="thursdayToggle"
      >
        Je
      </button>
      <button
        class="day"
        :class="{ active: $store.state.user.pickedDays.friday }"
        @click="fridayToggle"
      >
        Ve
      </button>
      <button
        class="day"
        :class="{ active: $store.state.user.pickedDays.saturday }"
        @click="saturdayToggle"
      >
        Sa
      </button>
      <button
        class="day"
        :class="{ active: $store.state.user.pickedDays.sunday }"
        @click="sundayToggle"
      >
        Di
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserAlerts",
  data() {
    return {
      // alert: "Aled!",
      // monday: false,
      // tuesday: false,
      // wednesday: false,
      // thursday: false,
      // friday: false,
      // saturday: false,
      // sunday: false
    };
  },
  // mounted() {
  //   if (localStorage.monday) {
  //     this.monday = localStorage.monday;
  //   }
  //   if (localStorage.tuesday) {
  //     this.tuesday = localStorage.tuesday;
  //   }
  //   if (localStorage.wednesday) {
  //     this.wednesday = localStorage.wednesday;
  //   }
  //   if (localStorage.thursday) {
  //     this.thursday = localStorage.thursday;
  //   }
  //   if (localStorage.friday) {
  //     this.friday = localStorage.friday;
  //   }
  //   if (localStorage.saturday) {
  //     this.saturday = localStorage.saturday;
  //   }
  //   if (localStorage.sunday) {
  //     this.sunday = localStorage.sunday;
  //   }
  // },
  watch: {
    monday(newMonday) {
      localStorage.monday = newMonday;
    },
    tuesday(newTuesday) {
      localStorage.tuesday = newTuesday;
    },
    wednesday(newWednesday) {
      localStorage.wednesday = newWednesday;
    },
    thursday(newThursday) {
      localStorage.thursday = newThursday;
    },
    friday(newFriday) {
      localStorage.friday = newFriday;
    },
    saturday(newSaturday) {
      localStorage.saturday = newSaturday;
    },
    sunday(newSunday) {
      localStorage.sunday = newSunday;
    }
  },
  methods: {
    mondayToggle: function () {
      this.$store.state.user.pickedDays.monday =
        !this.$store.state.user.pickedDays.monday;
    },
    tuesdayToggle: function () {
      this.$store.state.user.pickedDays.tuesday =
        !this.$store.state.user.pickedDays.tuesday;
    },
    wednesdayToggle: function () {
      this.$store.state.user.pickedDays.wednesday =
        !this.$store.state.user.pickedDays.wednesday;
    },
    thursdayToggle: function () {
      this.$store.state.user.pickedDays.thursday =
        !this.$store.state.user.pickedDays.thursday;
    },
    fridayToggle: function () {
      this.$store.state.user.pickedDays.friday =
        !this.$store.state.user.pickedDays.friday;
    },
    saturdayToggle: function () {
      this.$store.state.user.pickedDays.saturday =
        !this.$store.state.user.pickedDays.saturday;
    },
    sundayToggle: function () {
      this.$store.state.user.pickedDays.sunday =
        !this.$store.state.user.pickedDays.sunday;
    }
  }
};
</script>

<style lang="scss" scoped>
.alert-container {
  p {
    display: flex;
  }

  .alarm-timer {
    width: 58px;
    margin-left: 8px;
    padding: 4px 8px;
    background-color: $white;
    border: 2px solid $primary;
    border-radius: 4px;
  }

  .days-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .day {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      margin-right: 8px;
      background-color: $primary-unactive;
      color: $font-unactive;
      border-radius: 4px;
      cursor: pointer;
      transition: 200ms ease-out;
      will-change: background-color, transform;
    }

    .active {
      background-color: $primary;
      color: $font-color;
      transform: translateY(-2px);
    }
  }
}
</style>
