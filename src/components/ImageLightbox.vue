<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      @click="$emit('close')"
    >
      <button
        class="absolute top-4 right-4 p-2 text-white/70 hover:text-white text-3xl leading-none"
      >
        &times;
      </button>
      <img
        :src="src"
        :alt="alt"
        class="max-w-[90vw] max-h-[90vh] object-contain"
        @click.stop
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{ visible: boolean; src: string; alt?: string }>();
defineEmits<{ close: [] }>();
</script>
