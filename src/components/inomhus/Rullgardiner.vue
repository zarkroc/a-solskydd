<template>
  <div>
    <button
      v-on:click="resetShow('Rullgardin', $event)"
      :class="{ highlight: selected == 'Rullgardin' }"
    >
      Rullgardin
    </button>
    <button
      v-on:click="resetShow('SlowRise', $event)"
      :class="{ highlight: selected == 'SlowRise' }"
    >
      Barnsäker
    </button>
  </div>
</template>

<script>
import Rullgardin from "@/components/inomhus/Rullgardin";
import SlowRise from "@/components/inomhus/SlowRise";

export default {
  data() {
    return {
      selected: undefined
    };
  },
  methods: {
    resetShow: function(toShow) {
      if (toShow == "Rullgardin") {
        this.$emit("clicked", Rullgardin);
      } else if (toShow == "SlowRise") {
        this.$emit("clicked", SlowRise);
      }
      this.selected = toShow;
    }
  }
};
</script>
