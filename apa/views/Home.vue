<template>
  <div>
    <Flash />
    <main>
      <About />
      <div class="products">
        <div class="in_products">
          <section class="in_border">
            <h2>Inomhus</h2>
          </section>
        </div>
        <div class="out_products">
          <section class="out_border">
            <h2>Utomhus</h2>
          </section>
        </div>
      </div>
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

export default {
  name: "home",
  components: {
    Flash,
    About,
    Suppliers,
    ContactForm
  }
};
</script>
