<template>
  <main class="products">
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

export default {
  components: {
    Balkongskydd,
    Markis,
    Terassmarkis,
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
