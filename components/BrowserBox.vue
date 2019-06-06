<template>
  <div class="browser-box">
    <div class="mac-app-header">
      <div class="mac-app-header-red" />
      <div class="mac-app-header-yellow" />
      <div class="mac-app-header-green" />
      <div
        v-for="(item, idx) in items"
        :key="idx"
        :class="`browser-tab ${getClass(idx)}`"
        @click="transTab(idx)"
      >
        {{ normTitle(item.title) }}
      </div>
    </div>
    <div class="browser-content">
      <div class="browser-content-title">{{ items[selectedIdx].title }}</div>
      <div class="browser-content-body">{{ items[selectedIdx].desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrowserHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: null
    }
  },
  data: function() {
    return {
      selectedIdx: 0
    }
  },
  methods: {
    getClass(n) {
      console.log(n)
      console.log(this.selectedIdx)
      return n === this.selectedIdx ? 'selected' : ''
    },
    transTab(idx) {
      this.selectedIdx = idx
    },
    normTitle(title) {
      return title.length <= 7 ? title : title.slice(0, 7)
    }
  }
}
</script>

<style>
.browser-box {
  background: white;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px black;
}
.browser-box .mac-app-header {
  height: 35px;
  padding: 2px 2px 0 2px;
}
.browser-tab {
  display: inline-block;
  height: 33px;
  margin: 0px;
  padding: 5px 8px 3px 8px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: default;
  font-size: 0.9em;
  font-family: Helvetica, '游ゴシック', sans-serif;
}
.browser-tab.selected {
  background: white;
}
.browser-tab.selected:hover {
  background: white;
}
.browser-tab:hover {
  background: whitesmoke;
}
.browser-content {
  padding: 10px;
}
.browser-content-title {
  font-size: 1.5em;
  font-weight: bold;
}
.browser-content-body {
  width: 80%;
  margin: 5px auto;
}
</style>
