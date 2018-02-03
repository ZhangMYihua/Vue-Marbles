<template>
  <div class="navigation-container">
    <div
      class="nav-block"
      v-for="nav in navs"
      v-bind:key="nav.title"
    >
      <span class="nav-block-title">
        {{ nav.title }}
      </span>

      <a
        class="nav-block-link"
        v-for="link in nav.links"
        v-bind:key="link"
        v-bind:href="`#${link}`"
      >
        {{ link }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      navs: [
        {
          title: 'Creation Observables',
          links: ['from', 'interval', 'of', 'timer'],
        },
        {
          title: 'Conditional Operators',
          links: ['defaultIfEmpty', 'every', 'sequenceEqual'],
        },
        {
          title: 'Combination Observables',
          links: [
            'combineLatest', 'concat', 'merge', 'race', 'startWith', 'withLatestFrom', 'zip',
          ],
        },
        {
          title: 'Filtering Operators',
          links: [
            'debounceTime', 'debounce', 'distinct', 'distinctUntilChanged', 'elementAt',
            'filter', 'find', 'findIndex', 'first', 'ignoreElements', 'last', 'sample',
            'skip', 'skipUntil', 'skipWhile', 'take', 'takeLast', 'takeUntil', 'takeWhile',
            'throttle', 'throttleTime',
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .navigation-container {
    width: 100%;
    display: flex;
    flex-direction: column;

    .nav-block {
      display: flex;
      flex-direction: column;
      margin: 10px 0;

      .nav-block-title {
        text-transform: uppercase;
        font-size: 0.8em;
        margin-top: 0px;
        color: rgb(124, 124, 124);
      }

      a {
        color: rgb(124, 124, 124);
        margin: 3px 0;

        &:hover {
          color: black;
        }
      }
    }
  }
</style>
