<template>
  <!-- Import du Headers mais en mode black pour que cela se voit mieux sur un fond blanc -->
  <Headers isBlack></Headers>
  <div class="fond">
      <!-- Juste la partie conditions d'utilisateurs -->
      <h1 class="titre">Politique de confidentialité</h1>
      <div class="fondquestion">
          <h3 class="titrecondiuti" data-aos="fade-right">Qui sommes-nous ?</h3>
          <p class="paragraphecondiuti" data-aos="fade-right">
              L'adresse de notre site est : https://leterrainconfus.fr/. Terrain Confus s'engage à protéger votre vie privée et à garantir la confidentialité de vos informations personnelles.
          </p>
          <h3 class="titrecondiuti" data-aos="fade-right">Commentaires</h3>
          <p class="paragraphecondiuti" data-aos="fade-right">
              Quand vous laissez un commentaire sur notre site Terrain Confus, les données inscrites dans le formulaire de commentaire, ainsi que votre adresse IP et l'agent utilisateur de votre navigateur sont collectés pour nous aider à la détection des commentaires indésirables. Une chaîne anonymisée créée à partir de votre adresse e-mail (également appelée hash) peut être envoyée au service Gravatar pour vérifier si vous utilisez ce dernier. Les clauses de confidentialité du service Gravatar sont disponibles ici : https://automattic.com/privacy/. Après validation de votre commentaire, votre photo de profil sera visible publiquement à côté de votre commentaire.
          </p>
          <h3 class="titrecondiuti" data-aos="fade-right">Médias</h3>
          <p class="paragraphecondiuti" data-aos="fade-right">
              Si vous téléversez des images sur le site Terrain Confus, nous vous conseillons d'éviter de téléverser des images contenant des données EXIF de coordonnées GPS. Les personnes visitant votre site peuvent télécharger et extraire des données de localisation depuis ces images.
          </p>
          <h3 class="titrecondiuti" data-aos="fade-right">Cookies</h3>
          <p class="paragraphecondiuti" data-aos="fade-right">
              Si vous déposez un commentaire sur notre site Terrain Confus, il vous sera proposé d'enregistrer votre nom, adresse e-mail et site dans des cookies. C'est uniquement pour votre confort afin de ne pas avoir à saisir ces informations si vous déposez un autre commentaire plus tard. Ces cookies expirent au bout d'un an. Si vous vous rendez sur la page de connexion, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur. Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d'écran. La durée de vie d'un cookie de connexion est de deux jours, celle d'un cookie d'option d'écran est d'un an. Si vous cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé. En modifiant ou en publiant une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée personnelle. Il indique simplement l'ID de la publication que vous venez de modifier. Il expire au bout d'un jour.
          </p>
          <h3 class="titrecondiuti" data-aos="fade-right">Contenu embarqué depuis d'autres sites</h3>
          <p class="paragraphecondiuti" data-aos="fade-right">
              Les articles de ce site Terrain Confus peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d'autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site. Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec ces contenus embarqués si vous disposez d'un compte connecté sur leur site web.
          </p>
          <h3 class="titrecondiuti" data-aos="fade-right">Utilisation et transmission de vos données personnelles</h3>
          <p class="paragraphecondiuti" data-aos="fade-right">
              Si vous demandez une réinitialisation de votre mot de passe sur Terrain Confus, votre adresse IP sera incluse dans l'e-mail de réinitialisation.
          </p>
          <h3 class="titrecondiuti" data-aos="fade-right">Durées de stockage de vos données</h3>
          <p class="paragraphecondiuti" data-aos="fade-right">
              Si vous laissez un commentaire sur Terrain Confus, le commentaire et ses métadonnées sont conservés indéfiniment. Cela permet de reconnaître et approuver automatiquement les commentaires suivants au lieu de les laisser dans la file de modération. Pour les comptes qui s'inscrivent sur notre site (le cas échéant), nous stockons également les données personnelles indiquées dans leur profil. Tous les comptes peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l'exception de leur identifiant). Les gestionnaires du site peuvent aussi voir et modifier ces informations.
          </p>
          <h3 class="titrecondiuti" data-aos="fade-right">Les droits que vous avez sur vos données</h3>
          <p class="paragraphecondiuti" data-aos="fade-right">
              Si vous avez un compte ou si vous avez laissé des commentaires sur Terrain Confus, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.
          </p>
          <h3 class="titrecondiuti" data-aos="fade-right">Transmission de vos données personnelles</h3>
          <p class="paragraphecondiuti" data-aos="fade-right">
              Les commentaires des visiteurs de Terrain Confus peuvent être vérifiés à l'aide d'un service automatisé de détection des commentaires indésirables.
          </p>
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