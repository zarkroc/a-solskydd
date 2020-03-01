<template>
  <div>
    <h2>Fasadpersienn</h2>
    <p>
      Fasadpersiennen President ger ett effektivt skydd mot solinstrålning -
      lamellerna avskärmar upp till 92 procent av solvärmen. Det skapar bästa
      möjliga förutsättningar för ett behagligt inomhusklimat i till exempel
      kontor, sjukhus och skolor. President går att få i flera färger – det gör
      det enkelt att hitta något som passar till just din fasad. Lameller finns
      i två bredder: 50 och 80 mm.
    </p>
    <BigImage :image="main" />
    <h3>Lameller</h3>
    <p>
      Lamellerna är tillverkade av speciallegerat brännlackerat aluminium.
      Bredderna är 50 eller 80 mm.
    </p>
    <h3>Manövrering</h3>
    <p>
      Upp- och nedhissning samt skevning av lamellerna sker med invändig vev som
      standard. Som tillval finns manövrering med lina eller motor (såväl
      invändigt som utvändigt) samt utvändig vev. Vid motorisering går det att
      komplettera med till exempel fjärrkontroll eller sol- och vindautomatik.
    </p>
    <h3>Montering</h3>
    <p>
      President monteras enkelt på vägg eller under tak. Går att få med
      lättmonterad och frihängande kassett, som monteras i moduler där hela
      persiennen hängs på sidostyrningskenorna.
    </p>
    <h3>Textilier</h3>
    <p>Stegsnören och hissband är tillverkade av 100% polyester.</p>
    <SideImage :image="utsida" />
    <SideImage :image="frihangande" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/fasadpersienn_01.jpg";
import utsidaKarm from "@/assets/images/products/utomhus/markis/fasadpersienn_utsidakarm.jpg";
import frihangandeImage from "@/assets/images/products/utomhus/markis/fasadpersienn_frihangande.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "Fasadpersienn",
      },
      utsida: {
        src: utsidaKarm,
        alt: "President utsida karm",
        side: "small",
      },
      frihangande: {
        src: frihangandeImage,
        alt: "President frihängande",
        side: "small",
      },
    };
  },
  components: {
    BigImage,
    SideImage,
  },
};
</script>
