<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 py-8">
    <div
      class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <p class="text-sm text-gray-500 dark:text-gray-400">
        © {{ year }} 产品精修作品集. All rights reserved.
      </p>
      <div class="flex items-center gap-6">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
const socialLinks = [
  { label: "微信", url: "#" },
  { label: "邮箱", url: "mailto:hello@portfolio.com" },
];
</script>
