<script setup lang="ts">

definePageMeta({
  layout: 'blog',
});
</script>

<template>
  <ContentDoc v-slot="{ doc }">
    <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article
          class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
            <address class="flex items-center mb-6 not-italic">
              <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img class="mr-4 w-16 h-16 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" :alt="doc.author">
                <div>
                  <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{{ doc.author }}</a>
                  <p class="text-base text-gray-500 dark:text-gray-400">{{ doc.role }}</p>
                  <p class="text-base capitalize text-gray-500 dark:text-gray-400">
                    <time pubdate :datetime="doc.date" :title="doc.date">{{ Intl.DateTimeFormat("fr-FR", {
                      dateStyle:
                        "full"
                    }).format(new Date(doc.date)) }}</time>
                  </p>
                </div>
              </div>
            </address>
            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {{ doc.title }}</h1>
          </header>
          <ContentRenderer :value="doc" />

        </article>
      </div>
    </main>

    <aside aria-label="Articles en lien" class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <h2 class="mb-8 text-3xl font-bold text-gray-900  dark:text-white">Articles en lien</h2>
      <div class="px-4 mx-auto max-w-screen-xl flex justify-around flex-wrap">
        <ContentList>
          <template class="flex" #default="{ list }">
            <article class="max-w-xs" v-for="article in list" :key="article._path">
              <NuxtLink :to="article._path">
                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                  class="mb-5 rounded-lg" alt="Image 1">
              </NuxtLink>
              <ProseH3 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
              </ProseH3>
              <ProseP class="mb-5 font-light text-gray-500 dark:text-gray-400">
                {{ article.description }}
              </ProseP>
              <NuxtLink :to="article._path"
                class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                Lire en 2 minutes
              </NuxtLink>
            </article>
          </template>
          <template #not-found>
          </template>
        </ContentList>
      </div>
    </aside>


  </ContentDoc>
</template>
