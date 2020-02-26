<template>
  <div>
    <h2>Glas utan splitter</h2>
    <p>
      Glas är ett vackert och allt vanligare inslag i vår vardagsmiljö. Glas
      skapar spännande arkitektur och ger ljus och rymd. Men glas kan också
      medföra stora risker. Glas som krossas, genom olyckshändelse eller
      medvetet våld, åstadkommer en kaskad av vasst splitter. Människor som av
      misstag stöter sönder en glasruta kan skadas allvarligt av splitter som
      tränger in i kroppen. Glassplitter kan också förstöra värdefulla varor och
      dyrbar utrustning. Glas är också en frestande väg in för tjuvar. Det är
      lätt att krossa och ur säkerhetssynpunkt är det fönstren som oftast är den
      svagaste länken. Därför är fönstren oftast målet när tjuven vill göra en
      snabb "smash & grab"-stöt eller ta sig in i butiken, kontoret eller
      villan.
    </p>
    <h2></h2>

    <h3>Svalt på sommaren...</h3>
    <p>
      Under heta sommardagar kan ditt hem bli olidligt varmt. Det finns många
      sätt att göra hemmet svalare. Du kan dra för gardiner, stänga persiennerna
      eller kanske installera luftkonditionering. Alternativt kan du låta
      installera en professionell solfilm. Solfilmer blockerar upp till 80
      procent av solens strålningsvärme.
    </p>
    <h3>Säkerhetsfilm som hindrar tjuven</h3>
    <p>
      En säkerhetsfilm eliminerar risken. Den kan monteras på insidan på alla
      typer av glas och förstärker glaset genom att absorbera och sprida kraften
      av ett slag eller en stöt. Även om glaset spricker hållersäkerhetsfilmen
      glaset intakt i en enda bit. Med en osynlig säkerhetsfilm möts tjuven av
      en oväntad överraskning. Glaset går sönder - men det splittras inte och
      hålls kvar i karmen. Ett fönster förstärkt med säkerhetsfilm gör att
      inbrottsförsöket tar betydligt längre tid än vad tjuven planerat. I de
      flesta fallen stoppar säkerhetsfilm tjuven helt.
    </p>
    <h3>Skräddarsytt för varje miljö</h3>
    <p>
      Det är klokt att före varje beställning göra en grundlig anayls av behovet
      och förutsättningarna. Först då kan man vara säker på att man har rätt
      konfiguration med rätt egenskaper. Säkerhetsfunktionerna kan dessutom
      kombineras med såväl solskydd som insynsskydd. Ett utmärkt skalskydd för
      skolor, kontor, butiker och industrier.
    </p>

    <BigImage :image="mainImage" />
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import sakerhetsfilm from "@/assets/images/products/inomhus/sakerhetsfilm.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: sakerhetsfilm,
        alt: "Krossat glas säkerhetsfilm",
      },
    };
  },
  components: {
    BigImage,
  },
};
</script>
