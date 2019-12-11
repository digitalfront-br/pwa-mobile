<template>
<div>
  <div v-if="listaPostagens" class="uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; repeat: true">
    <div class="uk-inline uk-light">
          <img src="@/assets/img/bg-blog.png" alt="" />
          <div class="uk-position-center uk-text-center">
            <h1 class="uk-h2 uk-text-uppercase uk-text-bold uk-margin-small">Blog</h1>
            <hr class="uk-divider-small uk-margin-remove"/>  
          </div>
      </div>

  </div>
  
  <div class="uk-child-width-1-1" uk-grid>

    <div v-if="!listaPostagens" class="uk-flex uk-flex-center uk-flex-middle" uk-height-viewport="expand: true">
      
    <div class="uk-color-primary"  uk-spinner="ratio: 2"></div>
    </div>

    <div v-for="post in listaPostagens" :key="post.id" uk-scrollspy="cls: uk-animation-fade; repeat: true">
        <div class="uk-card">
            <div class="uk-card-media-top uk-padding uk-padding-remove-vertical post">
              <router-link 
                :to="{ name: 'blog-detail', params: { id: post.id ,slug: post.slug, titulo: post.title.rendered }}" 
                class="uk-link-heading">
                <img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url" alt="" />
              </router-link>
            </div>
            <div class="uk-card-body">
              <h3 class="uk-h4 uk-text-uppercase uk-text-bold">
                <router-link 
                  :to="{ name: 'blog-detail', params: { id: post.id , slug: post.slug, titulo: post.title.rendered }}" 
                  v-html="post.title.rendered" 
                  class="uk-link-heading">
                </router-link>
              </h3>
              <div v-html="post.excerpt.rendered" class="uk-text-justify" > </div>
            </div>
        </div>
    </div>
    
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      listaPostagens: null
    }
  },
  methods:{
    carregaPostagens () {
      fetch('https://cedin.com.br/wp-json/wp/v2/posts?_embed&_fields=id,slug,title,excerpt,_links')
        .then(res => res.json())
        .then(data => {this.listaPostagens = data, console.log(data)})
    }
  },
  mounted(){
    this.carregaPostagens()
  }
}
</script>