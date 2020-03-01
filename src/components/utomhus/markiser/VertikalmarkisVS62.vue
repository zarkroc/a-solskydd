<template>
  <div>
    <h2>Screen VS62 & 72</h2>
    <p>
      VS62 och 72 är en stabil Screenmarkis med smidig design. VS62 lämpar sig
      väl för fönsterapplikationer på bostäder och den större VS72, lämpar sig
      för större applikationer på ex. butiker och kontorsfastigheter. Duken
      löper vertikalt längs utsidan av fönstret i styrskenor av aluminium.
      Screendukar finns i ett stort urval med bland annat flamskyddande
      egenskaper.
    </p>
    <BigImage :image="main" />
    <h3>Manövrering</h3>
    <p>
      VS62 manövreras som standard med vevbox, VS72 med utvändig vev. Som
      tillval finns manövrering med motor. Vid motordrift går det att
      komplettera med automatiska styrningar, till exempel fjärrkontroll eller
      sol- och vindautomatik.
    </p>
    <h3>Montering</h3>
    <p>Monteras enkelt direkt på vägg, fönsterfoder eller i nisch.</p>
    <h3>Markisstativ</h3>
    <p>
      VS62 finns som standard i vitt, grått och svart. VS72 finns i vitt och
      grått. Med lite längre leveranstid kan man få sta tivet i vilken RAL-färg
      man vill. Detta för att matcha markisen med husets färg.
    </p>
    <h3>Markisduk</h3>
    <p>
      Vi har en bred kollektion med högkvalitativa screenvävar. Valet av
      materialets färg, vävteknik och öppenhetsfaktor avgör dukens förmåga att
      filtrera solljuset. Screenkollektionen innehåller vävar med flamskyddande
      egenskaper och är hälso- och kvalitetscertifierade enligt Öko-tex och
      Enduris. Välj från en bred kollektion.
    </p>
    <SideImage :image="vs62" />
    <SideImage :image="vs72" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/vs62.jpg";
import vs62Image from "@/assets/images/products/utomhus/markis/vs62kassett.jpg";
import vs72Image from "@/assets/images/products/utomhus/markis/vs72kassett.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "FA60 terassmarkis",
      },
      vs62: {
        src: vs62Image,
        alt: "vs62 kassett",
        side: "small",
      },
      vs72: {
        src: vs72Image,
        alt: "vs72 kassett",
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
