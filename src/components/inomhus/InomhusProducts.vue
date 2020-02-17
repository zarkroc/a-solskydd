<template>
  <main class="products">
    <aside>
      <button v-on:click="clickProduct('Persienner')">Persienner</button>

      <Persienner @clicked="showComponent" v-if="showPersienner" />

      <button v-on:click="showPlisseer = !showPlisseer">Plissèer</button>
      <div v-if="showPlisseer">
        <Plisseer @clicked="showComponent" />
      </div>

      <button v-on:click="showRullgardin = !showRullgardin">
        Rullgardiner
      </button>
      <div v-if="showRullgardin">
        <Rullgardin @clicked="showComponent" />
      </div>
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
      </div>
      <button v-on:click="showDuetter = !showDuetter">Duetter</button>
      <div v-if="showDuetter">
        <Duetter @clicked="showComponent" />
      </div>
    </aside>
    <section class="product-container">
      <div v-if="showProduct">
        <component v-bind:is="dynamicComponent"></component>
      </div>
    </section>
  </main>
</template>

<script>
import Persienner from "@/components/inomhus/Persienner";

export default {
  components: {
    Persienner
  },
  data() {
    return {
      showPersienner: false,
      showProduct: false,
      showPlisse: false,
      dynamicComponent: {
        template: "<p>wheee</p>"
      }
    };
  },
  methods: {
    showComponent(comp) {
      this.showProduct = true;
      this.dynamicComponent = comp;
    },
    clickProduct(productType) {
      this.dynamicComponent = null;
      this.showProduct = false;
      this["show" + productType] = !this["show" + productType];
    }
  }
};
</script>
