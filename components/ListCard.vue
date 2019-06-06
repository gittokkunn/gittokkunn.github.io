<template>
  <div class="list-card" draggable="true">
    <mac-app-header />
    <div class="list-card-content">
      <div class="card-title">{{ item.title }}</div>
      <div class="card-desc">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script>
import MacAppHeader from '~/components/MacAppHeader'
export default {
  name: 'ListCard',
  components: {
    MacAppHeader
  },
  props: {
    item: {
      type: Array,
      default: null
    }
  }
}
</script>

<style>
.list-card {
  display: inline-block;
  width: 200px;
  margin-top: 10px;
  margin-right: 10px;
  padding-bottom: 5px;
  background: linear-gradient(snow, whitesmoke);
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px black;
}
.list-card-content {
  padding: 10px 10px;
}
.card-title {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    'Meiryo', 'ＭＳ Ｐゴシック', sans-serif;
  font-weight: bold;
}
</style>
