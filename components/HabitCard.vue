<template>
  <section class="card shadow-sm bg-white rounded-lg">
    <div class="overflow-x-auto text-black">
      <table class="table">
        <thead>
          <tr class="bg-gray-500 text-white">
            <th v-for="day in days" :key="day" class="text-center font-bold text-sm">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="week in weeks" class="bg-gray-400">
            <HabitWeek :number="week" />
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-body px-3 py-3">
      <h2 class="card-title text-black font-bold">{{ habit.name }}</h2>
      <p class="text-black py-3 px-3">{{ habit.desc }}</p>
      <div class="card-actions flex justify-end mt-3">
        <button type="button" class="btn btn-primary">erledigt</button>
        <button type="button" @click="edit(habit.id)" class="btn btn-secondary">
          <Fa :icon="faEdit" class="w-5" />
        </button>
        <button type="button" @click="remove(habit.id)" class="btn btn-secondary">
          <Fa :icon="faTrash" class="w-5" />
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { usePocketBase } from '~/stores/pocketbase';
import HabitWeek from './HabitWeek.vue';

const pb = usePocketBase();
const weeks = ref([]);
const habit = ref({});
const days = ref(['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']);

const props = defineProps({
  identifier: { type: String, required: true }
});

onMounted(() => {
  generateLast4Weeks();
  load();
});

const generateLast4Weeks = () => {
  const today = new Date();
  for (let i = 4; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - (i * 7));
    const weekNumber = getWeekNumber(date);
    checkWeek(weekNumber);
    weeks.value.push(weekNumber)
  }
};

const checkWeek = async (weekNumber) => {
  pb.autoCancellation(false)
  const tmp = (await pb.collection('weeks').getList(1, 1, {
    filter: 'number="' + weekNumber + '"'
  })).items;

  if (tmp.length == 0) {
    (await pb.collection('weeks').create({
      number: weekNumber,
      user: pb.authStore.record.id
    }))
  }
}

const getWeekNumber = (date) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const load = async () => {
  habit.value = (await pb.collection('habits').getOne(props.identifier));
}

const edit = (id: String) => {
  console.log(id);
}

const update = (day: String, state: String) => {
  console.log(day);
  console.log(state);
}

const remove = (id: String) => {
  console.log(id);
}
</script>