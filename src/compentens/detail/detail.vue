<template>
  <div
    style="height: 87vh;background: #FFFFFF;border-radius: 10px;padding: 2vh;"
  >
    <div style="height: 100%;width: 100%;position: relative;">
      <div class="fdc jc-sb" style="height: 80%;">
        <div>
          <div>
            <van-icon @click="$router.back()" name="arrow-left" />
          </div>
          <div>
            <img src="./img/cs2.png" style="width: 100%;height: 60%;" />
          </div>
        </div>
        <div style="border-bottom: 1px solid #E8E8E8;padding-bottom: 15px;">
          <div class="mg-l-20 flex-sb" style="margin-top: 31px;">
            <div style="margin-top: 27px;">
              <div class="weight f20" style="color: #333333;">
                SHOCKS
              </div>
              <div class="f10" style="color: #999999;">
                2 UNITS
              </div>
            </div>
            <div>
              <div class="f14" style="color: #999999;">
                Price
              </div>
              <div
                style="background: #F5F5F5;width: 135px;height: 30px;line-height: 30px;padding-left: 5px;margin-top: 5px;"
              >
                N9,000
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="caozuo">
        <van-button
          round
          class="btn"
          color="#ff6600"
          size="small"
     
        >
          BACK TO SHOP
        </van-button>
        <van-icon style="font-size:35px" name="star-o" />
        <van-button
          round
          class="btn"
          color="#ff6600"
          size="small"
       
        >
          CHECKOUT
        </van-button>
      </div>
    </div>
    <div class="fdc jc-end ai-center" style="width: 100%;height: 5vh;">
      <div class="f10" style="color: #CCCCCC;">
        Smart mobility,powered by technology
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.flex-sb {
  display: flex;
  justify-content: space-around;
}
.caozuo {
  width: 100%;
  height: 50px;

  margin: 50px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
