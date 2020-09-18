<template>
  <main class="appRpg">
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
// Default styles of main class
.appRpg {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 16px;
  background-color: $c-dark-800;
}
</style>
