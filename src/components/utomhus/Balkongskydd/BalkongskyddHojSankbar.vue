<template>
  <div>
    <h2>Not fetched from source</h2>
    <BigImage :image="mainImage" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import slowRollImage from "@/assets/images/products/utomhus/balkongskydd/maxi_big.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: slowRollImage,
        alt: "Balkongskydd i väv",
      },
    };
  },
  components: {
    BigImage,
  },
};
</script>
