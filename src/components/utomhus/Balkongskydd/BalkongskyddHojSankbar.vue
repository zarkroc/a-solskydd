<template>
  <div>
    <h2>Höj och sänkbart balkongskydd</h2>
    <p>
      Gör din balkong till ett uterum. Skydda din balkong mot insyn, sol och
      vind. Vi anpassar och monterar skydden efter dina önskemål
    </p>
    <BigImage :image="main1" />
    <BigImage :image="main2" />
    <BigImage :image="main3" />
    <p>
      Balkongskyddet kan fås i följande material. Glasfiber, Glasklar plast,
      Markisväv. Räcket kan fås i rund eller rak form
    </p>
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import main1Image from "@/assets/images/products/utomhus/balkongskydd/hojsank1.jpg";
import main2Image from "@/assets/images/products/utomhus/balkongskydd/hojsank2.jpg";
import main3Image from "@/assets/images/products/utomhus/balkongskydd/hojsank3.jpg";

export default {
  data() {
    return {
      main1: {
        src: main1Image,
        alt: "Balkongskydd",
      },
      main2: {
        src: main2Image,
        alt: "Balkongskydd",
      },
      main3: {
        src: main3Image,
        alt: "Balkongskydd",
      },
    };
  },
  components: {
    BigImage,
  },
};
</script>
