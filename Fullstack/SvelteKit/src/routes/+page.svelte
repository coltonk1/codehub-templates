<script lang="ts">
	let count = 0; // Initializes a counter variable to 0.

	$: doubled_count = count * 2; // Reactive declaration: doubled_count automatically updates whenever 'count' changes.

	let unchanged_count = count * 3; // Non-reactive declaration: unchanged_count is calculated only once when initially defined. It will not update when 'count' changes.

	function increment() {
		count++; // Increments the 'count' variable by 1.
	}

	let data: null = null; // Initializes 'data' to null, representing the fetched data.
	let loading = false; // Initializes 'loading' to false, indicating that data is not currently being fetched.
	let error: string | null = null; // Initializes 'error' to null, representing any error that occurred during fetching.

	async function fetchData() {
		loading = true; // Sets 'loading' to true, indicating that data fetching has started.
		error = null; // Resets 'error' to null before attempting to fetch data.
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Fetches data from a placeholder API.
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`); // Throws an error if the HTTP response is not successful.
			}
			data = await response.json(); // Parses the JSON response and stores it in 'data'.
		} catch (err) {
			if (err instanceof Error) {
				error = err.message; // Stores the error message if the error is an instance of Error.
			} else {
				error = 'An unknown error occurred.'; // Stores a generic error message for other types of errors.
			}
		} finally {
			loading = false; // Sets 'loading' to false, indicating that data fetching has finished.
		}
	}
</script>

<!-- Changes title of page and description, important for SEO -->
<svlete:head>
	<title>Home Page</title>
	<meta name="description" content="A brief description of your page's content." />
</svlete:head>

<div class="mx-auto flex w-fit flex-1 flex-col items-center justify-center">
	<button
		on:click={increment}
		class="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-black"
	>
		Increment
	</button>

	<p class="mt-4 text-lg">Count: <span class="font-semibold">{count}</span></p>
	<p class="mt-2 text-lg">Doubled Count: <span class="font-semibold">{doubled_count}</span></p>
	<p class="mt-2 text-lg">Unchanged Count: <span class="font-semibold">{unchanged_count}</span></p>

	<button
		on:click={fetchData}
		class="mt-4 cursor-pointer rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-black"
	>
		Fetch Data
	</button>

	{#if loading}
		<p class="mt-4">Loading...</p>
	{:else if error}
		<p class="mt-4 text-red-500">Error: {error}</p>
	{:else if data}
		<p class="mt-4">Data: {JSON.stringify(data, null, 2)}</p>
	{/if}
</div>
