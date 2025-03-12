<template>
  <div class="hidden md:flex items-center justify-center pr-12">
    <ul class="flex space-x-5 text-black">
      <li v-if="pb.authStore.isValid"><a :href="'/user/'+pb.authStore.record.slug">Profile </a></li>
      <li v-else><a href="/login">Login</a></li>
      <li><a href="/"settings>Settings </a></li>
      <li><a href="/habits">Habits </a></li>
      <li><a href="/impressum">Impressum </a></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {usePocketBase} from '~/stores/pocketbase';

const  pb = usePocketBase();
</script>

<style>

</style>