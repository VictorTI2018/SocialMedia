<template>
  <div>
    <header>
      <v-header
        title="Social Media"
        perfil="https://materializecss.com/images/yuna.jpg"
        cor="cyan darken-4"
        :username="username"
        :id_usuario="id_usuario"
        :token="token"
      ></v-header>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <v-grid tamanho="3">
            <slot name="menu" />
          </v-grid>
          <v-grid tamanho="9" style="margin-top: 10px;">
            <slot name="conteudo" />
          </v-grid>
        </div>
      </div>
    </main>
    <v-footer title="Social Media" created="© 2020 Victor Hugo" cor="cyan darken-4" />
  </div>
</template>

<script>
export default {
  name: "SiteTemplate",
  data() {
    return {
      username: null,
      token: null,
      id_usuario: 0
    };
  },
  computed: {},

  mounted() {
    this.token = this.$session.get("token");
    if (this.token) {
      this.username = this.$session.get("username");
      this.id_usuario = this.$session.get("id_usuario");
    }
  }
};
</script>

<style>
</style>
