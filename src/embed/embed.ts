import Calculator from '../calculator/Calculator.svelte';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
(window as unknown as any).DocusignCalculator = {
	initialize: ({ renderTarget }: { renderTarget: HTMLElement }) => {
		return new Calculator({
			target: renderTarget
		});
	}
};
