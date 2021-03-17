<template>
   <div class="details-gradient">
      <div class="mx-auto container">
         <div class="flex flex-col justify-center items-center h-screen">
            <slider :items="sliderItems"/>
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
                  id: 1,
                  title: "Командная работа",
                  paragraph: "Общайтесь и решайте в онлайне  задачи компании всей командой",
                  imgSrc: require('@/assets/images/details-one.png'),
               },
               {
                  id: 2,
                  title: "Управление и контроль",
                  paragraph: "Контролируй и влияй на любые внутренние процессы компанни с мобильного устройства",
                  imgSrc: require('@/assets/images/details-one.png'),
               },
               {
                  id: 3,
                  title: "Командная работа",
                  paragraph: "Общайтесь и решайте в онлайне  задачи компании всей командой",
                  imgSrc: require('@/assets/images/details-one.png'),
               },
               {
                  id: 4,
                  title: "Управление и контроль",
                  paragraph: "Контролируй и влияй на любые внутренние процессы компанни с мобильного устройства",
                  imgSrc: require('@/assets/images/details-one.png'),
               }
            ]
         }
      },
      components : {
         Slider
      }
}
</script>

