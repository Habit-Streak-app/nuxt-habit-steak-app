<template>
	<section v-if="!habit.deleted" class="card shadow-sm bg-white rounded-lg">
		<div class="text-black overflow-x-auto">
			<table class="table">
				<thead>
					<tr class="bg-gray-500 text-white">
						<th v-for="day in days" :key="day" class="text-center font-bold text-sm">{{ day.toUpperCase() }}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(week, index) in weeks"
						:class="{ 'bg-gray-400': (index % 2 && streakWeek != index), 'bg-white': (!(index % 2) && streakWeek != index), 'bg-warning': streakWeek == index }">
						<HabitWeek @streak-week="updateStreakWeek($event, index)" :habit="props.identifier"
							:number="week" />
					</tr>
				</tbody>
			</table>
		</div>
		<div class="card-body px-3 py-3">
			<h2 class="card-title text-black font-bold">{{ habit.name }}</h2>
			<p class="text-black py-3 px-3">{{ habit.desc }}</p>
			<div class="card-actions flex justify-end mt-3">
				<button type="button" @click="toggle(habit.id)" class="btn btn-primary">erledigt</button>
				<button type="button" @click="edit(habit.id)" class="btn btn-secondary">
					<Fa :icon="faEdit" class="w-5" />
				</button>
				<button type="button" @click="remove(habit.id)" class="btn btn-secondary">
					<Fa :icon="faTrash" class="w-5" />
				</button>
				<button type="button" @click="view(habit.id)" class="btn btn-secondary">
					<Fa :icon="faCalendarDays" class="w-5" />
				</button>
			</div>
		</div>
	</section>
	<section>
		<dialog class="modal" :class="{ 'modal-open': editModal }">
			<div class="modal-box">
				<h3 class="text-lg font-bold">Habit bearbeiten</h3>
				<form @submit.prevent="editAction()">
					<div class="form-control">
						<label for="" class="label text-sm mb-3 font-bold">Name</label>
						<input type="text" v-model="form.name" class="input w-full bg-white text-black">
					</div>
					<div class="form-control">
						<label for="" class="label text-sm mb-3 font-bold">Beschreibung</label>
						<input type="text" v-model="form.desc" class="input w-full bg-white text-black">
					</div>
					<section class="actions flex justify-between mt-3">
						<button @click="editModal = false" class="btn btn-sm">
							Close
						</button>
						<button type="submit" class="btn btn-sm btn-primary">
							Speichern
						</button>
					</section>
				</form>
				<div class="modal-action">
					<form method="dialog" class="modal-backdrop">
						<button @click="editModal = false">close</button>
					</form>
				</div>
			</div>
		</dialog>
	</section>
</template>

<script lang="ts" setup>
import {
	faCalendarDays,
	faEdit,
	faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { usePocketBase } from '~/stores/pocketbase';
import HabitWeek from './HabitWeek.vue';
import { useRouter } from 'vue-router';

const pb = usePocketBase();
const router = useRouter();
const weeks = ref([]);
const streakWeek = ref(null);
const editModal = ref(false);
const form = ref({
	name: '',
	desc: '',
	user: pb.authStore.record?.id,
});
const habit = ref({});
const days = ref(['mo', 'di', 'mi', 'do', 'fr', 'sa', 'so']);

const props = defineProps({
	identifier: { type: String, required: true },
});

onMounted(() => {
	load();
	generateLast4Weeks();
});

watch(
	() => props.identifier,
	(newValue, oldValue) => {
		if (newValue != oldValue) {
			load()
		}
	}
);

const updateStreakWeek = async (event, index) => {
	if (event) {
		streakWeek.value = index;
	} else {
		streakWeek.value = null;
	}
};

const generateLast4Weeks = () => {
	const today = new Date();
	for (let i = 4; i >= 0; i--) {
		const date = new Date(today);
		date.setDate(today.getDate() - i * 7);
		const weekNumber = getWeekNumber(date);
		checkWeek(weekNumber);
		weeks.value.push(weekNumber);
	}
};

const checkWeek = async (weekNumber) => {
	pb.autoCancellation(false);
	const tmp = (
		await pb.collection('weeks').getList(1, 1, {
			filter: 'number="' + weekNumber + '" && habit="' + habit.value.id + '"',
		})
	).items;

	if (tmp.length == 0) {
		await pb.collection('weeks').create({
			number: weekNumber,
			habit: habit.value.id,
			user: pb.authStore.record?.id,
		});
	}
};

const getWeekNumber = (date) => {
	const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
	const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
	return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

const load = async () => {
	habit.value = await pb.collection('habits').getOne(props.identifier);
};

const edit = async (id: string) => {
	editModal.value = true;
	form.value = await pb.collection('habits').getOne(id);
};

const editAction = async () => {
	await pb.collection('habits').update(form.value.id, form.value);
	editModal.value = false;
	load();
}

const view = (id: string) => {
	router.push('/habit/' + id);
};

const toggle = async (id: String) => {
	let weekNumber = getWeekNumber(new Date());
	let index = new Date().getDay();

	let week = await pb
		.collection('weeks')
		.getFirstListItem(
			'habit="' +
			habit.value.id +
			'" && number="' +
			weekNumber +
			'" && habit="' +
			id +
			'"',
		);

	week.days.push(days.value[index - 1]);
	await pb
		.collection('weeks')
		.update(week.id, { days: Object.values(week.days) });
	load();
};

const remove = async (id: string) => {
	if (confirm('Hallo Welt')) {
		await pb.collection('habits').update(id, { deleted: true });
		habit.value.deleted = true;
	}
};
</script>