<script setup>
// EMITS
const emits = defineEmits(["closeSidebar"]);
</script>

<template>
  <aside class="side-container display-col">
    <ul class="side-links-container">
      <li class="side-link">Home</li>
      <li class="side-link">About</li>
      <li class="side-link">Potions</li>
      <li class="side-link">Faqs</li>
      <li class="side-link">Staff</li>
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
</style>
