<template>
	<section class="page">
		<section class="kevin grid grid-cols-7 gap-3">
			<div class="col-span-7" v-if="!pb.authStore.isValid">
				<a href="/register" class="btn btn-primary w-full">
					{{ $t('index.register-now') }}
				</a>
			</div>
			<section class="col-span-7 md:col-span-3 flex mt-3">
				<section class="grid grid-cols-6">
					<div class="col-span-6 lg:col-span-2">
						<img src="https://cdn.jmse.cloud/avatar-2024-modified.png" class="mx-auto md:mx-3 h-24" alt="">
					</div>
					<div class="col-span-6 lg:col-span-4 mt-6 md:mt-0">
						<div class="text-sm ml-3 bg-white rounded-lg text-black px-3 py-3 text-center">
							<h3 class="font-bold">
								{{ $t('index.about-me-headline') }}
							</h3>
							<p>
								{{ $t('index.about-me') }}
							</p>
							<br>
						</div>
					</div>
				</section>
			</section>
			<section class="col-span-7 md:col-span-4">
				<h2 class="font-bold block text-center text-lg mb-3">{{ $t('index.headline') }}</h2>

				<ul class="timeline timeline-vertical">
					<li>
						<hr />
						<div class="timeline-start timeline-box text-center">
							{{ $t('index.kevin') }}
						</div>

						<div class="timeline-middle">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
								class="h-5 w-5">
								<path fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd" />
							</svg>
						</div>
						<div class="timeline-end">{{ $t('calendar.02') }} - 2025</div>
						<hr />
					</li>
					<li>
						<hr />
						<div class="timeline-start">{{ $t('calendar.03') }} - 2025</div>
						<div class="timeline-middle">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
								class="h-5 w-5">
								<path fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd" />
							</svg>
						</div>
						<div class="timeline-end timeline-box">
							{{ $t('index.challange') }}
						</div>
						<hr />
					</li>
				</ul>
			</section>
		</section>
		<section class="">
			<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div class="lg:mt-0 lg:col-span-4 lg:flex lg:px-12 lg:my-3 mb-6">
					<div
						class="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
						<div
							class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white flex justify-center items-center">
							<img src="/habit-streak-app-symbol.svg" class="w-32 h-32" alt="">
						</div>
					</div>
				</div>
				<div class="mr-auto place-self-center lg:col-span-8">
					<h1
						class="max-w-2xl text-center text-white ml-6 mb-4 text-2xl font-extrabold leading-none lg:text-4xl">
						{{ $t('preview.headline') }}</h1>
					<p class="max-w-2xl text-center ml-6 mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
						{{ $t('preview.desc') }}
					</p>
					<section
						class="actions space-x-3 md:space-x-0 flex space-y-3 lg:space-y-0 justify-center flex-col lg:flex-row">
						<a href="https://github.com/Habit-Streak-app/nuxt-habit-steak-app" target="_blank"
							class="btn btn-sm btn-primary mx-0 lg:mx-3 mt-3 sm:mt-0 px-5 py-6 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
							<Fa :icon="faGithub" :class="{
								'fa-lg': mobile
							}" color="white"></Fa>
							<span class="ml-3 text-white" :class="{
								'btn-sm': mobile,
								'text-xs': mobile
							}">
								{{ $t('link.github-code') }}
							</span>
						</a>
						<a href="/login"
							class="btn btn-sm btn-secondary mt-3 sm:mt-0 px-5 py-6 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
							<Fa :icon="faLink" :class="{
								'fa-lg': mobile
							}" color="white"></Fa>
							<span class="ml-3 text-white" :class="{
								'btn-sm': mobile,
								'text-xs': mobile
							}">
								{{ $t('link.webapp') }}
							</span>
						</a>
					</section>
				</div>
			</div>
		</section>
	</section>
</template>

<script lang="ts" setup>
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { usePocketBase } from '~/stores/pocketbase';

const mobile = ref(false);
const pb = usePocketBase();

const handleResize = () => {
	mobile.value = window.innerWidth < 768;
};

onMounted(() => {
	window.addEventListener('resize', handleResize);
	handleResize();
});
</script>

<style></style>