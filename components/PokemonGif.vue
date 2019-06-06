<template>
  <div class="pokemon-gif">
    <img :src="url" />
  </div>
</template>

<script>
export default {
  name: 'PokemonGif',
  components: {},
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.pokemon-gif {
  display: inline-block;
}
.pokemon-gif img {
  width: 50px;
  height: 50px;
}
</style>
