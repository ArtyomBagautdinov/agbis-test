<template>
   <div v-if="!isLoaded" class="flex flex-col justify-center items-center h-screen  splash-gradient">
    <img src="@/assets/images/a-logo.png" alt="logo">
  </div>
   <div v-else class="splash-gradient">
      <div class="mx-auto container">
         <div class="flex flex-col justify-center items-center  h-screen">
            <img class="mb-5 w-12 h-12" src="@/assets/images/a-logo.png" alt="logo">
            <h1 class="text-lg text-white font-extrabold mb-2">Личный кабинет</h1> 
            <p class="text-xs text-white font-medium text-left w-2/3 mb-5">Если вы уже зарегистрированы   то пройдите авторизацию. Если нет,  то ознакомьтесь с основной информацией о возможностях “личного кабинета” и выполните  простые шаги регистрации.</p>
            <button class="py-3 px-20 login-button-gradient text-white w-2/3 mb-2 font-bold rounded-md focus:outline-none focus:shadow-md">Войти</button>
            <router-link to="/details">
            <span class="font-bold text-white">подробнее</span>
            </router-link>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      data(){
         return {
            isLoaded: false
         }
      },
      mounted(){
         setTimeout(() => {this.isLoaded = true}, 1000);
      }

   }
</script>
