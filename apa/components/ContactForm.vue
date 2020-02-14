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
            <input type="text" name="name" required />
            <span>Skriv ditt namn</span>
          </li>
          <li>
            <label for="mail">*E-post:</label>
            <input type="email" name="mail" required />
            <span>Skriv din e-postadress</span>
          </li>
          <li>
            <label for="message">*Meddelande:</label>
            <textarea name="meddelande" rows="8" cols="80" required></textarea>
            <span>Skriv ditt meddelande</span>
          </li>
          <li>
            <input type="submit" value="Send" />
          </li>
        </ul>
      </form>
    </section>
    <div class="contact-info">
      <section class="phone">
        <h3><i class="fas fa-phone-alt"></i> Telefon</h3>
        <p>
          08-938012
          <br />08-938046
        </p>
      </section>
      <section class="adress">
        <h3><i class="fas fa-map-marker-alt"></i> Adress</h3>
        <p>
          A-SOLSKYDD
          <br />Gubbängsvägen 90 <br />122 45 Enskede
        </p>
      </section>
      <section class="open">
        <h3><i class="fas fa-door-open"></i> Öppettider</h3>
        <p>
          Butiken öppnar endast efter överenskommelse.
          <br />Vänligen ring för att boka tid.
        </p>
      </section>
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
