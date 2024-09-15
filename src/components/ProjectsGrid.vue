<template>
    <div class="flex flex-col rounded-[8px] h-full">
      <div class="h-1/3">
        <!-- Change grid column if needed -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-1 pb-4">
          <div v-for="project in projects" :key="project.title" class="relative">
            <button @click="handleButtonClick(project)"
              class="w-full h-auto p-2 bg-lm-foreground dark:bg-dm-foreground rounded-[8px] shadow-md hover:bg-lm-background hover:dark:bg-dm-background focus:bg-lm-background focus:dark:bg-dm-background focus:border-lm-accent focus:dark:border-dm-accent transition ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
              <div class="flex items-center">
                <component :is="getIconComponent(project.icon)"
                  class="w-16 h-16 sm:w-6 sm:h-6 md:w-10 md:h-10 mr-4" />
                <div class="text-sm break-words">
                  {{ project.title }}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="h-2/3 p-4 overflow-y-auto border-dm-foreground dark:border-lm-foreground">
        <div v-if="selectedProject">
          <div class="flex flex-wrap">
            <div class="w-full md:w-2/3 md:pr-8">
              <div class="flex items-center mb-4 text-lg font-semibold text-lm-text dark:text-dm-text pt-4">
                <component :is="getIconComponent(selectedProject.icon)" class="w-12 h-12 mr-2" />
                <span class="text-xl md:text-3xl text-lm-accent dark:text-dm-accent">{{ selectedProject.full_title }}</span>
              </div>
              <div class="py-2">
                <h2 class="text-lg pb-2">Skills Used -</h2>
                <div class="flex flex-wrap">
                  <div v-for="(skill, index) in selectedProject.skills.split(',')" :key="index" class="flex justify-center items-center my-2 px-4 text-[12px] md:text-sm bg-lm-foreground dark:bg-dm-foreground rounded-skillBox mr-4 mb-2">{{ skill.trim() }}</div>
                </div>
                <h3 class="text-lg py-2">Summary -</h3>
                <p class="text-sm">{{ selectedProject.description }}</p>
                <h3 v-if="selectedProject.feedback_name && selectedProject.feedback_name.trim() !== ''" class="text-lg py-2">Feedback -</h3>
                <div class="flex flex-wrap items-center md:p-0">
                  <img v-if="selectedProject.feedback_logo && selectedProject.feedback_logo.trim() !== ''" v-for="(image, index) in selectedProject.feedback_logo.split(',')" :key="index" :src="image.trim()" alt="Screenshot" class="w-10 h-auto mr-4 rounded-[8px] border border-lm-text dark:border-dm-text" />
                  <h4 v-if="selectedProject.feedback_name && selectedProject.feedback_name.trim() !== ''" class="mr-4 text-sm font-semibold">{{ selectedProject.feedback_name }} -</h4>
                  <p v-if="selectedProject.feedback && selectedProject.feedback.trim() !== ''" class="text-sm md:pt-2 3xl:pt-0">"{{ selectedProject.feedback }}"</p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 md:pl-5 md:mt-5 mt-4">
              <div class="flex flex-wrap justify-center gap-5">
                <img v-if="selectedProject.image_screenshot && selectedProject.image_screenshot.trim() !== ''" v-for="(image, index) in selectedProject.image_screenshot.split(',')" :key="index" :src="image.trim()" alt="Screenshot" class="w-32 h-auto md:w-96 mr-0 md:mr-4 rounded-[8px] border border-lm-text dark:border-dm-text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import * as lucideIcons from "lucide-vue-next";
  import { MoveUp, Info } from "lucide-vue-next";
  
  export default {
    name: "ProjectsGrid",
    components: {
      MoveUp,
      Info,
    },
    props: {
      projects: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        selectedProject: null,
      };
    },
    methods: {
      handleButtonClick(project) {
        this.selectedProject = project;
      },
      getIconComponent(iconName) {
        const iconComponent = lucideIcons[iconName];
        if (!iconComponent) {
          console.warn(`Icon "${iconName}" not found, falling back to AlertCircle.`);
        }
        return iconComponent || lucideIcons.AlertCircle; // Fallback to a default icon if the icon name is not found
      },
    },
  };
  </script>
  
  <style scoped>
  .pb-full {
    padding-bottom: 100%;
  }
  </style>
  