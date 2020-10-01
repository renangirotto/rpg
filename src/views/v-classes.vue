<template>
  <div class="v-classes">
    <h1 class="v-classes__title">Choose the class of your character, <span>{{getCharacter.name}}</span>.</h1>
    <div class="v-classes__grid">
      <div v-for="item in classes" :key="item.name" class="v-classes__grid__item">
        <c-class :className="item.name" :classIcon="item.icon" :classInfo="item.info" :customCss="item.customCss" />
      </div>
    </div>
  </div>
</template>

<script>
// Class selection/info component
import cClass from "@/components/player/c-class.vue";
// Getters
import { mapGetters } from 'vuex'

export default {
  name: "v-classes",
  components: {
    cClass,
  },
  data: () => {
    return {
      classes: [
        {
          name: 'Warrior',
          icon: 'item-sword',
          info: 'The warrior is a sword master, you carry a double hand sword to wipe all the enemies in front of you and sometimes cut some potatoes!',
          customCss: 'warrior'
        },
        {
          name: 'Ranger',
          icon: 'item-bow',
          info: 'The ranger is a precision master, you use arrows to defeat enemies with agility and mastery! In melee you are useless!',
          customCss: 'ranger'
        },
        {
          name: 'Mage',
          icon: 'item-mage-hat',
          info: 'The Mage is an arcane master, you dont carry any weapon, but you can cast fireballs and use a cool pointed hat, and that is enoght!',
          customCss: 'mage'
        }
      ]
    }
  },
  computed: mapGetters(['getCharacter'])
};
</script>

<style lang="scss">
.v-classes {
  @include element(title) {
    font-weight: 700;
    font-size: 40px;

    &:not(:last-child) {
      margin-bottom: 40px;
    }

    span {
      color: $c-deepPurple-200;
    }
  }

  // Control display of the classes
  @include element(grid) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;

    @media #{$mq-md} {
      grid-template-columns: 1fr 1fr;
    }

    @media #{$mq-lg} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @include element(item) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>