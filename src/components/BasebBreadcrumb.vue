<script setup lang="ts">
import { compile } from 'path-to-regexp'
import { ref, watch } from 'vue'
import { RouteRecord, useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const levelList = ref<any>([])
const getBreadcrumb = () => {
  const matched = route.matched.filter((item) => item.meta && item.meta.title)

  levelList.value = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  )
}

getBreadcrumb()

watch(route, (newValue) => {
  if (newValue.path.startsWith('/redirect/')) {
    return
  }
  getBreadcrumb()
})

function pathCompile(path: string) {
  const { params } = route
  debugger
  const toPath = compile(path)
  debugger
  return toPath(params)
}

const handleLink = (item: RouteRecord) => {
  const { redirect, path } = item
  debugger
  if (redirect) {
    router.push(redirect.toString())
    return
  }
  router.push(pathCompile(path))
}
</script>
<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
          >{{ $t(item.meta.title) }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{
          $t(item.meta.title)
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  width: 100%;
  padding: 0 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  margin-bottom: 10px;
}
</style>
