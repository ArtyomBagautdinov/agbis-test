<template>
  <div>
      <img style="min-width:200px; max-width:200px;" :src="itemObject.imgSrc" alt="detailsImg">
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