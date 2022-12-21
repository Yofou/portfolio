<script lang="ts">
	import ExperienceCard from './ExperienceCard.svelte';
</script>

<section class="flex flex-col gap-4">
	<ExperienceCard
		name="Visual Boston"
		href="https://www.visualboston.com/"
		description="Working with VisualBoston allowed me to work with a team of talented digital product experts focused on all aspects of the software life-cycle. which lead me in many directions from implementing interactive designs to working with complex & intricate micro-serivces."
		position="Fullstack"
		src="/vb.svg"
		width="50"
		height="48"
	/>

	<ExperienceCard
		name="Web Revived"
		href="https://www.webrevived.com/"
		description="My Time at Web Revived started of with small, young & enthusiastic team which taught me how to interact with others team members and work with them efficently & how to plan & execute making web-apps."
		position="Frontend"
		src="https://avatars.githubusercontent.com/u/85769836?s=400&u=61584ac8d57eff334e4f4f430951128c5d84e386&v=4"
		classImg="justify-self-center self-center mix-blend-lighten w-[130px]"
		width="400"
		height="400"
	/>
</section>
