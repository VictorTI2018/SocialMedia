<template>
  <v-card elevation="2">
    <div class="card-content">
      <div class="row valign-wrapper">
        <v-grid tamanho="1">
          <img :src="perfil" alt class="circle responsive-img" />
        </v-grid>

        <v-grid tamanho="11">
          <strong>{{ username }}</strong> -
          <small>{{ created}}</small>
        </v-grid>
      </div>
        <slot name="post" />
    </div>
    <div class="card-action">
      <p>
        <i class="material-icons">favorite_border</i>
        <i class="material-icons">insert_comment</i>
      </p>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["perfil", "username", "created"]
};
</script>
