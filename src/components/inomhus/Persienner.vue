<template>
  <section class="products-persienner">
    <aside>
      <button v-on:click="resetShow('16mm')">
        16mm
      </button>
      <button v-on:click="resetShow('25mm')">
        25mm
      </button>
      <button v-on:click="resetShow('35mm')">
        35mm
      </button>
      <button v-on:click="resetShow('50mm')">
        50mm
      </button>
      <button v-on:click="resetShow('Wood')">
        Trä
      </button>
      <button v-on:click="resetShow('NoHole')">
        No Hole
      </button>
    </aside>
    <section class="product-container" v-if="show16mm">
      <Persienner16mm />
    </section>
    <section class="product-container" v-else-if="show25mm">
      <Persienner25mm />
    </section>
    <section class="product-container" v-else-if="show35mm">
      <Persienner35mm />
    </section>
    <section class="product-container" v-else-if="show50mm">
      <Persienner50mm />
    </section>
    <section class="product-container" v-else-if="showWood">
      <Wood />
    </section>
    <section class="product-container" v-else-if="showNoHole">
      <NoHole />
    </section>
  </section>
</template>

<script>
import Persienner16mm from "@/components/inomhus/persienner/Persienner16mm";
import Persienner25mm from "@/components/inomhus/persienner/Persienner25mm";
import Persienner35mm from "@/components/inomhus/persienner/Persienner35mm";
import Persienner50mm from "@/components/inomhus/persienner/Persienner50mm";
import Wood from "@/components/inomhus/persienner/Wood";
import NoHole from "@/components/inomhus/persienner/NoHole";

export default {
  data() {
    return {
      show16mm: false,
      show25mm: false,
      show35mm: false,
      show50mm: false,
      showWood: false,
      showNoHole: false
    };
  },
  components: {
    Persienner16mm,
    Persienner25mm,
    Persienner35mm,
    Persienner50mm,
    Wood,
    NoHole
  },
  methods: {
    resetShow: function(toShow) {
      if (this["show" + toShow] == true) {
        this["show" + toShow] = false;
        return;
      }
      this.show16mm = false;
      this.show25mm = false;
      this.show35mm = false;
      this.show50mm = false;
      this.showWood = false;
      this.showNoHole = false;
      if (toShow == "16mm") {
        this.show16mm = true;
      } else if (toShow == "25mm") {
        this.show25mm = true;
      } else if (toShow == "35mm") {
        this.show35mm = true;
      } else if (toShow == "50mm") {
        this.show50mm = true;
      } else if (toShow == "Wood") {
        this.showWood = true;
      } else if (toShow == "NoHole") {
        this.showNoHole = true;
      }
    }
  }
};
</script>
