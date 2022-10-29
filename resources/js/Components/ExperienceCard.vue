<script setup lang="ts">
const props = defineProps<{
  name: string;
  description: string;
  src: string;
  position: "Frontend" | "Backend" | "Fullstack";
  classImg?: string;
  href: string;
}>();
</script>

<template>
  <div
    class="
      grid grid-cols-[150px,1fr] grid-rows-[max-content,1fr]
      relative
      gap-2 gap-x-8
      w-full
      min-h-[200px]
      px-6
      py-4
      rounded-[10px]
      bg-purple-300
    "
  >
    <img
      :class="`w-full col-start-1 col-end-2 row-start-1 row-end-[-1] ${
        props.classImg ?? 'place-self-center'
      }`"
      :src="src"
      :alt="name"
    />
    <div
      class="
        col-start-2 col-end-3
        row-span-2
        gap-y-2
        grid grid-cols-1
        h-full
        grid-rows-[max-content,1fr]
      "
    >
      <a
        :href="href"
        class="
          text-[1.3rem]
          justify-self-start
          rounded-full
          px-4
          py-2
          -ml-4
          text-yellow-300
          before:absolute
          before:inset-0
        "
        >{{ props.name }} - {{ props.position }} Developer</a
      >
      <p class="row-start-2 row-end-3 leading-[1.5rem] text-white/80">{{ props.description }}</p>
    </div>
  </div>
</template>
