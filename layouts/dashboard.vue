<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('app_name'),
})

const sidebar = useSidebar()
</script>

<template>
  <div class="">
    <NuxtPage />
  </div>
</template>
<style>
</style>
