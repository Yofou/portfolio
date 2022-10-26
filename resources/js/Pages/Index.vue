<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import Nav from "../Components/Nav.vue";
import Cursor from "../Components/Cursor.vue";
import HrTitle from "../Components/HrTitle.vue"

defineProps({});
</script>

<template>
  <Head title="Nathan's | Home" />
  <Cursor />

  <h1 class="sr-only">Nathan Home page</h1>
  <main
    class="
      w-screen
      justify-center
      min-h-screen
      grid-flow-row
      auto-rows-max
      grid grid-cols-container
      py-20
      text-white
      selection:bg-purple-500
    "
  >
    <Nav />

    <header
      class="
        w-full
        grid grid-cols-[1fr,max-content]
        gap-y-6
        justify-items-start
        items-end
      "
    >
      <h2 class="text-yellow-300 text-3xl max-w-[600px] font-black underline">
        Hey I'm Nathan 👋
      </h2>
      <p class="max-w-[600px] leading-[1.6rem]">
        I've been a problem-solving enthusiast since I was a wee bambi. In my
        spare time, I convert concepts from frontend-mentor into fullstack
        applications. You can ofton find me chating and helping with liked
        minded members of various online communities. Professionally by trade
        I'm a software engineering consultant currently with Visual Boston.
        However, I'm always open to new & enticing problems to solve so let’s
        connect at
        <a
          href="mailto:reach@yofou.dev"
          class="
            py-1
            px-3
            inline-block
            mt-2
            bg-[#302638]
            text-yellow-300
            rounded-full
          "
          >reach@yofou.dev</a
        >.
      </p>

      <img
        class="
          w-[200px]
          h-[250px]
          col-start-2 col-end-3
          row-start-1 row-end-3
          object-cover
        "
        src="/profile-new.png"
        alt=""
      />
    </header>

    <HrTitle>Experience</HrTitle>

    <HrTitle>What I've Worked with</HrTitle>

    <HrTitle>Blogs</HrTitle>
  </main>
</template>
