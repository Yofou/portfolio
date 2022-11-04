<script lang="ts">
import { Head } from "@inertiajs/inertia-vue3";
import Nav from "@/Components/shared/Nav.vue";
import HrTitle from "@/Components/shared/HrTitle.vue";
import Experience from "@/Components/index/Experience.vue";
import WhatIveUsed from "@/Components/index/WhatIveUsed.vue";
import NoBlogs from "@/Components/shared/NoBlogs.vue";
import MetaSocials from "@/Components/shared/MetaSocials.vue";
import Cursor from "@/Components/shared/Cursor.vue";

export default {
  props: {
    host: String
  },
  setup(props) {
    return {
      host: props.host,
    }
  },
  layout: Cursor,
  components: {
    Head,
    MetaSocials,
    Nav,
    HrTitle,
    NoBlogs,
    Experience,
    WhatIveUsed,
  }
}
</script>

<template>
  <Head>
    <title>Nathan | Home</title>
    <meta name="description" content="Nathan Portfolio Site & Where they put their short blogs reviewing Web Developement tech.">
    <link rel='canonical' :href="`${host}/`" />
  </Head>

  <MetaSocials :host="host" />

  <main
    class="
      w-full
      justify-center
      min-h-screen
      grid-flow-row
      auto-rows-max
      grid grid-cols-container
      py-20
      px-4
      text-white
      selection:bg-purple-500
    "
  >
    <h1 class="sr-only">Nathan's Portfolio landing page</h1>
    <Nav />

    <header
      class="
        w-full
        grid
        grid-cols-[1fr] md:grid-cols-[1fr,max-content]
        gap-y-6
        justify-items-start
        items-end
      "
    >
      <h2 class="text-yellow-300 text-3xl max-w-[600px] font-black underline">
        Hey I'm Nathan 👋
      </h2>
      <p class="max-w-[600px] leading-[1.5rem]">
        I've been a problem-solving enthusiast since I was a wee bambi. In my
        spare time, I convert concepts from frontend-mentor into fullstack
        applications. You can often find me chatting and helping with
        like-minded members of various online communities. Professionally by
        trade I'm a software engineering consultant currently with Visual
        Boston. However, I'm always open to new & enticing problems to solve so
        let’s connect at
        <a
          href="mailto:reach@yofou.dev"
          class="
            py-1
            px-3
            inline-block
            mt-2
            bg-purple-300
            text-yellow-300
            rounded-full
          "
          >reach@yofou.dev</a
        >.
      </p>

      <img
        class="
          hidden
          md:block
          w-[200px]
          h-[250px]
          col-start-2 col-end-3
          row-start-1 row-end-3
          object-cover
        "
        src="/profile-new.png"
        alt=""
        width="676"
        height="676"
      />
    </header>

    <HrTitle>Experience</HrTitle>
    <Experience />

    <HrTitle>What I've Worked with</HrTitle>
    <WhatIveUsed />

    <HrTitle>Blogs</HrTitle>
    <NoBlogs />
  </main>
</template>
