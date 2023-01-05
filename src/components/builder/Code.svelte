<script lang="ts">
	import Prism from "svelte-prism"
	export let lang: string | undefined
	export let source: string
</script>

<div class="contents">
	<Prism language={lang} {source} />
</div>

<style>
	div :global(*) {
		@apply font-fira;
	}
</style>
