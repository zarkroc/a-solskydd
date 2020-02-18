<template>
  <div>
    <h2>POLLUX Duette® & Plisségardiner</h2>
    <BigImage :image="mainImage" />
    <p>
      En elegant gardin med enkel plisséväv eller smart klimatval med dubbel
      cellväv. Plisségardinen finns i en mängd tilltalande tyger, från mer
      genomlysande till helt mörkläggande. Duette® gardinen har isolerande
      egenskaper som kan spara energi både sommar och vinter. Som tillval finns
      flamskyddande eller reflekterande väv. Hårdvaran är ett mycket flexibelt
      system som kan anpassas till en rad olika fönstertyper. Manövrering med
      handtag, linor eller motor.
    </p>
    <SideImage :image="smallImage1" />
    <h3>Manövrering</h3>
    <p>
      Gardinen manövreras med linor vid frihängande montering, och med handtag
      vid linspänd montering. Som tillval finns manövrering med motor eller
      monocommand
    </p>
    <h3>Montering</h3>
    <p>
      Det är enkelt att montera gardinen. Upphängningsbeslag finns för de flesta
      slags fönster. Beslagen är utformade för att ge ett minimalt ljusinsläpp
      mellan karm och list. Kan även monteras mellan glasen i fönstret med
      speciella mellanglasbeslag.
    </p>
    <h3>Väv</h3>
    <p>
      Enfärgade, mönstrade eller strukturerade tyger med tillval för
      ljusdämpning, mörläggning och flamskydd.
    </p>
    <h3>Tyger</h3>
    <p>
      Plisséväv finns i ett brett urval av färger och mönster – såväl mer
      genomlysande som helt mörkläggande. Väven finns även med flamskyddande och
      reflekterande (minskar värmestrålning) egenskaper. Duette® Classic är en
      cellväv av hög kvalitet, som är plisserad på båda sidor. Mellan den dubbla
      väven finns horisontella luftfickor som isolerar mot värme och kyla.
      Duette® Fixé är ett patenterat utförande som motverkar att vävens
      luftkanaler tappar form och förlorar sin isolerande funktion. I detta
      utförande har gardinen en plan utsida. Alla Duettevävar, förutom de
      mörkläggande, är helt tvättbara i 30° C. De övriga vävarna är enkla att
      rengöra med fuktig trasa eller dammsugare.
    </p>
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImgPath from "@/assets/images/products/inomhus/plisseer/plisseer1.jpg";
import sideImage1 from "@/assets/images/products/inomhus/plisseer/plisseer_small_1.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: mainImgPath,
        alt: "50mm persienn"
      },
      smallImage1: {
        src: sideImage1,
        alt: "50mm persienn",
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
