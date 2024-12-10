<template>
  <div
    class='global-wrapper p-2'
  >
    <slot />
  </div>
</template>


<script lang="ts" setup>
import type { Story, Variant } from 'histoire'


const props = defineProps<{
  story: Story
  variant?: Variant
}>()
</script>
