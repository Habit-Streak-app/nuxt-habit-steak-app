<script setup>
import { useI18n } from 'vue-i18n'

const { setLocale, locale } = useI18n()

const currentLocale = computed(()=>{
  return locale.value;
});
</script>

<template>
  <div class="divider divider-primary block text-center font-bold">{{ $t('lang.change') }}</div>
  <div class="space-y-3">
    <button class="btn w-full" :class="{'btn-secondary' : currentLocale== 'en','btn-primary' : currentLocale!= 'en'}" @click="setLocale('en')">{{ $t('lang.en') }}</button>
    <button class="btn w-full" :class="{'btn-secondary' : currentLocale== 'de','btn-primary' : currentLocale!= 'de'}" @click="setLocale('de')">{{ $t('lang.de') }}</button>
    <button class="btn w-full" :class="{'btn-secondary' : currentLocale== 'fr','btn-primary' : currentLocale!= 'fr'}" @click="setLocale('fr')">{{ $t('lang.fr') }}</button>
    <p class="prose w-full bg-white px-3 py-3 text-black text-center">
      {{ $t('lang.selected') }}:
      {{ $t('lang.' + currentLocale) }}
    </p>
  </div>
</template>