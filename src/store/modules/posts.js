
const state = {
    postsData : [
        {
            id : 0,
            likes: 45,
            watches: 45,
            comments:45,
            author: 'Блогер Мама Зоя',
            infoSource: 'Yandex Zen',
            title: "Пользоваться химчисткой в Италии выгоднее чем стирать дома.",
            paragraph: "Когда я жила в Крыму услугами химчистки пользовалась крайне редко. Качество услуг было не лучшим и цена не всегда устраивала. Старалась чистить вещи дома и даже пуховики стирала в машинке на ручном режиме, по мере высыхания заворачивала их...",
            imgSrc: require('@/assets/images/posts/post-image-one.svg')
        },
        {
            id : 1,
            likes: 43,
            watches: 125,
            comments:12,
            author: 'Блогер PewDiePie',
            infoSource: 'Mail.ru',
            title: "Сеть брендовых хичисток поднимает рынок в США",
            paragraph: "Элитная химчистка — нестандартный вариант для бизнеса. В Procter & Gamble нечаянно изобрели новый формат химчисток. Теперь это вторая сеть в США и эталон для целой отрасли. Рассказываем, что особенного в химчистках Tide Сеть брендовых химчисток Tide Cleaners ...",
            imgSrc: require('@/assets/images/posts/post-image-two.svg')
        },
        {
            id : 2,
            likes: 41,
            watches: 125,
            comments:12,
            author: 'Блогер Badcomedian',
            infoSource: 'Twitter',
            title: "Пользоваться химчисткой в Италии выгоднее чем стирать дома.",
            paragraph: "Когда я жила в Крыму услугами химчистки пользовалась крайне редко. Качество услуг было не лучшим и цена не всегда устраивала. Старалась чистить вещи дома и даже пуховики стирала в машинке на ручном режиме, по мере высыхания заворачивала их...",
            imgSrc: require('@/assets/images/posts/post-image-three.svg')
        },
    ],
    selectedPost: 0
}


const mutations = {
    SELECT_POST: (state,id) =>{
        state.selectedPost = id;
    }
}


const actions = {
    selectPost({commit}, id){
        commit('SELECT_POST', id);
    },

}
  

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
  