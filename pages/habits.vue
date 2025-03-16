<template>
  <section class="page habits">
    <section class="grid grid-cols-6 gap-3">
      <section class="flex justify-between col-span-6">
        <h2 class="font-bold text-lg">Habits</h2>
        <section class="actions">
          <Fa :icon="faPlusCircle" @click="modalAdd = true" class="w-8 cursor-pointer" size="2x" color="white" />
        </section>
      </section>
      <div v-for="habit in habits" class="col-span-6 md:col-span-3">
        <HabitCard :identifier="habit.id" />
      </div>
    </section>
    <dialog id="modal_add" class="modal modal-top " :class="{ 'modal-open': modalAdd }">
      <div class="modal-box bg-gray-500 px-6">
        <div class="divider divider-primary font-bold">
          Habit hinzügen
        </div>
        <form @submit.prevent="send()">
          <div class="form-control">
            <label for="" class="label text-sm mb-3 font-bold">Name</label>
            <input type="text" v-model="form.name" class="input w-full bg-white text-black">
          </div>
          <div class="form-control">
            <label for="" class="label text-sm mb-3 font-bold">Beschreibung</label>
            <input type="text" v-model="form.desc" class="input w-full bg-white text-black">
          </div>
          <section class="actions flex justify-between mt-3">
            <button @click="modalAdd = false" class="btn btn-sm">
              Close
            </button>
            <button type="submit" class="btn btn-sm btn-primary">
              Speichern
            </button>
          </section>
        </form>
        <div class="modal-action">
          <form method="dialog" class="modal-backdrop">
            <button @click="modalAdd = false">close</button>
          </form>
        </div>
      </div>
    </dialog>
  </section>
</template>

<script lang="ts" setup>
import { usePocketBase } from '~/stores/pocketbase';
import { useRouter } from 'vue-router';
import HabitCard from '~/components/HabitCard.vue';
import { faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { useLocalStorage } from '@vueuse/core';

const router = useRouter();
const pb = usePocketBase();
const form = ref({
  name: '',
  desc: '',
  user: pb.authStore.record?.id,
});

const habits = ref([]);
const modalAdd = useLocalStorage('modal-add', false, {});

const send = async () => {
  await pb.collection('habits').create(form.value);
  form.value = {
    name: '',
    desc: '',
  }
  form.value.user = pb.authStore.record?.id;
  modalAdd.value = false;
};

const load = async () => {
  habits.value = (await pb.collection('habits').getList(1, 10, {sort: '-created'})).items;
};

onMounted(async () => {
  if (!pb.authStore.isValid) {
    router.push('/');
  }
  load();
  await pb.collection('habits').subscribe('*', function (e) {
    load();
}, { /* other options like: filter, expand, custom headers, etc. */ });
});
</script>