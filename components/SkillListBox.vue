<template>
  <div class="skill-list-box">
    <h2>
      {{ title }}
      <pokemon-gif :url="gifUrl" />
    </h2>
    <div class="skill-list-wrapper" draggable="true">
      <mac-app-header />
      <div class="skill-list-content">
        <div v-for="(item, key) in list" :key="key" :class="'comment'">
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonGif from '~/components/PokemonGif'
import MacAppHeader from '~/components/MacAppHeader'
export default {
  name: 'ListBox',
  components: {
    PokemonGif,
    MacAppHeader
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: null
    },
    gifUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.skill-list-box {
  margin: 60px auto;
}
.skill-list-box h2 {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    'Meiryo', 'ＭＳ Ｐゴシック', sans-serif;
  text-align: center;
}
.skill-list-wrapper {
  background: white;
  width: 95%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px black;
}
.skill-list-content {
  padding: 10px;
}
.comment {
  width: 400x;
  margin: 10px 0px 10px auto;
  padding-right: 20px;
  text-align: right;
}
.comment p {
  display: inline-block;
  position: relative;
  margin: 0 10px 0 0;
  padding: 8px;
  max-width: 300px;
  border-radius: 12px;
  background: #30e852;
  font-size: 15px;
}

.comment p:after {
  content: '';
  position: absolute;
  top: 3px;
  right: -19px;
  border: 8px solid transparent;
  border-left: 18px solid #30e852;
  -webkit-transform: rotate(-35deg);
  transform: rotate(-35deg);
}
</style>
