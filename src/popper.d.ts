declare module '@popperjs/svelte' {
	interface Popper extends ConstructorOfATypedSvelteComponent {}
	// eslint-disable-next-line
	export default Popper as any;
}
