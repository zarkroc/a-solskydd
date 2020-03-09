<template>
  <section class="gallery">
    <p>{{ images }}</p>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Gallery",
  data() {
    return {
      images: {},
      errors: [],
    };
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
      })
      .catch(e => {
        this.errors.push(e.response);
      });
  },
};
</script>
