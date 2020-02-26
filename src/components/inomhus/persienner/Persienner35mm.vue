<template>
  <section>
    <h2>35-mm PERSIENNEN</h2>
    <p>
      En populär persien med 35-mm lameller, som är gjorda av en speciell
      aluminiumlegering som brännlackeras för att hålla färg och lyster under
      hela användningstiden. Stegsnörena, alltså de som binder ihop lamellerna
      vertikalt, finns i ett stort antal kulörer. Man kan lätt anpassa färgerna
      till möbler och rumsmiljö för att skapa önskad atmosfär. Genom att dölja
      hålen i lamellerna ger de vävda banden med en stängd persienn ett elegant
      utseende. Alla komponenter i pesienn-konstruktionen är tillverkade i
      noggrant utvalda stål- och plastmaterial för bästa möjliga hållbarhet.
    </p>
    <BigImage :image="mainImage" />
  </section>
</template>

<script>
import BigImage from "@/components/BigImage";
import mainImgPath from "@/assets/images/products/inomhus/persienner/35mm.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: mainImgPath,
        alt: "35mm persienn",
      },
    };
  },
  components: {
    BigImage,
  },
};
</script>
