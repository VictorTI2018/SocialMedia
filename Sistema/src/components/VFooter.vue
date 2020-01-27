<template>
  <footer :class="'page-footer footer  ' + cor">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">{{ title }}</h5>
          <p class="grey-text text-lighten-4">{{ subtitle }}</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <slot name="link" />
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">{{ created }}</div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["title", "subtitle", "created", "cor"]
};
</script>

<style>

</style>
