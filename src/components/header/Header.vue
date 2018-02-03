<template>
  <div>
    <h1>
      Vue Marbles
    </h1>
    <h3>
      Interactive diagrams of Rx Observables
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  div {
    width: 100%;
    display: flex;
    align-items: baseline;
    margin-top: 50px;
  }

  h1, h3 {
    font-family: Signika, Helvetica, serif;
    color: rgb(124, 124, 124);
  }

  h1 {
    flex: 1 1 300px;
  }

  h3 {
    flex: 1 1 820px;
  }
</style>
