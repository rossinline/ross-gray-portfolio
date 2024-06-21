<template>
  <nav class="fixed z-50 p-4 lg:px-40 w-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-2xl font-bold flex items-center">
        <a href="#IntroSection">
          <img src="../assets/RG_Logo_lm.png" alt="Logo" class="h-10 mr-4 transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-150 hidden dark:block">
        </a>
        <a href="#IntroSection">
          <img src="../assets/RG_Logo_dm.png" alt="Logo" class="h-10 mr-4 transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-150 block dark:hidden">
        </a>
      </div>
      <div class="hidden lg:flex space-x-20 text-lg items-center">
        <a href="#ExperienceSection" class="text-lm-text dark:text-dm-text transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-150">Experience</a>
        <a href="#ProjectsSection" class="text-lm-text dark:text-dm-text transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-150">Projects</a>
        <a href="#AboutMeSection" class="text-lm-text dark:text-dm-text transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-105 duration-150">About Me</a>
        <a class="text-lm-text dark:text-dm-text">
          <ThemeSwitch></ThemeSwitch>
        </a>
      </div>
      <button @click="isOpen = !isOpen" class="lg:hidden focus:outline-none">
        <Menu class="w-6 h-6" />
      </button>
    </div>
    <transition name="slide">
      <div v-show="isOpen" class="lg:hidden mt-4 space-y-2 text-lg">
        <a href="#ExperienceSection" class="block text-lm-text dark:text-dm-text">Experience</a>
        <a href="#ProjectsSection" class="block text-lm-text dark:text-dm-text">Projects</a>
        <a href="#AboutMeSection" class="block text-lm-text dark:text-dm-text">About Me</a>
        <a class="block text-lm-text dark:text-dm-text hover:text-gray-300">
          <ThemeSwitch></ThemeSwitch>
        </a>
      </div>
    </transition>
  </nav>
</template>

<script>
import ThemeSwitch from './ThemeSwitch.vue';
import { Menu } from 'lucide-vue-next';

export default {
  name: 'Navbar',
  components: {
    Menu,
    ThemeSwitch,
  },
  data() {
    return {
      isOpen: false
    };
  }
}
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-enter-to, .slide-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>
