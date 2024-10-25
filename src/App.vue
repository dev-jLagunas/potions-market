<script setup>
import TheNavbar from "@/components/navigation/TheNavbar.vue";
</script>

<template>
  <TheNavbar />
  <router-view v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
