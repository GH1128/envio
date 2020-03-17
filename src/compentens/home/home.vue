<template>
  <div>
    <!-- 背景为橙色部分 -->
    <div class="bgOrigin">
      <!-- 弹出侧边栏 -->
      <div class="btnOne">
        <div @click="showPopup">
          <van-icon name="wap-nav" />
        </div>
        <van-popup
          v-model="show"
          position="left"
          closeable
          :style="{width: '80%', height: '100%'}"
        >
          <!-- 侧边框内容 -->
          <LeftMain />
        </van-popup>
      </div>
      <!-- 图标信息 -->
      <div class="userDetali">
        <!-- 图标 -->
        <div class="userImage">
          <div class="userImageSmall">
            <img src="./img/wo.png" alt />
          </div>
        </div>
        <!-- 名字 -->
        <div class="userName">David Matthew</div>
        <div class="userHm">BGD206KG</div>
      </div>
    </div>
    <!-- 主要内容部分 -->
    <PayNow class="paynow" />
    <Credit v-show="isShow" class="credit" />
  </div>
</template>
<script>
import PayNow from "../../page/payNow/payNow"
import Credit from "../../page/credit/credit"
import LeftMain from "../../page/leftMain/leftMain"

export default {
  data() {
    return {
      show: false,
      isShow:false,
      a:true
    }
  },
  components: {
    PayNow,
    Credit,
    LeftMain
  },
  methods: {
    showPopup() {
      this.show = true
    }
  },
  mounted() {
    this.$bus.$emit("HomeOrLoan", "home")
    this.$bus.$on('rollShow',msg => {
      this.isShow = msg
      console.log(this.isShow)
    })
  }
}
</script>
<style scoped>
html,
body {
  width: 100%;
  background: #cccccc;
}
.active{
  background: red;
}

.bgOrigin {
  width: 100%;
  height: 300px;
  background: #ff6600;
  /* z-index: 100;
  position: absolute;
  top: 0;
  left: 0; */
}
.credit {
  background: #f5f5f5;
  transform: translateY(-25%);
  /* margin: 650px 0 0 0; */
  transition: all 1s ;
}
.van-icon {
  font-size: 28px;
  color: white;
}
.btnOne {
  padding: 5% 0 0 5%;
}
.userDetali {
  width: 100%;
  height: 116px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.userImage {
  width: 70px;
  height: 70px;
  background: white;
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
.userName {
  font-size: 14px;
  color: white;
}
.userHm {
  font-size: 12px;
  color: white;
}
.main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: red;
}
.bottomText {
  width: 100%;
  font-size: 10px;
  color: #cccccc;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
}
.paynow {
  margin: 0 auto;
  transform: translateY(-25%);
}
</style>
