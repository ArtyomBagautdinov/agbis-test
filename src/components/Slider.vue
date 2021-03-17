<template>
  <div>
      <div class="wrapper">
        <div class="carousel" :style="{'margin-left': '-'+ (100*currentIndex)+'%'}">
          <slider-item v-for="val in items" :key="val.id" :itemObject="val"/>
        </div>
      </div>
      
      <div class="flex flex-row justify-center">
        <button @click="prevSlide" class="text-white text-large">prev</button>
        <button @click="nextSlide" class="text-white text-large">next</button>
      </div>
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
      if(this.currentIndex>0) {
        this.currentIndex--;
      }
      console.log(this.currentIndex);
    },
    nextSlide(){
      if(this.items.length -1 > this.currentIndex) {
        this.currentIndex++;
      }
      console.log(this.currentIndex);
    }
  }
}
</script>

<style>

  .wrapper {
    max-width: 200px;
    overflow: hidden;
    margin: 0 auto;
  }

  .carousel {
    display: flex;
    transition: all ease .5s;
  }

</style>