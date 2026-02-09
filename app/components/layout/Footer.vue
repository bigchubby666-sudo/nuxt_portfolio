<template>
  <footer class="border-t border-slate-200/60 dark:border-white/10">
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div class="flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/jonathan-palacio-8766a9216/"
          target="_blank"
          rel="noreferrer"
          class="footer-link"
        >
          <Icon name="mdi:linkedin" class="h-5 w-5" />
          <span class="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          class="footer-link"
        >
          <Icon name="mdi:github" class="h-5 w-5" />
          <span class="sr-only">GitHub</span>
        </a>
      </div>

      <p class="text-sm text-slate-500 dark:text-slate-400">Copyright © 2026</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white;
}
</style>
