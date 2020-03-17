<template>
  <div class="leftMain">
    <div class="userDetali">
      <!-- 图标 -->
      <div class="userImage">
        <div class="userImageSmall">
          <img @click="goToPersonal" src="./img/wo.png" alt />
        </div>
      </div>
    </div>

    <p @click="home">Home</p>
    <p @click="loan">Roll Over</p>
    <p @click="goToShop">Shop</p>
       <p @click="goToHistory">Payment History</p>
    <p>Support</p>
    <p @click="Out">Sign Out</p>
 
  </div>
</template>
<script>
import {Dialog} from "vant"
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    goToHistory() {
      this.$router.push("/history").catch(err => err)
    },
    goToShop() {
      this.$router.push("/shop").catch(err => err)
    },
    Out() {
      Dialog.confirm({
        title: "Exit",
        message: "Are you sure?",
        confirmButtonText: "yes",
        cancelButtonText: "no"
      })
        .then(() => {
          //确定退出
          localStorage.removeItem("user")
          if (!localStorage.getItem("user")) {
            this.$router.push("/login").catch(err => err)
          }
        })
        .catch(() => {
          //取消退出
          // on cancel
        })
    },
    goToPersonal() {
      this.$router.push("/personal").catch(err => err)
    },
    loan() {
      this.$router.push("/loan").catch(err => err)
    },
    home() {
      this.$router.push("/home").catch(err => err)
    }
  }
}
</script>
<style scoped>
.leftMain {
  width: 70%;
  height: 70%;
  padding: 70px 0 0 30px;
}
.userDetali {
  width: 100%;
  height: 116px;
}
.userImage {
  background: #f5f5f5;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}

.userImageSmall img {
  width: 50px;
  height: 50px;
}
p {
  margin: 0 0 40px 0;
}
</style>
