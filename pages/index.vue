<template>
	<seciton class="page">
		<section>
			<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div class="mr-auto place-self-center lg:col-span-8 lg:px-12 my-12 lg:my-3">
					<h1
						class="max-w-2xl mb-4 text-2xl text-white font-extrabold tracking-tight leading-none lg:text-4xl">
						Streak - by Kevin Chromik</h1>
					<p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
						Die Idee einer App zum Habit Tracker - Streak kommt von Kevin Chromik einem deutschen Youtuber
						der
						sich mit der Softwareentwicklung bzw. App Entwicklung unter iOS beschäftigt.
					</p>
					<section class="space-x-3 actions">
						<a href="#"
							class="inline-flex btn w-full sm:w-auto btn-sm btn-primary items-center justify-center px-5 py-6 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
							<Fa :icon="faGithub" :class="{
								'fa-lg': mobile
							}" color="white"></Fa>
							<span class="ml-3 text-white " :class="{
								'btn-sm': mobile,
								'text-xs': mobile
							}">
								Github Code
							</span>
						</a>
						<a href="https://streak.kevinchromik.de/" target="_blank"
							class="inline-flex btn btn-sm w-full sm:w-auto mt-3 sm:mt-0 btn-block btn-secondary items-center justify-center px-5 py-6 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
							<Fa :icon="faLink" :class="{
								'fa-lg': mobile
							}" color="white"></Fa>
							<span class="ml-3 text-white " :class="{
								'btn-sm': mobile,
								'text-xs': mobile
							}">
								Jetzt auf die Warteliste eintragen
							</span>
						</a>
					</section>
				</div>
				<div class="lg:mt-0 lg:col-span-4 lg:flex">
					<div
						class="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
						<div
							class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white flex justify-center items-center">
							<img src="https://streak.kevinchromik.de/assets/app_icon.png" class="w-32 h-32" alt="">
						</div>
					</div>

				</div>
			</div>
		</section>
		<section class="mt-6">
			<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div class="lg:mt-0 lg:col-span-4 lg:flex lg:px-12 my-12 lg:my-3">
					<div
						class="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
						<div
							class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white flex justify-center items-center">
							<img src="/habit-streak-app-symbol.svg" class="w-32 h-32" alt="">
						</div>
					</div>
				</div>
				<div class="mr-auto place-self-center lg:col-span-8">
					<h1 class="max-w-2xl text-white mb-4 text-2xl font-extrabold leading-none lg:text-4xl">
						Habit Streak - by Jonathan Martz</h1>
					<p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
						Die Idee von Jonathan ist eine App für Habits ähnlich wie die von Kevin nur als Web App oder
						auch PWA. Jonathan ist ein Webentwickler aus der Nähe von Köln der sich mit dem Thema
						Webentwicklung auseinander setzt.
					</p>
					<section class="actions space-x-3">
						<a href="https://github.com/Habit-Streak-app/nuxt-habit-steak-app" target="_blank"
							class="inline-flex btn btn-sm btn-primary w-full sm:w-auto items-center justify-center px-5 py-6 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
							<Fa :icon="faGithub" :class="{
								'fa-lg': mobile
							}" color="white"></Fa>
							<span class="ml-3 text-white" :class="{
								'btn-sm': mobile,
								'text-xs': mobile
							}">
								Github Code
							</span>
						</a>
						<a href="https://app.habit-streak.app/"
							class="inline-flex btn btn-sm btn-secondary w-full sm:w-auto mt-3 sm:mt-0 items-center justify-center px-5 py-6 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
							<Fa :icon="faLink" :class="{
								'fa-lg': mobile
							}" color="white"></Fa>
							<span class="ml-3 text-white" :class="{
								'btn-sm': mobile,
								'text-xs': mobile
							}">
								Zur Webseite (Coming Soon)
							</span>
						</a>
					</section>
				</div>
			</div>
		</section>
		<section class="mt-6" id="android">
			<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div class="mr-auto place-self-center lg:col-span-8 lg:px-12 my-12 lg:my-3">
					<h1 class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none lg:text-4xl">
						Streak - by ???</h1>
					<p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
						Es wäre interessant noch einen Entwickler für Android Apps ins Boot zu holen für eine Android
						Version.
					</p>
					<section class="space-x-3 actions">
						<a href="#android"
							class="inline-flex btn w-full sm:w-auto btn-sm btn-primary items-center justify-center px-5 py-6 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
							<Fa :icon="faGithub" :class="{
								'fa-lg': mobile
							}" color="white"></Fa>
							<span class="ml-3 text-white " :class="{
								'btn-sm': mobile,
								'text-xs': mobile
							}">
								Github Code
							</span>
						</a>
						<a href="#android" target="_blank"
							class="inline-flex btn btn-sm w-full sm:w-auto mt-3 sm:mt-0 btn-block btn-secondary items-center justify-center px-5 py-6 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
							<Fa :icon="faLink" :class="{
								'fa-lg': mobile
							}" color="white"></Fa>
							<span class="ml-3 text-white " :class="{
								'btn-sm': mobile,
								'text-xs': mobile
							}">
								Zum Google -Play Store
							</span>
						</a>
					</section>
				</div>
				<div class="lg:mt-0 lg:col-span-4 lg:flex">
					<div
						class="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
						<div
							class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white flex justify-center items-center">
							<img src="https://streak.kevinchromik.de/assets/app_icon.png" class="w-32 h-32" alt="">
						</div>
					</div>
				</div>
			</div>
		</section>
	</seciton>
</template>

<script lang="ts" setup>
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
const mobile = ref(false);

const handleResize = () => {
	mobile.value = window.innerWidth < 768;
};

onMounted(() => {
	window.addEventListener('resize', handleResize);
	handleResize();
});
</script>

<style></style>