<template>
  <div>
    <button
      v-on:click="resetShow('VertikalmarkisVS24', $event)"
      :class="{ highlight: selected == 'VertikalmarkisVS24' }"
    >
      VS24-44
    </button>
    <button
      v-on:click="resetShow('VertikalmarkisVS62', $event)"
      :class="{ highlight: selected == 'VertikalmarkisVS62' }"
    >
      VS 62 & 72
    </button>
    <button
      v-on:click="resetShow('VertikalmarkisZS82', $event)"
      :class="{ highlight: selected == 'VertikalmarkisZS82' }"
    >
      ZS82
    </button>
  </div>
</template>

<script>
import VertikalmarkisVS24 from "@/components/utomhus/markiser/VertikalmarkisVS24";
import VertikalmarkisVS62 from "@/components/utomhus/markiser/VertikalmarkisVS62";
import VertikalmarkisZS82 from "@/components/utomhus/markiser/VertikalmarkisZS82";

export default {
  data() {
    return {
      selected: undefined,
    };
  },
  methods: {
    resetShow: function(toShow) {
      if (toShow == "VertikalmarkisVS24") {
        this.$emit("clicked", VertikalmarkisVS24);
      } else if (toShow == "VertikalmarkisVS62") {
        this.$emit("clicked", VertikalmarkisVS62);
      } else if (toShow == "VertikalmarkisZS82") {
        this.$emit("clicked", VertikalmarkisZS82);
      }
      this.selected = toShow;
    },
  },
};
</script>
