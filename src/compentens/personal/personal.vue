<template>
  <div id="personal">
    <van-nav-bar
      title="Edit Profile"
      right-text="Save"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="main">
      <div class="userImg">
        <img src="../../assets/img/wo.png" alt />
      </div>
      <div class="mainTable">
        <div class="tableHeader">
          <h3>Account Information</h3>
        </div>
        <div class="talbeMain">
          <div>
            <h3>User Identification</h3>
            <van-cell-group>
              <van-field class="inputc" v-model="user.Identification" placeholder />
            </van-cell-group>
          </div>
          <div>
            <h3>License No.</h3>
            <van-cell-group>
              <van-field class="inputc" v-model="user.License" placeholder />
            </van-cell-group>
          </div>
          <div>
            <h3>Password</h3>
            <van-cell-group>
              <van-field class="inputc" v-model="user.Password" placeholder />
            </van-cell-group>
          </div>
          <div>
            <h3>Confirm Password</h3>
            <van-cell-group>
              <van-field class="inputc" v-model="user.Confirm" placeholder />
            </van-cell-group>
          </div>
          <div>
            <h3>Email</h3>
            <van-cell-group>
              <van-field class="inputc" v-model="user.Email" placeholder />
            </van-cell-group>
          </div>
          <div>
            <h3>Phone Number</h3>
            <van-cell-group>
              <van-field class="inputc" v-model="user.Phone" placeholder />
            </van-cell-group>
          </div>
        </div>
      </div>
      <div class="footer">Smart mobility,powered by technology</div>
    </div>
  </div>
</template>
<script>
import { Notify, Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      user: {
        Identification: "",
        License: "",
        Password: "",
        Confirm: "",
        Email: "",
        Phone: ""
      }
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      if (
        !this.user.Identification ||
        !this.user.License ||
        !this.user.Password ||
        !this.user.Confirm ||
        !this.user.Email ||
        !this.user.Phone
      ) {
        Notify({ type: "warning", message: "Form content is required" });
      } else if (this.user.Password != this.user.Confirm) {
        Notify({ type: "warning", message: "Password inconsistency" });
      } else {
        // 表单内容没有问题 -- 发送请求到后台
        Toast.success("Succeed");
      }
    }
  }
};
</script>

<style scoped>
#personal {
  width: 100%;
  height: 100%;
  background: #fafafa;
}
.inputc {
  background: #f5f5f5;
  border-radius: 5%;
  padding: 0 0 0 8px;
}

.main {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.userImg {
  margin: 15px 0 12px 0;
  width: 90px;
  height: 90px;
  background: white;
  display: flex;
  border-radius: 50%;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.userImg img {
  width: 70%;
  height: 70%;
}
.mainTable {
  width: 340px;
  height: 450px;
  background: #ffffff;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tableHeader {
  height: 48px;
  width: 90%;
  font-size: 14px;
  border-bottom: 1.5px solid #fafafa;
  display: flex;
  align-items: flex-end;
  padding: 0 0 10px 0;
  color: #ff6300;
}
.tableHeader h3 {
  margin: 0 0 0 15px;
}
.talbeMain {
  width: 100%;
  height: 100%;

  /* display: flex; */
  /* flex-direction: column; */
  justify-content: space-around;
  padding: 30px 0 0 60px;
}
.talbeMain > div {
  height: 40px;
  width: 200px;
  margin-bottom: 20px;
}
.talbeMain div h3 {
  font-size: 15px;
  color: #b6b6b6;
  margin-bottom: 5px;
}
.footer {
  width: 100%;
  height: 50px;
  display: flex;
  color: #b6b6b6;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>

