<template>
  <div class="home">
    <PrimaryButton href="#" to="to" />
  </div>
</template>

<script>
// @ is an alias to /src
import PrimaryButton from "@/components/PrimaryButton.vue";

export default {
  name: "Home",
  components: {
    PrimaryButton
  }
};
</script>
