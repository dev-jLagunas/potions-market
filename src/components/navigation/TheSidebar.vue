<script setup>
import { useRouter } from "vue-router";
import cartSvg from "@/assets/svgs/cart_green.svg";

// ROUTER
const router = useRouter();

// EMITS
const emits = defineEmits(["closeSidebar"]);

// METHODS
const handleRouteClick = (path) => {
  router.push(path);
  emits("closeSidebar");
};
</script>

<template>
  <aside class="side-container display-col">
    <ul class="side-links-container">
      <li class="side-link" @click="handleRouteClick('/')">Home</li>
      <li class="side-link" @click="handleRouteClick('/about')">About</li>
      <li class="side-link" @click="handleRouteClick('/potions')">Potions</li>
      <li class="side-link" @click="handleRouteClick('/faqs')">Faqs</li>
      <li class="side-link" @click="handleRouteClick('/staff')">Staff</li>
      <li><img :src="cartSvg" alt="cart img" class="side-cart-svg" /></li>
    </ul>

    <button class="side-close-btn" @click="$emit('closeSidebar')">X</button>
  </aside>
</template>

<style scoped>
.side-container {
  background: var(--color-black);
  position: fixed;
  inset: 0;
  font-size: var(--font-xl);
}

.side-cart-svg {
  height: 50px;
}

.side-cart-svg:hover {
  animation: wiggle 0.9s both;
}

.side-link {
  position: relative;
  z-index: 1;
  cursor: pointer;
}

.side-link::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: var(--color-green-light);
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.6s ease-in-out;
  border-radius: var(--radius-xs);
}

.side-link:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}

.side-close-btn {
  margin-top: var(--spacing-reg);
  padding: 0.1rem 2rem;
  border-radius: var(--radius-xs);
  color: var(--color-red-light);
  font-size: var(--font-xl);
  font-weight: 900;
  transition: transform 0.5s ease;
}

.side-close-btn:hover {
  transform: scale(1.3);
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
