<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('app_name'),
})

const route = useRoute()
const isFullWidth = computed(() => route.name === 'index' || route.meta.fullWidth)
</script>

<template>
  <div>
      <NuxtPage />
  </div>
</template>

