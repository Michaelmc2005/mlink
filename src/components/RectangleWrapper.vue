<template>
  <div :class="['rectangle-wrapper', className]">
    <img class="IMG" alt="Img" src="https://c.animaapp.com/DP9cOZTk/img/img-0090-1-1@2x.png" />
  </div>
</template>

<script>
export default {
  name: "RectangleWrapper",
  props: {
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.rectangle-wrapper {
  background-color: #c4c2c2;
  height: 167px;
  position: relative;
  width: 552px;
}

.rectangle-wrapper .IMG {
  height: 167px;
  left: 195px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 149px;
}
</style>
