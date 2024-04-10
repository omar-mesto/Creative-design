<script setup >

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: t('app_name'),
})

const route = useRoute()
const isFullWidth = computed(() => route.name === 'index' || route.meta.fullWidth)
</script>

<template>
  <div class="bg-primary">
    <div class="container mx-auto ">
      <SharedNavBar/>
      <HomeHeader v-show="useRoute().path=='/'"/>
    </div>
    </div>
    <NuxtPage />
</template>
<style >
.bg-primary{
  background-color: #F9DA69;
}

</style>

