<template>
  <section id="ProjectsSection" class="py-20 px-12 lg:px-40">
    <div class="container mx-auto">
      <h2 class="text-2xl md:text-3xl font-semibold mb-8 w-full text-left">Projects</h2>
      <ProjectsGrid :projects="projects" />
    </div>
  </section>
</template>

<script>
import ProjectsGrid from "./ProjectsGrid.vue";

export default {
  components: {
    ProjectsGrid,
  },
  data() {
    return {
      projects: [
      {
          title: "Devectus",
          description: "An Offline Component library app that allows developers to save code snippets and components on the local drive. No complexities, a simple paste of code saved for later use.",
          icon: "FolderCode",
          full_title: "Devectus (Alpha)",
          skills: "UX/UI, Electron, HTML, CSS, JavaScript, ReactJS, TailwindCSS, SQLite, Webpack, Babel",
          image_screenshot: new URL('@/assets/Devectus_Screenshot.png', import.meta.url).href,
          feedback_name: "",
          feedback_logo: "",
          feedback: "",
        },
        {
          title: "Property Processing",
          description: "Extensively researched, designed and developed a Full Stack Website application to track Sold Subject to Contract stages online and increase the efficiency as well as clarity of property contract stages when buying and selling. Contact me for more details",
          icon: "Home",
          full_title: "Property Contract Tracking Service",
          skills: "PHP,SQL,HTML,CSS,Tailwind CSS,JavaScript, Chart JS,JSON",
          image_screenshot: new URL('@/assets/sample-image-keydash.png', import.meta.url).href,
          feedback_name: "Conveyency Director",
          feedback_logo: "",
          feedback: "I could use this today, very real world!",
        },
        {
          title: "Sales Website",
          description: "Increased Ruddocks' marketing potential by developing a frontend Informative Website to sell sustainable products.",
          icon: "PackageOpen",
          full_title: "Sustainability website for Cardboard products",
          skills: "UI/UX,HTML,CSS,JavaScript",
          image_screenshot: "",
          feedback_name: "",
          feedback_logo: "",
          feedback: "",
        },
        {
          title: "Re-design",
          description: "Presenting and suggesting new and modern designs for University Portal webpages to improve feedback areas for students and increase accessibility. Designs drawn and developed using design tools such as Canva.",
          icon: "LayoutDashboard",
          full_title: "NTU portal Redesign",
          skills: "UX/UI, Interaction Design, HTML,CSS",
          image_screenshot: new URL('@/assets/NTU-resdesign2.png', import.meta.url).href,
          feedback_name: "NTU Interactive Design Lecturer",
          feedback_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPPxaif3MlUO59FMCzYmDPfJIZoDeEL5GJg&s",
          feedback: "This will be presented to the Technical staff for future use.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
