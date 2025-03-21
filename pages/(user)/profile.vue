<template>
  <h2 class="font-bold text-center block text-lg mb-3">{{ user.name }}</h2>
  <img v-if="user.avatar" :src="'https://admin.habit-streak.app/api/files/users/' + user.id + '/' + user.avatar" alt=""
    class="w-1/2 mx-auto">
  <HabitStats :habits="habits" :weeks="weeks"/>
  <LanguageSwitcher />
  <div class="text-black bg-white text-center block my-3 px-3 py-3">
    <h3 class="font-bold">
      Name
    </h3>
    <h3 class="">
      {{ user.name }}
    </h3>
  </div>
  <div class="text-black bg-white text-center block my-3 px-3 py-3">
    <h3 class="font-bold">
      Email
    </h3>
    <h3 class="">
      {{ user.email }}
    </h3>
  </div>
</template>

<script lang="ts" setup>
import HabitStats from '~/components/HabitStats.vue';
import { usePocketBase } from '~/stores/pocketbase';

const user = ref({});
const habits = ref([]);
const weeks = ref([]);

const pb = usePocketBase();

let load = async () => {
  if (pb.authStore.isValid) {
    user.value = await pb.collection('users').getOne(pb.authStore.record?.id ?? '')
    habits.value = await pb.collection('habits').getFullList()
    weeks.value = await pb.collection('weeks').getFullList()
  }
}

onMounted(() => {
  load();
});
</script>