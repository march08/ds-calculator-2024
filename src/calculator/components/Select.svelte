<script lang="ts">
	import { isTruthy } from '../utils/isTruthy.js';

	import type { FocusEventHandler } from 'svelte/elements';
	import { createPopperActions } from 'svelte-popperjs';
	import type { Option, OptionOrDelimiter } from '../types.js';

	export let multiselect: boolean = false;
	export let value: string[] = [];
	export let placeholder: string = 'placeholder';
	export let options: Readonly<OptionOrDelimiter[]>;
	export let onChange: (value: string[]) => void;
	export let onOpen: () => void;
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

	$: if (isDropdownOpen) {
		onOpen();
	}

	const handleDropdownFocusLoss: FocusEventHandler<HTMLDivElement> = ({
		relatedTarget,
		currentTarget
	}) => {
		// use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
		if (
			(relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) ||
			relatedTarget === currentTarget
		) {
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
		const sorted = options
			.filter((item) => internalState.includes(item.key || ''))
			.map((item) => item.key)
			.filter(isTruthy);
		onChange(sorted);
		isDropdownOpen = false;
	};

	$: select = value.map((val) => options.find((opt) => opt.key === val)).filter(isTruthy);
	$: displayValue = select
		.map((item) => 'label' in item && item.label)
		.filter(isTruthy)
		.join(multiselectDelimiter);

	let optionsOnly: Option[];
	$: optionsOnly = options.filter((item) => 'label' in item) as Option[];

	const [popperRef, popperContent] = createPopperActions({
		placement: 'bottom-start',
		strategy: 'fixed'
	});
	const extraOpts = {
		modifiers: [{ name: 'offset', options: { offset: [0, 12] } }]
	};
</script>

<select multiple bind:value class="dc-calc-hidden">
	{#each optionsOnly as option}
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
		class="ds-calc-dropdown-content-wrapper"
		use:popperContent={extraOpts}
		class:visible={isDropdownOpen}
		tabindex="-3"
	>
		<div class="ds-calc-dropdown-content">
			<div class="ds-calc-dropdown-content-items">
				{#each options as option}
					{#if 'key' in option && 'label' in option}
						<button
							class="ds-calc-dropdown-content-item"
							class:selected={internalState.includes(option.key)}
							on:click={() => {
								if (option.key) {
									handleSelect(option.key);
								}
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
					{:else}
						<div class="ds-calc-dropdown-content-title">
							{option.title}
						</div>
					{/if}
				{/each}
			</div>
			{#if multiselect}
				<div class="ds-calc-dropdown-confirm-container">
					<button
						class="ds-calc-dropdown-confirm"
						disabled={internalState.length === 0}
						on:click={onConfirm}>Confirm Selection</button
					>
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="scss" global>
	.dc-calc-hidden {
		display: none;
	}
	.ds-calc-dropdown {
		position: relative;
		display: inline;
		width: min-content;
		align-items: center;
		button {
			text-align: left;
		}
		&-content {
			&-title {
				display: flex;
				padding: 16px 12px;
				font-weight: 600;
				font-size: 12px;
				line-height: 18px;
				letter-spacing: 0.8px;
				text-transform: uppercase;
				color: rgba(25, 24, 35, 0.6);
				width: 100%;
				margin-left: -12px;
				margin-bottom: -2px;
				position: sticky;
				top: 0;
				background: var(--bg-primary);
				&:not(:first-child) {
					&:before {
						content: '';
						height: 1px;
						left: 12px;
						right: 12px;
						display: block;
						background: var(--border-primary);
						position: absolute;
						top: 0;
					}
					margin-top: 9px;
				}
			}
			&-items {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				padding: 0px 12px 12px;
				gap: 2px;
				isolation: isolate;

				max-height: 350px;
				overflow-y: auto;
			}
			&-item {
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				justify-content: space-between;
				cursor: pointer;

				padding: 8px 12px;
				gap: 16px;
				border-radius: 8px;
				background: white;
				border: none;
				outline: none;
				color: var(--text-secondary);
				font-weight: 500;
				font-size: 18px;
				line-height: 27px;

				.ds-calc-dropdown-content-item-check {
					border-radius: 2px;
					height: 20px;
					width: 20px;
					flex-shrink: 0;
					border: 1px solid var(--border-primary);
					transition: 0.2s all;
					outline: 2px solid transparent;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				&:hover,
				&:focus {
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
		display: inline-block;
		background: none;
		outline: none;
		border: none;
		padding: 0;
		color: white;
		line-height: var(--question-line-height);
		cursor: pointer;
		&.placeholder {
			color: #ffffffcc;
		}
	}

	.ds-calc-dropdown-content-wrapper {
		opacity: 0;
		z-index: 10000;
		pointer-events: none;
		visibility: hidden;
		transition: 0.2s opacity;
		&.visible {
			opacity: 1;
			pointer-events: all;
			visibility: visible;
		}
		@media screen and (max-width: 479px) {
			width: calc(100%);
		}
	}

	.ds-calc-dropdown-content {
		padding: 8px 0 0 0;
		top: calc(100% + 24px);
		left: 0;
		background: white;
		border-radius: 16px;
		transition: 0.2s opacity;
		overflow: hidden;
		width: max-content;
		max-width: 90vw;

		@media screen and (max-width: 479px) {
			/* transform: translateX(-16px); */
			margin-left: 12px;
			width: calc(100% - 24px);
			max-width: none;
		}
	}

	.ds-calc-dropdown-confirm-container {
		border-top: 1px solid rgba(19, 0, 50, 0.15);
		padding: 8px;
	}
	.ds-calc-dropdown-confirm {
		/* Auto layout */
		display: flex;
		align-items: center;
		padding: 12px 16px;

		height: 48px;
		width: auto;

		flex-shrink: 0;
		border: none;
		outline: none;
		background: var(--bg-primary);

		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		color: #4c00ff;
		transition: 0.2s all;
		border-radius: 8px;
		&:disabled {
			color: var(--text-disabled);
			pointer-events: none;
		}
		&:hover {
			background: var(--bg-secondary);
			cursor: pointer;
		}
	}

	.ds-calc-select-display-text {
		transition: 0.2s all;
		border-bottom: 2px solid rgba(255, 255, 255, 0.25);
		font-size: var(--assessment-font-size);
		letter-spacing: var(--assessment-font-letter-spacing);
		line-height: var(--question-line-height);
		&.visible {
			border-bottom: 4px solid;

			border-image-slice: 1;
			border-image-source: linear-gradient(45deg, #ff5252 0%, #ffa8c5 50.5%, #cbc2ff 100%);
		}
	}
</style>
