<script setup>
// import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="relative">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/calculator">Calculator</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  /* max-width: 1280px; */
  margin: 0 auto;
  /* padding: 2rem; */

  font-weight: normal;
}

.wrapper {
  line-height: 1.5;
  max-height: 100vh;
  position: fixed;
  width: 100%;
  z-index: 400;
  color: rgb(0, 38, 255);
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    color: hsl(160, 100%, 37%);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  color: rgb(146, 145, 145);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  /* border-left: 1px solid var(--color-border); */
}

nav a:first-of-type {
  border: 0;
}
</style>
