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
    <SideImage :image="imageStandard" />
    <SideImage :image="imageMotor" />
    <SideImage :image="imageSidodrag" />
    <SideImage :image="imageMotor" />
    <SideImage :image="imageSidokanal" />
    <SideImage :image="imageVita" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImgPath from "@/assets/images/products/inomhus/rullgardin/logo.gif";
import rullDuo from "@/assets/images/products/inomhus/rullgardin/rull_duo.jpg";
import rullMotor from "@/assets/images/products/inomhus/rullgardin/rull_motor.jpg";
import rullSidodrag from "@/assets/images/products/inomhus/rullgardin/rull_sidodrag.jpg";
import rullSidokanal from "@/assets/images/products/inomhus/rullgardin/rull_sidokanal.jpg";
import rullStandard from "@/assets/images/products/inomhus/rullgardin/rull_standard.jpg";
import rullVita from "@/assets/images/products/inomhus/rullgardin/rull_vitabeslag.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: mainImgPath,
        alt: "50mm persienn"
      },
      imageDuo: {
        src: rullDuo,
        alt: "50mm persienn",
        side: "left"
      },
      imageMotor: {
        src: rullMotor,
        alt: "Rullgardin motor",
        side: "left"
      },
      imageSidodrag: {
        src: rullSidodrag,
        alt: "Rullgarding sidodrag",
        side: "left"
      },
      imageSidokanal: {
        src: rullSidokanal,
        alt: "Rullgardin sidokanal",
        side: "left"
      },
      imageStandard: {
        src: rullStandard,
        alt: "Rullgardin standard",
        side: "left"
      },
      imageVita: {
        src: rullVita,
        alt: "Rullgardin vit",
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
