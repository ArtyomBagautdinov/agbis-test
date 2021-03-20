<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
  import EmptyLayout from '@/layouts/EmptyLayout.vue';
  import MainLayout from '@/layouts/MainLayout.vue';

  export default {
    components: {
      EmptyLayout,
      MainLayout
    },
    computed: {
      layout(){
        return this.$route.meta.layout;
      }
    }
  }

</script>

<style>
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
</style>

        MainLayout