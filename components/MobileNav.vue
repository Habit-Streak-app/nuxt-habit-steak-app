<template>
	<div class="md:hidden flex justify-end flex items-center justify-center">
		<section v-if="!open" class="bars">
			<Fa :icon="faBars" color="red" class="w-12" size="2x" @click="open = true" />
		</section>
		<section v-else class="times">
			<Fa :icon="faTimes" color="red" class="w-5" @click="open = false" />
		</section>
		<dialog id="my_modal_2" class="modal modal-top" :class="{ 'modal-open': open }" ref="modal-mobile-nav">
			<div class="modal-box">
				<section class="flex justify-between items-center">
					<h2 class="font-bold text-lg">Navigation</h2>
					<section class="actions">
						<button class="btn btn-secondary" @click="open = false">
							<Fa :icon="faTimes" color="white" class="w-5" />
						</button>
					</section>
				</section>
				<section class="grid grid-cols-6 gap-3 mt-3">
					<div class="col-span-3">
						<a href="/" class="btn btn-primary w-full btn-sm">Startseite</a>
					</div>
					<div v-if="pb.authStore.isValid" class="col-span-3">
						<a href="/habits" class="btn btn-primary w-full btn-sm">Habits</a>
					</div>
					<div v-if="pb.authStore.isValid" class="col-span-3">
						<a href="/settings" class="btn btn-primary w-full btn-sm">Settings</a>
					</div>
					<div v-if="pb.authStore.isValid" class="col-span-3">
						<a href="/user" class="btn btn-primary w-full btn-sm">Profile</a>
					</div>
					<div v-if="pb.authStore.isValid" class="col-span-3">
						<a href="/login" class="btn btn-primary w-full btn-sm">Login</a>
					</div>
					<div v-else class="col-span-3">
						<a href="/logout" class="btn btn-primary w-full btn-sm">Logout</a>
					</div>
					<div class="col-span-3 hidden">
						<!--| implement |-->
						<a href="/feedback" class="btn btn-primary w-full btn-sm">Feedback</a>
					</div>
					<div class="col-span-3">
						<a href="/impressum" class="btn btn-primary w-full btn-sm">Impressum</a>
					</div>
				</section>
			</div>
			<form method="dialog" class="modal-backdrop">
				<button @click="open = false">close</button>
			</form>
		</dialog>
	</div>
</template>

<script lang="ts" setup>
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from '@vueuse/core';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { usePocketBase } from '~/stores/pocketbase';

const pb = usePocketBase();
const open = useLocalStorage('open', false, {});
</script>