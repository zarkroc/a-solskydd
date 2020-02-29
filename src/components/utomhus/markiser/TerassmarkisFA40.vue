<template>
  <div>
    <h2>Terrassmarkis FA40</h2>
    <BigImage :image="main" />
    <p>
      FA40 är en mångsidig serie terrassmarkiser som täcker de flesta behov av
      skugga över en uteplats. Med allt från markiser med extra ståhöjd till
      riktigt smala eller varför inte med rullgardinsfront för de där
      irriterande låga solstrålarna. En stabil markis i många modeller, med
      modern design i ett stort urval kulörer kännetecknar FA40-serien. Hög
      kvalitet borgar för slitstyrkan. 5 års Nordic Light garanti.
    </p>
    <section class="border-bottom">
      <h3>FA42 Classic</h3>
      <p>
        Öppen terrassmarkis med traditionella gavlar. Integsprodukten i
        standardutförande. <br />
        Max bredd: 7,0 m. <br />
        Max utfall: 4,0 m. (Vid 7 m bredd, max utfall 3.5 m)<br />
        Pitchcontrol, tak, rullkappa och teleskopstag.
      </p>
      <SideImage :image="fa42Classic" />
    </section>
    <section class="border-bottom">
      <h3>FA44 Design</h3>
      <p>
        Öppen terrassmarkis i designutförande. Gavlar med modern design som
        elegant förenar olika former. <br />
        Max bredd: 7,0 m. <br />
        Max utfall: 4,0 m. (Vid 7 m bredd, max utfall 3.5 m)<br />
        Tillval: Pitchcontrol, tak, rullkappa och teleskopstag.
      </p>
      <SideImage :image="fa44Design" />
    </section>
    <section class="border-bottom">
      <h3>FA45 Crossover</h3>
      <p>
        Öppen terrassmarkis med Cross Overarmar. Ena armen viks omlott över den
        andra, vilket gör det möjligt att ha terrassmarkisen på en mycket smal
        terrass eller balkong. <br />
        Minsta bredd är 1 meter. <br />
        Max bredd: 4,6 m.<br />
        Max utfall: 4,0 m <br />
        Tillval: Tak, rullkappa och teleskopstag.
      </p>
      <SideImage :image="fa45Tak1" />
      <SideImage :image="fa45Tak2" />
    </section>
    <section class="border-bottom">
      <h3>FA46</h3>
      <p>
        Öppen terassmarkis med dukbalk. Duken har en bruten profil som ger extra
        ståhöjd för att till exempel kunna öppa en altandörr helt. En bit ut
        från fasaden vinklas duken ned för att ge skugga. <br />
        Max bredd: 7,0 m.<br />
        Max utfall: 4,0 m (Vid 7m bredd, max utfall 3,5m) <br />
        Tillval: Pitchcontrol, tak, rullkappa och teleskopstag.
      </p>
      <SideImage :image="fa46" />
    </section>
    <section class="border-bottom">
      <h3>FA48 - Halvkassett</h3>
      <p>
        Kassetten skyddar duken mot väder och vind och ger den längre livslängd.
        I infällt läge är duken helt dold. Endast motordrift. <br />
        Max bredd: 7,0 m.<br />
        Max utfall: 3,5 m<br />
        Tillval: Pitchcontrol, rullkappa och teleskopstag.
      </p>
      <SideImage :image="fa48" />
    </section>
    <h3>Tillval</h3>

    <h2>FA 40</h2>
    <h3>Duk</h3>
    <p>
      Välj från en bred vävkollektion, från en- färgade till randiga. Kappan är
      löstagbar och kan fås med rakt eller vågigt avslut.
    </p>
    <h3>Stativ</h3>
    <p>
      Med DyneemaR-band över vikarmarnas knäleder och armfäste får markiserna en
      god, hållbar dukspänning.
    </p>
    <h3>Markisstativ</h3>
    <p>
      Markisstativet med detaljer finns som standard i tre färger:
      pulverlackerad svart, vit och grått. Med något längre leveranstid kan man
      få stativet i ytterligare 10 färger – matchade för att passa ihop med de
      vanligast förekommande hus och fasader. Utöver dessa färger erbjuds valfri
      RAL-kulör, dock med något längre leveranstid.
    </p>
    <h3>Manövrering</h3>
    <p>
      Markisen manövreras manuellt med vev eller med motordrift. Tillsammans med
      motordrift finns sol- och vindautomatik
    </p>
    <h3>Tillval: Nedrullningsbar kappa</h3>
    <p>
      En nedrullningsbar kappa i markisens front löser enkelt problem med lågt
      stående sol. Finns med markisduk eller genomsiktlig screenväv. Manövreras
      med vev.
    </p>
    <h3>Tillval: Justerenhet</h3>
    <p>
      Steglös inställning av markisens vinkel. Gör det enkelt att justera
      markisen efter hur högt solen står under dygnet. Manövreras med vev.
    </p>
    <h3>Tillval: Teleskopstag</h3>
    <p>
      Justerbara teleskopstag som fälls ned vid behov och säkrar markisens front
      mot underlaget. Fotplatta medföljer. Stabiliserar markisen vid vindbyar
      (upp till 10 m/s). Steglös höjd 0,8 - 2,5 m.
    </p>
    <h3>Tillval: Tak</h3>
    <p>
      Gör markisen mer komplett och tillför en trevlig design. Taket håller
      också borta smuts och löv från markisen när den är inrullad.
    </p>
  </div>
