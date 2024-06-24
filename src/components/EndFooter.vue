<template>
    <footer class="bg-lm-accent dark:bg-dm-accent text-white py-6 px-4 md:px-40 mt-10">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div class="flex items-center mb-4 md:mb-0">
                <a href="#IntroSection"><img src="../assets/RG_Logo_lm.png" alt="Logo" class="h-10 mr-12"></a>
                <div class="flex space-x-6 mt-1">
                    <a href="https://linkedin.com/in/ross-gray-8951b7260" target="_blank" aria-label="LinkedIn"
                        class="text-white hover:text-lm-background hover:dark:text-dm-background">
                        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
                    </a>
                    <a href="https://github.com/rossinline" target="_blank" aria-label="GitHub"
                        class="text-white hover:text-lm-background hover:dark:text-dm-background">
                        <font-awesome-icon :icon="['fab', 'square-github']" size="2x" />
                    </a>
                </div>
            </div>
            <div class="flex space-x-6">
                <a href="#ExperienceSection" class="hover:underline">Experience</a>
                <a href="#ProjectsSection" class="hover:underline">Projects</a>
                <a href="#AboutMeSection" class="hover:underline">About Me</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "EndFooter",
};
</script>

<style scoped>
.icon-container {
    display: flex;
    padding: 20px;
    text-align: center;
    align-items: center;
}

.glow {
    -webkit-box-shadow: 0px 43px 49px -45px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 43px 49px -45px rgba(255, 255, 255, 1);
    box-shadow: 0px 43px 49px -45px rgba(255, 255, 255, 1);
}
</style>
