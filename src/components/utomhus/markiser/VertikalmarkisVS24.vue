<template>
  <div>
    <h2>Vertikalmarkis VS24-44</h2>
    <p>
      VS24-44 är en kompakt Vertikalmarkis med smidig design. Den lämpar sig väl
      för fönsterapplikationer på bostäder, butiker och kontorsfastigheter.
      Duken löper vertikalt längs utsidan av fönstret och bottenlisten styrs av
      linor längs dukens båda sidor. Screendukar finns i ett stort urval med
      bland annat flamskyddande egenskaper.
    </p>
    <BigImage :image="main" />
    <h3>Manövrering</h3>
    <p>
      VS 24-44 manövreras som standard med band. Som tillval finns manövrering
      med vev eller motor. Vid motordrift går det att komplettera med
      automatiska styrningar, till exempel fjärrkontroll eller sol- och
      vindautomatik.
    </p>
    <h3>Montering</h3>
    <p>Monteras enkelt direkt på vägg, fönsterfoder eller i nisch.</p>
    <h3>Markisstativ</h3>
    <p>Finns som standard i silver.</p>
    <h3>Markisduk</h3>
    <p>
      Vi har en bred kollektion med högkvalitativa screenvävar. Valet av
      materialets färg, vävteknik och öppenhetsfaktor avgör dukens förmåga att
      filtrera solljuset. Screenkollektionen innehåller vävar med flamskyddande
      egenskaper och är hälso- och kvalitetscertifierade enligt Öko-tex och
      Enduris. Välj från en bred kollektion.
    </p>
    <SideImage :image="utanKasset" />
    <SideImage :image="kasset" />
    <SideImage :image="styrning" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/vertikalmarkis_vs24_44.jpg";
import kassettImage from "@/assets/images/products/utomhus/markis/vertikalmarkis_kassett.jpg";
import styrningImage from "@/assets/images/products/utomhus/markis/vertikalmarkis_styrning.jpg";
import utanKassettImage from "@/assets/images/products/utomhus/markis/vertikalmarkis_utankassett.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "FA60 terassmarkis",
      },
      kasset: {
        src: kassettImage,
        alt: "Vertiaklmarkis med kassett",
        side: "small",
      },
      utanKasset: {
        src: utanKassettImage,
        alt: "vertikalmarkis utan kassett",
        side: "small",
      },
      styrning: {
        src: styrningImage,
        alt: "vertikalmarkis med styrning",
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
