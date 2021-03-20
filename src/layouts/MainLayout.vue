<template>
    <div class="bg-white h-screen">
        <app-header/>
        <router-view/>
        <tab-bar/>
    </div>
</template>

<script>
    import TabBar from '@/components/layout/TabBar.vue'
    import AppHeader from '@/components/layout/AppHeader.vue'
    export default {
        components: {
            TabBar,
            AppHeader
        }
    }
</script>
