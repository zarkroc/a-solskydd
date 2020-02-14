<template>
  <section class="suppliers">
    <h2>Leverantörer</h2>
    <div class="suppliers-logo">
      <img src="@/assets/images/supplier/hsb.png" alt="HSB" />
      <img src="@/assets/images/supplier/nordic.jpg" alt="Nordic light" />
      <img
        src="@/assets/images/supplier/sdb.png"
        alt="Scandinavian designer blinds"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Suppliers",
  props: {
    msg: String
  }
};
</script>
