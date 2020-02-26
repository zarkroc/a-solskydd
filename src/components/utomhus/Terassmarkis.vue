<template>
  <div>
    <button
      v-on:click="resetShow('TerassmarkisFA22', $event)"
      :class="{ highlight: selected == 'TerassmarkisFA22' }"
    >
      Terassmarkis FA22/24
    </button>
    <button
      v-on:click="resetShow('TerassmarkisFA40', $event)"
      :class="{ highlight: selected == 'TerassmarkisFA40' }"
    >
      Terassmarkis FA40
    </button>
    <button
      v-on:click="resetShow('TerassmarkisFA62', $event)"
      :class="{ highlight: selected == 'TerassmarkisFA62' }"
    >
      Terassmarkis FA62/64
    </button>
    <button
      v-on:click="resetShow('MarkisMt64', $event)"
      :class="{ highlight: selected == 'MarkisMt64' }"
    >
      Markis MT64
    </button>
  </div>
</template>

<script>
import TerassmarkisFA22 from "@/components/utomhus/markiser/TerassmarkisFA22";
import TerassmarkisFA40 from "@/components/utomhus/markiser/TerassmarkisFA40";
import TerassmarkisFA62 from "@/components/utomhus/markiser/TerassmarkisFA62";
import MarkisMt64 from "@/components/utomhus/markiser/MarkisMt64";

export default {
  data() {
    return {
      selected: undefined,
    };
  },
  methods: {
    resetShow: function(toShow) {
      if (toShow == "TerassmarkisFA22") {
        this.$emit("clicked", TerassmarkisFA22);
      } else if (toShow == "TerassmarkisFA40") {
        this.$emit("clicked", TerassmarkisFA40);
      } else if (toShow == "TerassmarkisFA62") {
        this.$emit("clicked", TerassmarkisFA62);
      } else if (toShow == "MarkisMt64") {
        this.$emit("clicked", MarkisMt64);
      }
      this.selected = toShow;
    },
  },
};
</script>
