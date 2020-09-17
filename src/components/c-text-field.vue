<template>
  <div
    class="c-textField"
    :class="{'c-textField--focus': fieldState.focused, 'c-textField--filled': fieldState.filled}"
  >
    <label>{{placeholder}}</label>
    <input v-model="field" :name="name" :type="fieldType" @focus="fieldState.focused = true" @blur="onBlur" />
  </div>
</template>

<script>
export default {
  name: "c-text-field",
  props: {
    name: {
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
  },
  data: () => {
    return {
      fieldState: {
        focused: false,
        filled: false,
      },
    };
  },
  methods: {
    onBlur: function () {
      // This will control the state of the classes on the component
      if (this.field != undefined && this.field != "") {
        this.fieldState.focused = false;
        this.fieldState.filled = true;
      } else {
        this.fieldState.focused = false;
        this.fieldState.filled = false;
      }
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
  label {
    position: absolute;
    top: 50%;
    left: 16px;
    margin-top: -10px;
    font-size: 16px;
    color: darken($color: $c-light-100, $amount: 50);
    transition: all 0.25s ease-in-out;
    pointer-events: none;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 24px 16px 16px;
    border: 0;
    border-bottom: 2px solid $c-dark-900;
    border-radius: 4px 4px 0 0;
    color: $c-light-100;
    background-color: $c-dark-500;
    transition: border-color 0.25s ease-in-out;

    &:focus {
      border-bottom: 2px solid $c-deepPurple-200;
    }
  }

  // Focus state of component
  @include modifier(focus) {
    @extend .c-textField;

    label {
      top: 8px;
      margin-top: 0;
      font-size: 12px;
      color: $c-deepPurple-200;
    }
  }

  // Filled state of component, when input is not empty
  @include modifier(filled) {
    @extend .c-textField;

    label {
      top: 8px;
      margin-top: 0;
      font-size: 12px;
      color: darken($color: $c-light-100, $amount: 60);
    }

    &.c-textField--focus {
      label {
        color: $c-deepPurple-200;
      }
    }
  }
}
</style>