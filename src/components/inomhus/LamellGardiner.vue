<template>
  <div>
    <h2>Lamellgardiner</h2>
    <SideImage :image="smallImage1" />
    <p>
      Allt populärare - både i hem- och kontorsmiljö. Lamellgardinen är en
      elegant inredningsdetalj med många funktioner. Används som solskydd,
      rumsavskiljare, i kontorsinredningar, samlingslokaler och på inglasade
      balkonger. Smidig lösning för stora fönsterytor. Ge oss dina önskemål så
      skräddarsyr vi efter dina specifika mått, även för snedtak. Välj mellan
      olika modeller, strukturer och färger i vårt stora sortiment av väv. Vi
      använder oss av kvalitets-textiler från det svenska väveriet Almedals, i
      Kinna.
    </p>
    <BigImage :image="mainImage" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImgPath from "@/assets/images/products/inomhus/lamellgardiner/lammellbilder.jpg";
import sideImage1 from "@/assets/images/products/inomhus/lamellgardiner/lamellgardiner.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: mainImgPath,
        alt: "50mm persienn"
      },
      smallImage1: {
        src: sideImage1,
        alt: "50mm persienn",
        side: "left"
      }
    };
  },
  components: {
    BigImage,
    SideImage
  }
};
</script>
