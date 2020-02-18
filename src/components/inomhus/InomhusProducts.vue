<template>
  <main class="products">
    <aside>
      <button
        v-on:click="clickProduct('Persienner')"
        :class="{ highlight: selected == 'Persienner' }"
      >
        Persienner
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
        v-on:click="showComponent('Rullgardin')"
        :class="{ highlight: selected == 'Rullgardin' }"
      >
        Rullgardiner
      </button>
      <Rullgardin @clicked="showComponent" v-if="showRullgardin" />
      <!-- 
      <button v-on:click="showSolfilm = !showSolfilm">Solfilm</button>
      <div v-if="showSolfilm">
        <Rullgardin @clicked="showComponent" />
      </div>
      <button v-on:click="showInsectsNet = !showInsectsNet">Insektsnät</button>
      <div v-if="showInsectsNet">
        <InsectsNet @clicked="showComponent" />
      </div>
      <button v-on:click="showLamellGardiner = !showLamellGardiner">
        Lamellgardiner
      </button>
      <div v-if="showLamellGardiner">
        <LamellGardiner @clicked="showComponent" />
      </div> -->
      <button
        v-on:click="showComponent('Duetter')"
        :class="{ highlight: selected == 'Duetter' }"
      >
        Duetter
      </button>
      <Duetter @clicked="showComponent" v-if="showDuetter" />
    </aside>
    <section class="product-container">
      <div v-if="showProduct">
        <component v-bind:is="dynamicComponent"></component>
      </div>
      <div class="in_products" v-else>
        <section class="in_border">
          <h2>
            Invändinga produkter
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
import Rullgardin from "@/components/inomhus/Rullgardin";

export default {
  components: {
    Persienner,
    Plisseer,
    Duetter,
    Rullgardin
  },
  data() {
    return {
      showPersienner: false,
      showProduct: false,
      showPlisseer: false,
      showDuetter: false,
      showRullgardin: false,
      dynamicComponent: {
        template: "<p>wheee</p>"
      },
      selected: undefined
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
      /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
      //console.error(event.target);
      this.selected = productType;
    }
  }
};
</script>
