<template>
   <div class="splash-gradient">
      <div class="mx-auto container">
         <div class="flex flex-col justify-center items-center  h-screen">
            <img class="mb-5 w-12 h-12" src="@/assets/images/a-logo.png" alt="logo">
            <h1 class="text-lg text-white font-extrabold mb-2">Личный кабинет</h1> 
            <p class="text-xs text-white font-medium text-left w-2/3 mb-5">Если вы уже зарегистрированы то пройдите авторизацию. Если нет,  то ознакомьтесь с основной информацией о возможностях “личного кабинета” и выполните  простые шаги регистрации.</p>
             <router-link to="/posts" class="mb-2">
               <button class="py-3 px-20 login-button-gradient text-white  font-bold rounded-md focus:outline-none focus:shadow-md">Войти</button>
            </router-link>
            <router-link to="/details">
               <span class="font-bold text-white">подробнее</span>
            </router-link>
         </div>
      </div>
   </div>
</template>

<script>
   export default {

   }
</script>
