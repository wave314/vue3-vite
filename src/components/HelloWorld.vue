<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import browser from '../store/persistent/browser'

defineProps<{ msg: string }>()

const count = ref(0)
const selectedDate = ref(new Date())
function test(): number {
  return 1
}
const i18n = useI18n()
i18n.locale.value = 'zh'
function changeLanguage() {
  i18n.locale.value = i18n.locale.value === 'zh' ? 'en' : 'zh'
  browser.language = i18n.locale.value
}
test()
</script>

<template>
  <button id="prettier-id" className="prettier-class" @click="changeLanguage">
    Click Here
  </button>
  <h1>
    {{ msg }}
  </h1>

  <p>
    Recommended IDE setup: Recommended IDE setup: Recommended IDE setup:
    Recommended IDE setup: Recommended IDE setup:1111
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
      {{ $t('system.title', { name: 'wave' }) }}
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>
  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
  <el-date-picker v-model="selectedDate" type="date"> </el-date-picker>
  <p>
    {{ selectedDate }}
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
