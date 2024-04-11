<template>
    <div class="container px-8 sm:px-0 mx-auto pt-10  max-w-screen-lg">
        <p class="font-bold">Pricing Placns</p>
        <h1 class="text-4xl pt-5">What Our Clientssays.</h1>
        <div class="grid grid-cols-1 gap-8 py-7 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <div class="max-w-sm bg-white border border-gray-200 rounded-3xl shadow" v-for="item in items" :key="item.id">
                <img class="w-full rounded-t-3xl" :src="`${item.src}`" alt="" />
                <div class="rounded-b-2xl" :class="{'bg-black p-5':item.mood!='dark','bg-yellow-200 p-5':item.mood=='dark'}">
                    <div class="flex justify-between text-white py-1 pb-5">
                        <p class="text-sm">By Admin</p>
                        <p class="text-sm">28 Mar 2022</p>
                        <p class="text-sm">2</p>
                    </div>
                    <h5 class="mb-2 tracking-tight text-white">{{ item.name }}</h5>
                    <button href="#" class="inline-flex items-center my-3 px-3 py-2 text-sm font-medium text-center rounded-lg"
                    :class="{'bg-yellow-200 ':item.mood!='dark'}">
                        Learn more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const items = reactive([
    { id: 4, name: 'Five ways that can develop your business website',mood:"light",src:"/blogHome1.png" },
    { id: 5, name: 'Five ways that can develop your business website',mood:"dark",src:"/blogHome2.png" },
    { id: 6, name: 'Five ways that can develop your business website',mood:"light",src:"/blogHome3.png" },
  ]);
</script>

<style lang="scss" scoped>

</style>