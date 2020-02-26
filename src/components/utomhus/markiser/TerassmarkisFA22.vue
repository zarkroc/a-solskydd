<template>
  <div>
    <h2>Terassmarkiser FA22 & FA24</h2>
    <p></p>
    <BigImage :image="main" />
    <p>
      FA20 markiserna är speciellt utvecklade för den lilla terrassen eller
      balkongen med alla de egenskaper som utmärkt Hunter Douglas Scandinavia's
      markiser genom åren med hög kvalitet och lång hållbarhet. Den nya designen
      på markisens armar tillsammans med Dyneema®-band över knäleder ger en
      dukspänning utöver det vanliga!
    </p>
    <h3>FA22</h3>
    <p>
      FA22 är en öppen markis i kompaktutförande. Detta är instegsmarkisen i vår
      nya 20 serie. FA22 är utrustad med traditionella gavlar och ger mycket
      markis för pengarna.
    </p>
    <h3>FA24</h3>
    <p>
      FA24 är en öppen, kompakt markis i de- signutförande. Markisen är utrustad
      med specialdesignade gavlar som knyter ihop den fyrkantiga formen på
      bärröret med det runda valsröret på ett sätt som ger den ett modernt
      uttryck.
    </p>
    <h3>Manövrering</h3>
    <p>
      Markisen manövreras med utvändig vev som standard. Som tillval finns
      manövering med motor. Vid motordrift går det att komplettera med
      automatiska styrningar, till exempel fjärrkontroll eller sol- och
      vindautomatik.
    </p>
    <h3>Markisstativ</h3>
    <p>
      Markisstativet med detaljer finns som standard i 3 färger: Vitt, Grått och
      Svart med struktur. Med lite längre leveranstid kan man får stativet i
      vilken RAL-färg man vill. Detta för att matcha ihop markisen med husets
      färg.
    </p>
    <h3>Montering</h3>
    <p>Monteras enkelt direkt på vägg eller i tak.</p>
    <h3>Tillval</h3>
    <p>På båda modellerna i serien kan man välja till takprofil.</p>
    <h3>Markisduk</h3>
    <p>
      Du har en rad akryldukar med utomordentlig ljus och väderbeständighet att
      välja mellan. Välj från en bred kollektion med allt från enfärgade till
      randiga vävar.
    </p>
    <SideImage :image="fa22Front" />
    <SideImage :image="fa22Gavel" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/fa22.jpg";
import fa22FrontImage from "@/assets/images/products/utomhus/markis/fa22_front.jpg";
import fa22GavelImage from "@/assets/images/products/utomhus/markis/fa22_gavel.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "Fönstermarkis",
      },
      fa22Front: {
        src: fa22FrontImage,
        alt: "Fönstermarkis DA 22",
        side: "left",
      },
      fa22Gavel: {
        src: fa22GavelImage,
        alt: "Fönstermarkis DA 32",
        side: "left",
      },
    };
  },
  components: {
    BigImage,
    SideImage,
  },
};
</script>
