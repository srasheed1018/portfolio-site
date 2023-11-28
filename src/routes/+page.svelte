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

		
		
		<!--Scroll Conatiner for mobile-->
		<section class="w-screen">
			<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10">	
				<!--Thinks Card-->
				<div class="variant-glass-tertiary snap-center shrink-0 card w-full h-fit text-center p-3">
					<header>
						<img src="thinks_logo.svg" alt="thinks_logo" class="w-screen h-full aspect-auto"/>
					</header>
					<section class="p-4">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id repellat qui ducimus impedit vitae, incidunt dolore fugiat autem laudantium voluptates quod commodi consequatur nesciunt itaque aliquid beatae a eum harum.
					</section>
					<footer class="card-footer">
						<span class="h3 font-bold">Tech Stack:</span>
						<div class="justify-center items-center flex mt-3">
							<img src="react.png" alt="react_logo" class="w-12 mx-2"/>
							<img src="supabase.png" alt="supabase_logo" class="w-12 mx-2"/>
							<img src="postgres.png" alt="pg_logo" class="w-12 mx-2"/>
						</div>
					</footer>
				</div>
				<!--LinkUp Card-->
				<div class="variant-glass-tertiary snap-center shrink-0 card w-full h-full text-center p-3">
					<header>
						<img src="thinks_logo.svg" alt="thinks_logo" class="w-screen h-full aspect-auto"/>
					</header>
					<section class="p-4">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id repellat qui ducimus impedit vitae, incidunt dolore fugiat autem laudantium voluptates quod commodi consequatur nesciunt itaque aliquid beatae a eum harum.
					</section>
					<footer class="card-footer">
						<span class="h3 font-bold">Tech Stack:</span>
						<div class="justify-center items-center flex mt-3">
							<img src="svelte.png" alt="svelte_logo" class="w-12 mx-2"/>
							<img src="firebase.png" alt="firebase_logo" class="w-12 mx-2"/>
						</div>
					</footer>
				</div>
				<!--Kanban Card-->
				<div class="variant-glass-tertiary snap-center shrink-0 card w-full h-full text-center p-3">
					<header>
						<img src="thinks_logo.svg" alt="thinks_logo" class="w-screen h-full aspect-auto"/>
					</header>
					<section class="p-4">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id repellat qui ducimus impedit vitae, incidunt dolore fugiat autem laudantium voluptates quod commodi consequatur nesciunt itaque aliquid beatae a eum harum.
					</section>
					<footer class="card-footer">
						<span class="h3 font-bold">Tech Stack:</span>
						<div class="justify-center items-center flex mt-3">
							<img src="angular.svg" alt="angular_logo" class="w-12 mx-2"/>
							<img src="firebase.png" alt="firebase_logo" class="w-12 mx-2"/>
						</div>
					</footer>
				</div>
			</div>

		</section>
		
	</div>
</div>

<style lang="postcss">
</style>
