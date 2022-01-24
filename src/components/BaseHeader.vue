<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import browser from '../store/persistent/browser'

const store = useStore()
const i18n = useI18n()

const collapse = ref(false)
const menuHandler = () => {
  collapse.value = !collapse.value
  store.commit('setFoldMenu', collapse.value)
}
const handleCommand = () => {}
function handleLanguage(command: string) {
  i18n.locale.value = command
  browser.language = command
}
</script>
<template>
  <el-row class="header" type="flex" justify="space-between">
    <div @click="menuHandler">
      <i v-if="!collapse" class="iconfont icon-fold" />
      <i v-else class="iconfont icon-unfold" />
      {{ $t('system.title') }}
    </div>
    <div>
      <el-dropdown trigger="click" class="language" @command="handleLanguage">
        <span class="el-dropdown-link">
          <i class="iconfont icon-language"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="en"> English </el-dropdown-item>
            <el-dropdown-item divided command="zh"> 简体中文 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="iconfont icon-user" />
          {{ browser.userName }}
          <i class="iconfont icon-arrow-down" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>{{ $t('system.menus.logout') }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-row>
</template>

<style scoped lang="scss">
.header {
  height: 70px;
  min-height: 70px;
  font-size: 22px;
  color: #fff;
  background-color: #242f42;
  align-items: center;
  padding: 0 50px 0 21px;
  .el-dropdown-link {
    color: #fff;
    cursor: pointer;
  }
  .el-dropdown-menu__item {
    text-align: center;
  }
  .language {
    margin-right: 8px;
  }
}
</style>
