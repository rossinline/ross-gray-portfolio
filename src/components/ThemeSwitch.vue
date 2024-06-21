<template>
    <button
        @click="toggleDark()"
        class="p-2 rounded-[8px] text-lm-text dark:text-dm-text border border-lm-text dark:border-dm-text"
    >
        <component class=" hover:animate-spin" :is="isDark ? Moon : Sun" />
    </button>
</template>


<script setup>

import { useDark, useToggle } from "@vueuse/core";
import { Sun, Moon } from "lucide-vue-next";

const isDark = useDark({
    onChanged(isDark) {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },
});

const toggleDark = useToggle(isDark);
</script>