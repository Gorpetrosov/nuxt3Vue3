<script setup lang="ts">
import ImageSlider from "~/src/components/ImageSlider.vue";
import AttributeButton from "~/src/components/AttributeButton.vue";
import ColorSlider from "~/src/components/ColorSlider.vue";

const route = useRoute();
const router = useRouter();

const photoId = ref<string>(route.query.photo as string);
const text = ref<string>(' ');
const opacitySlider = ref<number>(100);
const blurSlider = ref<number>(0);
const fontSizeSlider = ref<number>(40);
const textColorSlider = ref<string>('blue');

const blurSliderComputed = computed(() => blurSlider.value * 15);
const fontSizeSliderComputed = computed(() => fontSizeSlider.value < 2 ? fontSizeSlider.value + (3 - fontSizeSlider.value) : fontSizeSlider.value);

function redirectToMainPage() {
  router.push('/')
}

const attributes = reactive({
  effect: {
    alt: "test",
    width: "500",
    height: "800",
    src: photoId,
    opacity: opacitySlider,
    blur: blurSliderComputed,
    overlays: [
      {
        position: {
          gravity: 'south',
          y: 120
        },
        text: {
          color: textColorSlider,
          fontFamily: 'Source Sans Pro',
          fontSize: fontSizeSliderComputed,
          fontWeight: 'black',
          text: text,
        }
      }
    ]
  }
})


</script>

<template>
  <div class="flex flex-col items-center gap-4 w-3/4 m-auto">
    <h1 class="font-extrabold text-4xl">
      Customize the photo
    </h1>
    <div class="grid grid-cols-2 gap-4">
      <section class="flex flex-col gap-4">
        <div class="border border-blue-300 p-4 flex flex-col gap-4 rounded">
          <h2 class="text-2xl">Write text to add to the image</h2>
          <input v-model="text" type="text" class="bg-gray-200 rounded p-4" placeholder="Enter text">
        </div>
        <ImageSlider v-model="opacitySlider"  class="border-purple-300">Opacity</ImageSlider>
        <ImageSlider v-model="blurSlider"  class="border-green-300">Blur</ImageSlider>
        <ImageSlider v-model="fontSizeSlider"  class="border-orange-300">Fontsize</ImageSlider>
        <ColorSlider v-model="textColorSlider"  class="border-lime-300">Color</ColorSlider>
        <section class="flex items-center justify-between gap-4">
          <AttributeButton
           class="bg-blue-500"
           v-model="attributes"
           effect="remove-background"
          >
            {{attributes.effect['remove-background'] ? 'Rollback background' : 'Remove background' }}
          </AttributeButton>
          <AttributeButton
              class="bg-blue-500"
              v-model="attributes"
              effect="pixelate"
          >
            {{attributes.effect?.pixelate ? 'Depixelate' : 'Pixelate' }}
          </AttributeButton>
          <AttributeButton
              class="bg-green-500"
              v-model="attributes"
              effect="grayscale"
          >
            {{attributes.effect?.grayscale ? 'Colorize' : 'Grayscale' }}
          </AttributeButton>
        </section>
      </section>
      <section class="flex w-full">
        <div v-if="$route.query.photo" class="w-full flex justify-center">
          <CldImage
              v-bind="attributes.effect"
          />
        </div>
      </section>
    </div>
    <button @click="redirectToMainPage" class="bg-green-400 text-white rounded p-2 w-3/5 mt-4 hover:bg-green-900">Go
      back
    </button>
  </div>
</template>

<style scoped>

</style>