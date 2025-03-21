<script setup>
const { setLocale } = useI18n()
</script>

<template>
  <div>
    <div>
      <button class="btn btn-secondary" @click="setLocale('en')">en</button>
      <button class="btn btn-primary" @click="setLocale('de')">de</button>
      <p class="prose">{{ $t('hello') }}</p>
    </div>
  </div>
</template>