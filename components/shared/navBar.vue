<script setup>

    import { onMounted } from "vue";
    import { initFlowbite } from "flowbite";
    import { Collapse } from "flowbite";

    onMounted(() => {
        initFlowbite();
    });

    import { reactive } from 'vue';

const items = reactive([
    { id: 1, name: 'Home',router:'',
    menue:[
        {Mname:"Home Item1",router:''},
        {Mname:"Home Item2",router:''},
        {Mname:"Home Item3",router:''}
      ] 
    },
    { id: 2, name: 'Products',router:'',
    menue:[
        {Mname:"Products Item1",router:''},
        {Mname:"Products Item2",router:''},
        {Mname:"Products Item3",router:''}
      ] 
    },
    { id: 3, name: 'Pages',router:'',
    menue:[
        {Mname:"Pages Item1",router:''},
        {Mname:"Pages Item2",router:''},
        {Mname:"Pages Item3",router:''}
      ] 
    },
    { id: 4, name: 'Blog',router:'' },
    { id: 5, name: 'Testomonial',router:'' },
    { id: 6, name: 'Contact',router:'' },
  ]);

</script>
<template>
    <nav class="max-w-screen-xl md:px-20  px-5 flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="/Logo.png" class="h-8 mt-2 flex items-center space-x-3 rtl:space-x-reverse" />
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button class="text-white bg-black hover:text-black hover:bg-white hover:border-black border border-black rounded-lg text-sm p-2">Get started</button>
                <button data-collapse-toggle="navbar-cta" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
                </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8  md:flex-row md:mt-0">
                    <li v-for="item in items" :key="item.id">
                        <button id="dropdownNavbarLink" v-if="item.menue" :data-dropdown-toggle="`${item.name}`" class="flex hover:text-white items-center justify-between w-full p-3 text-gray-900  md:p-0 md:w-auto">
                            {{ item.name }}
                            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div :id="`${item.name}`" v-if="item.menue" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                <li class="block px-4 py-2 hover:bg-gray-100 cursor-pointer" v-for="subitem in item.menue" :key="subitem">{{ subitem.Mname }}</li>
                            </ul>
                        </div>
                        <p v-else class="flex items-center cursor-pointer justify-between w-full p-3 text-gray-900  hover:text-white  md:p-0 md:w-auto">{{ item.name }}</p>
                    </li>
                </ul>
        </div>
    </nav>
</template>