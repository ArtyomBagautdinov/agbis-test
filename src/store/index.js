import { createStore } from 'vuex'
import posts from '@/store/modules/posts'


const modules = {
  posts
}

export default createStore({
  modules
})
