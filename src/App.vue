<script setup lang="ts">
</script>

<template>
  <RouterView />
</template>

<style>
@import "tailwindcss";
@theme {
  --font-ff: "Racing Sans One", sans-serif;
  --text-ff: text-slate-500;
}
@plugin "daisyui" {
  themes: light --default;
}

@layer components {
  .glassy-card {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 0.5rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 1);
    padding: 0.5rem 1rem;
  }
}

body{
  height: 100vh;
  background: #abb7d9;
  background: linear-gradient(175deg, 
  rgba(171, 183, 217, 1) 0%, 
  rgba(211, 227, 222, 1) 40%, 
  rgba(255, 241, 212, 1) 100%);
}

.dark-bg {
  background: #0B1731;
  background: linear-gradient(180deg, 
  rgba(11, 23, 49, 1) 0%, 
  rgba(61, 65, 108, 1) 66%, 
  rgba(117, 104, 129, 1) 84%, 
  rgba(207, 157, 140, 1) 99%);
}
</style>
