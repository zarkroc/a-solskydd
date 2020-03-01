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

export default {
  components: {
    Balkongskydd,
    Markis,
    Terassmarkis,
    Korgmarkis,
    Balkongmarkis,
    Vertikalmarkis,
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
