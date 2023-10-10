<template>
  <div :class="['rectangle', className]">
    <div class="overlap-group">
      <div class="div" />
      <div class="text-wrapper">Glider / Metro</div>
      <img
        class="download-removebg"
        alt="Download removebg"
        src="https://c.animaapp.com/DP9cOZTk/img/download--3--removebg-preview-1-1@2x.png"
      />
    </div>
    <div class="text-wrapper-2">{{ currentTime }}</div>
  </div>
</template>

<script>
export default {
  name: "RectangleComp",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentTime: this.getTime(),
    };
  },
  methods: {
    getTime() {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    },
  },
  mounted() {
    setInterval(() => {
      this.currentTime = this.getTime();
    }, 1000);
  },
};
</script>

<style>
.rectangle {
  background-color: #b20000;
  height: 138px;
  position: relative;
  width: 489px;
}

.rectangle .overlap-group {
  height: 138px;
  left: -5px;
  position: absolute;
  top: 0;
  width: 132px;
}

.rectangle .div {
  background-color: #e20c66;
  height: 138px;
  left: 5px;
  position: absolute;
  top: 0;
  width: 127px;
}

.rectangle .text-wrapper {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 112px;
  width: 132px;
}

.rectangle .download-removebg {
  height: 90px;
  left: 11px;
  object-fit: cover;
  position: absolute;
  top: 13px;
  width: 115px;
}

.rectangle .text-wrapper-2 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 96px;
  font-weight: 700;
  left: 138px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 10px;
  white-space: nowrap;
  width: 331px;
}
</style>
