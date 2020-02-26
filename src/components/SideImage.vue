<template>
  <img :class="image.side" :src="image.src" :alt="image.alt" />
</template>
<script>
export default {
  props: {
    image: {
      type: Object,
    },
  },
};
</script>
