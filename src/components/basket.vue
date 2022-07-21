<template>
  <div class="basket" v-if="cart.length !== 0">
    <h2>Корзина</h2>
    <div v-for="item in cart" :key="cart.id">
      <h4>{{item.title}}</h4>
      <ul>
        <li>Цена: {{item.price}}</li>
        <li>Количество: {{item.amount}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basket',
  props: {
    cart: Array,
  },
  computed: {
    /*      spisok_dlya_rendera() { //todo  Пишем на англ и используем CamelCase
              return this.cart.reverse(); //todo В данном случаи это не нужно, можно использовать unshift в компоненте list
          },*/
  },
};
</script>

<style lang="scss">
.basket {
  padding: 10px;
  margin-top: 20px;

  /*todo есть еще такой вариант стилизации для упрощения html и стилей,
       если внутри компоннента встречается один допустим тег h2, зачем ему задавать класс и тд*/
  h2 {
    margin-bottom: 20px;
  }
  & > div {
    border: 1px solid #908888;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }
  h4 {
    margin-bottom: 10px;
  }

  ul {
    li {
      margin-left: 20px;
    }
  }
}
</style>
