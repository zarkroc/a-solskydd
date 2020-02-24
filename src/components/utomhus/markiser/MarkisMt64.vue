<template>
  <div>
    <h2>Fönstermarkiser MT64 & MT74</h2>
    <p>
      En stabil markis som lämpar sig för byggnader med höga fönster - allt från
      butiker och kontor till sjukhus och skolor. Duken löper vertikalt längs
      den övre delen av fönstret för att vid ett visst läge fälla ut sig som en
      vanlig markis. Det ger ett mycket bra skydd mot solen, samtidigt som man
      får fri sikt genom fönstret. Dukar finns i ett flertal varianter, till
      exempel ljus- och väderbeständiga och genomsiktliga.
    </p>
    <BigImage :image="main" />
    <h3>Manöverering</h3>
    <p>
      MT64 manövreras som standard med vevbox, MT74 med utvändig vev. Som
      tillval finns manövrering med motor. Vid motordrift går det att
      komplettera med automatiska styrningar, till exempel fjärrkontroll eller
      sol- och vindautomatik.
    </p>
    <h3>Montering</h3>
    <p>
      Monteras enkelt direkt på vägg, fönsterkarm eller i nisch.
    </p>
    <h3>Markisduk</h3>
    <p>
      Du har en rad dukar att välja mellan: Acryl (utomordentlig ljus- och
      väderbeständighet), och Screen (genomsiktlig PVC-belagd glasfiber som
      filtrerar solljuset). Screenkollektionen innehåller vävar med
      flamskyddande egenskaper och är hälso- och kvalitetscertifierade enligt
      Öko-tex och Enduris.
    </p>
    <h3>Markisstativ</h3>
    <p>
      MT64 finns som standard i vitt, grått och svart. MT74 finns i vitt och
      grått. Med lite längre leveranstid kan man få stativet i vilken RAL-färg
      man vill. Detta för att macha markisen med husets färg.
    </p>
    <SideImage :image="mt64Front" />
    <SideImage :image="mt64Kassett" />
    <SideImage :image="mt74Profil" />
    <SideImage :image="mt74Kassett" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/markisolette_01.jpg";
import mt64KassettImage from "@/assets/images/products/utomhus/markis/mt64_kassett.jpg";
import mt64Front from "@/assets/images/products/utomhus/markis/mt64_frontprofil.jpg";
import mt74KassettImage from "@/assets/images/products/utomhus/markis/mt74_kassett.jpg";
import mt74ProfilImage from "@/assets/images/products/utomhus/markis/mt74_frontprofil.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "Fönstermarkis"
      },
      mt64Kassett: {
        src: mt64KassettImage,
        alt: "MT 64 Kassett",
        side: "left"
      },
      mt64Front: {
        src: mt64Front,
        alt: "MT 64 profil",
        side: "left"
      },
      mt74Kassett: {
        src: mt74KassettImage,
        alt: "MT 74 kassett",
        side: "left"
      },
      mt74Profil: {
        src: mt74ProfilImage,
        alt: "MT 74 profil",
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
