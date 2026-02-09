<template>
  <section id="contact" class="scroll-mt-24">
    <SectionTitle title="Contact Me" />
    <div
      class="rounded-2xl border border-slate-200/60 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5"
    >
      <p class="text-slate-700 dark:text-slate-300">
        Add your preferred contact method here (email, form, Calendly, etc).
      </p>
      <div class="mt-4 flex flex-wrap gap-3">
        <a class="btn-primary" href="mailto:you@example.com">Email me</a>
        <a
          class="btn-secondary"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          Message on LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/ui/SectionTitle.vue'
</script>
