<template>
  <nav
    class="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#141414]/80 border-b border-gray-200 dark:border-gray-800"
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <RouterLink
        to="/"
        class="text-lg font-bold tracking-tight"
        style="color: var(--color-accent)"
      >
        Portfolio.
      </RouterLink>
      <div class="hidden md:flex items-center gap-8">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          active-class="!text-gray-900 dark:!text-white"
        >
          {{ link.label }}
        </RouterLink>
      </div>
      <div class="flex items-center gap-4">
        <button
          @click="toggleTheme"
          class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :aria-label="isDark ? '切换到浅色模式' : '切换到暗黑模式'"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4" stroke-width="2" />
            <path
              stroke-width="2"
              stroke-linecap="round"
              d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
        </button>
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!mobileOpen"
              stroke-width="2"
              stroke-linecap="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-width="2"
              stroke-linecap="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-show="mobileOpen"
      class="md:hidden border-t border-gray-200 dark:border-gray-800 px-6 py-4 space-y-3"
    >
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        @click="mobileOpen = false"
        class="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        {{ link.label }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isDark, toggleTheme } from "../composables/useTheme";

const mobileOpen = ref(false);
const links = [
  { to: "/", label: "首页" },
  { to: "/works", label: "作品" },
  { to: "/about", label: "关于我" },
  { to: "/contact", label: "联系" },
];
</script>
