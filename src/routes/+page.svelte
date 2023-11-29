<script lang="ts">
	import { Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	
	//Hover popup stuff
	const reactHover: PopupSettings = {
	event: 'hover',
	target: 'reactHover',
	placement: 'top'
	};

	//carousel stuff
	let elemCarousel: HTMLDivElement;
	const unsplashIds = ['vjUokUWbFOs', '1aJuPtQJX_I', 'Jp6O3FFRdEI', 'I3C_eojFVQY', 's0fXOuyTH1M', 'z_X0PxmBuIQ'];
	function carouselLeft(): void {
	const x =
		elemCarousel.scrollLeft === 0
			? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
			: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
	elemCarousel.scroll(x, 0);
	}
	function carouselRight(): void {
	const x =
		elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
			? 0 // loop
			: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
	elemCarousel.scroll(x, 0);
	}
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
		<section class="w-screen md:invisible md:h-0 md:w-0">
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
		
		<!--Layout for Desktop-->
		<section class="invisible w-0 h-0 md:visible md:w-full md:h-full space-y-6">
			<!--Thinks div-->
			<div class="card flex variant-ringed-primary">
				<header class="card-header">
					<div class="h-full">
						<img src="thinks_logo.svg" alt="thinks_logo" class="h-full"/>
					</div>
				</header>
				<span class="divider-vertical h-auto my-12 !border-primary-400-500-token"/>
				<section>
					<div class="min-w-[25vw] space-y-4 p-5 mt-3">
						<b>Thinks</b> is a message board application. Users can log in to participate in a public discussion by posting, commenting, and casting votes.
						<ul class="list space-y-2 text-left">
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #0fba81;"></i></span>
								<span class="flex-auto">OAuth with Google Sign-In</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #0fba81;"></i></span>
								<span class="flex-auto">OAuth with Google Sign-Innnnnnnnnnnn</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #0fba81;"></i></span>
								<span class="flex-auto">OAuth with Google Sign-Innnn</span>
							</li>
						</ul>
						<div class="pt-3">
							<a class="btn variant-filled-warning mr-3" href="https://tangerine-mermaid-88c0fd.netlify.app/" target="_blank">Live demo</a>
							<a class="btn variant-filled-warning" href="https://github.com/srasheed1018/supabase-react-project" target="_blank">Source code</a>
						</div>
					</div>
				</section>
				<span class="divider-vertical h-auto my-12 !border-primary-400-500-token"/>
				<section class="p-5 space-y-4">
					<div class="w-[15vw] text-token card p-4 variant-glass-surface">
						<div class="h3 font-bold">Tech Stack:</div>
						<br/>
						<ul class="list px-7 py-3 text-left space-y-4">
							<li>
								<span><img src="react.png" alt="react_logo" class="w-10 mx-2"/></span>
								<span class="flex-auto text-2xl">React</span>
							</li>
							<li>
								<span><img src="supabase.png" alt="sb_logo" class="w-10 mx-2"/></span>
								<span class="flex-auto text-2xl">Supabase</span>
							</li>
							<li>
								<span><img src="postgres.png" alt="pg_logo" class="w-10 mx-2"/></span>
								<span class="flex-auto text-2xl">PostgreSQL</span>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<!--LinkUp div-->
			<div class="card flex variant-ringed-secondary">
				<header class="card-header">
					<div class="h-full">
						<img src="linkup.png" alt="linkup_logo" class="h-full"/>
					</div>
				</header>
				<span class="divider-vertical h-auto my-12 !border-secondary-400-500-token"/>
				<section class="p-5 my-3 space-y-4">
					<b>LinkUp</b> is a link sharing application. Users configure a bio and a set of links which they can share publicly using their assigned URL.
					<br>
					<a class="btn variant-filled-warning mr-3" href="https://fkit-project-918ef.web.app/" target="_blank">Live demo</a>
					<a class="btn variant-filled-warning" href="https://github.com/srasheed1018/fkit-project" target="_blank">Source code</a>
					<div class="h3 font-bold">Tech Stack:</div>
						<div class="justify-center items-center flex mt-3">
							<img src="svelte.png" alt="svelte_logo" class="h-14 mx-2"/>
							<img src="firebase.png" alt="firebase_logo" class="h-14 mx-2"/>
						</div>
				</section>
			</div>
			<!--Kanban div-->
			<div class="card flex variant-ringed-tertiary">
				<header class="card-header">
					<img src="kanban.png" alt="kanban_logo" class="w-auto h-full aspect-auto"/>
				</header>
				<span class="divider-vertical h-auto my-12 !border-tertiary-400-500-token"/>
				<section class="p-5 my-3 space-y-4">
					This is a <b>Kanban Progressive Web Application.</b> Users can organize boards of tasks via a drag-and-drop interface, all synced to a Google Account.
					<br>
					<a class="btn variant-filled-warning mr-3" href="https://endearing-cat-5a53e0.netlify.app/" target="_blank">Live demo</a>
					<a class="btn variant-filled-warning" href="https://github.com/srasheed1018/angularfire-project" target="_blank">Source code</a>
					<div class="h3 font-bold">Tech Stack:</div>
						<div class="justify-center items-center flex mt-3">
							<img src="angular.svg" alt="angular_logo" class="h-16 mx-2"/>
							<img src="firebase.png" alt="firebase_logo" class="h-14 mx-2"/>
						</div>
				</section>
			</div>
		</section>
	</div>
</div>

<style lang="postcss">
</style>
