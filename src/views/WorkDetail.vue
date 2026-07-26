<template>
  <div class="max-w-5xl mx-auto px-6 py-16">
    <!-- 返回按钮 -->
    <RouterLink
      to="/works"
      class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-width="2" stroke-linecap="round" d="M15 19l-7-7 7-7" />
      </svg>
      返回作品列表
    </RouterLink>

    <div v-if="work">
      <!-- 标题区 -->
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-3">
          <span
            class="px-2.5 py-1 text-xs font-medium rounded-full"
            :class="
              work.category === 'crossBorder'
                ? 'bg-blue-500/80 text-white'
                : 'bg-orange-500/80 text-white'
            "
          >
            {{ work.category === "crossBorder" ? "跨境电商" : "国内电商" }}
          </span>
          <span class="text-sm text-gray-400">{{ work.date }}</span>
        </div>
        <h1 class="text-2xl md:text-4xl font-bold mb-3">{{ work.title }}</h1>
        <p class="text-gray-600 dark:text-gray-400 max-w-3xl">
          {{ work.description }}
        </p>
        <div class="flex items-center gap-2 flex-wrap mt-4">
          <span
            v-for="tag in work.tags"
            :key="tag"
            class="px-2.5 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- 图片展示 -->
      <div class="space-y-6 mb-12">
        <div
          v-for="(img, i) in work.images"
          :key="i"
          class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 cursor-zoom-in"
          @click="openLightbox(img, work.title)"
        >
          <img
            :src="img"
            :alt="`${work.title} - ${i + 1}`"
            class="w-full"
            @error="onImgError"
          />
        </div>
      </div>

      <!-- 上下篇导航 -->
      <div
        class="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-8"
      >
        <RouterLink
          v-if="prevWork"
          :to="`/works/${prevWork.id}`"
          class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <- {{ prevWork.title }}
        </RouterLink>
        <span v-else></span>
        <RouterLink
          v-if="nextWork"
          :to="`/works/${nextWork.id}`"
          class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {{ nextWork.title }} ->
        </RouterLink>
      </div>
    </div>

    <!-- 作品不存在 -->
    <div v-else class="py-20 text-center">
      <p class="text-lg text-gray-400 mb-4">作品不存在或已下架</p>
      <RouterLink
        to="/works"
        class="text-sm font-medium hover:underline"
        style="color: var(--color-accent)"
      >
        返回作品列表
      </RouterLink>
    </div>

    <!-- 灯箱 -->
    <ImageLightbox
      :visible="lightboxVisible"
      :src="lightboxSrc"
      :alt="lightboxAlt"
      @close="closeLightbox"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { works, getWorkById } from "../data/works";
import ImageLightbox from "../components/ImageLightbox.vue";

const route = useRoute();
const work = computed(() => getWorkById(route.params.id));

const currentIndex = computed(() =>
  works.findIndex((w) => w.id === Number(route.params.id)),
);
const prevWork = computed(() =>
  currentIndex.value > 0 ? works[currentIndex.value - 1] : null,
);
const nextWork = computed(() =>
  currentIndex.value < works.length - 1 ? works[currentIndex.value + 1] : null,
);

const lightboxVisible = ref(false);
const lightboxSrc = ref("");
const lightboxAlt = ref("");

function openLightbox(src: string, alt: string) {
  lightboxSrc.value = src;
  lightboxAlt.value = alt;
  lightboxVisible.value = true;
}
function closeLightbox() {
  lightboxVisible.value = false;
}

function onImgError(e: Event) {
  const img = e.target as HTMLImageElement;
  img.style.background = "linear-gradient(135deg, #e0e0e0, #c0c0c0)";
  img.alt = "图片加载失败";
}
</script>
