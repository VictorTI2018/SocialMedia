<template>
  <span>
    <div class="row">
      <v-grid tamanho="12">
        <v-grid class="input-field" tamanho="12">
          <input id="tiulo" type="text" class="validate" v-model="conteudo.titulo" />
          <label for="tiulo">Titulo</label>
        </v-grid>
        <v-grid class="input-field" tamanho="12" v-if="conteudo.titulo">
          <textarea id="textarea1" class="materialize-textarea" v-model="conteudo.texto"></textarea>
          <label for="textarea1">O que está pensando ?</label>
        </v-grid>
        <v-grid class="input-field" tamanho="12" v-if="conteudo.texto">
          <input id="link" type="text" class="validate" v-model="conteudo.link" />
          <label for="link">Link</label>
        </v-grid>
        <v-grid class="input-field" tamanho="12" v-if="conteudo.link">
          <input id="imagem" type="text" class="validate" v-model="conteudo.Imagem" />
          <label for="imagem">Imagem</label>
        </v-grid>
        <v-grid class="col s2 offset-s10" v-if="conteudo.titulo">
          <button class="waves-effect waves-light btn">Publicar</button>
        </v-grid>
      </v-grid>
    </div>
  </span>
</template>

<script>
export default {
  name: "publicar",
  data() {
    return {
      conteudo: {
        titulo: "",
        texto: "",
        link: "",
        imagem: ""
      }
    };
  }
};
</script>
