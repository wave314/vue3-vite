<script setup lang="ts">
import BaseSidebar from './BaseSidebar.vue'
import BaseHeader from './BaseHeader.vue'
</script>

<template>
  <div class="layout">
    <BaseHeader></BaseHeader>
    <div class="main-content">
      <BaseSidebar></BaseSidebar>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
