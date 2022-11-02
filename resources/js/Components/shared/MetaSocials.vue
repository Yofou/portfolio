<script lang="ts" setup>
import { Head } from "@inertiajs/inertia-vue3";
defineProps<{
  title?: string
  host: string
}>()
</script>

<template>
  <Head>
  <meta property="og:title" :content="title ?? 'Nathans Portfolio'">
  <meta property="og:description" content="Nathan Portfolio & Where they put their short blogs reviewing Web Developement tech.">
  <meta property="og:type" content="article">
  <meta property="og:image" :content="`${host}/portfolio-thumbnail.png`">
  </Head>
</template>
