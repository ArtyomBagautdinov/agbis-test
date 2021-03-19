<template>
  <div class="flex flex-col justify-center items-center h-screen  splash-gradient">
    <img src="@/assets/images/a-logo.svg" alt="logo">
  </div>
</template>

<script>
  export default {
    name: 'Splash',
    mounted(){
         setTimeout(() => {this.$router.push('login')}, 2000);
      }
  }
</script>
