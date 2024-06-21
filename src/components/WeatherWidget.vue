<template>
    <div class="relative md:py-10 px-12 lg:px-40">
        <div id="weatherBox"
            class="flex justify-center items-center m-4 mb-0 p-2 shadow-lg rounded-t-[8px] z-30 mx-auto"
            :style="{ backgroundImage: 'url(' + currentGif + ')', backgroundSize: 'cover', backgroundPosition: 'center' }">
            <div class="p-2 mx-auto">
                <h4
                    class="font-bold text-center text-sm md:text-base p-2 bg-lm-foreground dark:bg-dm-foreground bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 dark:bg-opacity-30 rounded-[8px]">
                    Current Weather in the East Midlands (UK)</h4>
                <div class="flex flex-wrap justify-center items-center gap-1 py-2 w-full">

                    <p
                        class="flex items-center text-sm p-2 bg-lm-foreground dark:bg-dm-foreground bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 dark:bg-opacity-30 rounded-[8px]">
                        <Thermometer class="w-5 h-5 mr-2" />Temp. - {{ temperature }}°C
                    </p>
                    <p
                        class="flex items-center text-sm p-2 bg-lm-foreground dark:bg-dm-foreground bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 dark:bg-opacity-30 rounded-[8px]">
                        <Waves class="w-5 h-5 mr-2" />Humidity - {{ humidity }}%
                    </p>

                    <p
                        class="flex items-center text-sm p-2 bg-lm-foreground dark:bg-dm-foreground bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 dark:bg-opacity-30 rounded-[8px]">
                        <Wind class="w-5 h-5 mr-2" />Wind Speed - {{ windSpeed }} mph
                    </p>
                    <p
                        class="flex items-center text-sm p-2 bg-lm-foreground dark:bg-dm-foreground bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 dark:bg-opacity-30 rounded-[8px]">
                        <Flame class="w-5 h-5 mr-2" />UV Index - {{ uvCategory }}
                    </p>
                </div>
                <div
                    class="icon-container flex justify-center items-center text-sm p-2 bg-lm-accent dark:bg-dm-accent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 dark:bg-opacity-30 rounded-[8px]">
                    <component :is="currentIcon" class="w-10 h-10"></component>
                    <p class="px-4 text-center text-sm md:text-md font-semibold">It is {{ currentWeatherGroup }}</p>
                </div>
            </div>
        </div>
        <div
            class="flex items-center bg-lm-foreground dark:bg-dm-foreground text-sm text-gray-500 dark:text-gray-300 p-1 px-2 rounded-b-[8px] mx-auto">
            <Info class="w-5 h-5 mr-2" />This Weather Dashboard was made with a REST JavaScript API (Tomorrow.io data)
        </div>
    </div>
</template>

<script>
import { Sun, Cloud, CloudFog, CloudDrizzle, CloudRain, CloudSnow, CloudHail, CloudLightning, HelpCircle, Thermometer, Waves, Wind, Flame, Info } from 'lucide-vue-next';

export default {
    name: 'WeatherWidget',
    components: {
        Sun,
        Cloud,
        CloudFog,
        CloudDrizzle,
        CloudRain,
        CloudSnow,
        CloudHail,
        CloudLightning,
        HelpCircle,
        Thermometer,
        Waves,
        Wind,
        Flame,
        Info,

    },
    data() {
        return {
            gifs: {
                clear: 'src/assets/clear.gif',
                cloudy: 'src/assets/cloudy.gif',
                fog: 'src/assets/fog.gif',
                drizzle: 'src/assets/drizzle.gif',
                rain: 'src/assets/rain.gif',
                snow: 'src/assets/snow.gif',
                freezing: 'src/assets/ice.gif',
                thunderstorm: 'src/assets/thunderstorm.gif',
                default: '',
            },
            icons: {
                clear: Sun,
                cloudy: Cloud,
                fog: CloudFog,
                drizzle: CloudDrizzle,
                rain: CloudRain,
                snow: CloudSnow,
                freezing: CloudHail,
                thunderstorm: CloudLightning,
                default: HelpCircle,
            },
            currentGif: '',
            currentIcon: 'HelpCircle',
            currentWeatherGroup: 'Loading...',
            temperature: '',
            humidity: '',
            windSpeed: '',
            uvIndex: '',
            uvCategory: '',
        };
    },
    methods: {

        fetchWeather() {
            const apiKey = import.meta.env.VITE_API_KEY;
            const options = { method: 'GET', headers: { accept: 'application/json' } };
            fetch('https://api.tomorrow.io/v4/weather/realtime?location=nottingham&apikey=' + apiKey, options)
                .then(response => response.json())
                .then(data => {
                    const weatherCode = data.data.values.weatherCode;
                    const temp = data.data.values.temperature;
                    const humidity = data.data.values.humidity;
                    const windSpeed = data.data.values.windSpeed;
                    const uvIndex = data.data.values.uvIndex;
                    this.uvCategory = this.mapUVIndexToCategory(uvIndex);

                    this.temperature = temp;
                    this.humidity = humidity;
                    this.windSpeed = windSpeed;
                    this.uvIndex = uvIndex;

                    const gifGroup = this.mapWeatherCodeToGif(weatherCode);
                    this.currentGif = this.gifs[gifGroup] || this.gifs.default;
                    this.currentIcon = this.icons[gifGroup] || this.icons.default;
                    this.currentWeatherGroup = gifGroup;
                });
        },
        mapWeatherCodeToGif(weatherCode) {
            const weatherGroups = {
                clear: [1000, 1100, 4213, 5102, 5115, 5105, 6205, 7108, 7113, 8001, 1101],
                cloudy: [1001, 1102, 2103],
                fog: [2100, 2101, 2102, 2000, 2106, 2107, 2108],
                drizzle: [4203, 4000, 4204, 4211, 4202, 4201, 5110, 5122, 6003, 6206, 6203, 6209, 7106],
                rain: [4200, 4208, 4001, 4211, 4201, 5110, 6220, 6214, 6215, 6207, 6202, 6208],
                snow: [5100, 5119, 5112, 5000, 5101, 5108, 5114, 6213, 5117, 5106, 5107],
                freezing: [6000, 6204, 6203, 6209, 6200, 6001, 6212, 6222, 6207, 6202, 6208, 6201, 7115, 7117, 7103, 7114, 7101],
                thunderstorm: [8000]

            };

            for (const [group, codes] of Object.entries(weatherGroups)) {
                if (codes.includes(weatherCode)) {
                    return group;
                }
            }

            return 'default';
        },
        // Transfer uvIndex value to Catagory measurement
        mapUVIndexToCategory(uvIndex) {
            if (uvIndex <= 2) {
                return 'Low';
            } else if (uvIndex <= 5) {
                return 'Moderate';
            } else if (uvIndex <= 7) {
                return 'High';
            } else if (uvIndex <= 10) {
                return 'Very High';
            } else {
                return 'Extreme';
            }
        },
    },

    mounted() {
        this.fetchWeather();
    }
};
</script>

<style scoped></style>