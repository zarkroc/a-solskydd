<template>
  <section class="about_container">
    <img :src="require( `../assets/icons/${this.icon}.svg`)"/>
  </section>
</template>

<script>
export default {
  name: "Gallery",
  computed: {
    referenceImage() {
      if (!this.selectedImage) {
        return;
      }

      const fileName = this.selectedImage.toLowerCase();

      return require(`../assets/gallery/${fileName}.jpg`);
    },
  },
};
</script>
