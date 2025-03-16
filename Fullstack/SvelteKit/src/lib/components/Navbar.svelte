<script>
	let links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' }
	];
</script>

<nav class="bg-gray-900 p-4 text-white">
	<div class="container mx-auto flex items-center justify-between">
		<a href="/" class="text-2xl font-bold">ExampleSite</a>
		<ul class="flex space-x-4">
			{#each links as link}
				<li>
					<a href={link.href} class="transition duration-300 hover:text-gray-400">
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>
