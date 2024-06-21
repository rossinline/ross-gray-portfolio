<template>
  <div id="app">


    <body class="bg-lm-background text-lm-text dark:bg-dm-background dark:text-dm-text font-roboto transition-all ease-in-out duration-300">
      <NavBar></NavBar>
      <IntroSection></IntroSection>
      <ExperienceSection></ExperienceSection>
      <Banner1></Banner1>
      <ProjectsSection></ProjectsSection>
      <Banner2></Banner2>
      <AboutMeSection></AboutMeSection>
      <EndFooter></EndFooter>
  </body>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import IntroSection from './components/IntroSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import Banner1 from './components/Banner1.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import Banner2 from './components/Banner2.vue';
import AboutMeSection from './components/AboutMeSection.vue';
import EndFooter from './components/EndFooter.vue';
</script>

<style scoped>
        html.dark {
            color-scheme: dark;
        }
</style>
