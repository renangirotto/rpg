<template>
  <div
    class="c-textField"
    :class="{'c-textField--focus': state.focused, 'c-textField--filled': state.filled, 'c-textField--error': state.error}"
  >
    <label class="c-textField__label">{{placeholder}}</label>
    <input
      class="c-textField__input"
      v-model="field"
      :name="fieldName"
      :type="fieldType"
      @input="inputValue"
      @focus="state.focused = true"
      @blur="onBlur"
    />
  </div>
  <span v-if="state.error" class="errorMessage">{{errorMessage}}</span>
</template>

<script>
export default {
  name: "c-text-field",
  props: {
    fieldName: {
      type: String,
      required: true,
    },
    fieldType: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      required: false,
    },
  },
  data: () => {
    return {
      state: {
        focused: false,
        filled: false,
        error: false,
      },
    };
  },
  watch: {
    errorMessage: function (newVal) {
      // Verify if there is an error
      if (newVal != "") {
        this.state.error = true;
      } else {
        this.state.error = false;
      }
    },
  },
  methods: {
    // This will control the state of the classes on the component
    onBlur: function () {
      if (this.field != undefined && this.field != "") {
        this.state.focused = false;
        this.state.filled = true;
      } else {
        this.state.focused = false;
        this.state.filled = false;
      }
    },
    inputValue: function () {
      // Emit value to parent (in case it need it)
      this.$emit("value", this.field);
    },
  },
};
</script>

<style lang="scss" scoped>
.c-textField {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  // This label works as placeholder and label
  @include element(label) {
    position: absolute;
    top: 50%;
    left: 16px;
    margin-top: -10px;
    font-size: 16px;
    color: darken($color: $c-light-100, $amount: 50);
    transition: all 0.25s ease-in-out;
    pointer-events: none;
  }

  // Actual input tag
  @include element(input) {
    box-sizing: border-box;
    width: 100%;
    padding: 24px 16px 16px;
    border: 0;
    border-bottom: 2px solid $c-dark-900;
    border-radius: 4px 4px 0 0;
    color: $c-light-100;
    background-color: $c-dark-500;
    transition: border-color 0.25s ease-in-out;
  }

  // Focus state of component
  @include modifier(focus) {
    @extend .c-textField;

    .c-textField__label {
      top: 8px;
      margin-top: 0;
      font-size: 12px;
      color: $c-deepPurple-200;
    }

    .c-textField__input {
      border-bottom: 2px solid $c-deepPurple-200;
    }
  }

  // Filled state of component, when input is not empty
  @include modifier(filled) {
    @extend .c-textField;

    .c-textField__label {
      top: 8px;
      margin-top: 0;
      font-size: 12px;
      color: darken($color: $c-light-100, $amount: 60);
    }

    &.c-textField--focus {
      .c-textField__label {
        color: $c-deepPurple-200;
      }
    }
  }

  // Filled state of component, when input is not empty
  @include modifier(error) {
    @extend .c-textField;

    .c-textField__label {
      color: $c-red-200;
    }

    .c-textField__input {
      border-bottom: 2px solid $c-red-200;
    }

    &.c-textField--focus,
    &.c-textField--filled {
      .c-textField__label {
        color: $c-red-200;
      }

      .c-textField__input {
        border-bottom: 2px solid $c-red-200;
      }
    }
  }
}
</style>