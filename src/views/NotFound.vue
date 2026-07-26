<template>
  <div
    class="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center"
  >
    <p
      class="text-8xl md:text-[10rem] font-bold tracking-tighter leading-none"
      style="color: var(--color-accent)"
    >
      404
    </p>
    <h1 class="mt-6 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
      页面走丢了
    </h1>
    <p class="mt-3 text-base text-gray-600 dark:text-gray-400 max-w-md">
      你访问的页面不存在或已被移动，请检查地址或返回首页继续浏览作品。
    </p>
    <RouterLink
      to="/"
      class="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
      style="background-color: var(--color-accent)"
    >
      <svg
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
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      返回首页
    </RouterLink>
  </div>
</template>

<script setup lang="ts"></script>
