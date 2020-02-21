<template>
  <main class="products">
    <aside>
      <button
        v-on:click="clickProduct('Balkongskydd')"
        :class="{ highlight: selected == 'Balkongskydd' }"
      >
        Balkongskydd
      </button>
      <Balkongskydd @clicked="showComponent" v-if="showBalkongskydd" />
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

export default {
  components: {
    Balkongskydd
  },
  data() {
    return {
      showBalkongskydd: false,
      showProduct: false,
      showPlisseer: false,
      showDuetter: false,
      showRullgardiner: false,
      showLamellGardiner: false,
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
        this.showBalkongskydd = false;
      }
    },
    clickProduct: function(productType) {
      this.dynamicComponent = null;
      this.showProduct = false;
      this["show" + productType] = !this["show" + productType];
      this.selected = productType;
    }
  }
};
</script>
