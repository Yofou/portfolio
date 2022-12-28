<script lang="ts">
	import { RenderContent, RegisteredComponent } from "@builder.io/sdk-svelte"
    import HrTitle from "../shared/HrTitle.svelte";

	const CUSTOM_COMPONENT: RegisteredComponent[] = [
		{
			name: 'HrTitle',
			component: HrTitle,
			inputs: [],
			builtIn: true,
			canHaveChildren: true
		}
	]

	export let builderContent: any;
	export let apiKey: string
</script>

<div>
	<RenderContent
		content={builderContent}
		model="page"
		customComponents={CUSTOM_COMPONENT}
		{apiKey}
	/>
</div>
