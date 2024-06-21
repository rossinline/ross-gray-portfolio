<template>
  <section id="ExperienceSection" class="py-20 px-12 lg:px-40">
    <div class="container mx-auto">
      <h2 class="text-2xl md:text-3xl font-semibold mb-8 w-full text-left">
        Experience
      </h2>

      <!-- Collapsible Widget -->
      <div class="w-full space-y-10">
        <collapsible-widget
          v-for="(item, index) in experienceItems"
          :key="index"
          :title="item.title"
          :description="item.description"
          :image="item.image"
        />
      </div>

      <div class="flex justify-center items-center p-10">
        <button class="text-center animate-bounce cursor-auto w-20 h-20">
          <p class="p-2 font-bold text-sm md:text-md">Projects</p>
          <ChevronDown class="w-6 h-6 md:w-8 md:h-8 mx-auto" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import CollapsibleWidget from "./CollapsibleWidget.vue";
import { ChevronDown } from "lucide-vue-next";

export default {
  name: "ExperienceSection",
  components: {
    CollapsibleWidget,
    ChevronDown,
  },
  data() {
    return {
      experienceItems: [
        {
          title: "Ruddocks Web Technician",
          description: "Authored a range of projects in website development (producing informative websites) enhanced technical areas within the company. This role involved a lot of communication, team work, critical thinking and good organisational skills. I was able to provide Ruddocks with an insight into IT and software development, showing the capabilities of their software’s.",
          image: new URL('@/assets/ruddocks-logo.png', import.meta.url).href,
        },
        {
          title: "Primary Industry Research",
          description: "Conducted a range of primary research across the property and legal industry through a range of methods including interviews and user testing sessions for website models gaining key positive and critical feedback for product improvement (websites).",
          image: new URL('@/assets/interview.png', import.meta.url).href,
        },
        {
          title: "Customer-service",
          description: "Preparation and organisation of events to cater for, by packing vans for travel, preparing foods and waiting on for customers when the events were live, this involved long hours requiring teamwork, adaptability and initiative and always ensuring that the customers are comfortable with their foods and service.",
          image: new URL('@/assets/wedding.jpg', import.meta.url).href,
        }
      ]
    }
  }
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
