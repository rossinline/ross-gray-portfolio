<template>
  <details class="bg-lm-foreground dark:bg-dm-foreground shadow rounded-[8px] mb-4 group relative transition ease-in-out delay-150 md:hover:-translate-y-1 md:hover:scale-105 duration-300">
    <summary class="list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none rounded group-open:b-none group-open:z-[1] relative group-open:border-b border-lm-background dark:border-dm-background">
      <div class="flex flex-1 items-center flex-wrap">
        <h2 class="text-[8px] md:text-lg p-4 md:p-8 font-semibold">{{ title }}</h2>
      </div>
      <img :src="image" alt="Faded Image" class="absolute right-0 top-1/2 transform -translate-y-1/2 w-28 md:w-72 h-12 md:h-24 opacity-50 group-open:opacity-100 transition-opacity duration-500 pointer-events-none rounded-r-[8px] z-0" />
      <ChevronRight class="w-6 h-6 md:w-8 md:h-8 mr-4 md:mr-20 group-open:rotate-90 transition-transform bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-[8px]" />
    </summary>
    <div class="p-4 md:p-8 text-[8px] md:text-sm">
      <p>{{ description }}</p>
    </div>
  </details>
</template>

<script>
import SkillBox from './SkillBox.vue';
import { ChevronRight } from 'lucide-vue-next';

export default {
  name: "CollapsibleWidget",
  components: {
    SkillBox,
    ChevronRight,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
