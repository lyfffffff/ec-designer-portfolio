<template>
  <RouterLink
    :to="`/works/${work.id}`"
    class="group block rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
  >
    <div
      class="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800"
    >
      <img
        :src="work.cover"
        :alt="work.title"
        loading="lazy"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        @error="onImgError"
      />
      <div class="absolute top-3 left-3">
        <span
          class="px-2.5 py-1 text-xs font-medium rounded-full backdrop-blur-md"
          :class="
            work.category === 'crossBorder'
              ? 'bg-blue-500/80 text-white'
              : 'bg-orange-500/80 text-white'
          "
        >
          {{ work.category === "crossBorder" ? "跨境" : "国内" }}
        </span>
      </div>
    </div>
    <div class="p-5">
      <h3
        class="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[color:var(--color-accent)] transition-colors"
      >
        {{ work.title }}
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
        {{ work.description }}
      </p>
      <div class="flex items-center gap-2 flex-wrap">
        <span
          v-for="tag in work.tags"
          :key="tag"
          class="px-2 py-0.5 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{ work: any }>();

function onImgError(e: Event) {
  const img = e.target as HTMLImageElement;
  img.style.background = "linear-gradient(135deg, #e0e0e0, #c0c0c0)";
  img.alt = "图片加载失败";
}
</script>
