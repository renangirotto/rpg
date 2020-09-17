<template>
  <div class="v-home">
    <figure class="v-home__logo">
      <c-icon name="logo" />
    </figure>
    <div class="v-home__player">
      <c-text-field name="playerName" type="text" placeholder="Player name" />
    </div>
    <div class="v-home__action">
      <c-button :action="openModal" text="About this project" color="deepPurple-ghost" />
      <c-button text="Begin adventure" color="deepPurple" />
    </div>
    <c-modal :toggle="modalActive" v-on:modal-closed="closeModal">
      <template v-slot:header>About this project!</template>
      <template v-slot:body>
        <p>This is study and portifolio project, made with VueJs!</p>
        <strong>Why you've done a game to study VueJs?</strong>
        <p>I tought that in a project like this I would learn and could practice a lot of features from VueJs. And I just love RPG's!</p>
        <strong>This project is avaliable to me to see the source code?</strong>
        <p>
          Yeah, you can see the source code
          <a
            href="https://github.com/renangirotto/rpg"
            target="_blank"
          >here</a>.
        </p>
      </template>
    </c-modal>
  </div>
</template>

<script>
export default {
  name: "v-home",
  data: () => {
    return {
      modalActive: false,
    };
  },
  methods: {
    // Change the modal state to open
    openModal: function () {
      this.modalActive = true;
    },
    // Change the modal state to close
    closeModal: function () {
      this.modalActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-home {
  // D20 dice logo
  @include element(logo) {
    max-width: 240px;
    margin: 0 auto 32px;

    svg {
      fill: $c-deepPurple-200;
    }
  }

  // Player name input
  @include element(player) {
    margin-bottom: 32px;
  }

  // Player actions
  @include element(action) {
    display: flex;
    flex-direction: column-reverse;

    @media #{$mq-sm} {
      flex-direction: row;
    }

    .c-button {
      &:not(:last-child) {
        margin: 16px 0 0 0;

        @media #{$mq-sm} {
          margin: 0 16px 0 0;
        }
      }
    }
  }
}
</style>