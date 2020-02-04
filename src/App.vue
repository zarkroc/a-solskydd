<template>
    <div id="app">
        <header>
            <div class="logo">
                <a href="Home">
                <img src="assets/images/logo2.gif" alt="logo a-solskydd" />
                </a>
            </div>
            <nav>
                <ul>
                <li>
                    <a href="#about">Om</a>
                </li>
                <li>
                    <a href="#">Produkter</a>
                </li>
                <li>
                    <a href="#">Referenser</a>
                </li>
                <li>
                    <a href="#offert">Offert</a>
                </li>
                </ul>
            </nav>
            <ul class="contact">
                <li>
                    <a href="#contact">Kontakt</a>
                </li>
            </ul>
        </header>
        <router-view />
        <footer>
            <div id="contact" class="footer-content">
                <section class="contact_wrap">
                <h2>
                    <i class="far fa-envelope"></i> Kontakta oss
                </h2>
                <section class="phone">
                    <h3>
                    <i class="fas fa-phone-alt"></i> Telefon
                    </h3>
                    <p>
                    08-938012
                    <br />08-938046
                    </p>
                </section>
                <section class="adress">
                    <h3>
                    <i class="fas fa-map-marker-alt"></i> Adress
                    </h3>
                    <p>
                    A-SOLSKYDD
                    <br />Gubbängsvägen 90
                    <br />122 45 Enskede
                    </p>
                </section>
                <section class="open">
                    <h3>
                    <i class="fas fa-door-open"></i> Öppettider
                    </h3>
                    <p>
                    Butiken öppnar endast efter överenskommelse.
                    <br />Vänligen ring för att boka tid.
                    </p>
                </section>
                </section>

                <div class="social">
                <h2>
                    <i class="fas fa-user-friends"></i> Sociala medier
                </h2>
                <a class="icon" href="#">
                    <i class="fab fa-facebook fa-3x"></i>
                </a>
                <a class="icon" href="#">
                    <i class="fab fa-instagram fa-3x"></i>
                </a>
                <br />
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2039.1918340131456!2d18.0842875!3d59.262944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f782a7256bd41%3A0xca0ad61126a3a552!2sA-Solskydd!5e0!3m2!1ssv!2sse!4v1564732784599!5m2!1ssv!2sse"
                width="300"
                height="250"
                frameborder="0"
                allowfullscreen
            ></iframe>
            <p>Copyright &copy; A-SOLSKYDD AB 2019</p>
        </footer>
    </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
