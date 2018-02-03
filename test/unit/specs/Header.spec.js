import Vue from 'vue';
import Header from '../../../src/components/header/Header';

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Header);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('h1').textContent).toEqual('Vue Marbles');
  });
});
