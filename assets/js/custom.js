$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : Khanas HTML Template
* Version       : 1.0
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Scroll reveal (Intersection Observer)
4. Progress-bar (IntersectionObserver)
5. owl carousel
6. Mobile navigation
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		var headerOffset = 72;

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			var target = anchor.attr('href');
			if (target && target.indexOf('#') === 0 && $(target).length) {
				$('html, body').stop().animate({
					scrollTop: $(target).offset().top - headerOffset
				}, 1200,'easeInOutExpo');
				if (window.matchMedia('(max-width: 1023px)').matches) {
					$('#navbar-menu').addClass('hidden');
					$('#nav-toggle').attr('aria-expanded', 'false');
				}
			}
		});

		$('a[href^="#"]').not('li.smooth-menu a').on('click', function (event) {
			var id = $(this).attr('href');
			if (id && id !== '#' && $(id).length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: $(id).offset().top - headerOffset
				}, 1200, 'easeInOutExpo');
			}
		});

		function updateActiveNav() {
			var scrollTop = $(window).scrollTop() + headerOffset + 32;
			var currentId = '';
			$('section[id]').each(function () {
				var $sec = $(this);
				var id = $sec.attr('id');
				if (!id || !$('li.smooth-menu a[href="#' + id + '"]').length) {
					return;
				}
				if (scrollTop >= $sec.offset().top) {
					currentId = id;
				}
			});
			$('li.smooth-menu').removeClass('active');
			if (currentId) {
				$('li.smooth-menu a[href="#' + currentId + '"]').parent().addClass('active');
			} else {
				$('li.smooth-menu').first().addClass('active');
			}
		}
		$(window).on('scroll', updateActiveNav);
		updateActiveNav();

	// 3. Scroll reveal
		if ('IntersectionObserver' in window) {
			var revealEls = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
			var revealObs = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add('scroll-reveal-visible');
						revealObs.unobserve(entry.target);
					}
				});
			}, {
				root: null,
				rootMargin: '0px 0px -10% 0px',
				threshold: 0.08
			});
			revealEls.forEach(function (el) {
				revealObs.observe(el);
			});
		} else {
			$('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale').addClass('scroll-reveal-visible');
		}

	// 4. Progress-bar (skills) — IntersectionObserver so width transition runs in view
		(function initSkillProgressBars() {
			var bars = document.querySelectorAll('#skills .progress-bar');
			if (!bars.length) return;
			function fillBar(el) {
				var v = el.getAttribute('aria-valuenow');
				if (v === null || v === '') return;
				requestAnimationFrame(function () {
					el.style.width = v + '%';
				});
			}
			if (!('IntersectionObserver' in window)) {
				bars.forEach(fillBar);
				return;
			}
			var obs = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (!entry.isIntersecting) return;
					fillBar(entry.target);
					obs.unobserve(entry.target);
				});
			}, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
			bars.forEach(function (bar) {
				bar.style.width = '0%';
				obs.observe(bar);
			});
		})();
	
	// 5. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})

	// 6. Mobile navigation
		$('#nav-toggle').on('click', function () {
			var $menu = $('#navbar-menu');
			$menu.toggleClass('hidden');
			$(this).attr('aria-expanded', $menu.hasClass('hidden') ? 'false' : 'true');
		});

		$(window).on('resize', function () {
			if (window.matchMedia('(min-width: 1024px)').matches) {
				$('#navbar-menu').removeClass('hidden');
				$('#nav-toggle').attr('aria-expanded', 'false');
			} else {
				$('#navbar-menu').addClass('hidden');
				$('#nav-toggle').attr('aria-expanded', 'false');
			}
		});

	// Demo contact form — prevent navigation until wired to a backend
		$('#contact-form').on('submit', function (e) {
			e.preventDefault();
		});

	// 7. Hero terminal — character typewriter + syntax pass (React + TS)
	(function initHeroTerminalTypewriter() {
		var root = document.getElementById('hero-terminal');
		var out = document.getElementById('hero-terminal-code');
		if (!root || !out) return;

		var HIGHLIGHTED = [
			'<span class="hero-tok-k">import</span> <span class="hero-tok-br">{</span> <span class="hero-tok-fn">useId</span>, <span class="hero-tok-fn">useState</span> <span class="hero-tok-br">}</span> <span class="hero-tok-k">from</span> <span class="hero-tok-s">"react"</span>;',
			'',
			'<span class="hero-tok-k">type</span> <span class="hero-tok-ty">Tab</span> = <span class="hero-tok-s">"ui"</span> | <span class="hero-tok-s">"perf"</span> | <span class="hero-tok-s">"a11y"</span>;',
			'',
			'<span class="hero-tok-k">export function</span> <span class="hero-tok-fn">HeroPanel</span>() <span class="hero-tok-br">{</span>',
			'  <span class="hero-tok-k">const</span> id = <span class="hero-tok-fn">useId</span>();',
			'  <span class="hero-tok-k">const</span> [tab, setTab] = <span class="hero-tok-fn">useState</span>&lt;<span class="hero-tok-ty">Tab</span>&gt;(<span class="hero-tok-s">"ui"</span>);',
			'',
			'  <span class="hero-tok-k">return</span> (',
			'    <span class="hero-tok-ax">&lt;section</span> <span class="hero-tok-ax">aria-labelledby</span>=<span class="hero-tok-br">{</span>id<span class="hero-tok-br">}</span> <span class="hero-tok-ax">className</span>=<span class="hero-tok-s">"grid gap-4 lg:grid-cols-12"</span><span class="hero-tok-br">&gt;</span>',
			'      <span class="hero-tok-ax">&lt;header</span> <span class="hero-tok-ax">className</span>=<span class="hero-tok-s">"lg:col-span-8"</span><span class="hero-tok-br">&gt;</span>…<span class="hero-tok-ax">&lt;/header</span><span class="hero-tok-br">&gt;</span>',
			'      <span class="hero-tok-ax">&lt;aside</span> <span class="hero-tok-ax">className</span>=<span class="hero-tok-s">"lg:col-span-4"</span><span class="hero-tok-br">&gt;</span>…<span class="hero-tok-ax">&lt;/aside</span><span class="hero-tok-br">&gt;</span>',
			'    <span class="hero-tok-ax">&lt;/section</span><span class="hero-tok-br">&gt;</span>',
			'  );',
			'<span class="hero-tok-br">}</span>'
		].join('\n');

		var PLAIN = [
			'import { useId, useState } from "react";',
			'',
			'type Tab = "ui" | "perf" | "a11y";',
			'',
			'export function HeroPanel() {',
			'  const id = useId();',
			'  const [tab, setTab] = useState<Tab>("ui");',
			'',
			'  return (',
			'    <section aria-labelledby={id} className="grid gap-4 lg:grid-cols-12">',
			'      <header className="lg:col-span-8">…</header>',
			'      <aside className="lg:col-span-4">…</aside>',
			'    </section>',
			'  );',
			'}'
		].join('\n');

		function staticHtml() {
			return HIGHLIGHTED;
		}

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			out.innerHTML = staticHtml();
			return;
		}

		var i = 0;
		var timer = null;
		var started = false;

		function preEl() {
			return out.closest('.hero-terminal__pre');
		}

		function scrollPreToEnd() {
			var pre = preEl();
			if (!pre) return;
			pre.scrollTop = pre.scrollHeight;
		}

		function charDelay(ch) {
			if (ch === '\n') {
				return 58 + (Math.random() * 36 | 0);
			}
			if (ch === ' ') {
				return 10 + (Math.random() * 16 | 0);
			}
			if ('{}[]();,.|<>'.indexOf(ch) !== -1) {
				return 36 + (Math.random() * 26 | 0);
			}
			if (ch === '"' || ch === "'" || ch === '`') {
				return 30 + (Math.random() * 20 | 0);
			}
			return 24 + (Math.random() * 20 | 0);
		}

		function applyHighlight() {
			out.classList.remove('hero-terminal__code--typing');
			out.innerHTML = HIGHLIGHTED;
			out.classList.remove('is-visible');
			out.classList.add('hero-terminal__code--highlight');
			scrollPreToEnd();
			requestAnimationFrame(function () {
				requestAnimationFrame(function () {
					out.classList.add('is-visible');
				});
			});
		}

		function beginTypingPass() {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			i = 0;
			out.classList.remove('hero-terminal__code--highlight', 'is-visible', 'hero-terminal__code--typing');
			out.textContent = '';
			out.classList.add('hero-terminal__code--typing');
			scheduleTick();
		}

		function scheduleTick() {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			if (i >= PLAIN.length) {
				applyHighlight();
				timer = setTimeout(function () {
					out.classList.remove('is-visible', 'hero-terminal__code--highlight');
					timer = setTimeout(beginTypingPass, 340);
				}, 2600);
				return;
			}
			var ch = PLAIN.charAt(i);
			i += 1;
			out.textContent = PLAIN.slice(0, i);
			scrollPreToEnd();
			timer = setTimeout(scheduleTick, charDelay(ch));
		}

		function start() {
			if (started) return;
			started = true;
			setTimeout(beginTypingPass, 380);
		}

		var hero = document.getElementById('welcome-hero');
		if (hero && 'IntersectionObserver' in window) {
			var io = new IntersectionObserver(
				function (entries) {
					entries.forEach(function (entry) {
						if (!entry.isIntersecting) return;
						io.disconnect();
						start();
					});
				},
				{ threshold: 0.16, rootMargin: '0px 0px -6% 0px' }
			);
			io.observe(hero);
		} else {
			start();
		}
	})();

});	
