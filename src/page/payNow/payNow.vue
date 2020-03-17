<template>
  <div class="payNow">
    <!-- 总资产 -->
    <div class="total">
      <p v-show="rollShow">Total Contributions</p>
      <p v-show="!rollShow">Total Repayment</p>
      <h2>N705,600</h2>
    </div>
    <div class="inputM">
      <!-- 左侧内容 -->
      <div class="left">
        <div>
          <!-- 下次支付 -->
          <p>Next Remittance</p>
          <h3>N2,2294,400</h3>
        </div>
        <div class="dueSmall">
          <!-- 日期 -->
          <p>Due Date</p>
          <h3>30 Aug,2019</h3>
        </div>
        <div class="dueSmall">
          <!-- 方式 -->
          <p>Current Plan</p>
          <!-- 分期付款 -->
          <h3 v-show="rollShow">Hire Purchase</h3>
          <h3 v-show="!rollShow">
            <select name id ref="test" class=" select">
              <option value="0" class="selectChi" @click="selecto(0)"
                >1 Week</option
              >
              <option value="1" @click="selecto(1)">2 Weeks</option>
              <option value="2" @click="selecto(2)">3 Weeks</option>
              <option value="3" @click="selecto(3)">4 Weeks</option>
            </select>
          </h3>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="right">
        <!-- 右侧内容 -->
        <div>
          <!-- 剩下多少要支付 -->
          <p>Outstanding</p>
          <h3>N2,2294,400</h3>
        </div>
        <div class="tubiao">
          <van-circle
            v-model="currentRate"
            :rate="this.aa"
            :speed="100"
            layer-color="#CCCCCC"
            :stroke-width="50"
            :text="text"
          />
        </div>
      </div>
    </div>
    <!-- 第三行按钮 -->
    <div class="btnPay">
      <van-button round class="btn" color="#ff6600" size="small" @click="payNow"
        >Pay Now</van-button
      >
      <van-button
        round
        class="btn"
        v-show="rollShow"
        :color="rollColor"
        size="small"
        @click="rollOver"
        >Roll Over</van-button
      >
    </div>
  </div>
</template>
<script>
import {instance} from "../../api/ajax"
import {Toast} from "vant"
import {DropdownMenu, DropdownItem} from "vant"

export default {
  data() {
    return {
      currentRate: 0,
      aa: 12,
      goToHttp: "",
      rollShow: true,
      value1: 0,
      value2: "a",
      isflag:1,
      rollColor:"#ff6600",
      option1: [
        {text: "One Week", value: 0},
        {text: "One Month", value: 1}
      ]
    }
  },
  async mounted() {
    //事件总线
    await this.$bus.$on("HomeOrLoan", msg => {
      console.log(msg + " 1212")
      if (msg == "home") {
        this.rollShow = true
        localStorage.setItem("isHomeOrLone", this.rollShow)
      } else {
        this.rollShow = false
        localStorage.setItem("isHomeOrLone", this.rollShow)
      }
    })

    this.isHome = localStorage.getItem("isHomeOrLone")
    console.log(this.isHome)
    if (this.isHome == "true") {
      console.log("1222222")
      this.goToHttp = window.location.host + "/home"
    } else {
      this.goToHttp = window.location.host + "/loan"
    }
  },

  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%"
    }
  },
  methods: {
    rollOver() {
      // this.$router.push("/rollOver").catch(err => err)

      this.isflag++
     
      console.log(this.isflag%2)
      if(this.isflag%2 == 0){
        this.$bus.$emit('rollShow',true)
        this.rollColor = "#ccc"
      }else{
         this.$bus.$emit('rollShow',false)
          this.rollColor = "#ff6600"
      }

    },
    // 支付
    payNow() {
      //付费请求
      Toast.loading({
        message: "Loading...",
        forbidClick: true
      })
      instance({
        method: "POST",
        url: "/page",
        data: {
          name: "test three",
          amount: 10000,
          redirect_url: this.goToHttp
        }
      }).then(res => {
        let payPage = res.data.data.slug
        window.location.href = `https://paystack.com/pay/${payPage}`
        console.log(res.data)
      })
    }
  }
}
</script>
<style scoped>
.payNow {
  width: 90%;
  background: white;
  border-radius: 5%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.total {
  margin: 15px 0 20px 0;
  text-align: center;
}

.select {
  width: 80px;
  height: 20px;
  border: 1px solid #f5f5f5;
  background: #f5f5f5;
}
.van-dropdown-menu {
  height: 10px !important;
}
.total h2 {
  font-size: 30px;
}
.payNow p {
  font-size: 13px;
  width: 100%;
}

.inputM {
  display: flex;
  background: white;
  justify-content: space-around;
}
.left > div {
  margin: 20px 0;
}
.right div:nth-child(1) {
  margin: 20px 0 10px 0;
}

.btnPay {
  width: 90%;
  display: flex;
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
}
p {
  margin: 8px 0;
  color: #ff6600;
  font-weight: bold;
  margin: 10px 0;
}
.btnPay .btn {
  padding: 0 20px;
}
h3 {
  font-weight: 545;
}
.van-cell {
  padding: 10px 0px !important;
}
.roll{
  background: #f5f5f5;
}
</style>
