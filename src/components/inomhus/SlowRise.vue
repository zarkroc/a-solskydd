<template>
  <div>
    <h2>Barnsäkra rullgardiner</h2>
    <BigImage :image="mainImage" />
    <h3>Slowrise rullgardin - mjuk upprullning till önskad position</h3>
    <p>
      GSM Rullgardin Slowrise Glöm rullgardiner som oväntat far upp med en smäll
      och skrämmer slag på de som är nära. Dra ner Slowrise en liten bit så
      rullar den upp sig själv - mjukt och fint. Slowrise är den barnsäkra
      rullgardinen som anpassar sig. Den kan steglöst ställas in att stanna där
      du vill, många gillar att "spara" några decimeter. Slowrise anpassar sig
      också till omgivningen. Det finns väldigt många kulörer och mönster att
      välja på! För dig som har barn är Slowrise ett tryggt val. EU har
      föreslagit nya säkerhetskrav för rullgardiner i miljöer där barn vistas
      och Slowrise uppfyller givetvis dessa krav.
    </p>
    <SideImage :image="smallImage1" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import sideImage1 from "@/assets/images/products/inomhus/plisseer/plisseer_small_1.jpg";
import slowRollImage from "@/assets/images/products/inomhus/rullgardin/rull_slowrise.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: slowRollImage,
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
