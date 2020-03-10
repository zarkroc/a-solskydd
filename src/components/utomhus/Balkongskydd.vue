<template>
  <div>
    <button
      v-on:click="resetShow('BalkongskyddVav', $event)"
      :class="{ highlight: selected == 'BalkongskyddVav' }"
    >
      Balkongskydd i väv
    </button>
    <button
      v-on:click="resetShow('MaxiBalkongskydd', $event)"
      :class="{ highlight: selected == 'MaxiBalkongskydd' }"
    >
      Maxi Balkongskydd
    </button>
    <button
      v-on:click="resetShow('BalkongskyddHojSankbar', $event)"
      :class="{ highlight: selected == 'BalkongskyddHojSankbar' }"
    >
      Höj och sänkbart
    </button>
  </div>
</template>

<script>
import BalkongskyddVav from "@/components/utomhus/Balkongskydd/BalkongSkyddVav";
import MaxiBalkongskydd from "@/components/utomhus/Balkongskydd/MaxiBalkongskydd";
import BalkongskyddHojSankbar from "@/components/utomhus/Balkongskydd/BalkongskyddHojSankbar";

export default {
  data() {
    return {
      selected: undefined,
    };
  },
  methods: {
    resetShow: function(toShow) {
      if (toShow == "BalkongskyddVav") {
        this.$emit("clicked", BalkongskyddVav);
      } else if (toShow == "MaxiBalkongskydd") {
        this.$emit("clicked", MaxiBalkongskydd);
      } else if (toShow == "BalkongskyddHojSankbar") {
        this.$emit("clicked", BalkongskyddHojSankbar);
      }
      this.selected = toShow;
    },
  },
};
</script>
