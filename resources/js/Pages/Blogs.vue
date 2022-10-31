<script setup lang="ts">
  import Container from '@/Components/shared/Container.vue';
  import HrTitle from '@/Components/shared/HrTitle.vue';
  import Nav from "@/Components/shared/Nav.vue"
  import NoBlogs from '@/Components/shared/NoBlogs.vue';
</script>

<template>
  <Container>
    <Nav />
    <HrTitle class="mt-2">Blogs</HrTitle>
    <NoBlogs />
  </Container>
</template>
