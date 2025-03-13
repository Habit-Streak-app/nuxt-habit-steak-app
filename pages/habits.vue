<template>
  <section class="page habits">
    <section class="grid grid-cols-6 gap-3">
      <div v-for="habit in habits" class="col-span-6 md:col-span-3">
        <section class="card shadow-sm bg-white rounded-lg">
          <div class="overflow-x-auto text-black">
            <table class="table">
              <!-- head -->
              <thead>
                <tr class="bg-gray-500 text-white">
                  <th v-for="day in days" :key="day" class="text-center font-bold">{{ day }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="week in weeks" class="bg-gray-400">
                  <td v-for="day in days" :key="day">
                    <div class="tooltip" data-tip="hello">
                      <input type="checkbox" class="checkbox checkbox-sm checkbox-secondary" @change="update(day,true)">
                    </div>
                  </td>
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
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { usePocketBase } from '~/stores/pocketbase';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';

const pb = usePocketBase();

const days = ref(['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']);
const habits = ref([]);
const weeks = ref([]);

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

const generateLast4Weeks = () => {
  const today = new Date();
  for (let i = 0; i < 4; i++) {
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay() - (i * 7));
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    weeks.value.push(`${startOfWeek.toDateString()} - ${endOfWeek.toDateString()}`);
  }
}

const load = async () => {
  habits.value = (await pb.collection('habits').getList(1, 5, {})).items;
}

onMounted(() => {
  load();
  generateLast4Weeks();
})
</script>