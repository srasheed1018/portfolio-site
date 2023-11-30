<script lang="ts">
	import { Avatar, getModalStore } from '@skeletonlabs/skeleton';
	import type { PopupSettings, ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	//modal stuff
	const modalStore = getModalStore();

	function openModal() {
		const bodyString = '<div class="w-auto h-auto">			<section class="h4">				<ul class="list">					<li>						<span><i class="fa-solid fa-envelope" style="color: #0a95b8;"></i></span>						<a href="mailto:srasheed9326@gmail.com">srasheed9326@gmail.com</a>					</li>					<li>						<span><i class="fa-solid fa-phone" style="color: #0a95b8;"></i></span>						<span>(347) 886-2615</span>					</li>					<li>						<span><i class="fa-brands fa-github" style="color: #0a95b8;"></i></span>						<a href="https://github.com/srasheed1018" target="_blank">srasheed1018</a>					</li>					<li>						<span><i class="fa-brands fa-linkedin" style="color: #0a95b8;"></i></span>						<a href="https://www.linkedin.com/in/siddeeq-rasheed/" target="_blank">siddeeq-rasheed</a>					</li>				</ul>			</section>		</div>'

		const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: 'Contact Information',
			body: bodyString,
		};
		modalStore.trigger(modal);
	}

</script>

