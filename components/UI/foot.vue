<template>
  <footer>
    <div class="colonnes" id="colonnesF">
      <div class="colonne">
        <p class="p">{{$t("footer.colonne.titreinformations")}}</p>
        <a><router-link to="/faq" id="btnFaq">{{$t("footer.colonne.foireauquestion")}}</router-link></a>
        <a><router-link to="/faq" id="btnQuisommenous">{{ $t("footer.colonne.quisommenous") }}</router-link></a>
        <a><router-link to="/#contact" id="btnnousrecrutons">Contactez-nous !</router-link></a>
      </div>
      <div class="colonne">
        <p class="p">{{$t("footer.colonne.titrecondition")}}</p>
        <a><router-link to="/condition-utilisateur" id="btnConditions">{{ $t("footer.colonne.conditonsgeneral") }}</router-link></a>
        <a><router-link to="/condition-utilisateur" id="btnPolitiquedeconfidentialite">{{ $t("footer.colonne.politiquedeconfidentialite") }}</router-link></a>
        <a><router-link to="/condition-utilisateur" id="btnCookies">{{ $t("footer.colonne.cookies") }}</router-link></a>
      </div>
      <div class="colonne">
        <p class="p">{{$t("footer.colonne.titrecompte")}} </p>
        <a><router-link to="/compte" id="btnCompte">{{ $t("footer.colonne.compte") }}</router-link></a>
        <a><router-link to="/compte" id="btnEnregistrer">{{ $t("footer.colonne.enregistrer") }}</router-link></a>
        <a><router-link to="/compte" id="btnConnecter">{{ $t("footer.colonne.connecter") }}</router-link></a>
      </div>
    </div>
    <div class="baddufooter">
      <div class="social">
        <p>{{ $t("footer.colonne.rejoignez-nous") }}</p>
          <ul class="logosociaux">
            <li>
              <a href="https://www.facebook.com/"><i class="bi bi-facebook" style="font-size: 3rem; color: black;"></i></a>
            </li>
            <li>
              <a href="https://twitter.com/"><i class="bi bi-twitter" style="font-size: 3rem; color: black;"></i></a>
            </li>
            <li>
              <a href="https://www.instagram.com/?hl=fr"><i class="bi bi-instagram" style="font-size: 3rem; color: black;"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/"><i class="bi bi-linkedin" style="font-size: 3rem; color: black;"></i></a>
            </li>
          </ul>
      </div>
      <div class="applications">
        <p>{{ $t("footer.colonne.decouvrerapplication") }}</p>
        <ul class="logoapplications">
          <li>
            <a href="https://play.google.com/store/apps">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="black" class="bi bi-google-play" viewBox="0 0 16 16">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.apple.com/fr/store"> <i class="bi bi-apple " style="font-size: 3rem; color: black;"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p class="copyrighttext">©Terrains Confus. Copyright 2024</p>
           <p class="h5">{{ $t("footer.colonne.numéro") }}</p>
    </div>
  </footer>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
html, body {
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
  background-color:#e5e5e5;
  padding: 25px 100px;
  color: #1D1D1F;
  z-index: 1000;
}
footer .colonnes {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #1D1D1F;
  height: 100%;
}
.colonne {
  display: flex;
  flex-direction: column;
}
.colonne a {
  color: #1D1D1F;
  text-decoration: none;
  font-size: 14px;
  padding-top: 8px;
  margin-top: 5px;
}
.colonne a:hover {
  text-decoration: underline;
}
.copyright {
  width: 50%;
  margin-top: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.baddufooter{
  margin-top: 3%;
  display: flex;
}
.p{
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
.logoapplications li img{
    height: 100%;
    width: 100%;
}
/*LOGO*/
.social{
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
.logosociaux li img{
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
  .baddufooter{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .social{
    width: 100%;
  }
  .copyright{
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

<script setup>
</script>