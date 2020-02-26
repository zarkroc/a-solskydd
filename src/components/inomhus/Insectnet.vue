<template>
  <div>
    <h2>Insäktsnät</h2>
    <p>
      clearview - sveriges mest eleganta myggnätsdörrar och myggnätsfönster
    </p>
    <a href="http://www.clearviewsweden.se/"><SideImage :image="mainImage"/></a>
  </div>
</template>

<script>
import SideImage from "@/components/SideImage";
import clearview from "@/assets/images/products/inomhus/clearview.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: clearview,
        alt: "Clearview logo",
        side: "small",
      },
    };
  },
  components: {
    SideImage,
  },
};
</script>
