<template>
  <div id="app">
    <Header class="header"></Header>
    <Navigation class="navigation"></Navigation>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

export default {
  name: 'App',
  components: {
    Header,
    Navigation,
  },
};
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: 120px 1fr;
  grid-template-columns: 1fr 300px 820px 1fr;
  grid-template-areas: 
    ". header header ."
    ". navigation main .";

  .header {
    grid-area: header;
  }

  .navigation {
    grid-area: navigation;
  }

  .main {
    grid-area: main;
  }
}
</style>
