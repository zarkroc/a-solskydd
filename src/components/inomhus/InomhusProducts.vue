<template>
  <main>
    <aside>
      <button
        v-on:click="clickProduct('Persienner')"
        :class="{ highlight: selected == 'Persienner' }"
      >
        Persienner &#9662;
      </button>
      <Persienner @clicked="showComponent" v-if="showPersienner" />
      <button
        v-on:click="showComponent('Plisseer')"
        :class="{ highlight: selected == 'Plisseer' }"
      >
        Plissèer
      </button>
      <Plisseer @clicked="showComponent" v-if="showPlisseer" />

      <button
        v-on:click="clickProduct('Rullgardiner')"
        :class="{ highlight: selected == 'Rullgardiner' }"
      >
        Rullgardiner &#9662;
      </button>
      <Rullgardiner @clicked="showComponent" v-if="showRullgardiner" />
      <button
        v-on:click="showComponent('LamellGardiner')"
        :class="{ highlight: selected == 'LamellGardiner' }"
      >
        Lamellgardiner
      </button>
      <LamellGardiner @clicked="showComponent" v-if="showLamellGardiner" />
      <button
        v-on:click="showComponent('Duetter')"
        :class="{ highlight: selected == 'Duetter' }"
      >
        Duetter
      </button>
      <Duetter @clicked="showComponent" v-if="showDuetter" />
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
    </aside>
    <section class="product-container">
      <component v-bind:is="dynamicComponent" v-if="showProduct"></component>
      <div class="in_products" v-else>
        <section class="in_border">
          <h2>
            Invändiga produkter
          </h2>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import Persienner from "@/components/inomhus/Persienner";
import Plisseer from "@/components/inomhus/Plisseer";
import Duetter from "@/components/inomhus/Duetter";
import Rullgardiner from "@/components/inomhus/Rullgardiner";
import LamellGardiner from "@/components/inomhus/LamellGardiner";
import Solfilm from "@/components/inomhus/Solfilm";
import SecurityFilm from "@/components/inomhus/SecurityFilm";
import Insectnet from "@/components/inomhus/Insectnet";

export default {
  components: {
    Persienner,
    Plisseer,
    Duetter,
    Rullgardiner,
    LamellGardiner,
    Solfilm,
    SecurityFilm,
    Insectnet,
  },
  data() {
    return {
      showPersienner: false,
      showProduct: false,
      showPlisseer: false,
      showDuetter: false,
      showRullgardiner: false,
      showLamellGardiner: false,
      showSolfilm: false,
      showSecurityFilm: false,
      showInsectnet: false,
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
        this.showPersienner = false;
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
