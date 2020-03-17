<template>
  <div class="shop">
    <van-nav-bar
      title="Shop"
      fixed
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="tou">
      <van-icon @click="$router.back()" name="arrow-left" />
      <p>Shop</p>
    </div>
    <ul class="ullist">
      <li @click="goTodetail(2)" v-for="(item, index) in test" :key="index">
        <img src="../../assets/img/cs2.png" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
import {Toast} from "vant"

export default {
  data() {
    return {
      test: [1, 2, 3, 5, 6, 5, 6, 4, 6, 6, 54, 6]
    }
  },
  methods: {
    goTodetail(num) {
      this.$router.push("/detail").catch(err => err)
    },
    onClickLeft() {
     this.$router.back()
    }
  }
}
</script>

<style scoped>
.shop {
  width: 100%;
  background: #fafafa;
}
.tou {
  font-size: 17px;
  font-weight: 550;
  color: #ff6600;
  padding: 20px 0 20px 20px;
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.ullist {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  z-index: 99;
}
.ullist li {
  width: 46%;
  height: 200px;
  background: white;
  margin: 2%;
  border-radius: 5%;
}
.ullist li img{
  width: 100%;
  height: 100%;
}
</style>
