<template>
  <td v-for="(day, index) in days" :key="day">
    <div class="tooltip" :data-tip="currentLocaleDate(index, day)">
      <input v-if="week.days" type="checkbox" :checked="marked(index, day)" class="checkbox checkbox-xs md:checkbox-sm"
        :class="{
          'checkbox-primary': isToday(index, day),
          'checkbox-secondary': !isToday(index, day),
        }" @change="update(day, true)">
    </div>
  </td>
</template>

<script lang="ts" setup>
import { usePocketBase } from '~/stores/pocketbase';

const props = defineProps({
  number: { required: true, type: Number }
});

const pb = usePocketBase();

const days = ref(['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so']);
const week = ref({});

const marked = (index, day) => {
  const today = new Date();
  const currentDayIndex = today.getDay();
  return week.value.days.includes(day);
};

const currentLocaleDate = (index, day) => {
  return getDateByWeekNumberAndDayIndex(new Date().getFullYear(), week.value.number, index).toLocaleDateString('de')
}

function getDateByWeekNumberAndDayIndex(year, weekNumber, dayIndex) {
  const firstDayOfYear = new Date(year, 0, 1);
  const dayOffset = (weekNumber - 1) * 7 + dayIndex - firstDayOfYear.getDay();
  const resultDate = new Date(firstDayOfYear.setDate(firstDayOfYear.getDate() + dayOffset));
  return resultDate;
}

const isToday = (index, day) => {
  const year = new Date().getFullYear();
  const weekNumber = week.value.number; // Example week number
  const today = getDateByWeekNumberAndDayIndex(year, weekNumber, index);

  console.log('today', today.toLocaleDateString('de'));
  console.log('date', new Date().toLocaleDateString('de'));

  return today.toLocaleDateString('de') == new Date().toLocaleDateString('de');
}

const getWeekNumber = (date) => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

onMounted(async () => {
  week.value = (await pb.collection('weeks').getFirstListItem('number="' + props.number + '"'))
})
</script>