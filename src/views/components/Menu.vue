<template>
  <div id="mobile-menu" uk-offcanvas="overlay: true">
    <div class="uk-flex uk-flex-column uk-text-center uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical uk-nav-parent-icon" uk-nav="">
        <li class="uk-active"><router-link to="/" element="a">Item ativo</router-link></li>
        <li><router-link to="/" element="a">Item</router-link></li>
        <li><router-link to="/" element="a">Item novo</router-link></li>
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

