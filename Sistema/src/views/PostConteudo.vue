<template>
  <span>
    <div class="card-image">
      <img :src="image" />
      <span class="card-title" v-if="title">{{ title }}</span>
    </div>
    <div class="card-content" v-if="descricao">
      <p>
        {{ descricao }}
      </p>
    </div>
  </span>
</template>

<script>
export default {
  props: ['image', 'title', 'descricao']
}
</script>
