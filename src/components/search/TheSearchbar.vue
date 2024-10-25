<script setup></script>

<template>
  <form role="search">
    <input
      id="search"
      type="search"
      placeholder="Search..."
      autofocus
      required
    />
    <button type="submit">Go</button>
  </form>
</template>

<style scoped>
/* Searchbar styles inspired by Liam's CodePen:
   https://codepen.io/liamj
*/

form {
  position: relative;
  width: 20rem;
  background: var(--color-green-light);
  border-radius: var(--radius-xs);
  margin-right: var(--spacing-reg);
}

input,
button {
  height: 2rem;
  border: 0;
  font-size: var(--font-reg);
}

input {
  outline: 0;
  width: 100%;
  background: var(--color-white);
  padding: 0 5px;
  border-radius: var(--radius-xs);
  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
  color: var(--color-black);
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

button {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  background: var(--color-green-light);
  font-weight: 600;
  border-radius: 0 var(--radius-xs) var(--radius-xs) 0;
}

input:not(:placeholder-shown) {
  border-radius: var(--radius-xs) 0 0 var(--radius-xs);
  width: calc(100% - 3rem);
}

input:not(:placeholder-shown) + button {
  display: block;
}
</style>
