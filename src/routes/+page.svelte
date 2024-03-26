<script>
	import Calculator from '../calculator/Calculator.svelte';
</script>

<div class="container">
	<Calculator />
</div>

<style global>
	body {
		background: #4c00ff;
	}
	.container {
		max-width: calc(1080px + 48px);
		padding-left: 24px;
		padding-right: 24px;
		margin: auto;
		padding-top: 50dvh;
		padding-bottom: 20dvh;
	}
</style>
