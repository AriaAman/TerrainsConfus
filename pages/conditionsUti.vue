<template>
    <!-- Import du Headers mais en mode black pour que cela se voit mieux sur un fond blanc -->
        <Headers isBlack></Headers>
    <div class="fond">
      <!-- Juste la partie conditions d'utilisateurs -->
        <h1 class="titre">{{ $t("conditionutilisateur.politiquedeconfidentialité") }}</h1>
        <div class="fondquestion">
            <h3 class="titrecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.quisommenous") }}</h3>
                <p class="paragraphecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.quisommenousP") }}</p>
            <h3 class="titrecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.commentaires") }}</h3>
                <p class="paragraphecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.commentairesP") }}</p>
            <h3 class="titrecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.média") }}</h3>
                <p class="paragraphecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.médiaP") }}</p>
            <h3 class="titrecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.cookies") }}</h3>
                <p class="paragraphecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.cookiesP") }}</p>
            <h3 class="titrecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.contenueembarqué") }}</h3>
                <p class="paragraphecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.contenueembarquéP") }}</p>
            <h3 class="titrecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.utilisationettransmission") }}</h3>
                <p class="paragraphecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.utilisationettransmissionP") }}</p>
            <h3 class="titrecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.duréedestockage") }}</h3>
                <p class="paragraphecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.duréedestockageP") }}</p>
            <h3 class="titrecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.droitdonnée") }}</h3>
                <p class="paragraphecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.droitdonnéeP") }}</p>
            <h3 class="titrecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.transmissiondonnées") }}</h3>
                <p class="paragraphecondiuti" data-aos="fade-right">{{ $t("conditionutilisateur.transmissiondonnéesP") }}</p>
        </div>
    </div>
    </template>
    
    <style scoped>
    .fond{
      padding: 10%;
    }
    .fondquestion{
      margin-left: 15px;
    }
    .titre {
      margin-bottom: 50px;
      font-size: 1.8em;
      display: flex;
      justify-content: center;
      text-align: center;
    }
    h3.titrecondiuti {
      margin-bottom: 20px;
    }
    p.paragraphecondiuti {
      margin-left: 15px;
      font-size: 18px;
    }
    
    @media only screen and (max-width: 600px) {
      .titre {
        margin-bottom: 50px;
        margin-top: 25%;
        font-size: 1.3em;
        display: flex;
        justify-content: center;
        text-align: center;
      }
      .fond{
        padding: 1%;
      }
      p.paragraphecondiuti {
        margin-left: 1px;
        font-size: 15px;
      }
    }
    </style>
    <script>
    import Headers from "@/components/UI/head.vue";
    export default {
    components: {
        Headers,
      },
    }
    </script>