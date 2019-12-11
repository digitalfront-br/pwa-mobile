import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    posts: []
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    listPosts: state => state.posts,
  },
  actions: {
    GET_listPosts(state){
      fetch("https://cedin.com.br/wp-json/wp/v2/posts?_embed&_fields=id,title,excerpt,_links").then(({data}) => data.json()).then(res => { 
        state.posts = res
      })
    }
  },
  modules: {}
});