<!--Main container-->
<div class="container h-full mx-auto flex justify-center items-center scrollbar-hide">
	<!--Centers contents-->
	<div class="space-y-4 md:space-y-8 text-center flex flex-col items-center">
		
		<!--Avatar-->
		<Avatar src="pfp.jpg" width="w-48" rounded="rounded-full" class="mt-8 md:mt-16"/>
		<!--Text Area-->
		<div class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">
			<h2 class="h2">
				My name is <b>Siddeeq Rasheed</b>,
			</h2>
			<h3 class="h3">
				and I'm an aspiring software developer.
			</h3>
		</div>
		<button class="btn glow-button" on:click={openModal}>
			CONTACT INFO
		</button>
		
		<!-- was making the modal body here for autofill purposes
		<div class="w-auto h-auto">
			<section class="h4">
				<ul class="list">
					<li>
						<span><i class="fa-solid fa-envelope" style="color: #0a95b8;"></i></span>
						<a href="mailto:srasheed9326@gmail.com">srasheed9326@gmail.com</a>
					</li>
					<li>
						<span><i class="fa-solid fa-phone" style="color: #0a95b8;"></i></span>
						<span>(347) 886-2615</span>
					</li>
					<li>
						<span><i class="fa-brands fa-github" style="color: #0a95b8;"></i></span>
						<a href="https://github.com/srasheed1018" target="_blank">srasheed1018</a>
					</li>
					<li>
						<span><i class="fa-brands fa-linkedin" style="color: #0a95b8;"></i></span>
						<a href="https://www.linkedin.com/in/siddeeq-rasheed/" target="_blank">siddeeq-rasheed</a>
					</li>
				</ul>
			</section>
		</div>

		-->

		<!--Scroll Container for mobile-->
		<section class="w-screen md:invisible md:h-0 md:w-0">
			<div class="animate-pulse text-amber-500 italic">Scroll to explore my projects <i class="fa-solid fa-hand-point-right pl-1"></i></div>
			<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto scrollbar-hide px-4 py-10">	
				<!--Thinks Card-->
				<div class="variant-glass-primary snap-center shrink-0 card w-full h-fit text-center p-3">
					<header>
						<img src="thinks_logo.svg" alt="thinks_logo" class="w-screen h-full aspect-auto"/>
					</header>
					<section class="py-4 px-2">
						<div>
							<b>Thinks</b> is a message board application. Users can log in to participate in a public discussion by posting, commenting, and casting votes.
						</div>
						<ul class="list space-y-2 text-left py-4">
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #0fba81;"></i></span>
								<span class="flex-auto">Features interactive UI components using React</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #0fba81;"></i></span>
								<span class="flex-auto">User authentication and row-level security with Supabase</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #0fba81;"></i></span>
								<span class="flex-auto">Developed using end-to-end testing with Playwright</span>
							</li>
						</ul>
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
						<ul class="list space-y-2 text-left py-4">
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Dynamic routing using SvelteKit</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Realtime drag-and-drop interface synced with Firebase</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Cookie-based user authentication</span>
							</li>
						</ul>
						<div class="pt-4">
							<a class="btn variant-filled-warning mr-3" href="https://fkit-project-918ef.web.app/" target="_blank">Live demo</a>
							<a class="btn variant-filled-warning" href="https://github.com/srasheed1018/fkit-project" target="_blank">Source code</a>
						</div>
					</section>
					<footer class="card-footer">
						<span class="h3 font-bold">Tech Stack:</span>
						<div class="justify-center items-center flex mt-3">
							<img src="svelte.png" alt="svelte_logo" class="h-14 mx-2"/>
							<Avatar src="tailwind.jpg" alt="tw_logo" width="w-14" class="mx-2" rounded="rounded-full"/>
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
						<ul class="list space-y-2 text-left my-4">
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #fe4d4d;"></i></span>
								<span class="flex-auto">Lazy-loaded routing for optimal page loads</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #fe4d4d;"></i></span>
								<span class="flex-auto">Data modeling and complex writes/queries with Firestore</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #fe4d4d;"></i></span>
								<span class="flex-auto">OAuth with Google Sign-In</span>
							</li>
						</ul>
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
		<section class="hidden w-0 h-0 md:block md:w-full md:h-full md:space-y-6">
			<!--Thinks div-->
			<div class="card flex variant-ringed-primary">
				<header class="card-header">
					<div class="h-full w-[30vw]">
						<img src="thinks_logo.svg" alt="thinks_logo" class="h-full"/>
					</div>
				</header>
				
				<section>
					<div class="min-w-[30vw] space-y-4 p-5 mt-3 ">
						<b>Thinks</b> is a message board application where users can log in to participate in a public discussion by posting, commenting, and casting votes.
						<ul class="list space-y-2 text-left">
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #0fba81;"></i></span>
								<span class="flex-auto">Features interactive UI components using React</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #0fba81;"></i></span>
								<span class="flex-auto">User authentication and row-level security with Supabase</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #0fba81;"></i></span>
								<span class="flex-auto">Developed using end-to-end testing with Playwright</span>
							</li>
						</ul>
						<div class="pt-3">
							<a class="btn variant-filled-warning mr-3" href="https://tangerine-mermaid-88c0fd.netlify.app/" target="_blank">Live demo</a>
							<a class="btn variant-filled-warning" href="https://github.com/srasheed1018/supabase-react-project" target="_blank">Source code</a>
						</div>
					</div>
				</section>
				
				<section class="p-5 space-y-4">
					<div class="w-[20vw] text-token card p-4 variant-glass-surface">
						<div class="h3 font-bold">Tech Stack:</div>
						<br/>
						<ul class="list pl-4 py-3 space-y-4 flex-col text-left">
							<li>
								<span class="flex-none"><img src="react.png" alt="react_logo" class="w-10"/></span>
								<span class="flex-auto text-xl">React</span>
							</li>
							<li>
								<span class="flex-none"><img src="supabase.png" alt="sb_logo" class="w-10"/></span>
								<span class="flex-auto text-xl">Supabase</span>
							</li>
							<li class="flex">
								<span class="flex-none"><img src="postgres.png" alt="pg_logo" class="w-10"/></span>
								<span class="flex-auto text-xl">PostgreSQL</span>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<!--LinkUp div-->
			<div class="card flex variant-ringed-secondary">
				<header class="card-header">
					<div class="h-full w-[30vw] my-[10vh]">
						<img src="linkup.png" alt="linkup_logo" class=""/>
					</div>
				</header>
				
				<section>
					<div class="min-w-[30vw] space-y-4 p-5 mt-3 2xl:mt-14">
						<b>LinkUp</b> is a link sharing application. Users configure a bio and a set of links which they can share publicly using their assigned URL.
						<ul class="list space-y-2 text-left">
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Dynamic routing using SvelteKit</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Realtime drag-and-drop interface synced with Firebase</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Cookie-based user authentication</span>
							</li>
						</ul>
						<div class="pt-3">
							<a class="btn variant-filled-warning mr-3" href="https://fkit-project-918ef.web.app/" target="_blank">Live demo</a>
							<a class="btn variant-filled-warning" href="https://github.com/srasheed1018/fkit-project" target="_blank">Source code</a>
						</div>
					</div>
				</section>
				
				<section class="p-5 space-y-4">
					<div class="w-[20vw] text-token card p-4 variant-glass-surface">
						<div class="h3 font-bold">Tech Stack:</div>
						<br/>
						<ul class="list pl-4 py-3 space-y-4 flex-col text-left">
							<li>
								<span class="flex-none"><img src="svelte.png" alt="svelte_logo" class="w-10"/></span>
								<span class="flex-auto text-xl">Svelte</span>
							</li>
							<li class="flex">
								<span class="flex-none"><Avatar src="tailwind.jpg" alt="pg_logo" width="w-10"/></span>
								<span class="flex-auto text-xl">Tailwind</span>
							</li>
							<li>
								<span class="flex-none"><img src="firebase.png" alt="fb_logo" class="w-10"/></span>
								<span class="flex-auto text-xl">Firebase</span>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<!--Kanban div-->
			<div class="card flex variant-ringed-tertiary">
				<header class="card-header">
					<div class="h-full w-[30vw] my-[5vh]">
						<img src="kanban.png" alt="linkup_logo" class=""/>
					</div>
				</header>
				
				<section>
					<div class="min-w-[30vw] space-y-4 p-5 mt-3 2xl:mt-14">
						This is a <b>Kanban Progressive Web Application.</b> Users can organize boards of tasks via a drag-and-drop interface, all synced to a Google Account.
						<ul class="list space-y-2 text-left">
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #fe4d4d;"></i></span>
								<span class="flex-auto">Lazy-loaded routing for optimal page loads</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #fe4d4d;"></i></span>
								<span class="flex-auto">Data modeling and complex writes/queries with Firestore</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #fe4d4d;"></i></span>
								<span class="flex-auto">OAuth with Google Sign-In</span>
							</li>
						</ul>
						<div class="pt-3">
							<a class="btn variant-filled-warning mr-3" href="https://endearing-cat-5a53e0.netlify.app/" target="_blank">Live demo</a>
							<a class="btn variant-filled-warning" href="https://github.com/srasheed1018/angularfire-project" target="_blank">Source code</a>
						</div>
					</div>
				</section>
				
				<section class="p-5 space-y-4">
					<div class="w-[20vw] text-token card p-4 variant-glass-surface">
						<div class="h3 font-bold">Tech Stack:</div>
						<br/>
						<ul class="list  py-3 space-y-4 flex-col text-left">
							<li>
								<span class="flex-none"><img src="angular.png" alt="angular_logo" class="w-14 ml-2"/></span>
								<span class="flex-auto text-xl">Angular</span>
							</li>
							<li>
								<span class="flex-none pl-4"><img src="firebase.png" alt="fb_logo" class="w-10"/></span>
								<span class="flex-auto pl-2 text-xl">Firebase</span>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</section>
	</div>
</div>

<style lang="postcss">

.glow-button {
		animation: glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-blue-500/75;
		}
		25% {
			@apply bg-cyan-500/75;
		}
		50% {
			@apply bg-blue-500/75;
		}
		75% {
			@apply bg-cyan-500/75;
		}
		100% {
			@apply bg-blue-500/75;
		}
	}
	@keyframes pulse {
		 0% {
			transform: scale(1);
		 }
		 20% {
			transform: scale(1);
		 }
		 25% {
			transform: scale(0.9);
		 }
		 30% {
			transform: scale(1.1);
		 }
		 35% {
			transform: scale(1);
		 }
		 100% {
			transform: scale(1);
		 }
	}

</style>
