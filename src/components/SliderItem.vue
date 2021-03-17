<template>
  <div>
      <div class="w-full mr-20">
          <img :src="itemObject.imgSrc" alt="detailsImg">
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

<style>

/* .width-image {
    width: 200px !important;
} */

</style>