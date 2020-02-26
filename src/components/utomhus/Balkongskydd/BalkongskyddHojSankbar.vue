<template>
  <div>
    <h2>MAxi balkongskydd</h2>
    <p>
      Vind och insynsskydd för din balkong
    </p>
    <p>Maxi vindskydd för balkonger ger dig en skönare plats att vistas på.</p>
    <p>
      Lättmonterat och hållbart skydd som testats i månda år. Dras ut till
      valfri längd upp till 2,3 meter! Kan höjas och sänkas efter mellanrum
      mellan överliggare och nederdel på balkongen. Monteras enkelt på de flesta
      balkonger utan håltagning eller specialverktyg.
    </p>
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
