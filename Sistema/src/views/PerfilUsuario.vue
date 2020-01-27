<template>
  <site-template>
    <span slot="menu">
      <v-card elevation="2" type="panel">
        <img class="responsive-img" :src="model.imagem" />
      </v-card>
    </span>

    <span slot="conteudo">
      <v-card elevation="2" type="panel">
        <div class="card-title">
          <h3 class="center-align">Perfil</h3>
        </div>
        <hr />
        <div class="input-field">
          <i class="material-icons prefix">account_circle</i>
          <input
            id="user_cadastro"
            type="text"
            class="validate"
            v-model="model.username"
            placeholder="Username..."
          />
        </div>
        <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input
            id="email_cadastro"
            type="text"
            class="validate"
            v-model="model.email"
            placeholder="Email..."
          />
        </div>
        <div class="file-field input-field">
          <div class="btn blue">
            <span>Imagem</span>
            <input type="file" v-on:change="uploadImage" />
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" />
          </div>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">lock</i>
          <input id="password_cadastro" type="password" class="validate" v-model="model.password" />
          <label for="password_cadastro">Senha</label>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">lock</i>
          <input
            id="confirmation_password"
            type="password"
            class="validate"
            v-model="model.confirmation_password"
          />
          <label for="confirmation_password">Confirmar Senha</label>
        </div>

        <div class="row valign-wrapper">
          <v-grid tamanho="3">
            <button class="btn waves-effect waves-light green" @click="perfil()">Atualizar</button>
          </v-grid>
        </div>
      </v-card>
    </span>
  </site-template>
</template>

<script>
import SiteTemplate from "@/views/Templates/SiteTemplate.vue";
export default {
  name: "perfil-usuario",
  components: {
    SiteTemplate
  },
  data() {
    return {
      model: {
        username: "",
        email: "",
        password: "",
        confirmation_password: "",
        imagem: "",
        id_usuario: 0
      }
    };
  },
  methods: {
    perfil() {
      this.$http
        .put(`/api/usuario/perfil/${this.id_usuario}`, this.model)
        .then(res => {
          console.log(res.data);
          this.loadDados(this.id_usuario);
          alert(`Perfil ${this.model.username} atualizada com sucesso!`);
        });
    },
    loadDados(id_usuario) {
      this.$http.get(`/api/usuario/user/${id_usuario}`).then(res => {
        this.model = res.data;
      });
    },
    uploadImage(e) {
      let file = e.target.files || e.dataTransfer.files;
      if (!file.length) return;

      let reader = new FileReader();
      reader.onloadend = (e) => {
        this.model.imagem = e.target.result;
      };

      reader.readAsDataURL(file[0]);
      console.log(this.model.imagem)
    }
  },
  mounted() {
    this.id_usuario = this.$route.params.id || 0;
    if (this.id_usuario > 0) {
      this.loadDados(this.id_usuario);
    }
  }
};
</script>
