<template>
  <span>
    <header>
      <v-header title="Social Media" cor="cyan darken-4">

      </v-header>
    </header>

    <main>
      <div class="container">
        <div class="row">
          <v-grid tamanho="6">
            <slot name="rigth" />
          </v-grid>
          <v-grid tamanho="6">
            <slot name="left" />
          </v-grid>
        </div>
      </div>
    </main>
  </span>
</template>

<script>
export default {
  name: "LoginTemplate"
};
</script>

<style>
body {
  height: 100vh;
}

main {
  height: 100%;
}
</style>
