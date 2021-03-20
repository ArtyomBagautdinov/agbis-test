<template>
    <div class="flex flex-col w-full justify-center items-center">
        <post-card v-for="val in $_postsData" :key="val.id" :postData="val"/>
        <div class="w-full h-40"></div>
    </div>
</template>

<script>
    import PostCard from '@/components/PostCard.vue';
    import posts from '@/mixins/posts'
    export default {
        mixins : [
            posts
        ],
        components : {
            PostCard
        }
    }
</script>

<style>

</style>