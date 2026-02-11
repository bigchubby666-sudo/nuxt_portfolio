<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-950/75">
    <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <button
        type="button"
        class="inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold tracking-wide text-slate-900 transition hover:bg-slate-100 hover:text-slate-950 dark:text-white dark:hover:bg-white/5"
        aria-label="Go to home"
        @click="goHome"
      >
        Roy Andreson
      </button>

      <div class="hidden items-center gap-1 sm:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.hash"
          :to="localePath(link.to)"
          :class="['nav-link', { 'nav-link-active': isActiveLink(link.hash) }]"
        >
          {{ t(link.labelKey) }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <div class="relative hidden sm:inline-flex" ref="localeWrapper">
          <button
            type="button"
            class="icon-link"
            :aria-expanded="isLocaleOpen"
            aria-label="Change language"
            @click="isLocaleOpen = !isLocaleOpen"
          >
            <Icon name="mdi:translate" class="h-5 w-5" />
          </button>
          <div
            v-if="isLocaleOpen"
            class="absolute right-0 z-20 mt-2 w-32 rounded-lg border border-slate-200/70 bg-white/90 p-1 text-xs shadow-lg dark:border-white/10 dark:bg-slate-900/95"
          >
            <button
              v-for="localeItem in locales"
              :key="localeItem.code"
              class="locale-option"
              @click="handleLocaleChange(localeItem.code)"
            >
              <span class="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {{ localeItem.code }}
              </span>
              <span class="text-slate-800 dark:text-slate-100">{{ localeItem.name }}</span>
            </button>
          </div>
        </div>
        <ThemeToggle class="hidden sm:inline-flex" />
        <a
          href="https://github.com/bigchubby666-sudo"
          target="_blank"
          rel="noreferrer"
          class="icon-link"
          aria-label="GitHub"
        >
          <Icon name="mdi:github" class="h-5 w-5" />
          <span class="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/roy-andreson-0435733a6/"
          target="_blank"
          rel="noreferrer"
          class="icon-link"
          aria-label="LinkedIn"
        >
          <Icon name="mdi:linkedin" class="h-5 w-5" />
          <span class="sr-only">LinkedIn</span>
      </a>
      </div>
    </nav>

    <div
      v-if="isOpen"
      v-motion
      :initial="{ opacity: 0, y: -8 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.2 } }"
      class="border-t border-slate-200/60 bg-white/90 px-4 py-4 backdrop-blur dark:border-white/10 dark:bg-slate-950/90 sm:hidden"
    >
      <div class="flex flex-col gap-2">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.hash"
          :to="localePath(link.to)"
          :class="['mobile-link', { 'mobile-link-active': isActiveLink(link.hash) }]"
          @click="isOpen = false"
        >
          {{ t(link.labelKey) }}
        </NuxtLink>
      </div>
      <div class="mt-4 flex items-center gap-2">
        <div class="relative" ref="mobileLocaleWrapper">
          <button
            type="button"
            class="icon-link"
            :aria-expanded="isMobileLocaleOpen"
            aria-label="Change language"
            @click="isMobileLocaleOpen = !isMobileLocaleOpen"
          >
            <Icon name="mdi:translate" class="h-5 w-5" />
          </button>
          <div
            v-if="isMobileLocaleOpen"
            class="absolute right-0 z-20 mt-2 w-32 rounded-lg border border-slate-200/70 bg-white/90 p-1 text-xs shadow-lg dark:border-white/10 dark:bg-slate-900/95"
          >
            <button
              v-for="localeItem in locales"
              :key="localeItem.code"
              class="locale-option"
              @click="handleLocaleChange(localeItem.code, true)"
            >
              <span class="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {{ localeItem.code }}
              </span>
              <span class="text-slate-800 dark:text-slate-100">{{ localeItem.name }}</span>
            </button>
          </div>
        </div>
        <ThemeToggle />
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          class="icon-link"
          aria-label="GitHub"
        >
          <Icon name="mdi:github" class="h-5 w-5" />
          <span class="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-palacio-8766a9216/"
          target="_blank"
          rel="noreferrer"
          class="icon-link"
          aria-label="LinkedIn"
        >
          <Icon name="mdi:linkedin" class="h-5 w-5" />
          <span class="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from '~/components/ui/ThemeToggle.vue'

const { t, locales, setLocale, locale } = useI18n()
const localePath = useLocalePath()

const navLinks = [
  { labelKey: 'nav.about', hash: '#about', to: { path: '/', hash: '#about' } },
  { labelKey: 'nav.employment', hash: '#employment', to: { path: '/', hash: '#employment' } },
  { labelKey: 'nav.education', hash: '#education', to: { path: '/', hash: '#education' } },
  { labelKey: 'nav.projects', hash: '#projects', to: { path: '/', hash: '#projects' } },
  { labelKey: 'nav.contact', hash: '#contact', to: { path: '/', hash: '#contact' } },
]

const isOpen = ref(false)
const isLocaleOpen = ref(false)
const isMobileLocaleOpen = ref(false)
const localeWrapper = ref<HTMLElement | null>(null)
const mobileLocaleWrapper = ref<HTMLElement | null>(null)
const route = useRoute()
const activeHash = ref('')
const sectionIds = navLinks.map((link) => link.hash.replace('#', ''))
let rafId = 0
const isProjectsRoute = computed(() => route.path.includes('/projects'))

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
    isLocaleOpen.value = false
    isMobileLocaleOpen.value = false
  }
)

function updateActiveHash() {
  const offset = 140
  let current = ''
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.getBoundingClientRect().top
    if (top - offset <= 0) current = `#${id}`
  }
  activeHash.value = current || route.hash
}

function onScroll() {
  if (rafId) return
  rafId = window.requestAnimationFrame(() => {
    rafId = 0
    updateActiveHash()
  })
}

function handleLocaleClickOutside(e: MouseEvent) {
  if (localeWrapper.value && !localeWrapper.value.contains(e.target as Node)) {
    isLocaleOpen.value = false
  }
  if (mobileLocaleWrapper.value && !mobileLocaleWrapper.value.contains(e.target as Node)) {
    isMobileLocaleOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleLocaleClickOutside))
onMounted(() => {
  updateActiveHash()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onUnmounted(() => {
  document.removeEventListener('click', handleLocaleClickOutside)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (rafId) window.cancelAnimationFrame(rafId)
})

function handleLocaleChange(code: string, isMobile = false) {
  if (code === locale.value) {
    if (isMobile) {
      isMobileLocaleOpen.value = false
    } else {
      isLocaleOpen.value = false
    }
    return
  }
  setLocale(code as 'en' | 'es')
  if (isMobile) {
    isMobileLocaleOpen.value = false
  } else {
    isLocaleOpen.value = false
  }
}

function isActiveLink(hash: string) {
  if (isProjectsRoute.value) return hash === '#projects'
  return hash === activeHash.value
}

async function goHome() {
  await navigateTo(localePath('/'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.nav-link {
  @apply rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white;
}
.nav-link-active {
  @apply bg-slate-100 text-slate-950 font-semibold dark:bg-white/10 dark:text-white;
}
.icon-link {
  @apply inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white;
}
.mobile-link {
  @apply rounded-md px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white;
}
.mobile-link-active {
  @apply bg-slate-100 text-slate-950 font-semibold dark:bg-white/10 dark:text-white;
}
.locale-option {
  @apply flex w-full items-center justify-between gap-2 rounded-md px-2 py-1 text-left hover:bg-slate-100 dark:hover:bg-slate-800;
}
</style>
