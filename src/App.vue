<template>
  <div id="app">
    <the-header :cart="cart" :currency="currency"/>
    <list :currency="currency"/>
    <basket :cart="cart"/>
  </div>
</template>

<script>
import TheHeader from './components/the-header';
import List from './components/list';
import Basket from './components/basket';

export default {
  name: 'App',
  components: {
    TheHeader,
    List,
    Basket,
  },
  data() {
    return {
      cart: [],
      currency: 'VGTB',
    };
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 360px;
  color: #2c3e50;
}
</style>
