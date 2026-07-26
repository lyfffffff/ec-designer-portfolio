<template>
  <div class="max-w-4xl mx-auto px-6 py-16">
    <h1 class="text-3xl md:text-4xl font-bold mb-8">关于我</h1>

    <!-- 简介 -->
    <div class="prose dark:prose-invert max-w-none mb-12">
      <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
        你好！我是一名专注于电商产品视觉设计的自由设计师，拥有 5
        年以上行业经验。
        主要服务领域包括产品主图精修、详情页设计、跨境电商视觉优化。
      </p>
      <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        我相信好的产品图片不仅要"好看"，更要能"卖货"。
        每一张精修图都兼顾质感呈现与卖点传达，帮助品牌提升点击率与转化率。
      </p>
    </div>

    <!-- 技能 -->
    <div class="mb-12">
      <h2 class="text-xl font-bold mb-6">专业技能</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
        >
          <div class="flex items-center justify-between mb-2">
            <span class="font-medium text-sm">{{ skill.name }}</span>
            <span class="text-xs text-gray-400">{{ skill.level }}%</span>
          </div>
          <div
            class="h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
          >
            <div
              class="h-full rounded-full transition-all duration-500"
              :style="{
                width: skill.level + '%',
                backgroundColor: 'var(--color-accent)',
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 服务流程 -->
    <div class="mb-12">
      <h2 class="text-xl font-bold mb-6">服务流程</h2>
      <div class="space-y-4">
        <div v-for="(step, i) in steps" :key="i" class="flex items-start gap-4">
          <div
            class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style="background-color: var(--color-accent)"
          >
            {{ i + 1 }}
          </div>
          <div>
            <h3 class="font-medium mb-1">{{ step.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div
      class="p-8 rounded-xl text-center"
      style="background-color: var(--color-accent)"
    >
      <h2 class="text-xl font-bold text-white mb-2">有项目想合作？</h2>
      <p class="text-white/80 text-sm mb-4">随时欢迎联系，一起让产品更好看</p>
      <RouterLink
        to="/contact"
        class="inline-block px-6 py-3 rounded-lg bg-white text-sm font-medium hover:bg-gray-100 transition-colors"
        style="color: var(--color-accent)"
      >
        联系我
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  { name: "产品精修", level: 95 },
  { name: "详情页设计", level: 90 },
  { name: "跨境电商视觉", level: 85 },
  { name: "色彩校正", level: 92 },
  { name: "光影重塑", level: 88 },
  { name: "场景合成", level: 80 },
];

const steps = [
  {
    title: "需求沟通",
    desc: "了解产品特点、目标平台、风格要求，确认精修方向。",
  },
  { title: "报价确认", desc: "根据图片数量与复杂度提供报价，确认后开始制作。" },
  { title: "精修制作", desc: "按照要求进行精修处理，过程中可随时沟通调整。" },
  { title: "交付验收", desc: "交付源文件与导出图，支持合理范围内的修改调整。" },
];
</script>
