<template>
  <login-template>
    <span slot="rigth">
      <v-card elevation="2" type="panel">
        <img
          class="responsive-img"
          src="../assets/login.png"
        />
      </v-card>
    </span>

    <span slot="left">
      <v-card elevation="2" type="panel">
        <div class="card-title">
          <h3 class="center-align">Login</h3>
        </div>
        <hr />
        <div class="input-field">
          <i class="material-icons prefix">account_circle</i>
          <input id="email" type="text" class="validate" v-model="model.email" />
          <label for="email">E-mail</label>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">lock</i>
          <input id="senha" type="password" class="validate" v-model="model.password" />
          <label for="senha">Senha</label>
        </div>

        <div class="row valign-wrapper">
          <v-grid tamanho="2">
            <button class="btn waves-effect waves-light blue" @click="login()">Logar</button>
          </v-grid>
          <v-grid tamanho="9">
            <router-link
              class="btn waves-effect waves-light teal"
              :to="{ name: 'cadastrar-usuario'}"
            >Cadastrar-se</router-link>
          </v-grid>
        </div>
      </v-card>
    </span>
  </login-template>
</template>

<script>
import LoginTemplate from "@/views/Templates/LoginTemplate.vue";
export default {
  name: "login",
  components: {
    LoginTemplate
  },
  data() {
    return {
      model: {
        email: "",
        password: ""
      },
      error: []
    };
  },
  methods: {
    login() {
      this.$http
        .post("/api/login", this.model)
        .then(res => {
          console.log(res);
          if (res.data.status) {
            const token = res.data.token;
            const user = res.data.user;
            if (token && user) {
              this.$session.start();
              this.$session.set("token", token);
              this.$session.set("user", user);
              this.$session.set("username", user.username);
              this.$session.set("id_usuario", user.id_usuario);
              alert("Logado com sucesso");
              this.$router.replace("/");
            }
          } else if (res.data.status === false) {
            alert(res.data.mensagem);
          }
        })
        .catch(err => {
          alert("Erro! Por favor tente novamente em alguns segundos");
        });
    }
  }
};
</script>
