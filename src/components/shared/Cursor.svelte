<script lang="ts">
    import { isPreviewing } from '@builder.io/sdk-svelte';
  	import { onMount } from 'svelte';
	import { spring, tweened } from 'svelte/motion';

	type Modes = null | "morph" | "carousel"
	let modes: Modes = null 
	let modeElement: HTMLElement | undefined = undefined

	const isModes = (value: string | null): value is Modes => {
		if (value === null) return true
		return ["morph", "carousel"].includes(value)
	}

	const searchParentModes = (node: Element, mode: Modes) => {
		let parent: Element | null = node
		while (parent)  {
			if (parent.getAttribute('data-mode') === mode) return true	
			if(parent.tagName === "BODY") return false
			parent = parent.parentElement
		}

		return false
	}

	const searchParentDataColor = (node: Element) => {
		let parent: Element | null = node
		while (parent)  {
			if (parent.getAttribute('data-mode')) return parent.getAttribute('data-mode') as Modes
			if(parent.tagName === "BODY") return null
			parent = parent.parentElement
		}

		return null
	}

	const isPreview = isPreviewing()
	const DEFAULTS = {
		width: 40,
		height: 40,
		borderColor: '#E9AA52'
	};
	let borderColor = DEFAULTS.borderColor;
	let element: HTMLElement | undefined = undefined;
  	let shouldMouseEvent = true
	$: if (element && modes === "morph") {
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

  const scale = tweened(1, {
    duration: 100,
  });

	const opacity = tweened(0, {
		duration: 100
	});

	const onMove = (event: Event) => {
		if (
			event.target instanceof HTMLParagraphElement ||
			event.target instanceof HTMLHeadingElement
		) {
			$opacity = 0.2;
		} else {
			$opacity = 1;
		}

		if (modes != 'morph') {
			let x: number, y: number
			if (event instanceof MouseEvent) {
				x = event.x
				y = event.y

				coords.set({ x, y }, {
        			hard: $coords.x === 0 && $coords.y === 0
      			}).then(() => opacity.set(0, { delay: 250 }));
			} else if (event instanceof TouchEvent) {
				const first = event.changedTouches[0]
				x = first.clientX
				y = first.clientY

				coords.set({ x, y }, {
        			soft: true
      			}).then(() => opacity.set(0, { delay: 250 }));
			}
		}
	};

	const onOver = (event: MouseEvent) => {
		borderColor = DEFAULTS.borderColor;
		element = undefined

		morph.set({
			width: DEFAULTS.width,
			height: DEFAULTS.width,
			borderRadius: 900
		});

		if (event.target instanceof HTMLElement) {
			const styles = getComputedStyle(event.target);
			if (modes === "carousel" && modeElement && (modeElement.contains(event.target) || searchParentModes(event.target, 'carousel'))) {
			} else {
				modeElement = undefined
				modes = null
				const _mode = event.target.getAttribute('data-mode') ?? searchParentDataColor(event.target)
				if (isModes(_mode)) {
					modes = _mode ?? (styles.cursor === 'pointer' ? 'morph' : null)
					modeElement = event.target
				}
			}

			if (styles.cursor === 'pointer') {
        		$scale = 1
				element = event.target;
			}
		}
	};

	const resyncCursor = () => {
    if (element) {
      const styles = window.getComputedStyle(element)
      if (!element.isConnected) {
        element = undefined
        $opacity = 0
      } else if (styles.display === 'none') {
        element = undefined
        $opacity = 0
      } else {
        element = element;
      }
    }
	};

	const onMouseDown = () => {
    if (element && element.hasAttribute('onclick')) {
      $scale = 0.8
    } else if (element && element.hasAttribute('href')) {
      $scale = 0.8
    } else if (!element) {
      $scale = 0.8
    }
	};

	const onMouseUp = () => {
		$scale = 1
	};

  const onFocusIn = (event: FocusEvent) => {
    if (event.target instanceof HTMLBodyElement) return
    if (event.target instanceof HTMLElement) {
	  const _mode = event.target.getAttribute('data-mode')				
	  if (isModes(_mode)) modes = _mode ?? 'morph'
      $opacity = 1
      element = event.target
      shouldMouseEvent = false
    }
  }

  const onFocusOut = () => {
    element = undefined
	modes = null
    morph.set({
    	width: DEFAULTS.width,
		height: DEFAULTS.width,
		borderRadius: 900
    })
    $opacity = 0
    shouldMouseEvent = true
  }

  let observer: MutationObserver
  onMount(() => {
    const main = document.querySelector('main')
    if (!main) return
    observer = new MutationObserver(resyncCursor)
    observer.observe(main, { childList: true, subtree: true, attributes: true, characterData: true })
  })

  const CarouselCursorPop = (node: Element, options?: { duration?: number }) => ({
	duration: options?.duration ?? 100,
	css: (t: number) => {
		return `
			opacity: ${t};
			transform: translateY(-50%) scaleY(${0.75 - (0.25 * t)});
		`
	}
  })
</script>

<svelte:window
	on:mousemove={shouldMouseEvent ? onMove : undefined}
	on:mouseover={shouldMouseEvent ? onOver: undefined}
	on:mousedown={onMouseDown}
	on:mouseup={onMouseUp}
	on:touchmove={onMove}
	on:scroll={resyncCursor}
	on:resize={resyncCursor}
	on:focusin={onFocusIn}
	on:focusout={onFocusOut}
/>


{#if !isPreview}
	<div class="fixed z-10 top-0 left-0 w-screen h-screen pointer-events-none noise-bg">
		<div
			class="cursor relative rounded-[var(--borderRadius)] border border-[color:var(--borderColor)]"
			style:--x={`${$coords.x?.toPrecision()}px`}
			style:--y={`${$coords.y}px`}
			style:--width={`${$morph.width * $scale}px`}
			style:--height={`${$morph.height * $scale}px`}
			style:--borderRadius={`${$morph.borderRadius}px`}
			style:--borderColor={borderColor}
			style:--opacity={$opacity}
		>
			{#if modes === "carousel"}
				<svg transition:CarouselCursorPop class="w-6 h-6 text-yellow-300 absolute top-1/2 left-[-28px] -translate-y-1/2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
				<svg transition:CarouselCursorPop class="w-6 h-6 text-yellow-300 absolute top-1/2 right-[-28px] -translate-y-1/2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
			{/if}
		</div>
	</div>
{/if}

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
