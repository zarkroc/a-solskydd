<template>
  <div>
    <h2>Fönstermarkiser DA22 & DA32</h2>
    <p>
      DA22 och DA32 är moderna, kompakta och stilrena markiser som passar de
      flesta byggnader. DA32 är kompletterad med en elegant aluminiumkassett som
      skyddar markisduken mot regn och smuts. Fallarmarna har justerbar
      fjäderspänning för rätt dukspänning. Invändig eller utvändig manövrering
      med polyesterband och som tillval kan markisen motoriseras.
    </p>
    <BigImage :image="main" />
    <h3>DA22</h3>
    <p>
      Är en fallarmsmarkis utan kassett.
    </p>
    <h3>DA32</h3>
    <p>
      Är en fallarmsmarkis med kassett.
    </p>
    <h3>Manöverering</h3>
    <p>
      Utvändig eller invändig manövrering med dragband av polyester är standard.
      För lagring och skydd av bandet, kan markisen kompletteras med
      banduppsamlare. Som tillval finns manövrering med vev eller motor. Motorn
      kan kompletteras med automatiska styrningar, t ex fjärrkontroll eller sol-
      och vindautomatik.
    </p>
    <h3>Montering</h3>
    <p>
      Markisen monteras enkelt direkt på fönsterfodret, på vägg eller i nisch.
      Som tillval finns nischfästen som gör att markisen kan justeras 45–185 mm
      i djupled.
    </p>
    <h3>Fallarmar</h3>
    <p>
      Armprofiler är tillverkade av strängpressat aluminium och armkomponenter
      av pressgjutet zink. Fallarmar med justerbar spänning för optimal
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
      vilken RAL-färg man vill. Detta för att matcha markisen med husets färg.
    </p>
    <SideImage :image="da22" />
    <SideImage :image="da32" />
    <SideImage :image="standardProfile" />
    <SideImage :image="designProfile" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/fonstermarkis_22.jpg";
import da22Image from "@/assets/images/products/utomhus/markis/da22.jpg";
import da32Image from "@/assets/images/products/utomhus/markis/da32.jpg";
import designProfileImage from "@/assets/images/products/utomhus/markis/design_profil.jpg";
import standardProfileImage from "@/assets/images/products/utomhus/markis/standard_profil.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "Fönstermarkis"
      },
      da22: {
        src: da22Image,
        alt: "Fönstermarkis DA 22",
        side: "left"
      },
      da32: {
        src: da32Image,
        alt: "Fönstermarkis DA 32",
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
