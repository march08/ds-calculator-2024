<script>
	import Calculator from '../calculator/Calculator.svelte';
</script>

<div class="container">
	<Calculator targetResultCardsContainerSelector=".swiper-wrapper" />
</div>

<style global>
	body {
		background: #4c00ff;
	}
	.container {
		padding-top: 50dvh;
		padding-bottom: 20dvh;
	}
</style>
