<template>
    <div :class="['div-wrapper', className]">
      <p class="p">mLink yLink Metro / Glider Day Ticket</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "DivWrapper",
    props: {
      className: {
        type: String,
        default: "",
      },
    },
  };
  </script>
  
  <style>
  .div-wrapper {
    background-color: #e20c66;
    border-radius: 11px;
    height: 98px;
    position: relative;
    width: 448px;
  }
  
  .div-wrapper .p {
    color: #ffffff;
    font-family: "Inter", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 14px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: -20px;
    width: 425px;
  }
  </style>
  