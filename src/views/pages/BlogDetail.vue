<template>
<div>
  <div class="uk-margin-bottom" uk-scrollspy="cls: uk-animation-fade; repeat: true">
    <div class="uk-inline uk-light">
          <img src="@/assets/img/bg-blog.png" alt="" />
          <div class="uk-position-center uk-text-center uk-padding">
            <h1 class="uk-h2 uk-text-uppercase uk-text-bold uk-margin-small">{{ $route.params.titulo }}</h1>
            <hr class="uk-divider-small uk-margin-remove"/>  
          </div>
      </div>

  </div>
  
  <div class="uk-child-width-1-1" uk-grid>

    <div class="uk-flex uk-flex-center uk-flex-middle" uk-height-viewport="expand: true">
      
    <div class="uk-color-primary"  uk-spinner="ratio: 2"></div>
    </div>

    <pre>
      {{ $route.params }}
    </pre>
    
  </div>
</div>
</template>