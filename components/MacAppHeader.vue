<template>
  <div class="mac-app-header">
    <div class="mac-app-header-red" />
    <div class="mac-app-header-yellow" />
    <div class="mac-app-header-green" />
  </div>
</template>

<script>
export default {
  name: 'MacAppHeader'
}
</script>

<style>
.mac-app-header {
  background-color: gainsboro;
  height: 30px;
  padding: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 1px 0px 1px -1px black;
}
.mac-app-header-red {
  display: inline-block;
  background: orangered;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.mac-app-header-yellow {
  display: inline-block;
  background: orange;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.mac-app-header-green {
  display: inline-block;
  background: limegreen;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>
