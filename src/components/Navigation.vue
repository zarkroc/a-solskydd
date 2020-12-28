<template>
  <header class="navbar" :class="{ 'hidden-navbar': !showNavbar }">
    <div class="logo">
      <a href="/">
        <img src="@/assets/images/header3.gif" alt="logo a-solskydd" />
      </a>
    </div>
    <nav>
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />
      <ul>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <router-link to="/products" aria-label="submenu"
            >Produkter</router-link
          >
        </li>
        <li>
          <router-link to="/referenser">Referenser</router-link>
        </li>
        <li>
          <a href="/#offert">Offert</a>
        </li>
      </ul>
    </nav>
    <ul class="contact">
      <li>
        <a href="#contact">Kontakt</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
