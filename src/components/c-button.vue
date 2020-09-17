<template>
  <button @click="action" class="c-button" :class="color ? `c-button--${color}` : ''">{{ text }}</button>
</template>

<script>
export default {
  name: "c-button",
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    action: {
      type: Function,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.c-button {
  box-sizing: border-box;
  padding: 12px 16px;
  border: 4px solid transparent;
  border-radius: 4px;
  color: $c-light-100;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, border-color .25s ease-in-out;

  &:hover {
    background-color: $c-dark-500;
  }

  // Deep puurple modifiers
  @include modifier(deepPurple) {
    color: $c-dark-800;
    background-color: $c-deepPurple-200;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    &:hover {
      border-color: $c-deepPurple-300;
      background-color: $c-deepPurple-200;
    }
  }

  @include modifier(deepPurple-ghost) {
    color: $c-deepPurple-200;
  }
}
</style>