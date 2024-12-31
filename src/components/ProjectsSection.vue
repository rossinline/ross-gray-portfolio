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
          description: "An Open Source - Offline Component library app that allows developers to save code snippets and components on the local drive. No complexities, a simple paste of code saved for later use. Check out our Public GitHub Repository at https://github.com/rossinline/Devectus",
          icon: "FileCode",
          full_title: "Devectus (Alpha)",
          skills: "UX/UI, Electron, HTML, CSS, JavaScript, ReactJS, TailwindCSS, SQLite, Webpack, Babel",
          image_screenshot: new URL('@/assets/Devectus_Screenshot.png', import.meta.url).href,
          feedback_name: "",
          feedback_logo: "",
          feedback: "",
          external_link: "https://github.com/rossinline/Devectus",
        },
        {
          title: "Today Social",
          description: "A demo website for a social media concept called Today Social, A positive social media journaling platform allowing people to spread positive aspects of their day with the public, or keep them private. Designed, Developed (frontend) and deployed. Check out my Public GitHub Repository at https://github.com/rossinline/today-social-demo",
          icon: "BookUser",
          full_title: "Today Social Website",
          skills: "UX/UI, TypeScript, ReactJS, TailwindCSS, HTML, Vite, Git",
          image_screenshot: new URL('@/assets/Today_Social_Screenshot.png', import.meta.url).href,
          feedback_name: "",
          feedback_logo: "",
          feedback: "",
          external_link: "https://rossinline.github.io/today-social-demo/",
        },
        {
          title: "Cafe Website",
          description: "Designed and developed an informative website with a full web structure for a Cafe company. Including events, content, and a virtual menu. Concept: True Coffee!",
          icon: "Coffee",
          full_title: "Cafe Website (Wix)",
          skills: "UX/UI, Wix Studio, Interaction Design, Figma, Canva, CSS",
          image_screenshot: new URL('@/assets/True_Coffee_Web_Screenshot.png', import.meta.url).href,
          feedback_name: "",
          feedback_logo: "",
          feedback: "",
          external_link: "",
        },
        {
          title: "Sales Website",
          description: "Increased Ruddocks' marketing potential by developing a frontend Informative Website to sell sustainable products.",
          icon: "PackageOpen",
          full_title: "Sustainability Website For Cardboard Products",
          skills: "UI/UX,HTML,CSS,JavaScript",
          image_screenshot: "",
          feedback_name: "",
          feedback_logo: "",
          feedback: "",
          external_link: "",
        },
        {
          title: "Stationary Store",
          description: "Utilising the power of Wix Studio AI for web structuring, I created a full e-commerce website for sell stationary products, with content and bug-fixing/website cleaning arranged by myself. When experimenting with what web development AI features Wix had to offer; I found that the AI structuring was fast to impliment reducing project time, but it tends to repeat it's website structuring therefore it is not very bespoke. Concept: Inkfinity Stationary",
          icon: "PencilLine",
          full_title: "Stationary E-commerce Website (Wix AI)",
          skills: "UX/UI, Wix Studio, Wix AI, Interaction Design, CSS",
          image_screenshot: new URL('@/assets/Inkfinity_AI_Website_Screenshot.png', import.meta.url).href,
          feedback_name: "",
          feedback_logo: "",
          feedback: "",
          external_link: "https://rossgraycontact.wixstudio.com/inkfinitydemostore",
        },
        {
          title: "Re-design",
          description: "Presenting and suggesting new and modern designs for University Portal webpages to improve feedback areas for students and increase accessibility. Designs drawn and developed using design tools such as Canva.",
          icon: "LayoutDashboard",
          full_title: "NTU Portal Redesign",
          skills: "UX/UI, Interaction Design, HTML,CSS",
          image_screenshot: new URL('@/assets/NTU-resdesign2.png', import.meta.url).href,
          feedback_name: "NTU Interactive Design Lecturer",
          feedback_logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPPxaif3MlUO59FMCzYmDPfJIZoDeEL5GJg&s",
          feedback: "This will be presented to the Technical staff for future use.",
          external_link: "",
        },
        {
          title: "Mobile App",
          description: "Created a learning mobile app that teaches users about the current ocean crysis through story telling and interactive quizzes.",
          icon: "TabletSmartphone",
          full_title: "UN Climate Mobile App",
          skills: "UX/UI, Interaction Design, Android Studio, Dart, Flutter, Firebase",
          image_screenshot: new URL('@/assets/mobile_app_screenshot.png', import.meta.url).href,
          feedback_name: "",
          feedback_logo: "",
          feedback: "",
          external_link: "",
        },
        {
          title: "Museum Shelf",
          description: "Produced a Virtual Museum web system that allows the museum staff to add extra unused artifacts to be displayed online with photography, allowing all donated pieces to be presented to the public, even when there is no space in the museum itself. The resulting project was then presented to the museum lead staff. Created in a small production team.",
          icon: "LampDesk",
          full_title: "Virtual Museum Shelf Web System",
          skills: "UX/UI, Interaction Design, HTML,CSS,JavaScript",
          image_screenshot: "",
          feedback_name: "Mansfield Museum",
          feedback_logo: "",
          feedback: "We would love to include this project on our website, allowing the local people to see their donations live",
          external_link: "",
        },
        {
          title: "E-Store Design",
          description: "Designed a full web structure and style to be used for E-commerce sports watch website. Including designs for comparing products statistically to allow for users to make a critical decision on their purchases!",
          icon: "ShoppingCart",
          full_title: "E-Commerce Design for Sport Watches",
          skills: "UX/UI, Interaction Design, Figma, Canva",
          image_screenshot: new URL('@/assets/E-commerce_web_design_sport_watches.png', import.meta.url).href,
          feedback_name: "",
          feedback_logo: "",
          feedback: "",
          external_link: "",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
