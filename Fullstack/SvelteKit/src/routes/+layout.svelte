<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<!-- This is the layout for every neighboring or child page. In this example, every page will have a navbar and footer -->
<main class="flex min-h-screen flex-col">
	<Navbar />
	{@render children()}
	<Footer />
</main>
