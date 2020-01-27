<template>
  <site-template>
    <span slot="menu">
      <v-card type="panel" cor="grey lighten-5" elevation="2">
        <div class="row valign-wrapper">
          <v-grid tamanho="3">
            <img :src="user.imagem" alt class="circle responsive-img" />
          </v-grid>
          <v-grid tamanho="9">
            <span class="black-text">{{ user.username || '' }}</span>
          </v-grid>
        </div>
      </v-card>
      <v-card type="panel" cor="grey lighten-5" elevation="2">teste</v-card>
    </span>
    <span slot="conteudo">
      <publicar />
      <conteudo
        perfil="https://materializecss.com/images/yuna.jpg"
        username="Victor Hugo"
        created="25/01/2020 20:13"
      >
        <span slot="post">
          <post-conteudo
            image="https://materializecss.com/images/sample-1.jpg"
            title="Foto Teste"
            descricao="I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively."
          />
        </span>
      </conteudo>
    </span>
  </site-template>
</template>

<script>
import SiteTemplate from "@/views/Templates/SiteTemplate.vue";
import Conteudo from "@/views/Conteudo.vue";
import PostConteudo from "@/views/PostConteudo.vue";
import Publicar from "@/views/Publicar.vue";
export default {
  name: "home",
  components: {
    Conteudo,
    PostConteudo,
    Publicar,
    SiteTemplate
  },
  data() {
    return {
      id_usuario: 0,
      user: '',
      token: null
    }
  },
  methods: {
    loadUser(id_usuario) {
      this.$http.get(`/api/usuario/user/${id_usuario}`)
      .then((res) => {
        this.user = res.data
      })
    }
  },
  mounted() {
    this.token = this.$session.get('token')
    if(this.token) {
        this.id_usuario = this.$session.get('id_usuario')
        this.loadUser(this.id_usuario)
    }
  },
};
</script>

<style>

</style>
