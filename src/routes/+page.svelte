<script lang="ts">
	import { Avatar, getModalStore } from '@skeletonlabs/skeleton';
	import type { PopupSettings, ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	//modal stuff
	const modalStore = getModalStore();

	function openModal() {
		const bodyString = '<div class="w-auto h-auto">			<section class="h4">				<ul class="list">					<li>						<span><i class="fa-solid fa-envelope" style="color: #0a95b8;"></i></span>						<a href="mailto:srasheed9326@gmail.com">srasheed9326@gmail.com</a>					</li>					<li>						<span><i class="fa-brands fa-linkedin" style="color: #0a95b8;"></i></span>						<a href="https://www.linkedin.com/in/siddeeq-rasheed/" target="_blank">siddeeq-rasheed</a>					</li>					<li>						<span><i class="fa-solid fa-file-lines my-4 mr-0" style="color: #0a95b8;"></i></span>						<a class="btn variant-glass-success px-8" href="https://drive.google.com/drive/folders/1OBVhKYmyQJZQ4vuaOhnQC_f6kRTHR_u7?usp=sharing" target="_blank">Resume Link <i class="fa-solid fa-arrow-up-right-from-square ml-2" style="color: #ffffff;"></i></a>					</li>				</ul>			</section>		</div>'

		const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: 'Contact Information',
			body: bodyString,
		};
		modalStore.trigger(modal);
	}

	function openModalTest() {
		const bodyString2 = '<div class="w-auto h-auto"><section class="h4"><ul class="list"> <li> <img src="thinks_logo.svg" alt="thinks_logo" class="h-16 mr-20"/> <a class="btn variant-filled-warning mr-3" href="https://tangerine-mermaid-88c0fd.netlify.app/" target="_blank">Live demo</a> <a class="btn variant-filled-warning" href="https://github.com/srasheed1018/supabase-react-project" target="_blank">Source code</a> </li> </ul></section></div>'

		const modal2: ModalSettings = {
			type: 'alert',
			// Data
			title: 'Software Projects',
			body: bodyString2,
		};
		modalStore.trigger(modal2);
	}

</script>

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

<!--Main container-->
<div class="container h-full mx-auto flex justify-center items-center scrollbar-hide">
	<!--Centers contents-->
	<div class="space-y-4 md:space-y-8 text-center flex flex-col items-center">
		
		<!--Avatar-->
		<Avatar src="pfp.jpg" width="w-48" rounded="rounded-full" class="mt-8 md:mt-16 drop-shadow-[0px_0px_25px_rgba(76,168,247,1)]" border="border-4 border-blue-500"/>
		<!--Text Area-->
		<div class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone">
			<h2 class="h2">
				My name is <b>Siddeeq Rasheed.</b>
			</h2>
			<h4 class="h4 mt-0.5">
				 Software Developer / Biomedical Technician
			</h4>
		</div>
		<div>
			<button class="btn glow-button" on:click={openModal}>
				CONTACT INFO
			</button>
			<a class="btn glow-button-biomed ml-2" href="https://drive.google.com/drive/folders/1MLUQiIgUTPOO8I7CIDGLPf8feiJKwRFL?usp=drive_link" target="_blank">
				BIOMED PORTFOLIO <i class="fa-solid fa-arrow-up-right-from-square ml-2" style="color: #ffffff;"></i>
			</a>
		</div>
		
		<!-- used for editing modal body element
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
					<li>
						<span><i class="fa-solid fa-file-lines my-4 mr-0" style="color: #0a95b8;"></i></span>
						<a class="btn variant-glass-success px-8" href="https://drive.google.com/file/d/10W4A4Z7GlfcgPaQp7ScTEvsClhuhNetp/view?usp=sharing" target="_blank">Resume Link <i class="fa-solid fa-arrow-up-right-from-square ml-2" style="color: #ffffff;"></i></a>
					</li>
				</ul>
			</section>
		</div>

		-->
		

		<!--Scroll Container for mobile-->
		<section class="w-screen md:invisible md:h-0 md:w-0">
			<div class="animate-pulse text-amber-500 italic pt-5">Swipe to explore my projects <i class="fa-solid fa-hand-point-right pl-1"></i></div>
			<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto scrollbar-hide px-4 py-10">	
				<!--Thinks Card-->
				<div class="variant-glass-primary snap-center shrink-0 card w-full h-fit text-center p-3">
					<header>
						<img src="thinks_logo.svg" alt="thinks_logo" class="w-screen h-full aspect-auto"/>
					</header>
					<section class="py-4 px-2">
						<div>
							<b>Thinks</b> is a message board application where users can log in to participate in a public discussion by posting, commenting, and casting votes.
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
								<span class="flex-auto">Step-by-step onboarding process</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Realtime drag-and-drop interface synced with Firestore</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Dynamic routing using SvelteKit</span>
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
					<div class="h-full w-[30vw]">
						<img src="linkup.svg" alt="linkup_logo" class="h-full"/>
					</div>
				</header>
				
				<section>
					<div class="min-w-[30vw] space-y-4 p-5 mt-3 2xl:mt-8">
						<b>LinkUp</b> is a link sharing application. Users configure a bio and a set of links which they can share publicly using their assigned URL.
						<ul class="list space-y-2 text-left">
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Step-by-step onboarding process</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Realtime drag-and-drop interface synced with Firebase</span>
							</li>
							<li>
								<span><i class="fa-solid fa-circle-check scale-125 mx-8" style="color: #c762fe;"></i></span>
								<span class="flex-auto">Dynamic routing using SvelteKit</span>
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
					<div class="h-full p-4">
						<img src="kanban.svg" alt="linkup_logo" class=""/>
					</div>
				</header>
				
				<section>
					<div class="min-w-[30vw] space-y-4 p-5 mt-3 2xl:mt-8">
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

