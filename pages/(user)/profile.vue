<template>
  <h2 class="font-bold text-center block text-lg mb-3">{{ user.name }}</h2>
  <img v-if="user.avatar" :src="'https://admin.habit-streak.app/api/files/users/' + user.id + '/' + user.avatar" alt="" class="w-1/2 mx-auto">
  <LanguageSwitcher />
</template>

<script lang="ts" setup>
import { usePocketBase } from '~/stores/pocketbase';

const user = ref({});

const pb = usePocketBase();

let load = async () => {
  if (pb.authStore.isValid) {
    user.value = await pb.collection('users').getOne(pb.authStore.record?.id ?? '')
  }
}

onMounted(() => {
  load();
});
</script>