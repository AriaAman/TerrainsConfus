<template>
  <footer>
    <div class="colonnes" id="colonnesF">
      <div class="colonne">
        <p class="p">Informations</p>
        <NuxtLink to="/faq" id="btnFaq">Foire aux questions</NuxtLink>
        <NuxtLink to="/faq" id="btnQuisommenous">Qui sommes-nous ?</NuxtLink>
        <NuxtLink to="/#contact" id="btnnousrecrutons"
          >Contactez-nous !</NuxtLink
        >
      </div>
      <div class="colonne">
        <p class="p">Conditions</p>
        <NuxtLink to="/condition-utilisateur" id="btnConditions"
          >Conditions générales</NuxtLink
        >
        <NuxtLink to="/condition-utilisateur" id="btnPolitiquedeconfidentialite"
          >Politique de confidentialité</NuxtLink
        >
      </div>
      <div class="colonne">
        <p class="p">Compte</p>
        <NuxtLink to="/compte" id="btnCompte">Compte</NuxtLink>
        <NuxtLink to="/compte" id="btnEnregistrer">S'enregistrer</NuxtLink>
        <NuxtLink to="/compte" id="btnConnecter">Se connecter</NuxtLink>
      </div>
    </div>
    <div class="baddufooter">
      <div class="social">
        <p>Rejoignez-nous sur les réseaux sociaux !</p>
        <ul class="logosociaux">
          <li>
            <a href="https://www.facebook.com/">
              <i
                class="bi bi-facebook"
                style="font-size: 3rem; color: black"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <i
                class="bi bi-twitter"
                style="font-size: 3rem; color: black"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/?hl=fr">
              <i
                class="bi bi-instagram"
                style="font-size: 3rem; color: black"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <i
                class="bi bi-linkedin"
                style="font-size: 3rem; color: black"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="applications">
        <p>Découvrez nos applications</p>
        <ul class="logoapplications">
          <li>
            <a href="https://play.google.com/store/apps">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="black"
                class="bi bi-google-play"
                viewBox="0 0 16 16">
                <path
                  d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.apple.com/fr/store">
              <i class="bi bi-apple" style="font-size: 3rem; color: black"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p class="copyrighttext">©Terrains Confus. Copyright 2024</p>
      <p class="h5">Des questions ? Appelez le 01.70.52.95.79</p>
    </div>
  </footer>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
html,
body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
/*Pied de page*/
footer {
  position: relative;
  width: 100%;
  background-color: #e5e5e5;
  padding: 25px 100px;
  color: #1d1d1f;
  z-index: 1000;
}
footer .colonnes {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #1d1d1f;
  height: 100%;
}
.colonne {
  display: flex;
  flex-direction: column;
}
.colonne a {
  color: #1d1d1f;
  text-decoration: none;
  font-size: 14px;
  padding-top: 8px;
  margin-top: 5px;
}
.colonne a:hover {
  text-decoration: underline;
}
.copyright {
  width: 100%;
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.baddufooter {
  margin-top: 3%;
  display: flex;
}
.p {
  font-size: 21px;
  font-weight: 500;
}
/*APPLICATIONS*/
.applications {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.logoapplications {
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  z-index: 100000;
}
.logoapplications li {
  list-style: none;
}
.logoapplications li a {
  background-color: none;
  display: inline-block;
  margin-right: 20px;
  transform: scale(0.5);
  transition: 0.5s;
}
.logoapplications li a:hover {
  transform: scale(0.5) translateY(-15px);
}
.logoapplications li img {
  height: 100%;
  width: 100%;
}
/*LOGO*/
.social {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.logosociaux {
  position: relative;
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
/* Fin du pied de page */
@media only screen and (max-width: 600px) {
  footer .colonnes {
    flex-direction: column-reverse;
    padding: 10px;
  }
  footer .colonnes .colonne {
    padding: 5px;
    font-size: 18px;
    width: 100%;
  }
  footer {
    padding: 25px 60px;
  }
  .baddufooter {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .social {
    width: 100%;
  }
  .copyright {
    width: 100%;
  }
}
@media only screen and (max-width: 500px) {
  p.copyrighttext {
    font-size: 14px;
  }
  .social {
    align-items: center;
  }
  footer {
    padding: 25px 30px;
  }
  /*APPLICATIONS*/
  .applications {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
}
</style>

<script setup></script>
