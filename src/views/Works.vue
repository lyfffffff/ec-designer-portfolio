<template>
  <div class="max-w-7xl mx-auto px-6 py-16">
    <!-- 页面标题 -->
    <div class="mb-10">
      <h1 class="text-3xl md:text-4xl font-bold mb-3">全部作品</h1>
      <p class="text-gray-500 dark:text-gray-400">
        共 {{ filteredWorks.length }} 件作品
      </p>
    </div>

    <!-- 分类筛选 -->
    <div class="flex items-center gap-3 mb-10 flex-wrap">
      <button
        v-for="cat in categories"
        :key="cat.value"
        @click="activeCategory = cat.value"
        class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
        :class="
          activeCategory === cat.value
            ? 'text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        "
        :style="
          activeCategory === cat.value
            ? { backgroundColor: 'var(--color-accent)' }
            : {}
        "
      >
        {{ cat.label }}
        <span class="ml-1 opacity-60">{{
          cat.value === "all"
            ? works.length
            : works.filter((w) => w.category === cat.value).length
        }}</span>
      </button>
    </div>

    <!-- 作品网格 -->
    <div
      v-if="filteredWorks.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <WorkCard v-for="work in filteredWorks" :key="work.id" :work="work" />
    </div>

    <!-- 空状态 -->
    <div v-else class="py-20 text-center text-gray-400">
      <p class="text-lg">该分类下暂无作品</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import WorkCard from "../components/WorkCard.vue";
import { works } from "../data/works";

const activeCategory = ref("all");

const categories = [
  { label: "全部", value: "all" },
  { label: "国内电商", value: "domestic" },
  { label: "跨境电商", value: "crossBorder" },
];

const filteredWorks = computed(() => {
  if (activeCategory.value === "all") return works;
  return works.filter((w) => w.category === activeCategory.value);
});
</script>
