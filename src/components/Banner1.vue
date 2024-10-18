<template>
    <div class="w-full bg-lm-accent dark:bg-dm-accent">
        <h2 class="text-2xl md:text-3xl font-semibold text-center pt-5">My Toolkit</h2>
        <div class="bg-lm-accent dark:bg-dm-accent">
            <div class="flex flex-wrap justify-center items-center py-5 mx-10 md:mx-40">
                <div class="flex  rounded-[8px] m-3">
                    <!-- Frontend Tools -->
                    <div class="section-box">
                        <h2 class="text-lg font-bold text-center">
                            Frontend Tools
                        </h2>
                        <div class="flex flex-wrap justify-center items-center">
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'html5']"
                                />
                                <p class="text-center font-bold text-sm">HTML</p>
                            </div>
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'css3-alt']"
                                />
                                <p class="text-center font-bold text-sm">CSS</p>
                            </div>
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'sass']"
                                />
                                <p class="text-center font-bold text-sm">Sass</p>
                            </div>
                            <div class="icon-container">
                                <svg
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M22.105 7.553c-.224.448-.523.723-.914.838-.612.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293L6.7 8.714c.546-.425 4.031-.015 5.552 1.194C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658L22.105 7.553zM16.192 15.391c-.614.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293L1.7 15.714c.545-.427 4.032-.014 5.552 1.194C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658l-1.834-.789C16.881 15.001 16.583 15.275 16.192 15.391z"
                                    ></path>
                                </svg>
                                <p class="text-center font-bold text-sm">
                                    Tailwind CSS
                                </p>
                            </div>
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'js-square']"
                                />
                                <p class="text-center font-bold text-sm">JavaScript</p>
                            </div>
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'react']"
                                />
                                <p class="text-center font-bold text-sm">ReactJS</p>
                            </div>
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'vuejs']"
                                />
                                <p class="text-center font-bold text-sm">VueJS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center items-center">
                    <!-- Backend Tools -->
                    <div class="section-box mt-4 md:mt-0">
                        <h2 class="text-lg font-bold text-center">
                            Backend Tools
                        </h2>
                        <div class="flex items-center">
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'php']"
                                />
                                <p class="text-center font-bold text-sm">PHP</p>
                            </div>
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'laravel']"
                                />
                                <p class="text-center font-bold text-sm">Laravel</p>
                            </div>
                            <div class="icon-container">
                                <svg
                                    class="h-6 w-6 md:h-8 md:w-8 mx-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"
                                    />
                                </svg>
                                <p class="text-center font-bold text-sm">SQL</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center items-center">
                    <!-- Other Tools -->
                    <div class="section-box mt-4 md:mt-0">
                        <h2 class="text-lg font-bold text-center">
                            Other Tools
                        </h2>
                        <div class="flex items-center">
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'node']"
                                />
                                <p class="text-center font-bold text-sm">Node.js</p>
                            </div>
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'square-github']"
                                />
                                <p class="text-center font-bold text-sm">GitHub</p>
                            </div>
                            <div class="icon-container">
                                <font-awesome-icon
                                    class="h-6 w-6 md:h-10 md:w-10 mx-4"
                                    :icon="['fab', 'figma']"
                                />
                                <p class="text-center font-bold text-sm">Figma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Banner1",
};
</script>

<style scoped>
.icon-container {
    display: flex;
    padding: 10px;
    text-align: center;
    align-items: center;
}
@media (max-width: 765px) {
  .icon-container {
    padding: 2px;
  }
}
</style>
