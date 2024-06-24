<template>
<section id="IntroSection" class="h-screen flex container mx-auto px-4">
  <!-- Left Column -->
  <div class="flex flex-1 items-center justify-center p-4">
    <div>
      <h1 class="text-3xl md:text-6xl lg:text-8xl font-bold mb-1">Ross Gray</h1>
      <h2 class="text-md md:text-3xl lg:text-5xl font-bold mb-1">Web Developer</h2>
      <p class="text-sm md:text-lg">MBCs</p>
    </div>
  </div>
  <!-- Right Column -->
  <div class="flex flex-1 items-center justify-center">
    <p>test</p>
    <img
      src="../assets/Formal_PFP.jpg"
      alt="Placeholder Image"
      class="w-40 md:w-72 h-auto rounded-[15px]"
    />
  </div>
</section>
  <WeatherWidget></WeatherWidget>
</template>


<script>
import WeatherWidget from "./WeatherWidget.vue";

export default {
  name: "IntroSection",
  components: {
    WeatherWidget,
  },
};
</script>


<style scoped>

#animation-container{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-items: center;
  align-items: center;
}

#animation-container .set{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

#animation-container .set div{
  position: absolute;
  display: block;
  max-width: 100px;
  font-size: 35px;
}
set div:hover{
  cursor: pointer;
}

#animation-container .set div:nth-child(1){
  left: 20%;
  animation: animate 15s linear infinite;
  animation-delay: -7s;
}
#animation-container .set div:nth-child(2){
  left: 50%;
  animation: animate 20s linear infinite;
  animation-delay: -5s;
}
#animation-container .set div:nth-child(3){
  left: 70%;
  animation: animate 20s linear infinite;
  animation-delay: 0s;
}
#animation-container .set div:nth-child(4){
  left: 0%;
  animation: animate 15s linear infinite;
  animation-delay: -5s;
}
#animation-container .set div:nth-child(5){
  left: 85%;
  animation: animate 18s linear infinite;
  animation-delay: -10s;
}
#animation-container .set div:nth-child(6){
  left: 0%;
  animation: animate 12s linear infinite;
}
#animation-container .set div:nth-child(7){
  left: 15%;
  animation: animate 14s linear infinite;
}
#animation-container .set div:nth-child(8){
  left: 60%;
  animation: animate 15s linear infinite;
}


@keyframes animate{
  0%{
    opacity: 0;
    top: -10%;
    transform: translateX(20px) rotate(0deg);
  }
  10%{
    opacity: 1;

  }
  20%{
    transform: translateX(-20px) rotate(45deg);
  }
  40%{
    transform: translateX(-20px) rotate(90deg);
  }
  60%{
    transform: translateX(-20px) rotate(180deg);
  }
  80%{
    transform: translateX(-20px) rotate(180deg);
  }
  100%{
    top: 110%;
    transform: translateX(-20px) rotate(225deg);
  }
}
.set2{
  transform: scale(0.5);
  filter: blur(2px);
  z-index: -1;
}


</style>