</template>

<script>
import BigImage from "@/components/BigImage";
import SideImage from "@/components/SideImage";
import mainImage from "@/assets/images/products/utomhus/markis/fa40.jpg";
import fa22Standard from "@/assets/images/products/utomhus/markis/fa42standard.jpg";
import fa44GavelImage from "@/assets/images/products/utomhus/markis/fa44gavel.jpg";
import fa45Tak1Image from "@/assets/images/products/utomhus/markis/fa45tak1.jpg";
import fa45Tak2Image from "@/assets/images/products/utomhus/markis/fa45tak2.jpg";
import fa46Image from "@/assets/images/products/utomhus/markis/fa46.jpg";
import fa48Image from "@/assets/images/products/utomhus/markis/fa48.jpg";
import fa40RullkappaImage from "@/assets/images/products/utomhus/markis/fa40rullkappa.jpg";
import fa40TakImage from "@/assets/images/products/utomhus/markis/fa40tak.jpg";
import fa40PitchcontrolImage from "@/assets/images/products/utomhus/markis/fa40pitchcontrol.jpg";
import fa40TeleskopstagImage from "@/assets/images/products/utomhus/markis/fa40teleskopstag.jpg";

export default {
  data() {
    return {
      main: {
        src: mainImage,
        alt: "Terassmarkis",
      },
      fa42Classic: {
        src: fa22Standard,
        alt: "FA42 standard gavel",
        side: "small",
      },
      fa44Design: {
        src: fa44GavelImage,
        alt: "FA44 design gavel",
        side: "small",
      },
      fa45Tak1: {
        src: fa45Tak1Image,
        alt: "FA 45 tak närbild",
        side: "small",
      },
      fa45Tak2: {
        src: fa45Tak2Image,
        alt: "FA 45 tak",
        side: "small",
      },
      fa46: {
        src: fa46Image,
        alt: "FA 46",
        side: "small",
      },
      fa48: {
        src: fa48Image,
        alt: "FA 48",
        side: "small",
      },
      fa40Rullkappa: {
        src: fa40RullkappaImage,
        alt: "Rullkappa",
        side: "small",
      },
      fa40Tak: {
        src: fa40TakImage,
        alt: "Tak",
        side: "small",
      },
      fa40Pitchcontrol: {
        src: fa40PitchcontrolImage,
        alt: "Pitchcontrol",
        side: "small",
      },
      fa40Teleskopstag: {
        src: fa40TeleskopstagImage,
        alt: "Teleskopstag",
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
