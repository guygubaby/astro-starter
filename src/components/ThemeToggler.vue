<script lang="ts" setup>
import { toggleDark } from '~/composables/dark'
</script>

<template>
  <button aria-label="theme-toggler" class="icon-btn" @click="toggleDark()">
    <span class="text-xl text-red dark:i-carbon-moon i-carbon-sun" />
  </button>
</template>
