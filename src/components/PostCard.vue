<template>
  <div @click="goToPostPage(postData.id)" class="flex flex-col w-11/12 bg-white shadow-lg rounded-xl mt-1 mb-2 px-2 py-2 cursor-pointer">
      <img :src="postData.imgSrc" alt="postImage">
      <h2 class="font-bold text-gray-800 pt-2">{{postData.title}}</h2>
      <p class="text-sm font-medium text-gray-500 pt-3">{{postData.paragraph}}</p>
      <div class="flex flex-row justify-start pt-3">
          <div class="flex flex-row justify-between items-center cursor-pointer">
              <img class="w-5 h-5" src="@/assets/icons/post/watches.svg" alt="watches">
              <span class="font-medium text-sm text-gray-300 ml-1">{{postData.watches}}</span>
          </div>
           <div class="flex flex-row justify-between items-center ml-2 cursor-pointer">
              <img class="w-5 h-5" src="@/assets/icons/post/likes.svg" alt="watches">
              <span class="font-medium text-sm text-gray-300 ml-1">{{postData.likes}}</span>
          </div>
           <div class="flex flex-row justify-between items-center mx-2 cursor-pointer">
              <img class="w-5 h-5" src="@/assets/icons/post/comments.svg" alt="watches">
              <span class="font-medium text-sm text-gray-300 ml-1">{{postData.comments}}</span>
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
        props : {
            postData : {
                type: Object,
                required:true
            }
        },
        methods : {
            goToPostPage(id){
                this.$_selectPost(id);
                this.$router.push('/postPage')
            }
        }
    }
</script>

<style>

</style>