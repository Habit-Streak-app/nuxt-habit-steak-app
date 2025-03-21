<template>
  <section class="grid grid-cols-6 gap-3 my-6">
    <div class="col-span-6 md:col-span-2">
      <div class="card bg-white text-black text-center">
        <div class="card-body">
          <h2 class="number font-bold text-xl">{{ props.habits.length }}</h2>
          <h3 class="font-bold">
            Habits
          </h3>
        </div>
      </div>
    </div>
    <div class="col-span-6 md:col-span-2">
      <div class="card bg-white text-black text-center">
        <div class="card-body">
          <h2 class="number font-bold text-xl">{{ props.weeks.length }}</h2>
          <h3 class="font-bold">
            Weeks
          </h3>
        </div>
      </div>
    </div>
    <div class="col-span-6 xs:col-span-3 md:col-span-2">
      <div class="card bg-white text-black text-center">
        <div class="card-body">
          <h2 class="number font-bold text-xl">{{ weekNumber }}</h2>
          <h3 class="font-bold">
            Actions
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  habits: { type: Array, required: true },
  weeks: { type: Array, required: true }
});

const weekNumber = computed(() => {
  let counter = 0;
  props.weeks.map((week) => {
    counter += week.days.length
  });

  return counter;
});
</script>
