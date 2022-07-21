<template> <!--todo Шаблон компонентов должен быть одинаковым, 1- html, 2 и 3 на выбор, но лучше стили оcтавлять последним так как они всегда большие по объему-->
  <header class="the-header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
  </header>
</template>

<script>
export default {
  name: 'the-header',
  props: {
    cart: {
      type: Array,
      required: true,
      default: []
    },
    currency: {
      type: String,
      required: true
    }
  },
/*  watch: { //todo watch используется для отслеживания переменых из data, в данном случаи мы вычисляем значения для этого используют computed свойства
    cart(cart) {
      let val = 0;
      cart.forEach((item) => {
        val += item.price * item.amount;
      });
      this.cartPrice = val;
    },
  },*/
  computed: {
    cartPrice() {
      let val = 0;

      this.cart.forEach((item) => {
        val += item.price * item.amount;
      });
      return val;
    },
  }
}
</script>

<style>
  .the-header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>


