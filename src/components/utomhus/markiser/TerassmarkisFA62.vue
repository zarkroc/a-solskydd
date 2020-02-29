<template>
  <div>
    <h2>Terrassmarkis FA62 & FA64</h2>
    <p>
      FA 60 terrassmarkis är en mycket attraktiv helkassett som ger ett
      stilfullt intryck och lämpar sig väl för exempelvis terrasser, balkonger,
      butiker, kiosker och restauranger. Utmärkande drag för FA 60 serien är den
      designade helkassetten som skyddar duk och mekanism mot regn och smuts. De
      rejäla vikarmarna med Dyneema® band och starka fjädrar garanterar en bra
      dukspänning.
    </p>
    <BigImage :image="main" />
    <h3>Manövrering</h3>
    <p>
      Utvändig eller invändig manövrering med motor. Möjlighet till att
      komplettera med automatisk styrning, till exempel fjärrkontroll och sol-
      och vindautomatik.
    </p>
    <h3>Markisduk</h3>
    <p>
      Välj från en bred kollektion med allt från enfärgade till randiga vävar.
    </p>
    <h3>Montering</h3>
    <p>Markisen monteras enkelt direkt på väggen eller i takfoten.</p>
    <h3>Markisstativ</h3>
    <p>
      Markisstativet med detaljer finns som standard i 3 färger: Vitt, Grått och
      Svart med struktur. Med lite längre leveranstid kan man få stativet i
      vilken RAL-färg man vill. Detta för att matcha markisen med husets färg.
    </p>
    <h3>Vikarmar</h3>
    <p>
      Armprofilerna är tillverkade av strängpressat aluminium och
      armkomponenterna av pressgjutet aluminium. Vikarmarna har Dyneema® band
      över knäled för ökad stabilitet. Extra kraftiga fjädrar ger en utmärkt
      dukspänning.
    </p>
    <h3>Tillval</h3>
    <p>Dekorelement i kontrastfärg.</p>

    <SideImage :image="fa60Front" />
    <SideImage :image="fa64Sidovy" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/fa60.jpg";
import fa60FrontImage from "@/assets/images/products/utomhus/markis/fa60front.jpg";
import fa64SidovyImage from "@/assets/images/products/utomhus/markis/fa64sidovy.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "FA60 terassmarkis",
      },
      fa60Front: {
        src: fa60FrontImage,
        alt: "Terassmarkis FA60 front",
        side: "left",
      },
      fa64Sidovy: {
        src: fa64SidovyImage,
        alt: "Terassmarkis FA64 sidovy",
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
