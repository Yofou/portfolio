<script lang="ts">
	import { spring, tweened } from 'svelte/motion';

	const DEFAULTS = {
		width: 40,
		height: 40,
		borderColor: '#E9AA52'
	};
	let borderColor = DEFAULTS.borderColor;
	let element: HTMLElement | undefined = undefined;
	$: if (element) {
		const styles = getComputedStyle(element);
		const rect = element.getBoundingClientRect();
		const width = parseInt(styles.width);
		const height = parseInt(styles.height);
		borderColor = element.getAttribute('data-color') ?? DEFAULTS.borderColor;
		coords.set({ x: rect.x + width / 2, y: rect.y + height / 2 });
		morph.set({
			width,
			height,
			borderRadius: parseInt(styles.borderRadius)
		});
	}

	const coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.2,
			damping: 0.8
		}
	);

	const morph = tweened(
		{
			width: DEFAULTS.width,
			height: DEFAULTS.height,
			borderRadius: 99999
		},
		{
			duration: 100
		}
	);

	const opacity = tweened(0, {
		duration: 100
	});

	let timeoutId: number;
	const onMove = (event: MouseEvent) => {
		if (timeoutId) clearTimeout(timeoutId);
		if (
			event.target instanceof HTMLParagraphElement ||
			event.target instanceof HTMLHeadingElement
		) {
			$opacity = 0.2;
		} else {
			$opacity = 1;
		}

		if (!element) {
			coords.set({ x: event.x, y: event.y });

			const oldCoords = { x: event.x, y: event.y };
			timeoutId = window.setTimeout(() => {
				if ($coords.x === oldCoords.x && $coords.y === oldCoords.y) $opacity = 0;
			}, 500);
		}
	};

	const onOver = (event: MouseEvent) => {
		element = undefined;
		borderColor = DEFAULTS.borderColor;

		morph.set({
			width: DEFAULTS.width,
			height: DEFAULTS.width,
			borderRadius: 900
		});

		if (event.target instanceof HTMLElement) {
			const styles = getComputedStyle(event.target);
			if (styles.cursor === 'pointer') {
				element = event.target;
			}
		}
	};

	const onScroll = () => {
		if (element) element = element;
	};

	const onMouseDown = () => {
		morph.set({
			width: $morph.width * 0.8,
			height: $morph.height * 0.8,
			borderRadius: 900
		});
	};

	const onMouseUp = () => {
		morph.set({
			width: DEFAULTS.width,
			height: DEFAULTS.height,
			borderRadius: 900
		});
	};
</script>

<svelte:window
	on:mousemove={onMove}
	on:mouseover={onOver}
	on:mousedown={onMouseDown}
	on:mouseup={onMouseUp}
	on:scroll={onScroll}
/>

<div class="fixed z-10 top-0 left-0 w-screen h-screen pointer-events-none noise-bg">
	<div
		class="cursor rounded-[var(--borderRadius)] border border-[color:var(--borderColor)]"
		style:--x={`${$coords.x}px`}
		style:--y={`${$coords.y}px`}
		style:--width={`${$morph.width}px`}
		style:--height={`${$morph.height}px`}
		style:--borderRadius={`${$morph.borderRadius}px`}
		style:--borderColor={borderColor}
		style:--opacity={$opacity}
	/>
</div>

<style>
	.cursor {
		--dim: calc(40px * var(--scale, 1));
		width: var(--width);
		height: var(--height);
		opacity: var(--opacity, 0);
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(calc(var(--x) - 50%)) translateY(calc(var(--y) - 50%));
		transition: border-color 100ms ease-in-out;
	}
</style>