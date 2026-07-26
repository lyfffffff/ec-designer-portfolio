<template>
  <div class="max-w-3xl mx-auto px-6 py-16">
    <h1 class="text-3xl md:text-4xl font-bold mb-3">联系我</h1>
    <p class="text-gray-500 dark:text-gray-400 mb-12">
      有项目想合作？随时联系我，通常 24 小时内回复。
    </p>

    <!-- 联系方式卡片 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
      <a
        v-for="contact in contacts"
        :key="contact.label"
        :href="contact.url"
        class="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-colors group"
      >
        <div class="flex items-center gap-3 mb-2">
          <span
            class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
            style="background-color: var(--color-accent)"
            >{{ contact.icon }}</span
          >
          <span
            class="font-medium group-hover:text-[color:var(--color-accent)] transition-colors"
            >{{ contact.label }}</span
          >
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ contact.value }}
        </p>
      </a>
    </div>

    <!-- 留言表单 -->
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label class="block text-sm font-medium mb-2">姓名</label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="你的称呼"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] focus:border-transparent transition"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">联系方式</label>
          <input
            v-model="form.contact"
            type="text"
            required
            placeholder="微信/邮箱/手机"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] focus:border-transparent transition"
          />
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium mb-2">需求描述</label>
        <textarea
          v-model="form.message"
          required
          rows="5"
          placeholder="简要描述你的需求，如产品类目、图片数量、期望风格等"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)] focus:border-transparent transition resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        class="px-8 py-3 rounded-lg font-medium text-white transition-transform hover:scale-105"
        style="background-color: var(--color-accent)"
      >
        发送消息
      </button>
      <p v-if="submitted" class="text-sm text-green-500">
        消息已记录！我会尽快联系你。
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({ name: "", contact: "", message: "" });
const submitted = ref(false);

const contacts = [
  { icon: "W", label: "微信", value: "扫码添加微信好友", url: "#" },
  {
    icon: "E",
    label: "邮箱",
    value: "hello@portfolio.com",
    url: "mailto:hello@portfolio.com",
  },
];

function handleSubmit() {
  // 前端仅做展示，实际项目可接入后端API或第三方表单服务
  console.log("表单提交:", form.value);
  submitted.value = true;
  form.value = { name: "", contact: "", message: "" };
  setTimeout(() => {
    submitted.value = false;
  }, 5000);
}
</script>
