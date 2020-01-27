<template>
  <span>
    <div class="row">
      <v-grid tamanho="12">
        <div class="row valign-wrapper">
          <v-grid class="input-field" :tamanho="conteudo ? '10' : '12'">
            <textarea id="textarea1" class="materialize-textarea" v-model="conteudo"></textarea>
            <label for="textarea1">O que está pensando ?</label>
          </v-grid>

          <div class="col s2" v-if="conteudo">
            <button class="waves-effect waves-light btn">Publicar</button>
          </div>
        </div>
      </v-grid>
    </div>
  </span>
</template>

<script>
export default {
  name: "publicar",
  data() {
    return {
      conteudo: ""
    };
  }
};
</script>
