<template>
  <div>
    <h2>Duette</h2>
    <a href="http://www.duettegardiner.se/"
      ><SideImage :image="smallImage1"
    /></a>
    <div class="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HSRhtiZuius"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import SideImage from "@/components/SideImage";
import sideImage1 from "@/assets/images/products/inomhus/duetter/duette.jpg";

export default {
  data() {
    return {
      smallImage1: {
        src: sideImage1,
        alt: "50mm persienn",
        side: "left"
      }
    };
  },
  components: {
    SideImage
  }
};
</script>
