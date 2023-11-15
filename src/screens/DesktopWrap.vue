<template>
  <div class="desktop">
    <div class="div-2">
      <div class="overlap">
        <div class="text-wrapper-9">&lt;</div>
        <p class="text-wrapper-10">mLink yLink Metro / Glider Day Ticket</p>
      </div>
      <RectangleComp class="rectangle-2" />
      <RectangleWrapper class="rectangle-8" />
      <DivWrapper class="rectangle-9" />
      <RectangleEleven class="rectangle-instance" />
      <RectangleTwelve class="rectangle-12-instance" />
      <div class="rectangle-3" />
      <div class="overlap-2">
        <div class="text-wrapper-11">{{ days }}</div>
      </div>
      <div class="overlap-3">
        <div class="text-wrapper-11">{{ minutes }}</div>
      </div>
      <p class="text-wrapper-12">Activated on Tue 10 Oct 2023 at 8:23</p>
      <div class="text-wrapper-13">Days</div>
      <div class="text-wrapper-14">Hours</div>
      <RectangleTen class="rectangle-10-instance" />
      <div class="text-wrapper-15">Minutes</div>
      <div class="overlap-4">
        <div class="text-wrapper-17">{{ seconds }}</div>
      </div>
      <div class="text-wrapper-16">Seconds</div>
      
    </div>
  </div>
</template>


<script>
import RectangleComp from "../components/RectangleComp.vue";
import RectangleTen from "../components/RectangleTen.vue";
import RectangleEleven from "../components/RectangleEleven.vue";
import RectangleTwelve from "../components/RectangleTwelve.vue";
import RectangleWrapper from "../components/RectangleWrapper.vue";
import DivWrapper from "../components/DivWrapper.vue";

export default {
  name: "DesktopWrap",
  components: {
    RectangleComp,
    RectangleTen,
    RectangleEleven,
    RectangleTwelve,
    RectangleWrapper,
    DivWrapper,
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    // Set the date we're counting down to
    const countDownDate = new Date("Oct 17, 2023 15:37:25").getTime();

    // Update the countdown every 1 second
    const x = setInterval(() => {
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  },
};
</script>

<style>
body{
  transform: scale(0.8);
}
.desktop {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 200%;
}
.desktop .div-2 {
    transform-origin: top left;
    background-color: #ffffff;
    height: 942px;
    overflow: hidden;
    position: relative;
    width: 516px;
    left: -186px;
    bottom: 62px;
}

.desktop .overlap {
  background-color: #c4c2c2;
  height: 97px;
  left: 0;
  position: absolute;
  top: 0;
  width: 516px;
}

.desktop .text-wrapper-9 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 32px;
  font-weight: 700;
  left: 13px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 35px;
  width: 55px;
}

.desktop .text-wrapper-10 {
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 20px;
  font-weight: 300;
  left: 13px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 42px;
  width: 497px;
}

.desktop .rectangle-2 {
  left: 13px !important;
  position: absolute !important;
  top: 124px !important;
}

.desktop .rectangle-8 {
  left: -11px !important;
  position: absolute !important;
  top: 443px !important;
}

.desktop .rectangle-9 {
  left: 34px !important;
  position: absolute !important;
  top: 627px !important;
}

.desktop .rectangle-instance {
  left: 34px !important;
  position: absolute !important;
  top: 790px !important;
}

.desktop .rectangle-12-instance {
  left: 34px !important;
  position: absolute !important;
  top: 844px !important;
}

.desktop .rectangle-3 {
  background-color: #d9d9d9;
  border-radius: 11px;
  box-shadow: 0px 4px 4px #00000040;
  height: 49px;
  left: 77px;
  position: absolute;
  top: 318px;
  width: 65px;
}

.desktop .overlap-2 {
  background-color: #d9d9d9;
  border-radius: 11px;
  box-shadow: 0px 4px 4px #00000040;
  height: 49px;
  left: 176px;
  position: absolute;
  top: 318px;
  width: 65px;
}

.desktop .text-wrapper-11 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 31px;
  font-weight: 400;
  left: 8px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 7px;
  width: 50px;
}

.desktop .overlap-3 {
  background-color: #d9d9d9;
  border-radius: 11px;
  box-shadow: 0px 4px 4px #00000040;
  height: 49px;
  left: 275px;
  position: absolute;
  top: 318px;
  width: 65px;
}

.desktop .text-wrapper-12 {
  color: #0e0e0e;
  font-family: "Inter", Helvetica;
  font-size: 24px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 382px;
  width: 497px;
}

.desktop .text-wrapper-13 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 82px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 290px;
  width: 55px;
}

.desktop .text-wrapper-14 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 181px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 290px;
  width: 55px;
}

.desktop .rectangle-10-instance {
  left: 34px !important;
  position: absolute !important;
  top: 736px !important;
}

.desktop .text-wrapper-15 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 269px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 290px;
  width: 78px;
}

.desktop .text-wrapper-16 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 358px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 290px;
  width: 78px;
}

.desktop .overlap-4 {
  background-color: #d9d9d9;
  border-radius: 25.5px/24.5px;
  height: 49px;
  left: 376px;
  position: absolute;
  top: 318px;
  width: 51px;
}

.desktop .text-wrapper-17 {
  color: #000000;
  font-family: "Inter", Helvetica;
  font-size: 31px;
  font-weight: 400;
  left: 1px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 7px;
  width: 50px;
}
.rectangle-2 {
  position: relative;
}

</style>