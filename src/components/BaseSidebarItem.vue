<script lang="ts" setup>
export interface MenuItem {
  icon: string
  index: string
  title: string
  subs: MenuItem[]
}
const menu = defineProps<MenuItem>()
</script>

<template>
  <template v-if="menu.subs && menu.subs.length > 0">
    <el-sub-menu :key="menu.index" :index="menu.index || ''">
      <template #title>
        <i :class="menu.icon" />
        <span>{{ $t(menu.title || '') }}</span>
      </template>
      <BaseSidebarItem
        v-for="item in menu.subs"
        :key="item.index || ''"
        :index="item.index || ''"
        :subs="item.subs"
        :title="item.title"
        :icon="item.icon"
      >
      </BaseSidebarItem>
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :key="menu.title" :index="menu.index">
      <i :class="menu.icon" />
      <span>{{ $t(menu.title || '') }}</span>
    </el-menu-item>
  </template>
</template>
