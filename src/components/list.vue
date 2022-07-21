<template>
  <div class="list">
    <div class="card" v-for="product in products" :key="product.id">
      <h3 class="card-title">{{ product.title }}</h3>
      <img class="card-image" :src="product.image" alt="">
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div class="card-amount">
        <input type="number" ref="amount" :id="product.id"> <br>
        <span>Кол-во товаров</span>
      </div>

      <button @click="addToBasket(product)"> В корзину</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'list',
  props: {
    currency: String,
  },
  mounted() {
    this.$store.dispatch('getProductsList');
  },
  computed: {
  ...mapGetters([
      'products'
    ]),
  },
  methods: {
    addToBasket(product) {
      let amount = this.$refs.amount.find((input) => input.id === product.id).value;
      if (amount <= 0) amount = 1;

      let isExists = false;
      /*  todo  обращаться к родителю можно (такое обращение вызывает путаницу),
            но не советуется, если приложение придется
           расришять так или иначе придется использовать vuex*/
      this.$parent.cart.forEach(el => { //Проверяем есть ли товар уже в корзине, если да, то меняем кол-во
        if (el.id === product.id) {
          el.amount = amount;
          isExists = true;
        }
      })

      if (isExists) return;
      this.$parent.cart.unshift({
        amount,
        id: product.id,
        price: product.price,
        title: product.title,
      });
    },
  },

};
</script>

<style lang="scss">
.list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  /*todo здесь тоже можно стилизовать как в компоненте basket, намного упростится и улучшиться читаемость кода*/
  .card {
    display: inline-block;
    width: 100%;
    border: 1px solid #908888;
    border-radius: 5px;
    text-align: center;
    padding: 10px;
    margin: 10px;
    @include up($sm) {
      width: calc(50% - 20px);
    }
    @include up($md) {
      width: calc(100% / 3 - 20px);
    }

    &-title, &-amount, &-price {
      margin-bottom: 10px;
    }

    &-image {
      width: 100%;
      margin-bottom: 10px;
    }

    &-amount {
      span {
        margin-top: 5px;
      }
    }

    button {
      padding: 5px;
      margin: 5px;
    }
  }
}


</style>
