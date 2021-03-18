<template>
   <div class="details-gradient h-screen">
      <div class="flex flex-row justify-end p-5">
         <router-link to="/login">
            <img class="pointer w-3 h-3" src="@/assets/icons/icon-close.png" alt="icon">
         </router-link>
      </div>
      <div class="mx-auto container">
         <div class="flex flex-col justify-center items-center">
            <slider :items="sliderItems"/>
            <button class="mt-5 py-3 px-11 registration-button-gradient text-white mb-2 font-bold rounded-md focus:outline-none shadow-custom">Регистрация</button>
         </div>
      </div>
   </div>
</template>

<script>

import Slider from '@/components/Slider.vue'

export default {
      data(){
         return {
            sliderItems: [
               {
                  id: 0,
                  title: "Командная работа",
                  paragraph: "Общайтесь и решайте в онлайне  задачи компании всей командой",
                  imgSrc: require('@/assets/images/details-one.png'),
               },
               {
                  id: 1,
                  title: "Управление и контроль",
                  paragraph: "Контролируй и влияй на любые внутренние процессы компанни с мобильного устройства",
                  imgSrc: require('@/assets/images/details-two.png'),
               },
               {
                  id: 2,
                  title: "Командная работа",
                  paragraph: "Общайтесь и решайте в онлайне  задачи компании всей командой",
                  imgSrc: require('@/assets/images/details-one.png'),
               },
               {
                  id: 3,
                  title: "Управление и контроль",
                  paragraph: "Контролируй и влияй на любые внутренние процессы компанни с мобильного устройства",
                  imgSrc: require('@/assets/images/details-two.png'),
               }
            ]
         }
      },
      components : {
         Slider
      }
}
</script>

