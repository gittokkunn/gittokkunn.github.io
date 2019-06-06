<template>
  <div id="wrapper">
    <h1>
      Seiki's Portfolio
      <pokemon-gif :url="require('~/static/pichu.gif')" />
    </h1>
    <text-box :title="abtMeTitle" :gif-url="abtMeGifUrl" :text="aboutMe" />
    <skill-list-box
      :title="skillTitle"
      :gif-url="skillGifUrl"
      :list="skillList"
    />
    <list-box :title="worksTitle" :gif-url="worksGifUrl" :list="worksList" />
    <works-box :title="worksTitle" :gif-url="worksGifUrl" :items="worksList" />
  </div>
</template>

<script>
import PokemonGif from '~/components/PokemonGif.vue'
import TextBox from '~/components/TextBox.vue'
import SkillListBox from '~/components/SkillListBox.vue'
import WorksBox from '~/components/WorksBox.vue'
export default {
  components: {
    PokemonGif,
    TextBox,
    SkillListBox,
    WorksBox
  },
  data: function() {
    return {
      abtMeTitle: 'Description',
      aboutMe: `
<pre><code>
<span class="terminal-dir">~/name</span>
# Seiki Tokuhara
<span class="terminal-dir">~/belongs</span>
# Okayama University
<span class="terminal-dir">~/desc</span>
# While Study "Machine Learning", develop Web Apps.
</pre></code>
      `,
      abtMeGifUrl: require('~/static/pikachu.gif'),
      skillTitle: 'Skill',
      skillList: [
        'Python for "Machine Learning"',
        'Node.js for Front End and Back End',
        'Go lang for Back End',
        'C# for Unity'
      ],
      skillGifUrl: require('~/static/raichu.gif'),
      worksTitle: 'Works',
      worksList: [
        {
          title: 'Engineering At DataCradle',
          desc: 'Node RPA'
        },
        {
          title: 'ラスフォト',
          desc: 'Go×React Apps to trade photos online'
        },
        {
          title: 'Tokumaru-Blog',
          desc: 'Nuxt.js SPA Apps on FireBase'
        }
      ],
      worksGifUrl: require('~/static/thunders.gif')
    }
  }
}
</script>

<style>
#wrapper {
  padding: 30px 30px;
}
#wrapper h1 {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    'Meiryo', 'ＭＳ Ｐゴシック', sans-serif;
}
</style>
