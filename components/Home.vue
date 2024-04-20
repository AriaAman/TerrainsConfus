<template>
  <div>
    <!--  Import de la partie Headers -->
    <UI-head id="accueil"></UI-head>
    <section class="accueil">
      <video class="video" src="/sikvideo.mp4" muted loop autoplay></video>
      <!--  Affichage du titre et du paragraphe de l'accueil  -->
      <div class="texteaccueil">
        <h2>Terrain Confus</h2>
        <h3>{{ $t("pageaccueil.h3") }}</h3>
        <p>{{ $t("pageaccueil.p") }}</p>
      </div>
      <!--  Affichage des logox sociaux  -->
      <ul class="logosociaux">
        <li>
          <a href="https://www.facebook.com/"><i class="bi bi-facebook" style="font-size: 2rem; color: black;"></i></a>
        </li>
        <li>
          <a href="https://twitter.com/"><i class="bi bi-twitter" style="font-size: 2rem; color: black;"></i></a>
        </li>
        <li>
          <a href="https://www.instagram.com/?hl=fr"><i class="bi bi-instagram"
              style="font-size: 2rem; color: black;"></i></a>
        </li>
      </ul>
      <!-- Bouton permettant d'aller sur la partie estimer "En savoir plus" -->
      <router-link :to="{ hash: '#indices' }">
        <div class="ensavoirplus bounce">
          <p>{{ $t("pageaccueil.ensavoirplus") }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
            class="bi bi-arrow-down-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
          </svg>
        </div>
      </router-link>
    </section>
    <!--  Import de la partie explication de nos indicateurs-->
    <accueil-indicateurs></accueil-indicateurs>
    <!--  Import de la partie contact -->
    <accueil-contact data-aos="fade-right" id="contact"></accueil-contact>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

/*Fléche qui bounce */
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

.ensavoirplus {
  position: absolute;
  color: white;
  z-index: 10000;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  left: 0;
  min-width: 100%;
}

/*Fin flèche qui bounce */
/*Début de la partie Accueil*/
.accueil {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background: #111;
  color: white;
  z-index: 3;
}

.video {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
}

.texteaccueil {
  padding-left: 60px;
  z-index: 1;
}

.texteaccueil h2 {
  font-size: 3em;
  font-weight: 800;
  line-height: 1em;
  text-transform: uppercase;
}

.texteaccueil h3 {
  font-size: 1.8em;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
}

.texteaccueil p {
  font-size: 1.1em;
  margin: 20px 0;
  font-weight: 400;
  max-width: 700px;
}

.texteaccueil .a {
  display: inline-block;
  font-size: 1.7em;
  background-color: white;
  padding: 10px 10px;
  text-decoration: none;
  color: black;
  margin-top: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 4px;
  transition: 0.2s;
  z-index: 11;
}

.texteaccueil a:hover {
  letter-spacing: 6px;
  z-index: inherit;
}

/*Fin de la partie accueil*/
/*Début de la partie logosociaux*/
.logosociaux {
  position: absolute;
  bottom: 15px;
  left: 60px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  z-index: 100000;
}

.logosociaux li {
  list-style: none;
}

.logosociaux li a {
  background-color: none;
  display: inline-block;
  filter: invert(1);
  margin-right: 20px;
  transform: scale(0.5);
  transition: 0.5s;
}

.logosociaux li a:hover {
  transform: scale(0.5) translateY(-15px);
}

.logosociaux li img {
  height: 100%;
  width: 100%;
}

/*Fin de la partie logosociaux*/
/*RESPONSIVE TABLETTE ET MOBILE*/
/*@media only screen and (max-width: 900px) {*/
/*  !*Début de la partie accueil*!*/
/*  .texteaccueil {*/
/*    padding: 0 3px;*/
/*    z-index: 1;*/
/*    text-align: center;*/
/*  }*/

/*  .texteaccueil h2 {*/
/*    font-size: 2em;*/
/*  }*/

/*  .texteaccueil h3 {*/
/*    font-size: 1em;*/
/*  }*/
/*}*/
@media only screen and (max-width: 900px) {

  /*Début de la partie accueil*/
  .texteaccueil {
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .texteaccueil h2 {
    font-size: 2em;
  }

  .texteaccueil h3 {
    font-size: 1em;
  }

  .texteaccueil p {
    font-size: 1em;
  }

  .texteaccueil .a {
    display: inline-block;
    font-size: 1.7em;
  }

  /*Fin de la partie accueil*/
  /*Début de la partie logosociaux*/
  .logosociaux {
    position: absolute;
    bottom: 10px;
    left: 11px;
  }

  .ensavoirplus {
    font-size: 1em;
  }

  /*Fin de la partie logosociaux*/
}

@media only screen and (max-width: 500px) {
  .texteaccueil {
    padding: 0px 3px;
    z-index: 1;
    text-align: center;
  }

  .texteaccueil h2 {
    font-size: 2.2em;
  }

  .texteaccueil h3 {
    font-size: 1.1em;
  }

  .texteaccueil p {
    font-size: 0.8em;
  }

  .texteaccueil .a {
    display: inline-block;
    font-size: 1.7em;
  }

  /*Fin de la partie accueil*/
  /*Début de la partie logosociaux*/
  .logosociaux {
    position: absolute;
    bottom: 10px;
    left: 11px;
    font-size: 1rem;
  }

  .ensavoirplus {
    font-size: 1em;
  }
}
</style>
