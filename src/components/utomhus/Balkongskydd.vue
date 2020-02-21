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
  </div>
</template>

<script>
import BalkongskyddVav from "@/components/utomhus/Balkongskydd/BalkongSkyddVav";
import MaxiBalkongskydd from "@/components/utomhus/Balkongskydd/MaxiBalkongskydd";

export default {
  data() {
    return {
      selected: undefined
    };
  },
  methods: {
    resetShow: function(toShow) {
      if (toShow == "BalkongskyddVav") {
        this.$emit("clicked", BalkongskyddVav);
      } else if (toShow == "MaxiBalkongskydd") {
        this.$emit("clicked", MaxiBalkongskydd);
      }
      this.selected = toShow;
    }
  }
};
</script>
