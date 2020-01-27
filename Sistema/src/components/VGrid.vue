<template>
  <div :class="'col s'+tamanho">
    <slot />
  </div>
</template>

<script>
export default {
  props: ["tamanho"]
};
</script>
