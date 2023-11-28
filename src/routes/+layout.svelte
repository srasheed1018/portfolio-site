<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, Avatar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->

<AppShell>
	<div class="background-anim">
		<ul class="circles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
	<!-- (header) -->
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-500">
			<svelte:fragment slot="lead">
				<span></span>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<section class="w-auto h-auto">
					<div class="logo-cloud h-full grid-cols-2">
						<a class="logo-item px-3 h-10 variant-glass-primary" href="https://github.com/srasheed1018" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-github text-2xl" />
							<span>Github</span>
						</a>
						<a class="logo-item px-3 h-10 variant-glass-primary" href="https://www.linkedin.com/in/siddeeq-rasheed/" target="_blank" rel="noreferrer">
							<i class="fa-brands fa-linkedin text-2xl" />
							<span>LinkedIn</span>
						</a>
					</div>
				</section>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
