<template>
    <h2 :id="id">
        <NuxtLink v-if="id && generate" :href="`#${id}`"
            class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white no-underline">
            <slot />
        </NuxtLink>
        <slot v-else />
    </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>