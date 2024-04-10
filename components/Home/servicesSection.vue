<template>
    <div class="container mx-auto pt-10 text-center max-w-screen-lg">
        <p class="font-bold">OUR SERVICES</p>
        <h1 class="text-5xl">services we offer</h1>
        <div class="grid grid-cols-1 gap-8 py-10 justify-items-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col w-80 hover:cursor-pointer items-center bg-white border border-yellow-300 hover:bg-yellow-200 shadow md:flex-row md:max-w-sm"
            v-for="item in items" :key="item.id">
                <img class="object-cover md:h-auto" :src="`${item.src}`" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
                    <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const items = reactive([
    { id: 4, name: 'Creative Design',description:'Here are the biggest.',src:"/services.png" },
    { id: 5, name: 'Creative Design',description:'Here are the biggest.',src:"/services.png" },
    { id: 6, name: 'Creative Design',description:'Here are the biggest.',src:"/services.png" },
    { id: 4, name: 'Creative Design',description:'Here are the biggest.',src:"/services.png" },
    { id: 5, name: 'Creative Design',description:'Here are the biggest.',src:"/services.png" },
    { id: 6, name: 'Creative Design',description:'Here are the biggest.',src:"/services.png" }
  ]);
</script>
<style lang="scss" scoped>

</style>