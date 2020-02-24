<template>
  <div>
    <h2>Fönstermarkiser DA42 & DA52</h2>
    <p>
      En kraftig markis med fallarmar som är konstruerad för att passa de flesta
      byggnader, till exempel villor, butiker, kontor, skolor och sjukhus. DA42
      och 45 är perfekta att motorisera och därav mycket lämplig för stora
      motoriserade anläggningar. Aluminiumkassett skyddar duken mot regn och
      smuts.
    </p>
    <BigImage :image="main" />
    <h3>Manöverering</h3>
    <p>
      Utvändig eller invänding manövrering med band är standard. Som tillval
      finns utvändig eller invändig manövrering med antingen vev eller motor.
      Det går också att komplettera motorn med automatiska styrningar, till
      exempel fjärrkontroll eller sol- och vindautomatik.
    </p>
    <h3>Montering</h3>
    <p>
      Markiserna monteras enkelt direkt på fönsterfoder, vägg eller i nisch.
      Nischkonsoler som tillval tillåter 45–185 mm justering i djupled.
    </p>
    <h3>Fallarmar</h3>
    <p>
      Armprofiler är tillverkade av strängpressat aluminium och armkomponenter
      av pressgjuten zink. Fallarmarna har justerbar spänning för optimal
      dukspänning. Vindsäkrade fallarmar rekommenderas om markisen kommer att
      utsättas för hård vind.
    </p>
    <h3>Markisduk</h3>
    <p>
      Välj från en bred kollektion med allt från enfärgade till randiga vävar.
    </p>
    <h3>Markisstativ</h3>
    <p>
      Markisstativet med detaljer finns som standard i 3 färger: Vitt, Grått och
      Svart med struktur. Med lite längre leveranstid kan man få stativet i
      vilken RAL-färg man vill. Detta för att macha markisen med husets färg.
    </p>
    <SideImage :image="armfasteDa42" />
    <SideImage :image="armfasteDa45" />
    <SideImage :image="standardProfile" />
    <SideImage :image="designProfile" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/fonstermarkis_42.jpg";
import armfasteDa42 from "@/assets/images/products/utomhus/markis/armfaste_da42.jpg";
import armfasteDa45 from "@/assets/images/products/utomhus/markis/armfaste_da45.jpg";
import designProfileImage from "@/assets/images/products/utomhus/markis/design_profil.jpg";
import standardProfileImage from "@/assets/images/products/utomhus/markis/standard_profil.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "Fönstermarkis"
      },
      armfasteDa42: {
        src: armfasteDa42,
        alt: "Armfäste DA 42",
        side: "left"
      },
      armfasteDa45: {
        src: armfasteDa45,
        alt: "Armfäste DA 45",
        side: "left"
      },
      designProfile: {
        src: designProfileImage,
        alt: "Design profil",
        side: "left"
      },
      standardProfile: {
        src: standardProfileImage,
        alt: "Standard profil",
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
