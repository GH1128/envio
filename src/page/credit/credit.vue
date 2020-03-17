<template>
  <div class="credit">
    <div class="main">
      <div class="fcc">
        <h3 style="color: #FF6600;">Credit Support</h3>
      </div>
      <div class="flex jc-sb weight4" style="margin: 25px   15px 0   15px;">
        <div>
          <p class="tt" style="font-size:12px;color: rgb(255, 102, 0);">
            Input Loan Amount
          </p>
          <input class="inputClass" type="text" placeholder="N4,000" />
          <div class="f10 flex" style="margin-left: -  15px;margin-top: 30px;">
            <div class="flex" style="-webkit-transform: scale(0.8);">
              <p style="color: rgb(178, 178, 178);font-size:14px">Interest:</p>
              <p style="font-size:14px;">N1,000</p>
            </div>
            <div class="flex" style="-webkit-transform: scale(0.8);">
              <p style="font-size:10px;color: rgb(178, 178, 178)">Total Due:</p>
              <p class="numberMy">N5,000</p>
            </div>
          </div>
        </div>
        <div>
          <div class="f18" style="color: #999999;padding-left: 15px">
            N8,550
          </div>
          <div
            class="one"
            style="color: #b2b2b2;font-size:   12px;-webkit-transform: scale(0.8);"
          >
            Maximum credit support
          </div>
          <div
            class="two"
            style="margin-top: 18px;font-size:  13px;-webkit-transform: scale(0.7);color: #4D4D4D;margin-left: -13px;"
          >
            Select Repayment terms
            <div>
              <select name id ref="test" class="tt select">
                <option value="0" class="selectChi" @click="selecto(0)"
                  >1 Week</option
                >
                <option value="1" @click="selecto(1)">2 Weeks</option>
                <option value="2" @click="selecto(2)">3 Weeks</option>
                <option value="3" @click="selecto(3)">4 Weeks</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        style="border-bottom: 1px solid #E7E7E7;margin: 30px   15px 20px   15px;"
      ></div>
      <div class="lrmg-10">
        <div class="flex-sb">
          <div class="fdcc">
            <div
              style="color: #FF6600;font-size:   15px;-webkit-transform: scale(0.6);"
            >
              Loan Amount
            </div>
            <div class="f14" style="color: #4D4D4D;margin-top: 2px;">
              <h3>N4,000</h3>
            </div>
          </div>
          <div class="fdcc">
            <div
              style="color: #FF6600;font-size:   15px;-webkit-transform: scale(0.6);"
            >
              Repayment
            </div>
            <div class="f14" style="color: #4D4D4D;margin-top: 2px;">
              <h3>N5,000</h3>
            </div>
          </div>
          <div class="fdcc">
            <div
              style="color: #FF6600;font-size:   15px;-webkit-transform: scale(0.6);"
            >
              Due date
            </div>
            <div class="f14" style="color: #4D4D4D;margin-top: 2px; ">
              <h3>26 Aug,2019</h3>
            </div>
          </div>
        </div>
        <div class="fcc mg-t-30" style>
          <van-button round class="btn" color="#ff6600" size="small"
            >Apply Now</van-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    // console.log(this.$refs.test.value);
  },
  methods: {
    selecto(num) {
      console.log(12121)
    }
  }
}
</script>
<style scoped>
.lrmg-10 {
  display: flex !important;
  flex-direction: column;
}
.fdcc:nth-child(2) {
  margin: 0 0 0 -10px;
}
.btn {
  padding: 0 10px;
}
.tt {
  font-weight: bold;
  margin: 0 0 5px 0;
}
.main {
  width: 90%;
  height: 100%;
  background: white;
  padding: 20px 0;
  margin: 0 auto;
  border-radius: 5%;
}
.flex-sb {
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 0;

  align-items: center;
}
.f10 {
  width: 190px;
  margin-left: -8px;
}
.one {
  width: 200px;
  margin-left: -15px;
}
.two {
  margin: 20px 0 10px -28px !important;
}
.tt {
  margin: 5px 0;
}
.select {
  width: 140px;
  height: 20px;
  border: 1px solid #f5f5f5;
  background: #f5f5f5;
}
.inputClass {
  width: 130px;
  background: #f5f5f5;
  border: 1px solid #f5f5f5;
  padding: 0 0 0 5px;
  height: 20px;
}
</style>
