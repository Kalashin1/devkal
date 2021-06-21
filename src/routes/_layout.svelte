<script>
	import Footer from "../components/Footer.svelte"
	import Preloader from "../components/Preloader.svelte"
	import AboutSection from "../components/About-section.svelte"
	// export let segment;
</script>

<style>
  
</style>



<main>
	<Preloader />
	<div id="main">
		<div class="container">
			<div class="row">
				<AboutSection />
				<slot></slot>
			</div>
		</div>
	</div>
</main>

