<template>
  <div>
    <h2>Balkongmarkis</h2>
    <p>
      Förändra balkongen till en skuggig och trivsam uteplats med en
      balkongmarkis, en kompakt fallarmsmarkis speciellt utvecklad för inbyggda
      balkonger. Fallarmar med justerbar fjäderspänning för optimal dukspänning.
      Robusta stödben möjliggör en flexibel montering utan hål i fasaden.
    </p>
    <BigImage :image="main" />
    <h3>Manövrering</h3>
    <p>
      Invändig manövrering med polyesterband, vevbox, vev eller motor. Motorn
      kan kompletteras med automatiska styrningar, t ex fjärrkontroll eller sol-
      och vindautomatik
    </p>
    <h3>Fallarmar</h3>
    <p>Fallarmar med justerbar fjäderspänning för optimal dukspänning.</p>
    <h3>Komponenter</h3>
    <p>
      Valet av korrosionsbeständiga och slitstarka material ger oss möjlighet
      att erbjuda en omfattande garanti. Inget underhåll krävs.
    </p>
    <h3>Montering</h3>
    <p>
      Markisen monteras enkelt med robusta stödben som fästs mellan golv och
      tak, utan håltagning i fasaden.
    </p>
    <h3>Markisduk</h3>
    <p>
      Välj från en bred kollektion med allt från enfärgade och randiga vävar.
    </p>
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import mainImage from "@/assets/images/products/utomhus/markis/balkongmarkis_01.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "Korgmarkis",
      },
    };
  },
  components: {
    BigImage,
  },
};
</script>
