<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import { initTheme } from "./composables/useTheme";

onMounted(() => {
  initTheme();
});
</script>
