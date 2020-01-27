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
          <h3 class="center-align">Cadastrar-se</h3>
        </div>
        <hr />
        <div class="input-field">
          <i class="material-icons prefix">account_circle</i>
          <input id="user_cadastro" type="text" class="validate" v-model="model.username" />
          <label for="user_cadastro">Username</label>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">email</i>
          <input id="email_cadastro" type="text" class="validate" v-model="model.email" />
          <label for="email_cadastro">E-mail</label>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">lock</i>
          <input id="password_cadastro" type="password" class="validate" v-model="model.password" />
          <label for="password_cadastro" >Senha</label>
        </div>
        <div class="input-field">
          <i class="material-icons prefix">lock</i>
          <input id="confirmation_password" type="password" class="validate" v-model="model.confirmation_password" />
          <label for="confirmation_password">Confirmar Senha</label>
        </div>

        <div class="row valign-wrapper">
          <v-grid tamanho="2">
            <button class="btn waves-effect waves-light orange" @click="register()">Salvar</button>
          </v-grid>
          <v-grid tamanho="9">
            <router-link
              class="btn waves-effect waves-light teal"
              :to="{ name: 'login'}"
            >Já possui cadastro?</router-link>
          </v-grid>
        </div>
      </v-card>
    </span>
  </login-template>
</template>

<script>
import LoginTemplate from "@/views/Templates/LoginTemplate.vue";
export default {
  name: "cadastrar-usuario",
  components: {
    LoginTemplate
  },
  data() {
    return {
      model: {
        username: "",
        email: "",
        password: "",
        confirmation_password: ""
      }
    };
  },
  methods: {
    register() {
      this.$http.post('api/user/register', this.model)
      .then((res) => {
        console.log(res.data)
        if(res.data.status) {
          alert("Cadastrado com sucesso")
          this.$router.push('/login')
        } else if(res.data.emailExists) {
          alert("Este e-mail já existe!")
        }
      })
    }
  }
};
</script>
