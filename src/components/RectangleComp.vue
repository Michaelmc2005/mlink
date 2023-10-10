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
    <div class="animated-grid">
      <div v-for="i in 64" :key="i" class="square"></div>
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
.animated-grid {
  position: absolute;
  top: -50px;
  left: 75px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

.square {
  background-color: darkgrey;
  border-radius: 10px;
  width: 52px;
  height: 52px;
  animation: colorChange 7s infinite alternate, combinedAnimation 15s infinite alternate;
}

@keyframes colorChange {
  0%, 40%, 100% {
    background-color: darkgrey;
  }
  50% {
    background-color: red;
  }
}

@keyframes combinedAnimation {
  0%, 100% {
    transform: rotate(0deg) translateY(-30px) scale(0.9);
  }
  25%, 75% {
    transform: rotate(180deg) translateY(150px) scale(1.4);
  }
  50% {
    transform: rotate(360deg) translateY(-30px) scale(0.9);
  }
  60% {
    transform: rotate(360deg) translateY(-30px) scale(1.4);
  }
}
.rectangle {
  background-color: #b20000;
  height: 138px;
  position: relative;
  width: 489px;
  overflow: hidden;
}

.rectangle .overlap-group {
  height: 138px;
  left: -5px;
  position: absolute;
  top: 0;
  width: 132px;
  z-index: 1;
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
