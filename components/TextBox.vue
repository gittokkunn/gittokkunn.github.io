<template>
  <div class="text-box">
    <h2>
      {{ title }}
      <pokemon-gif :url="gifUrl" />
    </h2>
    <div class="text-wrapper" draggable="true">
      <mac-app-header />
      <div class="text" v-html="text"></div>
    </div>
  </div>
</template>

<script>
import PokemonGif from '~/components/PokemonGif'
import MacAppHeader from '~/components/MacAppHeader'
export default {
  name: 'TextBox',
  components: {
    PokemonGif,
    MacAppHeader
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    gifUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.text-box {
  width: 95%;
  max-width: 600px;
  margin: 60px auto;
}
.text-box h2 {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    'Meiryo', 'ＭＳ Ｐゴシック', sans-serif;
  text-align: center;
}
.pokemon-gif {
  display: inline-block;
}
.text-wrapper {
  border-radius: 5px;
  background-color: darkslateblue;
  opacity: 0.9;
  box-shadow: 1px 1px 1px 1px black;
}
.text {
  padding: 10px;
}
.text code {
  color: white;
}
.terminal-dir {
  color: aquamarine;
}
</style>
