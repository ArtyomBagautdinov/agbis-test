<template>
  <div class="h-full">
      <div class="overflow-hidden mx-auto my-0 mx-width-300 h-1/2">
        <div class="flex justify-start items-center h-full">
          <slider-item v-for="val in items" :key="val.id" :itemObject="val"/>
        </div>
      </div>
      <!-- <button @click="nextSlide" class="text-white text-large">next</button> -->
      <!-- <button @click="prevSlide" class="text-white text-large">prev</button> -->
  </div>
</template>

<script>

import SliderItem from "@/components/SliderItem.vue"

export default {
  props : {
    items : {
      type: Array,
      required: true
    }
  },
  components: {
    SliderItem
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods : {
    prevSlide(){
      // if(this.currentIndex>0) {
        this.currentIndex--;
      // }
      console.log(this.currentIndex);
    },
    nextSlide(){
      // if(this.items.length < this.currentIndex) {
        this.currentIndex++;
      // }
      console.log(this.currentIndex);
    }
  }
}
</script>

<style>

  .mx-width-300{
    max-width: 300px;
  }
</style>