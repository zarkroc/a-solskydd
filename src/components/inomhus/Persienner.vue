<template>
  <div>
    <button
      v-on:click="resetShow('16mm', $event)"
      :class="{ highlight: selected == '16mm' }"
    >
      16mm
    </button>
    <button
      v-on:click="resetShow('25mm', $event)"
      :class="{ highlight: selected == '25mm' }"
    >
      25mm
    </button>
    <button
      v-on:click="resetShow('35mm', $event)"
      :class="{ highlight: selected == '35mm' }"
    >
      35mm
    </button>
    <button
      v-on:click="resetShow('50mm', $event)"
      :class="{ highlight: selected == '50mm' }"
    >
      50mm
    </button>
    <button
      v-on:click="resetShow('Wood', $event)"
      :class="{ highlight: selected == 'Wood' }"
    >
      Trä
    </button>
    <button
      v-on:click="resetShow('NoHole', $event)"
      :class="{ highlight: selected == 'NoHole' }"
    >
      No Hole
    </button>
  </div>
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
      selected: undefined
    };
  },
  methods: {
    resetShow: function(toShow) {
      if (toShow == "16mm") {
        this.$emit("clicked", Persienner16mm);
      } else if (toShow == "25mm") {
        this.$emit("clicked", Persienner25mm);
      } else if (toShow == "35mm") {
        this.$emit("clicked", Persienner35mm);
      } else if (toShow == "50mm") {
        this.$emit("clicked", Persienner50mm);
      } else if (toShow == "Wood") {
        this.$emit("clicked", Wood);
      } else if (toShow == "NoHole") {
        this.$emit("clicked", NoHole);
      }
      this.selected = toShow;
    }
  }
};
</script>
