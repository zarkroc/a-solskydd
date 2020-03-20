<template>
  <div>
    <Flash />
    <main>
      <About />
      <Products />
      <Suppliers />
      <ContactForm />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Flash from "@/components/Flash.vue";
import About from "@/components/About.vue";
import Suppliers from "@/components/Suppliers.vue";
import ContactForm from "@/components/ContactForm.vue";
import Products from "@/components/Products.vue";

export default {
  name: "home",
  components: {
    Flash,
    About,
    Suppliers,
    ContactForm,
    Products,
  },
};
</script>
