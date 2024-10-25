<script setup>
import { ref } from "vue";
import TheSearchbar from "@/components/search/TheSearchbar.vue";
import TheSidebar from "@/components/navigation/TheSidebar.vue";
import wizardImg from "@/assets/svgs/wizard_green.svg";
import sidebarSvg from "@/assets/svgs/sidebar_green.svg";
import cartSvg from "@/assets/svgs/cart_green.svg";

// REFS
const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <nav class="nav-container display-between">
    <button @click="toggleSidebar" class="side-open-btn">
      <img :src="sidebarSvg" alt="sidebar toggle svg" class="side-open-svg" />
    </button>
    <ul class="nav-links-container display-evenly">
      <li class="nav-link">Home</li>
      <li class="nav-link">About</li>
      <li class="nav-link">Potions</li>
      <li class="nav-link">Faqs</li>
      <li class="nav-link">Staff</li>
      <li><img :src="cartSvg" alt="cart img" class="nav-cart-svg" /></li>
    </ul>
    <TheSearchbar />
    <div class="nav-user-container display-col">
      <img :src="wizardImg" alt="user avatar" class="nav-user-img" />
      <p class="nav-user-welcome">Steve</p>
    </div>
    <transition name="slide">
      <TheSidebar v-if="isSidebarOpen" @close-sidebar="toggleSidebar" />
    </transition>
  </nav>
</template>

<style scoped>
.nav-container {
  position: relative;
  margin-top: var(--spacing-reg);
}

.nav-links-container {
  display: none;
}

.nav-link,
.nav-cart-svg {
  font-size: var(--font-lg);
  text-align: center;
  cursor: pointer;
}

.nav-cart-svg {
  height: 50px;
}

.nav-cart-svg:hover {
  animation: wiggle 0.9s both;
}

.nav-user-container {
  z-index: 10;
}

.nav-user-welcome {
  text-align: center;
  font-weight: 600;
}

.side-open-btn {
  margin-right: var(--spacing-reg);
}

.side-open-svg {
  height: 50px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-150%);
}

@media (width >= 768px) {
  .nav-links-container {
    display: flex;
    width: 100%;
  }

  .side-open-btn {
    display: none;
  }
}

/* KEY FRAMES */
@keyframes wiggle {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
</style>
