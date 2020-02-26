<template>
  <div>
    <h2>Balkongskydd i väv</h2>
    <p>
      Skydda din balkong mot insyn och vind. Vi anpassar och monterar skyddet
      efter dina önskemål.
    </p>
    <BigImage :image="mainImage" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import slowRollImage from "@/assets/images/products/utomhus/balkongskyddvav.jpg";

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