/*Start Animations*/
@-webkit-keyframes animatetop {
	from {
		top: -300px;
		opacity: 0;
	}
	to {
		top: 0;
		opacity: 1;
	}
}
@keyframes animatetop {
	from {
		top: -300px;
		opacity: 0;
	}
	to {
		top: 0;
		opacity: 1;
	}
}
@-webkit-keyframes zoomIn {
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3);
	}
	50% {
		opacity: 1;
	}
}
@keyframes zoomIn {
	0% {
		opacity: 0;
		-webkit-transform: scale3d(0.3, 0.3, 0.3);
		transform: scale3d(0.3, 0.3, 0.3);
	}
	50% {
		opacity: 1;
	}
}
/*End Animations*/
/*
-- Start BackGround Animation 
*/
.background-anim {
	background: #323944;
	background: -webkit-linear-gradient(to left, #8f94fb, #323944);
	width: 100%;
	height: 100vh;
	position: absolute;
	z-index: -1;
}

.circles {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 96%;
	overflow: hidden;
}

.circles li {
	position: absolute;
	display: block;
	list-style: none;
	width: 20px;
	height: 20px;
	background: rgba(255, 255, 255, 0.2);
	animation: animate 25s linear infinite;
	bottom: -150px;
}

.circles li:nth-child(1) {
	left: 25%;
	width: 80px;
	height: 80px;
	animation-delay: 0s;
}

.circles li:nth-child(2) {
	left: 10%;
	width: 20px;
	height: 20px;
	animation-delay: 2s;
	animation-duration: 12s;
}

.circles li:nth-child(3) {
	left: 70%;
	width: 20px;
	height: 20px;
	animation-delay: 4s;
}

.circles li:nth-child(4) {
	left: 40%;
	width: 60px;
	height: 60px;
	animation-delay: 0s;
	animation-duration: 18s;
}

.circles li:nth-child(5) {
	left: 65%;
	width: 20px;
	height: 20px;
	animation-delay: 0s;
}

.circles li:nth-child(6) {
	left: 75%;
	width: 110px;
	height: 110px;
	animation-delay: 3s;
}

.circles li:nth-child(7) {
	left: 35%;
	width: 150px;
	height: 150px;
	animation-delay: 7s;
}

.circles li:nth-child(8) {
	left: 50%;
	width: 25px;
	height: 25px;
	animation-delay: 15s;
	animation-duration: 45s;
}

.circles li:nth-child(9) {
	left: 20%;
	width: 15px;
	height: 15px;
	animation-delay: 2s;
	animation-duration: 35s;
}

.circles li:nth-child(10) {
	left: 85%;
	width: 150px;
	height: 150px;
	animation-delay: 0s;
	animation-duration: 11s;
}

@keyframes animate {
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 1;
		border-radius: 0;
	}

	100% {
		transform: translateY(-1000px) rotate(720deg);
		opacity: 0;
		border-radius: 50%;
	}
}
/*
-- End BackGround Animation 
*/

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

.glow-button-biomed {
		animation: glow-biomed 5s linear infinite;
	}
	@keyframes glow-biomed {
		0% {
			@apply bg-red-500/75;
		}
		25% {
			@apply bg-pink-500/75;
		}
		50% {
			@apply bg-red-500/75;
		}
		75% {
			@apply bg-pink-500/75;
		}
		100% {
			@apply bg-red-500/75;
		}
	}
	@keyframes pulse-biomed {
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
