<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios"
import {instance} from "./api/ajax"
export default {
  name: "App",
  components: {},
  data() {
    return {
      goToHome: true //判断是否登录了
    }
  },
  mounted() {

    // console.log(window.location.href)
    // //获取订单编码
    // var myUrl = "http://localhost:8080/home?reference=T624286634106182"
    // var isD = myUrl.includes("reference")
    // if (isD) {
    //   this.reference = myUrl.split("=")[1]
    //   console.log(this.reference)
    // }
    // instance({
    //   method: "GET",
    //   url: "/transaction",

    // }).then(res => {
    //   console.log(res.data)
    // })

    //  this.$router.replace("/login").catch(err => err);
    // if (JSON.parse(localStorage.getItem("user"))){
    //   if (JSON.parse(localStorage.getItem("user")).token) {
    //     //登录了
    //     this.$router.push("/home").catch(err => err);
    //   } else {
    //     //没登录
    //     this.$router.replace("/login").catch(err => err);
    //   }
    // }else{
    //   //没有
    //    this.$router.replace("/login").catch(err => err);
    // }

    if (!localStorage.getItem("user")) {
      this.$router.replace("/login").catch(err => err)
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100% !important;
  width: 100% !important;
  background: #f5f5f5;
}
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  font-family: Arial !important;
  overflow-x: hidden;
}
</style>
<style>
.van-nav-bar__text,
.van-nav-bar__title,
.van-nav-bar .van-icon {
  color: red;
  font-size: 16px;
}
.van-nav-bar .van-icon {
  font-size: 16px;
}
</style>
