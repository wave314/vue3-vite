<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const currentLocale = ref(zhCn)
const enLocale = ref(en)
watch(useI18n().locale, () => {
  const temp = enLocale.value
  enLocale.value = currentLocale.value
  currentLocale.value = temp
})
</script>

<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>

<style>
@import './assets/css/main.css';
</style>
