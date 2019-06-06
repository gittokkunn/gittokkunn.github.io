<template>
  <div class="works-box">
    <h2>
      {{ title }}
      <pokemon-gif :url="gifUrl" />
    </h2>
    <browser-box :items="items" />
  </div>
</template>

<script>
import PokemonGif from '~/components/PokemonGif'
import BrowserBox from '~/components/BrowserBox.vue'
export default {
  name: 'WorksBox',
  components: {
    PokemonGif,
    BrowserBox
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
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
.works-box {
  width: 95%;
  max-width: 600px;
  margin: 60px auto;
}
.works-box h2 {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    'Meiryo', 'ＭＳ Ｐゴシック', sans-serif;
  text-align: center;
}
</style>
