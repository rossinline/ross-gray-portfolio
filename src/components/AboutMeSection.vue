<template>
    <section id="AboutMeSection" class="py-20 px-12 md:px-40">
        <div class="container mx-auto">
            <h2 class="text-2xl md:text-3xl font-semibold mb-8 w-full text-left">About Me</h2>
            <div class="flex flex-wrap rounded-[8px]"> <!-- First Column -->
                <div class="w-full lg:w-1/2 pr-4">
                    <div class="relative">
                        <img class="xl:block hidden absolute top-0 right-5 w-32 h-32 rounded-[8px] border border-lm-text dark:border-dm-text"
                            src="../assets/Formal_PFP.jpg" alt="headshot_image">
                    </div>
                    <!-- Content for first column goes here -->
                     <div class="flex">
                    <span class="text-2xl font-semibold pb-2 pr-5 text-lm-accent dark:text-dm-accent">Ross Gray</span>
                    <a href="https://linkedin.com/in/ross-gray-8951b7260" target="_blank" aria-label="LinkedIn"
                        class="mr-4 text-black dark:text-white hover:text-lm-accent hover:dark:text-dm-accent">
                        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
                    </a>
                    <a href="https://github.com/rossinline" target="_blank" aria-label="GitHub"
                        class="text-black dark:text-white hover:text-lm-accent hover:dark:text-dm-accent">
                        <font-awesome-icon :icon="['fab', 'square-github']" size="2x" />
                    </a>
                </div>
                    <p class="text-sm"></p>
                    <!-- Email link -->
                    <div class="flex items-center">
                        <a class="flex items-center py-4 hover:text-lm-accent dark:hover:text-dm-accent hover:underline"
                            href="mailto:rossgraycontact@gmail.com">
                            <Mail class="w-6 h-6 mr-2" />
                            <p class="ml-2">rossgraycontact@gmail.com</p>
                        </a>
                    </div>
                    <!-- Summary of me -->
                    <h4 class="text-lg py-2">Summary -</h4>
                    <p class="text-sm">Ahighly creative, adaptive and problem solving full stack website developer proven to develop a range of web applications and systems to increase sales, marketing, and productivity. Very meticulous and open minded to learn all that is required to innovate and optimise.</p>
                    <h4 class="text-lg py-2">Skills -</h4>
                    <h5 class="ml-2 pb-2">Non Technical / Soft Skills -</h5>
                    <!-- Skill boxes container -->
                    <div class="flex flex-wrap ml-2">
                        <skill-box skill="Ambitious"></skill-box>
                        <skill-box skill="Adaptive"></skill-box>
                        <skill-box skill="Clear Communicator"></skill-box>
                        <skill-box skill="Critical Thinker"></skill-box>
                        <skill-box skill="Team Player"></skill-box>
                        <skill-box skill="Organiser"></skill-box>
                        <skill-box skill="Active Listener"></skill-box>
                        <skill-box skill="Leader"></skill-box>
                        <skill-box skill="Creative"></skill-box>
                        <skill-box skill="User Centric"></skill-box>
                        <skill-box skill="Business Acumen"></skill-box>
                    </div>
                    <h5 class="ml-2 py-2">Technical / Hard Skills -</h5>
                    <!-- Skill boxes container -->
                    <div class="flex flex-wrap ml-2">
                        <skill-box skill="HTML5"></skill-box>
                        <skill-box skill="CSS3"></skill-box>
                        <skill-box skill="SASS"></skill-box>
                        <skill-box skill="Tailwind CSS"></skill-box>
                        <skill-box skill="JavaScript"></skill-box>
                        <skill-box skill="Chart JS"></skill-box>
                        <skill-box skill="TypeScript"></skill-box>
                        <skill-box skill="JSON"></skill-box>
                        <skill-box skill="Node JS"></skill-box>
                        <skill-box skill="NPM"></skill-box>
                        <skill-box skill="React JS"></skill-box>
                        <skill-box skill="Vue JS"></skill-box>
                        <skill-box skill="Vite"></skill-box>
                        <skill-box skill="Laravel"></skill-box>
                        <skill-box skill="PHP"></skill-box>
                        <skill-box skill="Electron"></skill-box>
                        <skill-box skill="MySQL"></skill-box>
                        <skill-box skill="Figma"></skill-box>
                        <skill-box skill="Canva"></skill-box>
                        <skill-box skill="VS Code"></skill-box>
                        <skill-box skill="Obsidian"></skill-box>
                    </div>

                </div>
                <!-- Second Column -->
                <div class="flex flex-wrap w-full lg:w-1/2 pl-0 pt-4 md:pt-0">
                    <Testimonials />
                </div>
                <div>
                    <h4 class="text-lg py-2">Learning and Interests -</h4>
                    <h5 class="ml-2 py-2">I am currently Learning -</h5>
                    <ul class="ml-4 text-sm">
                        <li>- Business</li>
                        <li>- Photography</li>
                        <li>- Social Media and Video Editing</li>
                    </ul>
                    <h5 class="ml-2 py-2">I Enjoy -</h5>
                    <ul class="ml-4 text-sm">
                        <li>- New Technologies and Softwares</li>
                        <li>- Music and Podcasts</li>
                        <li>- Learning Japanese</li>
                        <li>- Fitness and Exercise</li>
                        <li>- Photography</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Mail } from "lucide-vue-next";
import Testimonials from './Testimonials.vue';
import SkillBox from "./SkillBox.vue";




export default {
    name: "AboutMeSection",
    components: {
        Testimonials,
        Mail,
        SkillBox
    },
};
</script>


<style scoped></style>