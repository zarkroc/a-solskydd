<template>
  <div>
    <h2>Zip Scren ZS82</h2>
    <p>
      ZS82 är en Zip Screen som har sidostyrningar med zip-funktion. Detta
      innebär att screenvävens sidor är försedda med en dragkedja som löper i en
      glidprofil som håller väven på plats längs hela dess sidor. Denna
      konstruktion gör produkten utmärkt i vindutsatta lägen och eliminierar
      dessutom ljusspringan som finns på vanliga vertikalmarkiser.
    </p>
    <BigImage :image="main" />
    <h3>Manövrering</h3>
    <p>
      Den här Zip Screenen är motoriserad. Som tillval finns fjärrkontroll eller
      automatiska styrningar som t.ex. sol- och vindautomatik.
    </p>
    <h3>Montering</h3>
    <p>Monteras mycket snabbt och enkelt direkt på vägg eller i nisch.</p>
    <h3>Markisstativ</h3>
    <p>
      Markisstativet med detaljer finns som standard i 2 färger: Vitt och Grått.
      Med något längre leveranstid kan man få stativet i ytterligare 10 färger,
      matchade för att passa ihop med de vanligast förekommande husfärger och
      fasader.
    </p>
    <h3>Screenväv</h3>
    <p>
      ZS 82 är testad och klassificerad med GeoScreen, Everview, Soltis 92,
      Soltis B92 och Serge.
    </p>
    <SideImage :image="zs82Gavel" />
    <SideImage :image="zs82Dragkedja" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/zs82.jpg";
import zs82GavelImage from "@/assets/images/products/utomhus/markis/zs82gavel.jpg";
import zs82DragkedjaImage from "@/assets/images/products/utomhus/markis/zs82dragkedja.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "FA60 terassmarkis",
      },
      zs82Gavel: {
        src: zs82GavelImage,
        alt: "ZS82 Gavel",
        side: "small",
      },
      zs82Dragkedja: {
        src: zs82DragkedjaImage,
        alt: "ZS82 dragkedja",
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
