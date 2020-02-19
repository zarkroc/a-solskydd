<template>
  <section>
    <h2>PERSIENN Roulett</h2>
    <p>
      Roulettpersienner är perfekt i rummen där du tillbringar mycket tid – du
      kan styra dagsljuset som du vill. Öppna persiennen för att möta solen,
      vinkla den för att sila ljuset upp i taket eller stänga den för att hindra
      insyn. Om du bara lämnar persiennen lite öppen har du själv ögonkontakt
      med omvärlden. Persienner anpassar du efter dygnet, vädret och årstiden.
      Det är därför de aldrig blir omoderna. Nu kan du också få Roulett med
      designlist som gör att den integreras snyggt i fönstret.
    </p>
    <BigImage :image="mainImage" />

    <h3>Manövrering Roulett</h3>
    <p>
      kan monteras frihängande eller mellan fönsterglas.Basmodellerna manövreras
      med lina och vridstång och finns i flera utseenden och funktioner. Du kan
      få en persienn som flyttas steglöst upp eller ned i fönstret, och öppnas
      från båda håll med diskreta handtag och vred istället för linor - vår
      tvåvägsmanövrerade modell. Det är elegant, praktiskt och säkert. Du kan
      även få en som manövreras genom att du tar tag i underlisten och flyt- tar
      denna till önskat läge. Roulett kan också manövreras med kulkedja.
    </p>
    <h3>Skräddarsydd</h3>
    <p>
      Hur persiennen manövreras är en del av den personliga utformningen av
      Roulett. Roulett finns i många färger och mönster, är alltid måttbeställd
      och kundanpassad för att passa perfekt i dina fönster och ditt hem.
    </p>
    <h3>Eleganta lösningar</h3>
    <p>
      Vill du inte matcha färgen på soffan så kanske en spegelblank,
      värmereflekterande persienn passar bättre? Då kan du spara energi bara
      genom att vinkla persiennen. Vill du att persiennen ska vara diskret och
      integreras med fönstret så väljer du den nya Designlisten. Vill du ha ett
      riktigt soft ljus med mjuka skuggor i rummet ska du titta på en perforerad
      persienn. Den har små, små hål som gör förvånansvärt stor skillnad.
    </p>
    <h3>Miljövänlig</h3>
    <p>
      Materialet i persiennen är till stor del återvunnet, vilket sparar energi
      och miljö. Lister och lameller av aluminium och stål kan lämnas till
      returåtervinning igen. Mellanglas Roulett.
    </p>

    <h3>Barnsäkerhet:</h3>
    <p>
      Köpare och användare av solskydd bör vara medvetna om riskerna med löst
      hängande linor, snoddar samt ögleformade kedjor och linor - de kan utgöra
      faror för små barn. Frihängande Roulett
    </p>

    <p>Dessa riktlinjer ska alltid följas.</p>
    <ul>
      <li>
        Små barn kan strypas av öglor bildade av draglinor, band och inre linor
        som används för att manövrera produkten. De kan även råka vira linor
        runt halsen.
      </li>
      <li>
        För att undvika att barn stryps eller trasslar in sig ska linorna hållas
        utom räckhåll för små barn.
      </li>
      <li>sängar, barnsängar och andra möbler bort från solskyddens linor.</li>
      <li>Knyt inte ihop linorna.</li>
      <li>
        Kontrollera att att linorna inte trasslar ihop sig och bildar en ögla.
      </li>
      <li>
        Installera och använd säkerhetsanordningar enligt
        installationsanvisningarna på produkterna för att minska olycksrisken.
      </li>
    </ul>

    <h3>Övrigt</h3>
    <p>
      Motoriserade persienner finns i vitt och silver och byggs med en överlist
      som är 25x25 mm. *** Persienner med vävda band byggs på ett system som har
      något större överlist, 38x28 mm.
    </p>
    <p>
      Registered Trademark of Hunter Douglas Scandinavia AB, Sweden. Artikelnr:
      9101302015
    </p>
  </section>
</template>

<script>
import BigImage from "@/components/BigImage";
import mainImgPath from "@/assets/images/products/inomhus/persienner/25mm_01.jpg";

export default {
  data() {
    return {
      mainImage: {
        src: mainImgPath,
        alt: "25mm persienn"
      }
    };
  },
  components: {
    BigImage
  }
};
</script>
