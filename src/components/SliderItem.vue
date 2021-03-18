<template>
  <div class="flex flex-col items-center justify-evently">
      <img class="object-cover slider-item-img" :src="itemObject.imgSrc" alt="detailsImg">
      <div class="mt-5 flex flex-col items-center">
          <h2 class="text-lg text-white font-extrabold w-11/12 text-center">{{itemObject.title}}</h2>
          <p class="text-xs text-white font-medium text-center w-11/12">{{itemObject.paragraph}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props : {
        itemObject : {
            type: Object,
            required: true
        }
    },
}
</script>
