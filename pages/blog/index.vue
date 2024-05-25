<script setup lang="ts">
definePageMeta({
  layout: 'blog',
});
</script>

<template>
  <ContentList>
    <template #default="{ list }">
      <NuxtLink v-for="article in list" :key="article._path" :to="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
      </NuxtLink>
    </template>

    <template #not-found>
      <p>Aucun article trouvé</p>
    </template>
  </ContentList>
</template>
