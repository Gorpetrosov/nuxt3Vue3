<script setup lang="ts">


import type {ImageInterface} from "~/src/utilities/image.interface";

const router = useRouter();
const config = useRuntimeConfig()

 interface Result {
   info: ImageInterface
 }

 const {data, refresh} =  useFetch('/api/cloud');
 const imageInfo = ref<Result | null>(null)

 function onUpload(result: Ref<Result>) {
   console.log({upload: result.value})
    imageInfo.value = result.value
 }

 function refreshData() {
   refresh();
 }

 function redirectToEditImagePage(imageId: string) {
   router.push(`edit?photo=${encodeURIComponent(imageId)}`)
 }

</script>
<template>
  <section class="flex flex-col gap-6 items-center">
    <h1 class="text-4xl font-extrabold">Select photo to edit</h1>
    <CldUploadWidget
        v-slot="{ open }"
        :uploadPreset="config.public?.cloudUploadPreset"
        :on-upload="onUpload"
        :on-close="refreshData"
    >
      <button class="bg-blue-300 rounded text-white p-4 w-48" type="button" @click="open">Upload an Image</button>
    </CldUploadWidget>
  </section>
<!--  <CldImage-->
<!--      v-if="imageInfo?.info.public_id"-->
<!--      :src="imageInfo?.info.public_id || ''"-->
<!--      width="500"-->
<!--      height="500"-->
<!--      :alt="imageInfo?.info.filename"-->
<!--  />-->
 <div class="p-4 grid grid-cols-3 grid-rows-3 gap-3 w-3/5 m-auto border border-green-300 mt-4">
     <div
         v-for="(picture,index) in data?.resources"
          class="cursor-pointer"
         @click="redirectToEditImagePage(picture.public_id)"
     >
       <CldImage
           :key="index"
           :src="picture.public_id"
           width="600"
           height="600"
           :alt="picture.context?.alt || ''"
       />
     </div>
 </div>
</template>