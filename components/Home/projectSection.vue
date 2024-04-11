<template>
    <div class="bg-white">
        <div class="container  mx-auto pt-10 text-center max-w-screen-lg">
            <p class="font-bold">Workds</p>
            <h1 class="text-5xl">Our Best Projects</h1>
            <div class="grid grid-cols-1 gap-8 py-10 w-full h-full justify-items-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="flex flex-col items-center md:flex-row w-80  md:max-w-sm rounded-lg" v-for="item in items" :key="item.id">
                    <img class="object-cover md:h-auto " :src="`${item.image}`" alt="">
                    <div class="w-80 h-96 content-start hover:opacity-100 opacity-0 transition-opacity hover:cursor-pointer grid absolute" dir="rtl">
                        <div class="w-60 bg-yellow-300 h-80 opacity-75 absolute">
                            <div class="text-left p-2" dir="ltr">
                                <img :src="`${item.hoverIcon}`"/>
                                <div class="text-center">
                                    <h2 class="py-5 font-bold" >{{ item.name }}</h2>
                                    <p class="text-sm">{{ item.description }}</p>
                                    <button class="text-white my-5 bg-black  hover:text-black hover:bg-white hover:border-black border border-black text-sm w-44 p-2">
                                        <div class="flex">
                                            <div>See Full Project</div>
                                            <img class="" src="/buttonIcon.png"/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const items = reactive([
    { id: 4, name: 'Web Development',description:'We offer our customer prerty into to protection of liability to the fint to a in brack to larong into the head infor the their.',image:"/projectHome3.png",hoverIcon:"/ProjectIcon.png" },
    { id: 5, name: 'Web Development',description:'We offer our customer prerty into to protection of liability to the fint to a in brack to larong into the head infor the their.',image:"/projectHome2.png",hoverIcon:"/ProjectIcon.png" },
    { id: 6, name: 'Web Development',description:'We offer our customer prerty into to protection of liability to the fint to a in brack to larong into the head infor the their.',image:"/projectHome1.png",hoverIcon:"/ProjectIcon.png" },
  ]);
</script>
<style lang="scss" scoped>
</style>