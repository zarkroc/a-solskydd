<template>
  <section class="gallery">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{
        backgroundImage: 'url(' + image + ')',
        width: '300px',
        height: '200px',
      }"
    ></div>
  </section>
</template>

<script>
import axios from "axios";
import VueGallery from "vue-gallery";

export default {
  name: "Gallery",
  data() {
    return {
      images: [],
      errors: [],
      index: null,
    };
  },
  components: {
    gallery: VueGallery,
  },
  created() {
    var apiHost = "";
    if (process.env.NODE_ENV == "production") {
      apiHost = "https://test.perers.org/gallery";
    } else {
      apiHost = "http://localhost:8080/gallery";
    }
    axios
      .get(apiHost, {})
      .then(response => {
        // JSON responses are automatically parsed.
        this.images = response.data;
        this.images.forEach(function(image, index, images) {
          images[index] = `${apiHost}/${image}`;
        });
      })
      .catch(e => {
        this.errors.push(e.response);
      });
  },
};
</script>
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>
