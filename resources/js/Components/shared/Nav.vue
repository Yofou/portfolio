<script setup lang="ts">
  import { Link } from "@inertiajs/inertia-vue3";
  import { usePage } from "@inertiajs/inertia-vue3"

  const page = usePage()
</script>

<template>
  <nav
    class="
      grid grid-cols-[repeat(2,max-content),1fr,max-content]
      gap-4
      mb-10
      -translate-x-2
    "
  >
    <Link
      class="
        font-semibold
        rounded-full
        hover:text-yellow-300 hover:underline
        px-2
        py-1
      "
      href="/"
      :class="{ 'pointer-events-none underline': page.url.value == '/'}"
      :tabindex="page.url.value == '/' ? -1 : undefined"
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
      :class="{ 'pointer-events-none underline': page.url.value == '/blogs'}"
      :tabindex="page.url.value == '/blogs' ? -1 : undefined"
    >
      Blogs
    </Link>

    <a class="justify-self-end" href="https://github.com/Yofou">
      <img
        class="w-[30px] h-[30px] rounded-full"
        src="/icons/github.svg"
        alt="Github Profiled"
        width="150"
        height="150"
      />
    </a>

    <a href="https://www.linkedin.com/in/nathan-ewen-b86315182/">
      <img
        class="w-[30px] h-[30px] rounded-[5px]"
        src="/icons/linkedin.svg"
        alt="Linked in Profile"
        width="150"
        height="150"
      />
    </a>
  </nav>
</template>
