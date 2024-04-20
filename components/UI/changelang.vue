<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

const setAndRefreshLocale = (newLocale) => {
  setLocale(newLocale);
  location.reload(); 
};


watch(() => locale.value, (newLocale) => {
  console.log('Locale changed to:', newLocale);
});
</script>

<template>
  <select v-model="language">
    <option
      v-for="item in locales"
      :key="typeof item === 'object' ? item.code : item"
      :value="typeof item === 'object' ? item.code : item"
    >
      {{ typeof item === 'object' ? item.name : item }}
    </option>
  </select>
</template>
