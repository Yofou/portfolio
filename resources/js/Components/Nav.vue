<script setup lang="ts">
  import { Link } from "@inertiajs/inertia-vue3";
</script>

<template>
  <nav class="flex gap-4 mb-10 -translate-x-2">
    <Link
      class="
        font-semibold
        rounded-full
        hover:text-yellow-300 hover:underline
        px-2
        py-1
      "
      href="/"
    >
      Home
    </Link>
    <Link
      class="
        font-semibold
        rounded-full
        hover:text-yellow-300 hover:underline
        px-2
        py-1
      "
      href="/blogs"
    >
      Blogs
    </Link>
  </nav>
</template>
