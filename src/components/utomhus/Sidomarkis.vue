<template>
  <div>
    <h2>Sidomarkis</h2>
    <p>
      SA 50 är en sidomarkis konstruerad för att ge en utdragbar sidoavskärmning
      för att skapa insynskydd eller för att göra din uteplats mer ombonad.
      Produkten lämpar sig väl som komplement till en terrassmarkis och fungerar
      utmärkt på både villor och radhus.
    </p>
    <BigImage :image="main" />
    <h3>Manövrering</h3>
    <p>
      Manövreras genom draghandtag som säkras i motstående vägg- eller
      golvfäste. Väven dras ut ur kassetten där den ligger skyddad när den inte
      används.
    </p>
    <h3>Montering</h3>
    <p>
      SA50 monteras enkelt och mycket snabbt direkt på väggen.
    </p>
    <h3>Profiler</h3>
    <p>
      Kassett-, front- och stolpprofiler är tillverkade av strängpressat
      aluminium.
    </p>
    <h3>Färger</h3>
    <p>
      Alla aluminiumprofiler samt färgmatchade komponenter pulverlackeras.
      Lagerhållna färger är färg 0001 (Vit RAL 9010), färg 0182 (Silver) och
      färg 0914 (Svart)
    </p>
    <h3>Markisduk</h3>
    <p>
      Välj från en bred kollektion med allt från enfärgade till randiga vävar
    </p>
    <SideImage :image="wheels" />
    <SideImage :image="small" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/sidomarkis_01.jpg";
import smallImage from "@/assets/images/products/utomhus/sidomarkis_02.jpg";
import wheelsImage from "@/assets/images/products/utomhus/sidomarkis_03.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "Quartzvärmare",
      },
      wheels: {
        src: wheelsImage,
        alt: "Hjul",
        side: "small",
      },
      small: {
        src: smallImage,
        alt: "Handtag",
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
