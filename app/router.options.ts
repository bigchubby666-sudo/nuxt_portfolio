import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    
    const stripLocale = (path: string) =>
      path.replace(/^\/(en|es)(?=\/|$)/, '').replace(/^\/$/, '')
    if (stripLocale(to.path) === stripLocale(from.path)) return false
    
    if (to.path !== from.path) return { top: 0 }
    return {}
  },
}

