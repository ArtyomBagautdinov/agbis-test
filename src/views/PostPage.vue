<template>
    <div class="flex flex-col w-full rounded-xl  px-2 py-2">
        <img :src="postData.imgSrc" alt="postImage">
        <h2 class="font-bold text-gray-800 pt-2">{{postData.title}}</h2>
        <p class="text-sm font-medium text-gray-500 pt-3">{{postData.fullParagraph}}</p>
        <div class="mt-4 flex flex-col">
            <span class="text-sm font-medium text-gray-500">Источник: {{postData.infoSource}}</span>
            <span class="text-sm font-medium text-gray-500">Автор: {{postData.author}}</span>
        </div>
        <div class="flex flex-row justify-between pt-3 mt-3 mb-60">
            <div class="flex flex-row ">
                <div class="flex flex-row justify-between items-center cursor-pointer">
                    <img class="w-5 h-5" src="@/assets/icons/post/watches.svg" alt="watches">
                    <span class="font-medium text-sm text-gray-300 ml-1">{{postData.watches}}</span>
                </div>
                <div class="flex flex-row justify-between items-center ml-2 cursor-pointer">
                    <img class="w-5 h-5" src="@/assets/icons/post/likes.svg" alt="watches">
                    <span class="font-medium text-sm text-gray-300 ml-1">{{postData.likes}}</span>
                </div>
            </div>
            <div class="flex flex-row justify-between items-center mx-2 cursor-pointer">
                <span class="font-medium text-sm text-gray-300 ml-1">комментарии ({{postData.comments}})</span>
            </div>
        </div>
  </div>
</template>

<script>
    import posts from '@/mixins/posts'
    export default {
        mixins : [
            posts
        ],
        data(){
            return {
                postData: {
                    imgSrc: null,
                    title: null,
                    fullParagraph:null,
                    comments: null,
                    likes: null,
                    watches: null,
                    infoSource: null,
                    author: null
                }
            }
        },
        beforeMount(){
            this.postData = this.$_postsData.find(cur=> cur.id === this.$_selectedPost);
        }
    }
</script>

<style>

</style>