<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import BaseSidebarItem, { MenuItem } from './BaseSidebarItem.vue'

const route = useRoute()

const menuItems: MenuItem[] = [
  {
    icon: 'iconfont icon-config',
    index: 'config',
    title: 'system.menus.config.title',
    subs: [
      {
        icon: 'iconfont icon-config',
        index: '/config/common',
        title: 'system.menus.config.common',
        subs: []
      }
    ]
  },
  {
    icon: 'iconfont icon-config',
    index: 'report',
    title: 'system.menus.report.title',
    subs: [
      {
        icon: 'iconfont icon-config',
        index: '/report/reservation',
        title: 'system.menus.report.reservation.title',
        subs: [
          {
            icon: 'iconfont icon-config',
            index: '/report/reservation/day',
            title: 'system.menus.report.reservation.dayReport',
            subs: []
          }
        ]
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
      <BaseSidebarItem
        v-for="item in menuItems"
        :key="item.index || ''"
        :index="item.index || ''"
        :subs="item.subs"
        :title="item.title"
        :icon="item.icon"
      ></BaseSidebarItem>
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
