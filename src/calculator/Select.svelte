<script lang="ts">
	import { isTruthy } from './utils/isTruthy.js';

	import type { FocusEventHandler } from 'svelte/elements';

	export let multiselect: boolean = false;
	export let value: string[] = [];
	export let placeholder: string = 'placeholder';
	export let title: string;
	export let options: { key: string; label: string }[];
	export let onChange: (value: string[]) => void;
	export let multiselectDelimiter: string = ', ';
	let isDropdownOpen = false; // default state (dropdown close)

	// for multiselect
	let internalState: string[];
	$: internalState = [];

	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen; // togle state on click

		if (isDropdownOpen && multiselect) {
			internalState = value || [];
		}
	};

	const handleDropdownFocusLoss: FocusEventHandler<HTMLDivElement> = ({
		relatedTarget,
		currentTarget
	}) => {
		// use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) {
			return;
		}
		isDropdownOpen = false;
	};

	const handleSelect = (key: string) => {
		if (multiselect) {
			if (internalState.includes(key)) {
				internalState = internalState.filter((item) => item !== key);
			} else {
				internalState = [...internalState, key];
			}
		} else {
			onChange([key]);
			isDropdownOpen = false;
		}
	};

	const onConfirm = () => {
		onChange(internalState);
		isDropdownOpen = false;
	};

	$: select = value.map((val) => options.find((opt) => opt.key === val)).filter(isTruthy);
	$: displayValue = select.map((item) => item.label).join(multiselectDelimiter);

	import { createPopperActions } from 'svelte-popperjs';
	const [popperRef, popperContent] = createPopperActions({
		placement: 'bottom-start',
		strategy: 'fixed'
	});
	const extraOpts = {
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
	};
</script>

<select multiple bind:value class="dc-calc-hidden">
	{#each options as option}
		<option value={option.key}>{option.label}</option>
	{/each}
</select>

<div use:popperRef class="ds-calc-dropdown" on:focusout={handleDropdownFocusLoss}>
	<button
		class="ds-calc-select-btn"
		on:click={handleDropdownClick}
		class:placeholder={value.length === 0}
	>
		<span class="ds-calc-select-display-text" class:visible={isDropdownOpen}>
			{displayValue || placeholder}
		</span>
	</button>
	<div
		class="ds-calc-dropdown-content"
		use:popperContent={extraOpts}
		class:visible={isDropdownOpen}
	>
		<div class="ds-calc-dropdown-content-title">
			{title}
		</div>
		<div class="ds-calc-dropdown-content-items">
			{#each options as option, index}
				<button
					class="ds-calc-dropdown-content-item"
					class:selected={internalState.includes(option.key)}
					on:click={() => {
						handleSelect(option.key);
					}}
					>{option.label}

					{#if multiselect}
						<div class="ds-calc-dropdown-content-item-check">
							<svg
								width="16"
								height="14"
								viewBox="0 0 16 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M15.0834 1.26507L7.25967 13.2936C7.1236 13.5028 6.90317 13.6385 6.65905 13.6632C6.41492 13.688 6.17282 13.5993 5.99936 13.4215L0.916748 8.21204L2.07476 7.02512L6.45109 11.5107L13.7208 0.333984L15.0834 1.26507Z"
									fill="var(--color-checkmark)"
								/>
							</svg>
						</div>
					{/if}
				</button>
			{/each}
		</div>
		{#if multiselect}
			<button class="ds-calc-dropdown-confirm" on:click={onConfirm}>Confirm Selection</button>
		{/if}
	</div>
</div>

<style lang="scss" global>
	.dc-calc-hidden {
		display: none;
	}
	.ds-calc-dropdown {
		position: relative;
		display: inline-flex;
		align-items: center;
		button {
			text-align: left;
		}
		&-content {
			&-title {
				display: flex;
				padding: 16px 24px;
				font-weight: 600;
				font-size: 12px;
				line-height: 150%;
				letter-spacing: 0.8px;
				text-transform: uppercase;
				color: rgba(25, 24, 35, 0.6);
			}
			&-items {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				padding: 0px 12px 12px;
				gap: 2px;
				isolation: isolate;

				max-height: 240px;
				overflow-y: scroll;
			}
			&-item {
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				justify-content: space-between;

				padding: 8px 12px;
				gap: 16px;
				border-radius: 8px;
				background: white;
				border: none;
				outline: none;
				color: var(--text-secondary);
				font-weight: 500;
				font-size: 18px;

				.ds-calc-dropdown-content-item-check {
					border-radius: 2px;
					height: 20px;
					width: 20px;
					flex-shrink: 0;
					border: 1px solid var(--border-primary);
					transition: 0.2s all;
					outline: 2px solid transparent;
				}
				&:hover {
					color: var(--text-primary);
					background: var(--bg-secondary);
					.ds-calc-dropdown-content-item-check {
						border-color: #191823;
						outline: 2px solid #1918230d;
					}
				}
				&.selected {
					.ds-calc-dropdown-content-item-check {
						background: #5b8bff;
						--color-checkmark: white;
					}
					&:hover {
						.ds-calc-dropdown-content-item-check {
							border-color: transparent;
						}
					}
				}
			}
		}
	}
	.ds-calc-select-btn {
		display: block;
		background: none;
		outline: none;
		border: none;
		padding: 0;
		font-size: 36px;
		color: white;
		line-height: calc(60px + 12px);
		&.placeholder {
			color: #ffffffcc;
		}
	}

	.ds-calc-dropdown-content {
		z-index: 1000;
		padding: 8px 0;
		top: calc(100% + 24px);
		left: 0;
		background: white;
		border-radius: 16px;
		pointer-events: none;
		transition: 0.2s all;
		opacity: 0;
		overflow: hidden;
		width: max-content;
		max-width: 90vw;
		&.visible {
			opacity: 1;
			pointer-events: all;
		}
	}

	.ds-calc-dropdown-confirm {
		/* Auto layout */
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 16px 24px;

		height: 56px;
		width: 100%;

		flex-shrink: 0;
		border: none;
		outline: none;
		background: var(--bg-primary);
		border-top: 1px solid rgba(19, 0, 50, 0.15);

		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		color: #4c00ff;
	}

	.ds-calc-select-display-text {
		transition: 0.2s all;
		border-bottom: 2px solid rgba(255, 255, 255, 0.25);
		padding-bottom: 8px;
		&.visible {
			border-bottom: 4px solid;

			border-image-slice: 1;
			border-image-source: linear-gradient(45deg, #ff5252 0%, #ffa8c5 50.5%, #cbc2ff 100%);
		}
	}
</style>
