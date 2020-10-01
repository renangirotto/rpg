<template>
  <div class="c-class" :class="customCss ? `c-class--${customCss}` : ''">
    <h6 class="c-class__className">
      The <span>{{ className }}</span>
    </h6>
    <figure class="c-class__classIcon">
      <c-icon :name="classIcon" />
    </figure>
    <div class="c-class__info">
      <p>{{ classInfo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "c-classes",
  props: {
    className: {
      type: String,
      required: true,
    },
    classIcon: {
      type: String,
      required: true,
    },
    classInfo: {
      type: String,
      required: true,
    },
    customCss: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
// Container of the component
.c-class {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  max-width: 320px;
  padding: 16px;
  border: 2px solid $c-dark-700;
  border-radius: 8px;
  background-color: $c-dark-700;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: border-color .5s ease-in-out;

  @include element(className) {
    font-weight: 600;
    font-size: 26px;
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  @include element(classIcon) {
    width: 120px;
    height: 120px;
    margin: auto;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  @include element(info) {
    line-height: 1.5;
  }

  // Class modifier for warrior
  @include modifier(warrior) {
    @extend .c-class;

    &:hover {
      border-color: $c-warrior;
    }

    .c-class__className {
      span {
        color: $c-warrior;
      }
    }

    svg {
      fill: $c-warrior;
    }
  }

  // Class modifier for ranger
  @include modifier(ranger) {
    @extend .c-class;

    &:hover {
      border-color: $c-ranger;
    }

    .c-class__className {
      span {
        color: $c-ranger;
      }
    }

    svg {
      fill: $c-ranger;
    }
  }

  // Class modifier for mage
  @include modifier(mage) {
    @extend .c-class;

    &:hover {
      border-color: $c-mage;
    }

    .c-class__className {
      span {
        color: $c-mage;
      }
    }

    svg {
      fill: $c-mage;
    }
  }
}
</style>