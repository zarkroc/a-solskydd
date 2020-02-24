<template>
  <section>
    <h2>No hole persienn</h2>
    <p>
      Hålen i persiennlamellerna är osynliga vilket blockerar ljusinsläpp.
      Lamellerna täcker nämligen hålen när persiennen är stängd, vilket också
      ger en enhetlig och elegant look.
    </p>
    <BigImage :image="mainImage" />
    <BigImage :image="secondaryImage" />
  </section>
</template>

<script>
import BigImage from "@/components/BigImage";
import mainImgPath from "@/assets/images/products/inomhus/persienner/nohole_01.jpg";
import secondaryImgPath from "@/assets/images/products/inomhus/persienner/nohole_02.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: mainImgPath,
        alt: "Svart trä persienn"
      },
      secondaryImage: {
        src: secondaryImgPath,
        alt: "Röd trä persienn"
      }
    };
  },
  components: {
    BigImage
  }
};
</script>
