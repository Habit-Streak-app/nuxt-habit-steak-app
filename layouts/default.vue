<template>
    <section id="page" class="bg-gradient-to-r from-indigo-400 to-cyan-400">
        <header class="rounded-b-4xl bg-white mx-auto max-w-6xl px-3 py-3 flex justify-between">
            <Logo />
            <MobileNav></MobileNav>
            <DesktopNav></DesktopNav>
        </header>
        <main class="mx-auto min-h-screen max-w-6xl lg:px-0 px-3 py-3">
            <slot></slot>
        </main>
        <footer class="bg-gray-400 py-3 px-3 lg:px-0">
            <section class="grid grid-cols-6 gap-3">
                <div class="col-span-6 md:col-span-2 text-center text-sm">
                    <a href="/data-privacy" class="text-blue-500">Datenschutz</a> & <a href="/impressum"
                        class="text-blue-500 text-sm">Impressum</a>
                </div>
                <div class="col-span-6 md:col-span-2 text-center text-sm">
                    <Fa :icon="faCopyright" class="w-5" color="white" />
                    <span class="text-white">Made with Passion by Jonathan Martz</span>
                </div>
                <div class="col-span-6 md:col-span-2 text-center">
                    Was könnte hier noch stehen ?
                </div>
            </section>
        </footer>
    </section>
</template>

<script setup lang="ts">
import { faCopyright, faLegal } from '@fortawesome/free-solid-svg-icons';
import Logo from '~/components/Logo.vue';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
</script>

<style scoped>

</style>