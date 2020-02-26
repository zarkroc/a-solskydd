<template>
  <section>
    <h2>Träpersiener</h2>
    <p>
      Ett exklusivt insynsskydd, tillverkat av Scandinavian Designer Blinds
      (SDB) på Åland. Deras persienner finns installerade över hela världen och
      är tillverkade av antingen nordiska eller odlade exotiska träslag.
      Persiennerna avpassas exakt för varje design, uppdrag och placering. SDB
      inbjuder gärna inredningsdesigners att experimentera med funktion, färg
      och form för att skapa något mer än bara ett solskydd. En träpersienn från
      SDB är en inredningsdetalj och fönsterutsmyckning av högsta kvalité.
    </p>
    <BigImage :image="mainImage" />
  </section>
</template>

<script>
import BigImage from "@/components/BigImage";
import mainImgPath from "@/assets/images/products/inomhus/persienner/wood.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: mainImgPath,
        alt: "50mm persienn",
      },
    };
  },
  components: {
    BigImage,
  },
};
</script>
