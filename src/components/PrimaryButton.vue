<template>
  <component :is="type" :href="href" class="button">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    type() {
      if (this.href) {
        return "a";
      } else {
        return "button";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  margin: 0.5em 0;
  padding: 1em 2em;
  background: #fff;
  border: 2px solid $secondary;
  border-radius: 3px;
  color: $secondary;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: $white;
    color: $secondary;
  }
}
</style>
