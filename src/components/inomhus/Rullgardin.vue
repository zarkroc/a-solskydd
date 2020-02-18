<template>
  <div>
    <h2>Rullgardiner</h2>
    <BigImage :image="mainImage" />
    <p>
      För komfort och atmosfär. Egentligen är det märkligt att något så trivialt
      som rullgardiner kan ha så stor betydelse för en människas välbefinnande i
      hus och hem runt om i Stockholm. En god natts sömn hjälper oss att ladda
      batterierna och ger oss energi. Men många av oss har svårt att få
      tillräcklig vila när ljuset utifrån tar sovrummet i besittning. Men en
      rullgardin är inte bara effektiv som ljusreglerare, den kan också vara
      mycket dekorativ. Använd fantasin och låt rullgardinerna ingå som en del
      av inredningen! Hitta din personliga stil i vårt breda textilsortiment. Vi
      använder oss av kvalitetstextilier från Almedahls i Kinna till våra
      rullgardiner. För dig som har barn och söker barnsäkra rullgardiner
      rekommenderas modellen Slowrise eftersom den uppfyller EU:s senaste
      säkerhetskrav för rullgardiner.
    </p>
    <SideImage :image="smallImage1" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImgPath from "@/assets/images/products/inomhus/rullgardin/logo.gif";
import sideImage1 from "@/assets/images/products/inomhus/plisseer/plisseer_small_1.jpg";

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
