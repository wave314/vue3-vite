<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import HelloWorld from './components/HelloWorld.vue'

const i18n = useI18n()
const currentLocale = ref(zhCn)
const enLocale = ref(en)
watch(useI18n().locale, () => {
  const temp = enLocale.value
  enLocale.value = currentLocale.value
  currentLocale.value = temp
})

const toggle = () => {
  i18n.locale.value = i18n.locale.value === 'en' ? 'zh' : 'en'
}
</script>

<template>
  <el-config-provider :locale="currentLocale">
    <el-button style="margin-left: 8px; vertical-align: middle" @click="toggle">
      Switch Lang
    </el-button>
    <el-color-picker :model-value="''" style="vertical-align: middle" />
    <HelloWorld msg="Hello Vue 3 Test + TypeScript + Vite" />
  </el-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
