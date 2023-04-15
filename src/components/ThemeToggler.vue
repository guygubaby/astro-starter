<script lang="ts" setup>
import { toggleDark } from '~/composables/dark'
</script>

<template>
  <button aria-label="theme-toggler" icon-btn @click="toggleDark()">
    <span text-xl dark:i-carbon-moon i-carbon-sun />
  </button>
</template>
