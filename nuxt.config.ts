// https://nuxt.com/docs/api/configuration/nuxt-config
import {undefined} from "zod";
import {SymbolKind} from "vscode-languageserver-types";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/cloudinary", '@nuxtjs/tailwindcss'],
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME
  },
  runtimeConfig: {
    cloudSecret: process.env.NUXT_CLOUD_API_SECRET,
    cloudKey: process.env.NUXT_CLOUD_API_KEY,
    paginationSize: Number(process.env.NUXT_PAGINATION_SIZE) || 12,
    public: {
      cloudUploadPreset: process.env.CLOUD_API_UPLOAD_PRESET || 'nuxt-cloudinary-unsigned'
    }
  },
})
