<template>
  <div v-show="active" class="c-modal">
    <div class="c-modal__container">
      <header class="c-modal__container__header">
        <slot name="header"></slot>
        <button @click="closeModal" class="c-modal__container__header__close">
          <c-icon name="close" />
        </button>
      </header>
      <div class="c-modal__container__body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "c-modal",
  props: {
    toggle: {
      type: Boolean,
      required: true,
    },
  },
  data: () => {
    return {
      active: false,
    };
  },
  watch: {
    // This will check if the parent call is a true state to open the modal
    toggle: function () {
      if (this.toggle) {
        this.active = true;
      }
    },
  },
  methods: {
    // Close de modal by changing the data active state and emit that this modal was closed
    closeModal: function () {
      this.active = false;
      this.$emit("modal-closed", this.active);
    },
  },
};
</script>

<style lang="scss" scoped>
.c-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);

  // This container control the max-width of the modal
  @include element(container) {
    width: 100%;
    max-width: 480px;
    border-radius: 4px;
    overflow: hidden;

    @include element(header) {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px;
      font-size: 18px;
      color: $c-dark-800;
      background-color: $c-deepPurple-200;

      @include element(close) {
        width: 22px;
        height: 22px;
        cursor: pointer;

        svg {
          fill: $c-dark-800;
        }
      }
    }

    @include element(body) {
      box-sizing: border-box;
      padding: 16px;
      background-color: $c-dark-500;
    }
  }
}
</style>