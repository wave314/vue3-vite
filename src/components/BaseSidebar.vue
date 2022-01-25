<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()

const menuItems = [
  {
    icon: 'iconfont icon-config',
    index: 'config',
    title: 'system.menus.config.title',
    subs: [
      {
        icon: 'iconfont icon-config',
        index: '/config/common',
        title: 'system.menus.config.common'
      }
    ]
  }
]
const store = useStore()
</script>
<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="route.fullPath"
      :collapse="store.state.common.foldMenu"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      :unique-opened="true"
      router
    >
      <template v-for="menuItem in menuItems">
        <template v-if="menuItem.subs">
          <el-sub-menu :key="menuItem.index" :index="menuItem.index">
            <template #title>
              <i :class="menuItem.icon" />
              <span>{{ $t(menuItem.title) }}</span>
            </template>
            <el-menu-item
              v-for="item in menuItem.subs"
              :key="item.title"
              :index="item.index"
            >
              <i :class="item.icon" />
              <span>{{ $t(item.title) }}</span>
            </el-menu-item>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :key="menuItem.title" :index="menuItem.index">
            <i :class="menuItem.icon" />
            <span>{{ $t(menuItem.title) }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu {
  flex: 1;
  overflow-y: auto;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
