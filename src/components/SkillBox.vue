

<template>
<div class="flex justify-center items-center m-2 px-2 h-6 w-auto z-20 text-[12px] md:text-sm group-open:text-dm-text group-open:dark:text-lm-text bg-lm-foreground dark:bg-dm-foreground rounded-skillBox group-open:bg-lm-accent group-open:dark:bg-dm-accent">{{ skill }}</div>
</template>


<script>
import { ChevronRight } from 'lucide-vue-next';

export default {
    name: "SkillBox",
    components: {
    ChevronRight,
  },
    props: {
        skill: {
            type: String,
            required: true,
    },
},
};
</script>

<style scoped>

</style>