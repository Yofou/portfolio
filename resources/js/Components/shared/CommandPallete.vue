<script lang="ts" setup>
import { Command } from "vue-command-palette";
import { ref, watch } from "vue";
import { useMagicKeys } from "@vueuse/core";

const isVisible = ref(false);
const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === "k" && e.type === "keydown") {
      e.preventDefault();
    }

    if (e.key === '/') {
      e.preventDefault()
    }
  },
});

const CmdK = keys["Ctrl+K"];
const Slash = keys["/"];
const Esc = keys["escape"];

watch(CmdK, (v) => {
  if (v) {
    isVisible.value = !isVisible.value;
  }
});

watch(Slash, (v) => {
  if (v) {
    isVisible.value = true;
  }
});

watch(Esc, (v) => {
  if (v) {
    isVisible.value = false;
  }
});
</script>

<template>
  <Command.Dialog :visible="isVisible" theme="yofou">
    <template #header>
      <Command.Input
        placeholder="Type a command or search..."
      />
    </template>

    <template #body>
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Item>experience</Command.Item>
        <Command.Item>what i've worked with</Command.Item>
        <Command.Item>blogs</Command.Item>
      </Command.List>
    </template>
  </Command.Dialog>
</template>

<style>
div[command-root=""] {
  @apply w-screen h-screen fixed top-0 left-0 grid place-content-center grid-cols-[750px] grid-rows-[450px] bg-black/20;
}

div[command-dialog=""] {
  @apply bg-[#2a2438] flex flex-col items-center p-6 rounded-[10px];
}

div[command-dialog-mask=""], div[command-dialog-wrapper] {
  @apply w-full h-full flex flex-col;
}

input[command-input=""] {
  @apply w-full p-3 bg-purple-300 rounded-[10px] text-yellow-300 placeholder-yellow-300;
}

div[command-dialog-header=""] {
  @apply mb-5;
}

div[command-list-sizer] {
  @apply flex flex-col gap-2;
}

div[command-item] {
  @apply p-3 bg-purple-300 rounded-[10px] text-white;
}
</style>
