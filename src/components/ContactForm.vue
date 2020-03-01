<template>
  <section class="contact_container" id="offert">
    <h2>Offert</h2>
    <section class="mail">
      <h3>Skicka meddelande</h3>
      <form
        class="contact_form"
        action="mailto:info@a-solskydd.se"
        method="post"
        enctype="text/plain"
      >
        <ul>
          <li>
            <label for="name">*Namn:</label>
            <input type="text" name="name" required v-model="message.name" />
            <span>Skriv ditt namn</span>
          </li>
          <li>
            <label for="mail">*E-post:</label>
            <input type="email" name="email" required v-model="message.email" />
            <span>Skriv din e-postadress</span>
          </li>
          <li>
            <label for="message">*Meddelande:</label>
            <textarea
              name="meddelande"
              rows="8"
              cols="80"
              required
              v-model="message.msg"
            ></textarea>
            <span>Skriv ditt meddelande</span>
          </li>
          <li>
            <input type="submit" value="Send" />
          </li>
        </ul>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  props: {
    msg: String,
  },
  data() {
    return {
      errors: [],
      message: {},
    };
  },
  methods: {},
};
</script>
