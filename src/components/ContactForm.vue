<template>
  <section class="contact_container" id="offert">
    <h2 id="offert">Offert</h2>
    <p>
      Om offert önskas vore vi tacksamma att Du beaktar följande i Din
      förfrågan:
    </p>
    <h3>För invändiga produkter</h3>
    <p>
      Måtta bredd och höjd över det område som ska täckas av solskyddet.
      Cirkamått räcker, och glöm inte ange önskat antal för produkt med samma
      mått.
    </p>
    <h3>För utvändiga produkter</h3>
    <p>
      Fönstermarkis; måtta bredd och fönstrets halva höjd.<br />
      Terrassmarkis; måtta bredd och det utfall som markisen ska täcka. <br />
      Balkongmarkis; måtta balkongens bredd. <br />
      Höjd- och sänkbart balkongskydd;<br />
      måtta längs räcket för det område som ska täckas. <br />
      Cirkamått räcker i samtliga fall.
    </p>
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
