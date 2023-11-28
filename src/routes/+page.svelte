<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<!--Main container-->
<div class="container h-full mx-auto flex justify-center items-center">
	<!--Centers contents-->
	<div class="space-y-8 text-center flex flex-col items-center">
		
		<!--Avatar-->
		<Avatar src="pfp.jpg" width="w-48" rounded="rounded-full"/>
		<!--Text Area-->
		<div class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">
			<h2 class="h2">
				My name is <b>Siddeeq Rasheed</b>,
			</h2>
			<h3 class="h3">
				and I'm an aspiring software developer.
			</h3>
		</div>

		
		<!--Scroll Container for mobile-->
		<section class="w-screen md:hidden">
			<div class="animate-pulse text-amber-500 italic">Scroll to explore my projects <i class="fa-solid fa-hand-point-right pl-1"></i></div>
			<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">	
				<!--Thinks Card-->
				<div class="variant-glass-primary snap-center shrink-0 card w-full h-fit text-center p-3">
					<header>
						<img src="thinks_logo.svg" alt="thinks_logo" class="w-screen h-full aspect-auto"/>
					</header>
					<section class="py-4 px-2">
						<div>
							<b>Thinks</b> is a message board application. Users can log in to participate in a public discussion by posting, commenting, and casting votes.
						</div>
						<div class="pt-4">
							<a class="btn variant-filled-warning mr-3" href="https://tangerine-mermaid-88c0fd.netlify.app/" target="_blank">Live demo</a>
							<a class="btn variant-filled-warning" href="https://github.com/srasheed1018/supabase-react-project" target="_blank">Source code</a>
						</div>
					</section>
					<footer class="card-footer">
						<span class="h3 font-bold">Tech Stack:</span>
						<div class="justify-center items-center flex mt-3">
							<img src="react.png" alt="react_logo" class="h-12 mx-2"/>
							<img src="supabase.png" alt="supabase_logo" class="h-12 mx-2"/>
							<img src="postgres.png" alt="pg_logo" class="h-12 mx-2"/>
						</div>
					</footer>
				</div>
				<!--LinkUp Card-->
				<div class="variant-glass-secondary snap-center shrink-0 card w-full h-full text-center p-3">
					<header>
						<img src="linkup.png" alt="linkup_logo" class="w-screen h-full aspect-auto"/>
					</header>
					<section class="py-4 px-2">
						<div>
							<b>LinkUp</b> is a link sharing application. Users configure a bio and a set of links which they can share publicly using their assigned URL.
						</div>
						<div class="pt-4">
							<a class="btn variant-filled-warning mr-3" href="https://fkit-project-918ef.web.app/" target="_blank">Live demo</a>
							<a class="btn variant-filled-warning" href="https://github.com/srasheed1018/fkit-project" target="_blank">Source code</a>
						</div>
					</section>
					<footer class="card-footer">
						<span class="h3 font-bold">Tech Stack:</span>
						<div class="justify-center items-center flex mt-3">
							<img src="svelte.png" alt="svelte_logo" class="h-14 mx-2"/>
							<img src="firebase.png" alt="firebase_logo" class="h-14 mx-2"/>
						</div>
					</footer>
				</div>
				<!--Kanban Card-->
				<div class="variant-glass-tertiary snap-center shrink-0 card w-full h-full text-center p-3">
					<header>
						<img src="kanban.png" alt="kanban_logo" class="w-screen h-full aspect-auto"/>
					</header>
					<section class="py-4 px-2">
						<div>
							This is a <b>Kanban Progressive Web Application.</b> Users can organize boards of tasks via a drag-and-drop interface, all synced to a Google Account.
						</div>
						<div class="pt-4">
							<a class="btn variant-filled-warning mr-3" href="https://endearing-cat-5a53e0.netlify.app/" target="_blank">Live demo</a>
							<a class="btn variant-filled-warning" href="https://github.com/srasheed1018/angularfire-project" target="_blank">Source code</a>
						</div>
					</section>
					<footer class="card-footer">
						<span class="h3 font-bold">Tech Stack:</span>
						<div class="justify-center items-center flex mt-3">
							<img src="angular.svg" alt="angular_logo" class="h-16 mx-2"/>
							<img src="firebase.png" alt="firebase_logo" class="h-14 mx-2"/>
						</div>
					</footer>
				</div>
			</div>
		</section>
		
	</div>
</div>

<style lang="postcss">
</style>
