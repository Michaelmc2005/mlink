<template>
  <div :class="['rectangle-11', className]">
    <div class="text-wrapper-3">Pass Number</div>
    <div class="text-wrapper-4">8217465</div>
  </div>
</template>

<script>
export default {
  name: "RectangleEleven",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.rectangle-11 {
  background-color: #565656;
  border-radius: 7px;
  height: 43px;
  position: relative;
  width: 448px;
}

.rectangle-11 .text-wrapper-3 {
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

.rectangle-11 .text-wrapper-4 {
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
