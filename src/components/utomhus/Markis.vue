<template>
  <div>
    <button
      v-on:click="resetShow('MarkisDa22', $event)"
      :class="{ highlight: selected == 'MarkisDa22' }"
    >
      Markis DA22-DA32
    </button>
    <button
      v-on:click="resetShow('MarkisDa42', $event)"
      :class="{ highlight: selected == 'MarkisDa42' }"
    >
      Markis DA42-DA45
    </button>
    <button
      v-on:click="resetShow('MarkisDa52', $event)"
      :class="{ highlight: selected == 'MarkisDa52' }"
    >
      Markis DA52
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
import MarkisDa22 from "@/components/utomhus/markiser/MarkisDa22";
import MarkisDa42 from "@/components/utomhus/markiser/MarkisDa42";
import MarkisDa52 from "@/components/utomhus/markiser/MarkisDa52";
import MarkisMt64 from "@/components/utomhus/markiser/MarkisMt64";

export default {
  data() {
    return {
      selected: undefined,
    };
  },
  methods: {
    resetShow: function(toShow) {
      if (toShow == "MarkisDa22") {
        this.$emit("clicked", MarkisDa22);
      } else if (toShow == "MarkisDa42") {
        this.$emit("clicked", MarkisDa42);
      } else if (toShow == "MarkisDa52") {
        this.$emit("clicked", MarkisDa52);
      } else if (toShow == "MarkisMt64") {
        this.$emit("clicked", MarkisMt64);
      }
      this.selected = toShow;
    },
  },
};
</script>
