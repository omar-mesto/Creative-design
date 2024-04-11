<template>
        <div class="container px-8 sm:px-0 mx-auto pt-10 text-center max-w-screen-lg">
            <p class="font-bold">Pricing Placns</p>
            <h1 class="text-5xl">What Our Clientssays.</h1>
            <div class="grid grid-cols-1 gap-8 py-10 w-full h-full justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div class="w-full max-w-sm border rounded-lg border-black  shadow sm:p-0" :class="{'bg-black text-white':item.mood=='dark'}" v-for="item in items" :key="item.id">
                        <div class="mx-auto h-16 text-center grid justify-center">
                            <h5 class="mb-4 content-center text-xl w-60 font-medium  text-black bg-yellow-200" :class="{'bg-yellow-600 text-white':item.mood=='dark'}">{{ item.name }}</h5>
                        </div>
                        <p class="text-center text-sm px-8">{{ item.description }}</p>
                        <div class="flex items-baseline justify-center py-5">
                            <span class="text-5xl font-extrabold tracking-tight text-yellow-200"><sup v-if="item.price!='free'">$</sup>{{ item.price }}</span>
                            <span class="ms-1 text-xl font-normal text-gray-500" :class="{' text-white':item.mood=='dark'}">/{{ item.time }}</span>
                        </div>
                        <div class="bg-black p-0 h-12 w-full mx-auto text-center grid justify-center" :class="{'bg-yellow-200':item.mood=='dark'}">
                            <h3 class="text-black content-center font-bold" :class="{'text-yellow-200':item.mood!='dark'}">By This</h3>
                        </div>
                        <ul role="list" class="space-y-5 my-7 px-8 pb-2">
                            <li class="flex items-center" v-for="subitem in item.Advantages" :key="subitem.id">
                                <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" /></svg>
                                <span class="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3"
                                :class="{'text-white':item.mood=='dark'}">{{ subitem.name }}</span>
                            </li>   
                        </ul>
                    </div>
                </div>
            </div>
</template>
<script setup>
const items = reactive([
    {
        id: 1,
        name: "BASIC PLAN",
        price:"free",
        time:"week",
        description:"Roofing mbrae change parthriving",
        mood:"light",
        Advantages:[{id:1,name:"32k Partners have worked us."}]
    },
    {
        id: 2,
        name: "BASIC PLAN",
        price:"25.99",
        time:"month",
        mood:"dark",
        description:"Roofing mbrae change parthriving",
        Advantages:[{id:1,name:"32k Partners have worked us."},{id:2,name:"32k Partners have worked us."},{id:3,name:"32k Partners have worked us."}]
    },
    {
        id: 3,
        name: "BASIC PLAN",
        price:"99.99",
        time:"month",
        mood:"light",
        description:"Roofing mbrae change parthriving",
        Advantages:[{id:1,name:"32k Partners have worked us."},{id:2,name:"32k Partners have worked us."},{id:3,name:"32k Partners have worked us."},{id:3,name:"32k Partners have worked us."},{id:3,name:"32k Partners have worked us."}]
    },
]);
</script>
<style lang="scss" scoped></style>