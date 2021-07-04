<script>
	import Navbar from '../components/Navbar.svelte'
	import Footer from "../components/Footer.svelte"
	// export let segment;
</script>

<style>
  
</style>



<main>
	<Navbar />
	<slot></slot>
	<Footer />
</main>

