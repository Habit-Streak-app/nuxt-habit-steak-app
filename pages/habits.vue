<template>
  <section class="page habits">
    <section class="grid grid-cols-6 gap-3">
      <div v-for="habit in habits" class="col-span-6 md:col-span-3">
        <HabitCard :identifier="habit.id" />
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { usePocketBase } from '~/stores/pocketbase';
import { useRouter } from 'vue-router';
import HabitCard from '~/components/HabitCard.vue';

const router = useRouter();
const pb = usePocketBase();

const habits = ref([]);

const load = async () => {
  habits.value = (await pb.collection('habits').getList(1, 5, {})).items;
}

onMounted(() => {
  if (!pb.authStore.isValid) {
    router.push('/');
  }
  load();
})
</script>