<template>
  <div :class="classCard">
    <slot />
  </div>
</template>

<script>
export default {
  props: ["elevation", "cor", "type"],
  computed: {
    classCard() {
      let type
      if(this.type) {
        type = `card-${this.type}`
      } else {
        type = 'card'
      }
      return `${type} ${this.cor || ""}  z-depth-${this.elevation ||
        ""}`;
    }
  }
};
</script>
