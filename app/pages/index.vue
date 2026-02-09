<template>
  <div class="space-y-16">
    <OverviewSection />

    <AboutMeSection />
    <EmploymentHistorySection />
    <EducationSection />
    <ProjectsSection />

    <ContactMeSection />
  </div>
</template>

<script setup lang="ts">
import AboutMeSection from '~/components/sections/AboutMeSection.vue'
import EmploymentHistorySection from '~/components/sections/EmploymentHistorySection.vue'
import EducationSection from '~/components/sections/EducationSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import ContactMeSection from '~/components/sections/ContactMeSection.vue'
import OverviewSection from '~/components/sections/OverviewSection.vue'
</script>

