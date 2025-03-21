<script setup>
import { useI18n } from 'vue-i18n'

const { setLocale, locale } = useI18n()

const currentLocale = locale.value;
</script>

<template>
  <div class="divider divider-primary block text-center font-bold">{{ $t('lang.change') }}</div>
  <div class="space-y-3">
    <button class="btn w-full" :class="{'btn-primary' : currentLocale== 'en','btn-secondary' : currentLocale!= 'en'}" @click="setLocale('en')">{{ $t('lang.en') }}</button>
    <button class="btn w-full" :class="{'btn-primary' : currentLocale== 'de','btn-secondary' : currentLocale!= 'de'}" @click="setLocale('de')">{{ $t('lang.de') }}</button>
    <button class="btn w-full" :class="{'btn-primary' : currentLocale== 'fr','btn-secondary' : currentLocale!= 'fr'}" @click="setLocale('fr')">{{ $t('lang.fr') }}</button>
    <p class="prose w-full bg-white px-3 py-3 text-black text-center">
      {{ $t('lang.selected') }}:
      {{ $t('lang.' + currentLocale) }}
    </p>
  </div>
</template>