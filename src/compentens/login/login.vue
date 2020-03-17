<template>
  <div class="aa">
    <div class="login">
    <!-- 图标 -->
    <div class="logo">
      <div class="loginImg">
        <img src="../../assets/img/1.png" alt />
      </div>
      <p class="hello">Welcome</p>
    </div>
    <!-- 表单 -->
    <div class="myFrom">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="username" placeholder="Username" />
        <van-field v-model="password" type="password" name="password" placeholder="Password" />
        <div class="btns" style="margin: 16px;">
          <van-button
            class="btn"
            color="#FF6600"
            round
            size="small"
            plain
            native-type="submit"
          >Sign in</van-button>
          <van-button class="btn" color="#FF6600" round size="small" disabled plain>Forgot Password</van-button>
        </div>
      </van-form>
    </div>
    <!-- 版权等信息 -->
     <!-- <div class="bq"> </div>  -->
  </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
// import {ajax} from '../../api/ajax'
export default {
  data() {
    return {
      username: "",
      password: "",
      toHome: true
    };
  },
  methods: {
    //表单提事件获取姓名和密码
    onSubmit(values) {
      //发送请求，获取用户登录后的信息，传到home组件，如果登录失败提示用户失败
      // axios
      //   .post("/login", {
      //     username: values.username,
      //     password: values.password
      //   })
      //   .then(res => {
         
      //     if (res.data.code == 0) {
      //       //登录成功
      //       this.$router.push("/home");

      //       localStorage.setItem("user", JSON.stringify(res.data.data));
      //     } else {
      //       //登录失败
      //       Toast("Incorrect user name or password");
      //     }
      //   });
        
        this.$router.push("/home");
        localStorage.setItem('user','1')
    }
  }
};
</script>

<style scoped>
.btn {
  font-size: 10px;
}
.aa{
  width: 100%;
  height: 100%;
  background: white;
}
.login {
  width: 80%;
  height: 70%;
  position: absolute;
  
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.logo {

 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 /* margin: 100px 0 0 0; */
}
.loginImg {
  width: 80px;
  height: 80px;
  padding:0 0 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginImg img {
  width: 100%;
  height: 100%;
}
.hello {
  margin: 10px 0;
  color: #4d4d4d;
  font-size: 26px;
  text-align: center;
}
.bq {
  color: #cccccc;
  font-size: 12px;
}
.myFrom {
  width: 100%;
}
.btns {
  display: flex;
  justify-content: space-between;
}
</style>
