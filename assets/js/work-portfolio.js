(function () {
	'use strict';

	const ISO_DATA = [
		{
			cat: 'web',
			title: 'Online learning platform',
			desc: 'LMS with live sessions, smart quizzes, and learner progress dashboards.',
			img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
			tags: ['Laravel', 'Vue.js', 'WebRTC'],
			color: '#8b5cf6',
			url: '#',
		},
		{
			cat: 'mobile',
			title: 'Fitness & wellness app',
			desc: 'Personalized workouts with AI coaching, nutrition tracking, and activity goals.',
			img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166e?auto=format&fit=crop&w=800&q=80',
			tags: ['Flutter', 'Firebase', 'ML'],
			color: '#06b6d4',
			url: '#',
		},
		{
			cat: 'ecommerce',
			title: 'B2B e‑commerce store',
			desc: 'Catalog, smart recommendations, and multi-gateway checkout at scale.',
			img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
			tags: ['Laravel', 'React', 'Stripe'],
			color: '#ec4899',
			url: '#',
		},
		{
			cat: 'ai',
			title: 'Bank fraud detection',
			desc: 'Real-time ML pipeline flagging suspicious transactions with high accuracy.',
			img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
			tags: ['Python', 'TensorFlow', 'FastAPI'],
			color: '#f59e0b',
			url: '#',
		},
		{
			cat: 'web',
			title: 'Corporate portal',
			desc: 'HR, projects, documents, and workflows in one internal hub.',
			img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
			tags: ['Laravel', 'Inertia', 'Vue'],
			color: '#10b981',
			url: '#',
		},
		{
			cat: 'mobile',
			title: 'Ride-hailing app',
			desc: 'Live tracking, dynamic pricing, and in-app payments for drivers & riders.',
			img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
			tags: ['React Native', 'Node.js', 'Socket.io'],
			color: '#8b5cf6',
			url: '#',
		},
		{
			cat: 'ecommerce',
			title: 'Quick-commerce super app',
			desc: '15-minute delivery with smart warehousing, routing, and unified payments.',
			img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
			tags: ['Next.js', 'Go', 'Redis'],
			color: '#f43f5e',
			url: '#',
		},
		{
			cat: 'ai',
			title: 'Voice assistant (NLP)',
			desc: 'Conversational AI with context-aware replies and natural voice output.',
			img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
			tags: ['Python', 'HuggingFace', 'FastAPI'],
			color: '#a855f7',
			url: '#',
		},
	];

	const VIEW_PROJECT_TEXT = 'View Project';
	let isoSwiper = null;

	function buildSlides(cat) {
		const filtered = cat === 'all' ? ISO_DATA : ISO_DATA.filter(function (p) {
			return p.cat === cat;
		});
		return filtered.map(function (p) {
			var safeAlt = String(p.title).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
			const tags = p.tags.map(function (t) {
				return (
					'<span class="text-[11px] px-2 py-0.5 rounded-md font-semibold text-white" style="background:' +
					p.color +
					'cc;">' +
					t +
					'</span>'
				);
			}).join('');
			return (
				'<div class="swiper-slide iso-slide" data-cat="' +
				p.cat +
				'">' +
				'<div class="iso-card">' +
				'<div class="iso-stripe" style="background:' +
				p.color +
				';"></div>' +
				'<div class="iso-screen">' +
				'<img src="' +
				p.img +
				'" alt="' +
				safeAlt +
				'" loading="lazy" class="iso-img">' +
				'<div class="iso-glare"></div>' +
				'</div>' +
				'<div class="iso-body">' +
				'<div class="flex flex-wrap gap-1.5 mb-3">' +
				tags +
				'</div>' +
				'<h3 class="font-bold text-[var(--text-primary)] text-base sm:text-lg leading-snug mb-1.5">' +
				p.title +
				'</h3>' +
				'<p class="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed line-clamp-2">' +
				p.desc +
				'</p>' +
				'<a href="' +
				p.url +
				'" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold transition-all hover:gap-2.5" style="color:' +
				p.color +
				';">' +
				VIEW_PROJECT_TEXT +
				'<svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>' +
				'</a>' +
				'</div>' +
				'<div class="iso-glow" style="background:' +
				p.color +
				';"></div>' +
				'</div>' +
				'</div>'
			);
		}).join('');
	}

	function initSwiper(cat) {
		cat = cat || 'all';
		var wrap = document.getElementById('iso-swiper-wrapper');
		if (!wrap || typeof Swiper === 'undefined') {
			return;
		}
		if (isoSwiper) {
			isoSwiper.destroy(true, true);
			isoSwiper = null;
		}
		wrap.innerHTML = buildSlides(cat);
		isoSwiper = new Swiper('#work .iso-swiper', {
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			loop: false,
			coverflowEffect: {
				rotate: 28,
				stretch: 0,
				depth: 180,
				modifier: 1.3,
				slideShadows: true,
			},
			autoplay: {
				delay: 3800,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},
			speed: 700,
			pagination: {
				el: '#work .iso-pagi',
				clickable: true,
			},
			navigation: {
				nextEl: '#work .iso-btn-next',
				prevEl: '#work .iso-btn-prev',
			},
		});
	}

	function bindFilters() {
		document.querySelectorAll('#work .iso-filter-btn').forEach(function (btn) {
			btn.addEventListener('click', function () {
				document.querySelectorAll('#work .iso-filter-btn').forEach(function (b) {
					b.classList.remove('iso-filter-active');
				});
				btn.classList.add('iso-filter-active');
				initSwiper(btn.getAttribute('data-filter'));
			});
		});
	}

	function boot() {
		if (!document.getElementById('work')) {
			return;
		}
		if (typeof Swiper === 'undefined') {
			window.addEventListener('load', function () {
				initSwiper('all');
				bindFilters();
			});
			return;
		}
		initSwiper('all');
		bindFilters();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', boot);
	} else {
		boot();
	}
})();
