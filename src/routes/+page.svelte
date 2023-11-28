<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';

	// Local
	let tabsBasic = 0;
	let desc = {
		books: 'A message board app created using React and Supabase',
		movies: 'A Link sharing app powered by Sveltekit and Firebase',
		tv: 'A Kanban app utilizing Angular and Firebase'
	};
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">
			<h2 class="h2">
				My name is <b>Siddeeq Rasheed</b>,
			</h2>
			<h3 class="h3">
				and I'm an aspiring software engineer.
			</h3>
		</div>
		<br/>
		<section class="w-full card p-4 text-token variant-ghost-primary">
			<TabGroup hover="variant-soft" >
				<!-- Tabs -->
				<Tab bind:group={tabsBasic} name="books" value={0}><span>Project 1</span></Tab>
				<Tab bind:group={tabsBasic} name="movies" value={1}>Project 2</Tab>
				<Tab bind:group={tabsBasic} name="tv" value={2}>Project 3</Tab>
				<!-- Panel -->
				<svelte:fragment slot="panel">
					{#if tabsBasic === 0}
						<p>{desc.books}</p>
					{:else if tabsBasic === 1}
						<p>{desc.movies}</p>
					{:else if tabsBasic === 2}
						<p>{desc.tv}</p>
					{/if}
				</svelte:fragment>
			</TabGroup>

		</section>
	</div>
</div>

<style lang="postcss">
</style>
