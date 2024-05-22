<script setup>
// Props
const props = defineProps({
  isBlack: {
    type: Boolean,
    default: false,
  },
});

// Data
const isNavBarOpen = ref(false);
</script>

<template>
  <header>
    <div class="navbar" ref="headRef" :class="{ fixed: isBlack }">
      <NuxtLink to="/" class="titre" :class="{ noire: isBlack }"
        >TERRAIN CONFUS</NuxtLink
      >
      <div class="menu">
        <div class="toggles" @click="ToggleNavBar()">
          <p class="menu-header">MENU</p>
          <div :class="{ svgcolor: isNavBarOpen }">
            <i class="bi bi-list" style="font-size: 2.2rem"></i>
          </div>
        </div>
        <div class="menuitems">
          <NuxtLink to="/" id="btnaccueil">{{ $t('header.accueil') }}</NuxtLink>
          <NuxtLink to="/blog" id="btncarte">{{ $t('header.blog') }}</NuxtLink>
        </div>
        <UI-changelang></UI-changelang>
      </div>
    </div>
    <!--HEADER TELEPHONE-->
    <div v-if="isNavBarOpen == true" class="ULhead" data-aos="fade-down-left">
      <div class="svgblack">
        <i
          class="bi bi-list"
          style="font-size: 2.2rem"
          @click="ToggleNavBar()"></i>
      </div>
      <ul>
        <li>
          <NuxtLink to="/" id="btnaccueil">{{ $t('header.accueil') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog" id="btncarte">{{ $t('header.blog') }}</NuxtLink>
        </li>
      </ul>
      <!-- Import de la partie changement de langue-->
      <UI-changelang></UI-changelang>
    </div>
  </header>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.btnPro {
  font-weight: 500;
  color: #0070f3;
  cursor: pointer;
}

.noire {
  color: black !important;
}

.menuitems {
  display: flex;
  align-items: center;
}

.fixed {
  z-index: 100000;
  border: none;
  border-bottom: 2px black solid;
  background-color: white;
}

.fixed a {
  color: black;
}

.fixed .toggles {
  color: black;
}

.fixed .svgcolor {
  color: black;
}

.svgcolor {
  color: white;
}

.langue {
  height: 100%;
  margin-left: 17px;
  border-radius: 20%;
}

.navbar {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  margin: 0px 0px;
  z-index: 1001;
}

.titre {
  margin-left: 15px;
  margin-top: 10px;
  font-size: 1em;
  font-weight: bold;
  z-index: 1001;
  color: white;
  text-decoration: none;
}

.titre:active {
  text-decoration: none;
}

a {
  color: white;
  font-size: 18px;
  margin: 0 5px;
  padding: 10px 9px;
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  box-sizing: border-box;
  border: none;
  outline: none;
  border-bottom: 2px solid #e4e4ec;
  text-decoration: none;
}

.compte {
  border: 1px solid white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
}

.compte:hover {
  background-color: white;
  color: black;
}

.profile {
  text-decoration: none;
  padding: 5px 10px;
  margin-left: 20px;
}

.menu-header {
  /* font-size: 1.8em;
  color: white;
  display: flex;
  justify-content: center;
  right: 9px;
  bottom: 6px; */
  display: none;
}

.toggles {
  display: none;
  /* color: white;
  display: flex; */
}

.menu {
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  z-index: 1001;
}

.togglenavbarlangagediv {
  display: flex;
  justify-content: center;
  margin: 0 20px;
  cursor: pointer;
}

.togglenavbarlangage {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  margin-top: 40px;
  background-color: white;
  border-radius: 5%;
}

.togglenavbarlangage li {
  list-style: none;
  margin-top: 8px;
}

.togglenavbarlangage a {
  margin: 0px;
  color: black;
}

.togglenavbarlangage button {
  margin: 0px;
}

.ULhead {
  display: none;
  /* position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;*/
  z-index: 10000;
}

@media only screen and (max-width: 900px) {
  .titre {
    margin-left: 0;
    margin-top: 0;
  }
}

@media only screen and (max-width: 600px) {
  .btnPro {
    position: absolute;
    top: 2%;
    left: 2%;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .svgcolor {
    color: black;
  }

  .langue {
    height: 5%;
    position: absolute;
    bottom: 1%;
    right: 1%;
    margin-left: 0px;
    border-radius: 20%;
  }

  .togglenavbarlangage {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: white;
    border-radius: 5%;
    margin-top: 0px;
  }

  .togglenavbarlangagediv {
    display: flex;
    justify-content: center;
    margin: 0px 20px;
    flex-direction: column;
    align-items: center;
  }

  .menuitems {
    display: none;
  }

  .menu {
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    z-index: 1001;
  }

  .toggles {
    display: flex;
    justify-content: flex-end;
    z-index: 10000;
  }

  .navbar {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 31px;
    margin: 0px 0px;
    z-index: 1001;
    color: white;
  }

  .menu-header {
    display: none;
    /* font-size: 1.8em;
  color: white;
  display: flex;
  justify-content: center;
  right: 9px;
  bottom: 6px; */
  }

  .ULhead {
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    background-color: white;
    padding: 6px 4px 4px;
    box-sizing: border-box;
    box-shadow: 0px 10px 50px -10px #d6d6d6;
    align-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 0%;
  }

  .titre {
    font-size: 1.2em;
    font-weight: bold;
    z-index: 1001;
    color: white;
    text-decoration: none;
    margin-left: -11px;
    margin-top: 0px;
    padding-left: 0px;
  }

  .compte {
    font-size: 1.3em;
  }

  .compte:hover {
    background-color: white;
    color: black;
    font-size: 1.1em;
  }

  .ULhead ul li {
    list-style: none;
  }

  .ULhead ul a {
    font-size: 2em;
    text-decoration: none;
    color: black;
  }

  .profile {
    color: black;
  }

  .svgblack {
    position: absolute;
    top: 2%;
    right: 6%;
  }

  .titre {
    font-size: 1em;
  }

  i {
    font-size: 2em !important;
  }

  .navbar {
    padding: 5px 20px;
  }

  .ULhead ul li {
    list-style: none;
  }

  .ULhead ul a {
    font-size: 1.5em;
    text-decoration: none;
    color: black;
  }
}
</style>
