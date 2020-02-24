<template>
  <div>
    <h2>Fönstermarkiser 52</h2>
    <p>
      En stabil markis särskilt lämpad för byggnader med större fönsterpartier,
      till exempel butiker, kontor, skolor och sjukhus. Fallarmarna är extra
      kraftiga och har justerbar fjäderspänning för optimal dukspänning.
      Frontprofil och valsrör är också förstärkta. Takprofil som skyddar duk och
      valsrör ingår.
    </p>
    <BigImage :image="mainImage" />
    <h3>Manöverering</h3>
    <p>
      Utvändig manövrering med vev är standard. Som tillval finns manövrering
      med band eller motor, såväl invändigt som utvändigt. Vid motordrift går
      det att komplettera med automatiska styrningar, till exempel fjärrkontroll
      eller soloch vindautomatik.
    </p>
    <h3>Montering</h3>
    <p>
      DA 52 monteras enkelt direkt på fönsterfoder, vägg eller under tak fot.
    </p>
    <h3>Fallarmar</h3>
    <p>
      Armprofiler är tillverkade strängpressat aluminium av och armkomponenter
      av pressgjutet zink. Extra kraftiga fjädrar med justerbar spänning för
      optimal dukspänning.
    </p>
    <h3>Markisduk</h3>
    <p>
      Välj från en bred kollektion med allt från enfärgade och randiga vävar.
    </p>
    <h3>Markisstativ</h3>
    <p>
      Markisstativet med detaljer finns som standard i 3 färger: Vitt, Grått och
      Svart med struktur. Med något längre leveranstid kan man få stativet i
      ytterligare 10 färger, matchade för att passa ihop med de vanligast
      förekommande husfärger och fasader.
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
