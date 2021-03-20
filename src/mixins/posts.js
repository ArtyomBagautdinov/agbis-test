import {createNamespacedHelpers} from 'vuex'

const { mapState,mapActions } = createNamespacedHelpers('posts');

const computed = {
  ...mapState({
    $_postsData : 'postsData',
    $_selectedPost: 'selectedPost'
  })
}


const methods = {
    ...mapActions({
      $_selectPost : 'selectPost'
    })
  }

export default {
  computed,
  methods
}
