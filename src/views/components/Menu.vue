<template>
  <div id="mobile-menu" uk-offcanvas="overlay: true">
    <div class="uk-flex uk-flex-column uk-text-center uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <ul  class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical uk-nav-parent-icon" uk-nav="">
        <li v-for="item in menuLinks" v-bind:key="item.id">
          <router-link  :to="item.slug" class="uk-text-uppercase uk-text-bold">{{ item.link }}</router-link>
        </li>
      </ul>
      <div>
        <div class="uk-grid-small uk-child-width-auto uk-flex-inline uk-grid" uk-grid="">
          <div class="uk-first-column">
            <a class="uk-icon-button uk-icon" href="#" uk-icon="icon: facebook"></a>
          </div>
          <div>
            <a class="uk-icon-button uk-icon" href="#" uk-icon="icon: twitter"></a>
          </div>
          <div>
            <a class="uk-icon-button uk-icon" href="#" uk-icon="icon: mail"></a>
          </div>
          <div>
            <a class="uk-icon-button uk-icon" href="#" uk-icon="icon: receiver"></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
      menuLinks: [
        {
          "id": 1,
        "link": "Home",
        "slug": "/",
        "component": "Home.vue"
      },
      {
        "id": 2,
        "link": "Institucional",
        "slug": "/institucional",
        "component": "Institucional.vue"
      },
      {
        "id": 3,
        "link": "Cursos",
        "slug": "/cursos",
        "component": "Cursos.vue"
      },
      {
        "id": 4,
        "link": "Centro de Pesquisa",
        "slug": "/centro-pesquisa",
        "component": "CentroPesquisa.vue"
      },
      {
        "id": 5,
        "link": "Blog",
        "slug": "/blog",
        "component": "Blog.vue"
      },
      {
        "id": 6,
        "link": "Contato",
        "slug": "/contato",
        "component": "Contato.vue"
      },
      {
        "id": 7,
        "link": "Area do Aluno",
        "slug": "/area-aluno",
        "component": "AreaAluno.vue"
      },
    ]
    }
  },
  mounted(){
    console.log("links", this.menuLinks);
  }
}
</script>
