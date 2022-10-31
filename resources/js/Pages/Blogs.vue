<script setup lang="ts">
import { Head } from "@inertiajs/inertia-vue3";
import Container from "@/Components/shared/Container.vue";
import HrTitle from "@/Components/shared/HrTitle.vue";
import Nav from "@/Components/shared/Nav.vue";
import NoBlogs from "@/Components/shared/NoBlogs.vue";
</script>

<template>
  <Head>
    <title>Nathan | Blogs</title>
    <meta
      name="description"
      content="Nathan Blog page, Where they put their short blogs reviewing Web Developement tech."
    />
    <link rel="canonical" href="/blogs" />
  </Head>

  <Container>
    <h1 class="sr-only">Welcome to Nathans Blog site</h1>
    <Nav />
    <HrTitle class="mt-2">Blogs</HrTitle>
    <NoBlogs />
  </Container>
</template>
