<template>
  <div>
    <h2>Kvartsvärmare</h2>
    <p>
      Rio/Rio Grande Kvartsvärmaren är en avancerad värmare för dig med höga
      krav. Rio/Rio Grande är mycket effektiv och har ett varmt inbjudande ljus.
      Kvartsvärmaren är enkel att montera och använda. Rio/Rio Grande har låga
      driftskostnader och är både ljudlös och luktfri. Förläng utesäsongen genom
      att installera Rio/ Rio Grande kvartsvärmare under din markis.
    </p>
    <BigImage :image="main" />
    <h3>Kvartsvärmare</h3>
    <p>
      Rio/Rio Grande är IP24 klassificerade för permanent utvändig eller
      invändning använd- ning. Den effektiva reflektorn är gjord av höggradigt
      behandlat aluminium.
    </p>
    <h3>Funktion</h3>
    <p>
      Kvartsvärmaren sänder ut kortvågig infraröd strålning som bara värmer
      personer och föremål i dess riktningsområde; inte den omgivande luften.
      Direkt efter inkopplingen har kvartsvärmaren full effekt vilket resulterar
      i en omdelbar värme, samt låg driftstid och låga driftskostnader.
    </p>
    <h3>Installation</h3>
    <p>
      Rio/Rio Grande kan installeras horisontellt eller vertikalt på vägg eller
      i tak.
    </p>
    <h3>Reglering</h3>
    <p>
      Rio/Rio Grande kan regleras med hjälp av våra styrningar. Med dessa kan
      uteffekterna regleras från 30-100%. Styrningarna säkerställer att både
      komforten och energiförbrukningen optimeras. Dessutom gör mjukstarten att
      lampans brinntid förlängs med upp till 30 %. Finns i 4kW & OkW utförande.
      Fjärrkontroll finns som tillval.
    </p>
    <h3>Fördelar</h3>
    <p>
      Att välja en kvartsvärmare istället för gasoleller infravärmare innebär en
      rad fördelar:
    </p>
    <ul>
      <li>Omedelbar värme</li>
      <li>Riktningsstyrd värme</li>
      <li>Kostnadseffektiv</li>
      <li>värme</li>
      <li>Enkel att använda och montera</li>
      <li>Ljudlös och luktfri</li>
      <li>Miljövänlig</li>
    </ul>
    <SideImage :image="quartsheater" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/quartzvarmare_01.jpg";
import smallImage from "@/assets/images/products/utomhus/quartsvarmare_02.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "Quartzvärmare",
      },
      quartsheater: {
        src: smallImage,
        alt: "Quartsvärmare närbild",
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
