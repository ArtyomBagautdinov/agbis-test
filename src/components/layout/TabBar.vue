<template>
<div>
    <div @touchstart="handleEventStart" @touchend="handleEventEnd" class="w-full z-10 bg-white fixed bottom-0 transition-all duration-500" :class="{'h-24': !isOpen, 'h-4/5': isOpen}">
        <img class="w-full relative" style="top: -23px;" src="@/assets/images/tab-border.svg" alt="border">
        <div class="flex flex-col justify-center items-center transition-all duration-100">
            <div v-for="i in 20" :key="i">
                <span>Content</span>
            </div>
        </div>
    </div>
    <div class="w-full z-20 fixed bottom-0 h-20 bg-white  text-black flex flex-row justify-around items-center px-2">
        <div v-for="val in tabBarItems" :key="val.id" class="flex flex-col items-center justify-center cursor-pointer">
            <img class="h-7 w-7 " :src="val.img" :alt="val.name">
            <span class="text-xs tab-bar-color font-medium">{{val.name}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "TabBar",
    data(){
        return {
            isOpen: false,
            yBegin : null,
            yEnd : null,
            tabBarItems: [
                {
                    id:0,
                    img: require('@/assets/icons/icon-news.svg'),
                    name: 'Новости'
                },
                {
                    id:1,
                    img: require('@/assets/icons/icon-notifications.svg'),
                    name: 'Уведомления'
                },
                {
                    id:2,
                    img: require('@/assets/icons/icon-messages.svg'),
                    name: 'Сообщения'
                },
                {
                    id:3,
                    img: require('@/assets/icons/icon-user.svg'),
                    name: 'Профиль'
                }
            ]
        }
    },
    methods: {
        handleEventStart(e){
            e.preventDefault();
            this.yBegin = e.changedTouches[0].screenY;
        },
        handleEventEnd(e){
            e.preventDefault();
            this.yEnd = e.changedTouches[0].screenY;
            if(this.yBegin < this.yEnd) this.isOpen = false;
            if(this.yBegin > this.yEnd) this.isOpen = true;
        }
    }
}
</script>


<!-- <div class="w-1/3 p-2 flex flex-row justify-end items-center">
    <img src="@/assets/images/tables.svg" alt="">
</div>
<div class="flex flex-col w-2/3">
    <span class="font-bold swipe-bar-color">Смарт таблицы</span>
    <span class="font-medium swipe-bar-color text-xs">В данном сервисе представлены инструменты для мониторинга эффективности вашего бизнеса</span>
</div> -->