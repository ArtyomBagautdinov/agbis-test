<template>
  <div>
      <div class="my-0 mx-auto overflow-hidden max-w-slider">
        <div @touchstart="handleEventStart" @touchend="handleEventEnd" class="flex transition-all duration-500" :style="{'margin-left': '-'+ (100*currentIndex)+'%'}">
          <div v-for="val in items" :key="val.id" class="flex flex-col items-center justify-evently">
              <img class="object-cover slider-item-img" :src="val.imgSrc" alt="detailsImg">
              <div class="mt-5 flex flex-col items-center">
                  <h2 class="text-lg text-white font-extrabold w-11/12 text-center">{{val.title}}</h2>
                  <p class="text-xs text-white font-medium text-center w-11/12">{{val.paragraph}}</p>
              </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center items-center mt-5">
        <div v-for="val in items" :key="val.id" class="w-2 h-2  mx-1 rounded-full" :class="{ 'bg-white': val.id === currentIndex, 'bg-indigo-200': val.id !== currentIndex }"></div>
      </div>
  </div>
</template>

<script>

export default {
  props : {
    items : {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      currentIndex: 0,
      xBegin: null,
      xEnd: null
    }
  },
  methods : {
    prevSlide(){
      if(this.currentIndex>0) {
        this.currentIndex--;
      }
    },
    nextSlide(){
      if(this.items.length -1 > this.currentIndex) {
        this.currentIndex++;
      }
    },
    handleEventStart(e){
      this.xBegin = e.changedTouches[0].screenX;
    },
    handleEventEnd(e){
      this.xEnd = e.changedTouches[0].screenX;
      if(this.xBegin < this.xEnd) this.prevSlide()
      if(this.xBegin > this.xEnd) this.nextSlide()
    }
  }
}
</script>
