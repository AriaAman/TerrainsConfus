<script setup lang="ts">
useHead({
  title: 'Aménagement de Terrain sur Mesure | Terrain Confus',
  meta: [
    { name: 'description', content: 'Terrain Confus offre des solutions personnalisées pour la transformation et l’aménagement de votre espace extérieur. Découvrez nos services et notre expertise en quelques clics.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Terrain Confus' },
    { property: 'og:url', content: 'https://leterrainconfus.fr/' }
  ],
  bodyAttrs: {
    class: 'aménagement-extérieur'
  },
  script: [ { innerHTML: 'console.log(\'Bienvenue sur Terrain Confus\')' } ]
})

useSeoMeta({
  title: 'Terrain Confus - Aménagez votre extérieur avec créativité et expertise',
  ogTitle: 'Aménagement de Terrain Sur Mesure | Terrain Confus',
  description: 'Réalisez l’aménagement de votre terrain avec Terrain Confus. Nous combinons créativité et expertise technique pour transformer votre espace extérieur selon vos souhaits.',
  ogDescription: 'Spécialiste de l’aménagement de terrain, Terrain Confus vous accompagne dans la conception d’un espace extérieur unique et sur mesure. Commencez votre projet avec nous dès aujourdhui !',
  ogImage: 'https://leterrainconfus.fr/image-og.png',
  twitterCard: 'summary_large_image',
  twitterSite: '@TerrainConfus',
  twitterCreator: '@VotreCompteTwitter'
})
</script>

<template>
  <div>
    <UI-head/>
    <Home/>
    <UI-foot/>
  </div>
</template>


<style>
/*Importer depuis boostrap*/
* {
  font-family: "Poppins", sans-serif;
}
h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
}
h3{
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
}
input, button, select, optgroup, textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
*, *::before, *::after {
  box-sizing: border-box;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
html, body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
  margin: 0;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
    width: 7px;
}
::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d; 
}
</style>