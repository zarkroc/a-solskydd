<template>
  <div>
    <h2>Maxi balkongskydd</h2>
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
    <h3>Maxi Balkongskydd Skönare komfort på din balkong!</h3>
    <p>
      Vind- och insynsskydd för din balkong. Lättmonterat - Du behöver inte
      borra eller använda specialverktyg. Passar de flesta balkongtyper. Väven
      fjäderbelastad - Alltid sträckt! Infällbart i kassett = lång hållbarhet.
      Flyttar du till annan balkong är det lätt att ta med skyddet dit. Fakta
      Maxi Balkongskydd: Maxlängd 2,3 meter, utdragbar och ställbar utmed sin
      längd. Höjd 60 cm. Skyddet går att höja och sänka för att täta mellan
      räcke och överliggare. Fjäderspänd väv i 100% acryl, rötsäker, tvättbar,
      ljusäkta och impregnerad. Finns som standard i Flera färger och som
      special i ett 100 tal färger! Stativ och kassett i anodiserad rostsäker
      aluminium. Fäste i gjutet aluminium spänns runt räcket (kan även skruvas i
      träräcken). Har tillverkats och utvecklats sedan 1970-talet. Hörnstolpe
      medföljer leveransen för att göra det enkelt att leda runt vinklade
      balkonger. På raka balkonger används stolpen för att staga upp skyddet.
      Utdragslängd är max 2,3 meter, och inom denna kan Du stanna var Du vill.
      MAXI är dessutom höj och sänkbart för att anpassas till olika räcken.
      Bruksanvisning medföljer. Med flera hörnstag kan MAXI även monteras på
      rundade balkonger. Normalt monteras MAXI alltid på utsidan av balkongen
      för att utrymme på balkongen inte skall förloras.
    </p>
    <SideImage :image="mediumBeige" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import slowRollImage from "@/assets/images/products/utomhus/balkongskydd/maxi_big.jpg";
import mediumBeigeImage from "@/assets/images/products/utomhus/balkongskydd/medium_beige-maxi.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: slowRollImage,
        alt: "Balkongskydd i väv"
      },
      mediumBeige: {
        src: mediumBeigeImage,
        alt: "Balkongskydd medium beige",
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
