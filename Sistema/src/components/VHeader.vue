<template>
  <div class="navbar-fixed">
    <nav :class="cor">
      <div class="nav-wrapper container">
        <a href="#" class="brand-logo">{{ title }}</a>
        <ul v-if="token" id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link :to="`perfil-usuario/${id_usuario}`">{{ username }}</router-link>
          </li>
          <li>
            <a @click="logout()">Sair</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["title", "perfil", "cor", "token", "username", "id_usuario"],
  methods: {
    logout() {
      if (confirm("Deseja realmente sair?")) {
        this.$session.destroy();
        this.$router.push("/login");
      }
    }
  }
};
</script>
