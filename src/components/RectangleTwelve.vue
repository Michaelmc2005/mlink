<template>
  <div :class="['rectangle-12', className]">
    <div class="text-wrapper-5">Ticket Number</div>
    <div class="text-wrapper-6">oLCGwpHuarm</div>
  </div>
</template>

<script>
export default {
  name: "RectangleTwelve",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.rectangle-12 {
  background-color: #565656;
  border-radius: 7px;
  height: 43px;
  position: relative;
  width: 448px;
}

.rectangle-12 .text-wrapper-5 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 38px;
  left: 5px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 10px;
  width: 124px;
}

.rectangle-12 .text-wrapper-6 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  font-weight: 600;
  height: 38px;
  left: 173px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 10px;
  width: 209px;
}
</style>
