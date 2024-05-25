<template>
  <section id="contact">
    <div class="container">
      <!-- Titre -->
      <div class="title">
        <p class="h6">Besoin d'assistance ou d'un conseil expert ?</p>
        <p class="h3">Nous sommes à votre écoute</p>
      </div>
      <!-- Formulaire de contact -->
      <form action="#" method="post">
        <!-- Options de contact -->
        <div class="selectcontact" >
          <label class="selectcontact" for="contact">
            <input type="radio" id="demo" value="demo" class="test" v-model="contact"><p>Demandez une démo</p>
          </label>
          <label class="selectcontact" for="contact">
            <input type="radio" id="contacte" value="contact" class="test" v-model="contact"><p>Écrivez-nous</p>
          </label>
          <label class="selectcontact" for="contact">
            <input type="radio" id="support" value="support" class="test" v-model="contact"><p>Support client</p>
          </label>
        </div>
        <!-- Input nom -->
        <input id="contactNom" class="input" type="text" name="name" placeholder="Votre nom" required/>
        <!-- Input email -->
        <input id="contactEmail" class="input" type="email" name="email" placeholder="Votre adresse email" required/>
        <!-- Input objet -->
        <input id="contactDemande" class="input" type="text" name="subject" placeholder="Objet de votre demande" required/>
        <!-- Input numéro de téléphone -->
        <input id="contactNumTelephone" class="input" type="text" name="number" placeholder="Votre numéro de téléphone..." required/>
        <!-- Input message -->
        <textarea name="message" placeholder="Votre message" id="contactMessage"></textarea>
        <!-- Bouton envoyer -->
        <button type="submit">Envoyer le message</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
p{
  margin-bottom: 0px;
}
.selectcontact{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  margin-bottom: 12px;
}
input.test{
  width: 16px;
  height: 30px;

}
select {
  font-size: 1rem;
  padding: 10px 5px;
  border-radius: 10px;
  margin-bottom: 15px;
}
/*Contact*/
section#contact {
  background-color: white;
  padding: 100px 0;
}
section#contact .container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 60px 10px;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0px 10px 50px -10px #d6d6d6;
}
section#contact .container .title {
  text-align: center;
  margin-bottom: 50px;
  color: #2a2a2a;
}
section#contact .container .title .h6 {
  font-size: 1em;
}
section#contact .container .title .h3 {
  font-size: 2.2em;
}
section#contact .container form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 600px;
}
section#contact .container form .input {
  width: 47%;
}
section#contact .container form .input:hover,
section#contact .container form textarea:hover {
  border-bottom: 2px solid #0070f3;
}
section#contact .container form textarea {
  width: 100%;
  resize: none;
  height: 120px;
  margin-bottom: 70px;
}
section#contact .container form .input,
section#contact .container form textarea {
  margin: 10px 0;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-bottom: 2px solid #e4e4ec;
  transition: 0.2s;
}
section#contact .container form button {
  width: 192px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #0070f3;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  outline: none;
  margin: 0 auto;
}
@media only screen and (max-width: 900px) {
  p{
    margin-bottom: 0px;
  }
}
@media only screen and (max-width: 450px) {
  section#contact .container .title .h3 {
    font-size: 2em;
  }

  section#contact .container .title .h6 {
    font-size: 0.8em;
  }

  section#contact .container form .input, section#contact .container form textarea {
    font-size: 13px;
  }
  p {
    font-size: 13px;
  }
}
</style>

<script>

import {ref} from "vue";

export default {
  name: "contact",
  components:{

  },
  setup(){
    const contact = ref([]);

    return{
      contact
    }
  },
};
</script>