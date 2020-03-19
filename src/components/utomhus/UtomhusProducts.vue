<template>
  <main>
    <aside>
      <button
        v-on:click="clickProduct('Balkongskydd')"
        :class="{ highlight: selected == 'Balkongskydd' }"
      >
        Balkongskydd &#9662;
      </button>
      <Balkongskydd @clicked="showComponent" v-if="showBalkongskydd" />
      <button
        v-on:click="clickProduct('Markis')"
        :class="{ highlight: selected == 'Markis' }"
      >
        Markiser &#9662;
      </button>
      <Markis @clicked="showComponent" v-if="showMarkis" />
      <button
        v-on:click="clickProduct('Terassmarkis')"
        :class="{ highlight: selected == 'Terassmarkis' }"
      >
        Terassmarkiser &#9662;
      </button>
      <Terassmarkis @clicked="showComponent" v-if="showTerassmarkis" />
      <button
        v-on:click="showComponent('Korgmarkis')"
        :class="{ highlight: selected == 'Korgmarkis' }"
      >
        Korgmarkis
      </button>
      <Balkongmarkis @clicked="showComponent" v-if="showBalkongmarkis" />
      <button
        v-on:click="showComponent('Balkongmarkis')"
        :class="{ highlight: selected == 'Balkongmarkis' }"
      >
        Balkongmarkis
      </button>
      <Balkongmarkis @clicked="showComponent" v-if="showBalkongmarkis" />
      <button
        v-on:click="clickProduct('Vertikalmarkis')"
        :class="{ highlight: selected == 'Vertikalmarkis' }"
      >
        Vertikalmarkis &#9662;
      </button>
      <Vertikalmarkis @clicked="showComponent" v-if="showVertikalmarkis" />
      <button
        v-on:click="showComponent('Solfilm')"
        :class="{ highlight: selected == 'Solfilm' }"
      >
        Solfilm
      </button>
      <Solfilm @clicked="showComponent" v-if="showSolfilm" />
      <button
        v-on:click="showComponent('SecurityFilm')"
        :class="{ highlight: selected == 'SecurityFilm' }"
      >
        Säkerhetsfilm
      </button>
      <SecurityFilm @clicked="showComponent" v-if="showSecurityFilm" />
      <button
        v-on:click="showComponent('Insectnet')"
        :class="{ highlight: selected == 'Insectnet' }"
      >
        Insektsnät
      </button>
      <Insectnet @clicked="showComponent" v-if="showInsectnet" />
      <button
        v-on:click="showComponent('Fasadpersienn')"
        :class="{ highlight: selected == 'Fasadpersienn' }"
      >
        Fasadpersienn
      </button>
      <Fasadpersienn @clicked="showComponent" v-if="showFasadpersienn" />
      <button
        v-on:click="showComponent('Quartzheater')"
        :class="{ highlight: selected == 'Quartzheater' }"
      >
        Quartzvärmare
      </button>
      <Quartzheater @clicked="showComponent" v-if="showQuartzheater" />
      <button
        v-on:click="showComponent('Sidomarkis')"
        :class="{ highlight: selected == 'Sidomarkis' }"
      >
        Sidomarkis
      </button>
      <Sidomarkis @clicked="showComponent" v-if="showSidomarkis" />
    </aside>
    <section class="product-container">
      <component v-bind:is="dynamicComponent" v-if="showProduct"></component>
      <div class="in_products" v-else>
        <section class="in_border">
          <h2>
            Utvändiga produkter
          </h2>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import Balkongskydd from "@/components/utomhus/Balkongskydd";
import Markis from "@/components/utomhus/Markis";
import Terassmarkis from "@/components/utomhus/Terassmarkis";
import Korgmarkis from "@/components/utomhus/Korgmarkis";
import Balkongmarkis from "@/components/utomhus/Balkongmarkis";
import Vertikalmarkis from "@/components/utomhus/Vertikalmarkis";
import Fasadpersienn from "@/components/utomhus/Fasadpersienn";
import Solfilm from "@/components/inomhus/Solfilm";
import SecurityFilm from "@/components/inomhus/SecurityFilm";
import Insectnet from "@/components/inomhus/Insectnet";
import Quartzheater from "@/components/utomhus/Quartzheater";
import Sidomarkis from "@/components/utomhus/Sidomarkis";

export default {
  components: {
    Balkongskydd,
    Markis,
    Terassmarkis,
    Korgmarkis,
    Balkongmarkis,
    Vertikalmarkis,
    Solfilm,
    SecurityFilm,
    Insectnet,
    Fasadpersienn,
    Quartzheater,
    Sidomarkis,
  },
  data() {
    return {
      showBalkongskydd: false,
      showProduct: false,
      showMarkis: false,
      showTerassmarkis: false,
      showDuetter: false,
      showRullgardiner: false,
      showLamellGardiner: false,
      showKorgmarkis: false,
      showBalkongmarkis: false,
      showVertikalmarkis: false,
      showSolfilm: false,
      showSecurityFilm: false,
      showInsectnet: false,
      showFasadpersienn: false,
      showQuartzheater: false,
      showSidomarkis: false,
      dynamicComponent: {
        template: "<p>wheee</p>",
      },
      selected: undefined,
    };
  },
  methods: {
    showComponent(comp) {
      this.showProduct = true;
      this.dynamicComponent = comp;
      if (comp == "Plisseer") {
        this.selected = comp;
        this.showBalkongskydd = false;
      }
    },
    clickProduct: function(productType) {
      this.dynamicComponent = null;
      this.showProduct = false;
      this["show" + productType] = !this["show" + productType];
      this.selected = productType;
    },
  },
};
</script>
