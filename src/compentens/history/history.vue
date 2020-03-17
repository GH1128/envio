<template>
  <div class="history">
    <van-nav-bar title="History" fixed left-arrow @click-left="onClickLeft" />
    <div class="mian">
      <ul class="ullist">
        <li>
          <div class="rM"></div>
          <div>
            <p>N25000</p>
            <p>Roll over</p>
          </div>
          <div>
            <p>Jul 10, 1222</p>
            <p>04:00am</p>
          </div>
        </li>
        <li>
          <div class="rM blu"></div>
          <div>
            <p>N25000</p>
            <p>Roll over</p>
          </div>
          <div>
            <p>Jul 10, 1222</p>
            <p>04:00am</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.history {
  width: 100%;
  height: 100%;
  background: #fafafa;
}
.tou {
  font-size: 17px;
  font-weight: 550;
  color: #ff6600;
  padding: 20px 0 0 20px;
  width: 60%;
  display: flex;
  justify-content: space-between;
}

.mian {
  width: 100%;

  padding: 25px 0 0 0;
}
.ullist {
  margin: 0 auto;
  width: 88%;
  padding: 30px 0 0 0px;
}

.ullist li {
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #808080;
  margin: 0 0 10px 0;
}
.ullist li p {
  margin: 5px;
}

.rM {
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 50%;
}
.blu {
  background: green;
}
</style>