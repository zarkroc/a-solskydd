<template>
  <div>
    <h2>Korgmarkis</h2>
    <p>
      En kraftig och flexibel korgmarkis för exempelvis restauranger, butiker,
      hotell och kontor. Det går att trycka text eller logotyp på markisen och
      på så vis förvandla den till en idealisk reklamplats. Ett tips är att
      belysa markisen underifrån så att budskapet framträder även efter mörkrets
      inbrott.
    </p>
    <BigImage :image="main" />
    <h3>Manövrering</h3>
    <p>
      BC 20 går att få som uppdragbar eller fast markis. Väljer du den som
      uppdragbar ingår manövrering med utvändig lina. Som tillval finns utvändig
      eller invändig manövrering med motor samt invändig manöverering med lina.
      Markis med motor går att komplettera med automatisk styrning till exempel
      fjärrkontroll och sol och vindautomatik.
    </p>
    <h3>Montering</h3>
    <p>
      Markisen monteras direkt på vägg. Antalet bågar baseras vanligtvis eller
      fönsterfoder.
    </p>
    <h3>Markisduk</h3>
    <p>
      Välj från en bred kollektion med allt från enfärgade och randiga vävar
      till designade mönster. Den löstagbara kappan går att få i val finns
      utvändig eller invändig både raka och vågiga former.
    </p>
    <h3>Hörn och bågar</h3>
    <p>
      Huvudkomponenterna för markisens design är de kraftiga hörnen och bågarna.
      Välj antingen hörnet med radie 35mm, 75mm eller 170mm, det ställbara
      hörnet 90-180° eller en kombination av hörn. Antalet bågar baseras
      vanligtvis på korgens utfall
    </p>
    <SideImage :image="korgmarkis" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/korgmarkis_01.jpg";
import smallImage from "@/assets/images/products/utomhus/markis/korgmarkis_02.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "Korgmarkis",
      },
      korgmarkis: {
        src: smallImage,
        alt: "Korgmarkis",
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
