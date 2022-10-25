<script setup lang="ts">
    import { Link } from "@inertiajs/inertia-vue3"
</script>

<template>
    <nav class="grid grid-cols-[repeat(2,5ch)] gap-4 mb-10">
       <Link class="font-medium hover:text-yellow-300 hover:font-semibold hover:underline" href="/">
         Home
       </Link>
       <Link class="font-medium hover:text-yellow-300 hover:font-semibold hover:underline " href="/blogs">
        Blogs
       </Link>
    </nav>
</template>
