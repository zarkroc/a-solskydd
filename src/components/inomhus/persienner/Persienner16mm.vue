<template>
  <section class="product-container">
    <h2>16mm Persienn</h2>
    <p>
      16mm persiennen &auml;r framtagen f&ouml;r montering i f&ouml;nster
      d&auml;r luftspalten&nbsp;mellan glasen &auml;r mindre &auml;n normalt. I
      vissa fall kan persiennen &auml;ven monteras i spr&ouml;jsade f&ouml;nster
    </p>
    <BigImage :image="image" />
  </section>
</template>

<script>
import BigImage from "@/components/BigImage";
import imgPath from "@/assets/images/products/inomhus/persienner/16mm.jpg";

export default {
  data() {
    return {
      image: {
        src: imgPath,
        alt: "16mm persienn"
      }
    };
  },
  components: {
    BigImage
  }
};
</script>
