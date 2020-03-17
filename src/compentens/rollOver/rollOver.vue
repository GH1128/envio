<template>
  <div class="roll">
    <div class="bgOrigin">
      <!-- 弹出侧边栏 -->
      <div class="btnOne">
        <van-icon @click="goBack" name="arrow-left" />
      </div>
      <!-- 主要内容部分 -->
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

    <div class="centerText">
      <p style="font-size:14px;color:#ff6600">Roll Over Application</p>
      <div class="rollNumber">
        <p style="color:#ff6600">Remittance Roll Over</p>
        <p>
          <span>N55000</span>
        </p>
      </div>
      <div class="interset">
        <p>
          Interest:
          <span>N5,000</span>
        </p>
        <P>
          Total Due:
          <span>N55,000</span>
        </P>
      </div>
      <div class="dueDate">
        <p style="color:#ff6600;font-size:13px;">Due Date</p>
        <p>
          <span>06 sep , 2019</span>
        </p>
      </div>
      <van-button round class="btn" color="#ff6600" size="small" @click="applyNow">Apply Now</van-button>
      <div class="total">
        <p style="font-size:14px;color:#cccccc;">Total Contributions</p>
        <h3 style="font-size:30px;">N705,600</h3>
      </div>
    </div>

    <!-- <div class="bottomtext" style="color: #CCCCCC;">Smart mobility,powered by technology</div> -->
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  compents: {},
  methods: {
    goBack() {
      //回到主页
      this.$router.back();
    },
    //分期
    applyNow() {
      Dialog.alert({
        title: "Roll Over Request",
        message:
          "Your Roll Over request has been sent to admin for approval.You will receive a notification shortly",
        confirmButtonText: "Close",
        confirmButtonColor: "#666"
      }).then(() => {
        // on close
      });
    }
  }
};
</script>
<style>
.van-dialog__header {
  color: #ff6600 !important;
}
</style>
<style scoped>
.roll {
  width: 100%;
  height: 100%;
  background: #fafafa;
}

.bgOrigin {
  width: 100%;
  height: 300px;
  background: #ff6600;
}
span {
  font-weight: 400 !important;
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
  justify-content: center;
  align-items: center;
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
  height: 100%;
  background: #fafafa;
  padding: 265px 0 70px;
  position: relative;
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
.bottomtext {
  width: 100%;
  position: absolute;
  bottom: 40px;
  left: 0;
  font-size: 12px;
  text-align: center;
}
.centerText {
  width: 90%;
  border-radius: 5%;
  padding: 20px 0;
  background: white;
  margin: -90px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.centerText div {
  margin: 18px 0;
}
.rollNumber {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.rollNumber p {
  margin: 0 0 5px 0;
}
.interset {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.interset p {
  font-size: 13px;
  color: #cccccc;
}
.interset p span {
  color: black;
}
.dueDate {
  display: flex;
  align-items: center;
  flex-direction: column;
}
p {
  margin: 0 0 5px 0;
  font-weight: bold;
}
.total {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
