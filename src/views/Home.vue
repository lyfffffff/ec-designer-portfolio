<template>
  <div>
    <!-- Hero -->
    <section
      class="relative flex items-center justify-center min-h-[60vh] py-20 overflow-hidden"
    >
      <div class="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[color:var(--color-accent)] blur-3xl"
        ></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-400 blur-3xl"
        ></div>
      </div>
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p
          class="text-sm font-medium tracking-widest uppercase text-[color:var(--color-accent)] mb-4"
        >
          Product Retouching Portfolio
        </p>
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          电商产品精修<br />视觉设计作品集
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
        >
          专注于电商产品主图精修、详情页设计、跨境电商视觉优化。<br />
          用光影与质感，让每一件产品会说话。
        </p>
        <div class="flex items-center justify-center gap-4">
          <RouterLink
            to="/works"
            class="px-6 py-3 rounded-lg font-medium text-white transition-transform hover:scale-105"
            style="background-color: var(--color-accent)"
          >
            浏览作品
          </RouterLink>
          <RouterLink
            to="/contact"
            class="px-6 py-3 rounded-lg font-medium border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-colors"
          >
            联系我
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 数据统计 -->
    <section class="border-y border-gray-200 dark:border-gray-800 py-12">
      <div
        class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <div v-for="stat in stats" :key="stat.label">
          <p class="text-3xl font-bold" style="color: var(--color-accent)">
            {{ stat.value }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </section>

    <!-- 精选作品 -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="flex items-end justify-between mb-10">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold mb-2">精选作品</h2>
          <p class="text-gray-500 dark:text-gray-400">部分近期精修与设计项目</p>
        </div>
        <RouterLink
          to="/works"
          class="text-sm font-medium hover:underline"
          style="color: var(--color-accent)"
        >
          查看全部 →
        </RouterLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <WorkCard v-for="work in featured" :key="work.id" :work="work" />
      </div>
    </section>

    <!-- 服务领域 -->
    <section class="bg-gray-50 dark:bg-gray-900/50 py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-12">
          服务领域
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="service in services"
            :key="service.title"
            class="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
          >
            <div
              class="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style="background-color: var(--color-accent)"
            >
              <span class="text-white text-xl font-bold">{{
                service.icon
              }}</span>
            </div>
            <h3 class="font-semibold text-lg mb-2">{{ service.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ service.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import WorkCard from "../components/WorkCard.vue";
import { getFeaturedWorks } from "../data/works";

const featured = computed(() => getFeaturedWorks(6));

const stats = [
  { value: "500+", label: "精修作品" },
  { value: "50+", label: "合作品牌" },
  { value: "5年", label: "行业经验" },
  { value: "98%", label: "客户满意度" },
];

const services = [
  {
    icon: "P",
    title: "产品主图精修",
    desc: "高质感产品主图精修，光影重塑、质感提升、色彩校正，提升点击率。",
  },
  {
    icon: "D",
    title: "详情页设计",
    desc: "全套详情页视觉设计，卖点提炼、信息层级排版、场景图合成。",
  },
  {
    icon: "C",
    title: "跨境电商视觉",
    desc: "适配亚马逊、Shopify 等海外平台的主图与详情页视觉设计。",
  },
];
</script>
