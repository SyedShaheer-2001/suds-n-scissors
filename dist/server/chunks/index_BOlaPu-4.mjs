import './page-ssr_onQbl3Jv.mjs';
import { c as createComponent } from './astro-component_4rm7TuFf.mjs';
import 'piccolore';
import { q as createRenderInstruction, k as renderTemplate, v as renderSlot, o as renderHead, h as addAttribute, m as maybeRenderHead, p as renderComponent } from './entrypoint_9FxRiHVb.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Suds 'n' Scissors | Expert Dog Grooming in Coquitlam, BC",
    description = "Suds 'n' Scissors offers professional dog grooming in Coquitlam, BC. Specialists in Asian Fusion styling, full grooming, bath & tidy, and walk-in services. ThreeBest Rated 2025."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-theme="light"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/logo-suds.png"><meta name="generator"', "><title>", '</title><meta name="description"', '><link rel="canonical" href="https://www.sudsnscissors.ca/"><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', `><meta property="og:type" content="website"><script>
      // Early theme check to avoid FOUC
      const savedTheme = localStorage.getItem('sns-theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    <\/script>`, "</head> <body> ", " ", " </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "C:/front-end/suds n scissors/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/front-end/suds n scissors/src/layouts/Layout.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Logo Wrapper (Static/Absolute, scrolls with the page) -->${maybeRenderHead()}<div class="logo-wrapper"> <a href="/" class="nav-logo" aria-label="Suds 'n' Scissors home"> <img src="/logo-suds.png" alt="Suds 'n' Scissors logo" class="nav-logo-img" width="150" height="150" loading="eager"> </a> </div> <!-- Floating Nav Menu (Fixed/Sticky at top right, scrolls down with the page) --> <header id="site-header" role="banner"> <!-- Desktop Nav Links --> <nav class="nav-links" aria-label="Main navigation"> <a href="#about" class="nav-link" id="nav-about">About</a> <a href="#services" class="nav-link" id="nav-services">Services</a> <a href="#team" class="nav-link" id="nav-team">Team</a> <a href="#contact" class="nav-link" id="nav-contact">Contact</a> </nav> <!-- Controls inside the floating pill --> <div class="nav-controls"> <button id="theme-toggle" aria-label="Toggle dark mode" style="display: none;"> <!-- Sun icon (shown in dark mode) --> <svg id="icon-sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" style="display:none"> <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line> </svg> <!-- Moon icon (shown in light mode) --> <svg id="icon-moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg> </button> <a href="https://book.daysmart.com/api/booking/service?DSID=DC-2152467" class="btn-primary" id="nav-book-now" target="_blank" rel="noopener noreferrer">
Book Now
</a> <!-- Hamburger --> <button class="nav-hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false"> <span></span><span></span><span></span> </button> </div> </header> <!-- Mobile drawer --> <nav class="nav-drawer" id="nav-drawer" aria-label="Mobile navigation"> <a href="#about" class="nav-link" id="mob-about">About</a> <a href="#services" class="nav-link" id="mob-services">Services</a> <a href="#team" class="nav-link" id="mob-team">Team</a> <a href="#contact" class="nav-link" id="mob-contact">Contact</a> <a href="https://book.daysmart.com/api/booking/service?DSID=DC-2152467" class="btn-primary" id="mob-book-now" target="_blank" rel="noopener noreferrer">
Book Now
</a> </nav> ${renderScript($$result, "C:/front-end/suds n scissors/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/front-end/suds n scissors/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="footer" role="contentinfo"> <div class="footer-inner"> <!-- Column 1: Brand Info --> <div class="footer-col brand-col"> <div class="footer-brand"> <img src="/logo-suds.png" alt="Suds 'n' Scissors logo" class="footer-logo-img" width="60" height="60" loading="lazy"> <span class="footer-brand-text">Suds 'n' Scissors</span> </div> <p class="footer-brand-desc">
Where grooming is an art and every pet is family. Specialists in precision styling and low-stress care in Coquitlam, BC.
</p> <div class="footer-socials"> <a href="https://www.instagram.com/sudsnscissors/" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> </a> <a href="https://www.facebook.com/sudsnscissors/" class="footer-social-btn" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg> </a> </div> </div> <!-- Column 2: Sitemap Quick Links --> <div class="footer-col links-col"> <h3 class="footer-col-title">Navigation</h3> <nav class="footer-nav" aria-label="Footer links"> <a href="#about" class="footer-link">About Our Salon</a> <a href="#services" class="footer-link">Grooming Services</a> <a href="#team" class="footer-link">Meet the Stylists</a> <a href="#contact" class="footer-link">Get in Touch</a> </nav> </div> <!-- Column 3: Contact & Hours --> <div class="footer-col info-col"> <h3 class="footer-col-title">Hours &amp; Location</h3> <div class="footer-details"> <address class="footer-detail"> <strong>Salon Address</strong>
G-931 Brunette Avenue, Coquitlam, BC V3K 6T5
</address> <p class="footer-detail"> <strong>Phone</strong> <a href="tel:+16045257387" class="footer-detail-link">(604) 525-7387</a> </p> <p class="footer-detail"> <strong>Salon Hours</strong>
Tue – Sat: 8:30 AM – 4:30 PM<br>
Sun &amp; Mon: Closed
</p> </div> <div class="footer-book-wrap"> <a href="https://book.daysmart.com/api/booking/service?DSID=DC-2152467" class="btn-primary" target="_blank" rel="noopener noreferrer">
Book Appointment
</a> </div> </div> </div> <div class="footer-bottom"> <span>&copy; 2025 Suds 'n' Scissors · Coquitlam, BC</span> <span>Designed with care for every dog</span> </div> </footer>`;
}, "C:/front-end/suds n scissors/src/components/Footer.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="contact-form-wrap reveal reveal-delay-1"> <form class="contact-form" id="contact-form" novalidate> <div class="form-row"> <div class="form-field"> <label for="first-name">First Name <span aria-hidden="true">*</span></label> <input type="text" id="first-name" name="first_name" autocomplete="given-name" required> </div> <div class="form-field"> <label for="last-name">Last Name <span aria-hidden="true">*</span></label> <input type="text" id="last-name" name="last_name" autocomplete="family-name" required> </div> </div> <div class="form-field"> <label for="contact-email-field">Email Address <span aria-hidden="true">*</span></label> <input type="email" id="contact-email-field" name="email" autocomplete="email" required> </div> <div class="form-field"> <label for="message">Message <span aria-hidden="true">*</span></label> <textarea id="message" name="message" rows="5" required></textarea> </div> <button type="submit" class="btn-primary" id="contact-submit">
Send Message
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </button> </form> </div> ${renderScript($$result, "C:/front-end/suds n scissors/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/front-end/suds n scissors/src/components/ContactForm.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Suds 'n' Scissors | Expert Dog Grooming in Coquitlam, BC" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> <!-- ══════════════════════════════
         HERO
    ══════════════════════════════ --> <section id="hero" aria-label="Welcome"> <!-- Left: Photo --> <div class="hero-image-col"> <img src="/images/hero_dog.png" alt="Fluffy golden doodle freshly groomed at Suds 'n' Scissors salon" width="780" height="900" loading="eager" fetchpriority="high"> </div> <!-- Right: Content --> <div class="hero-content-col"> <p class="hero-eyebrow reveal">Dog Grooming · Coquitlam, BC</p> <h1 class="hero-headline reveal reveal-delay-1">
A cut <em>above.</em> </h1> <div class="hero-inset-wrap reveal reveal-delay-2"> <img class="hero-inset-img" src="/images/hero_inset.png" alt="Perfectly groomed white Bichon Frise wearing a bow" width="200" height="200" loading="lazy"> <p class="hero-sub-text">
Asian Fusion specialists building trust, confidence, and lasting
            bonds between pets and groomers.
</p> </div> <div class="hero-cta-row reveal reveal-delay-3"> <a href="https://book.daysmart.com/api/booking/service?DSID=DC-2152467" class="btn-primary" id="hero-book-now" target="_blank" rel="noopener noreferrer">
Book an Appointment
</a> <span class="hero-scroll-hint">Scroll to explore</span> </div> </div> </section> <!-- ══════════════════════════════
         ABOUT
    ══════════════════════════════ --> <section id="about" aria-labelledby="about-heading"> <div class="about-inner"> <div class="about-text"> <p class="about-label reveal">Who We Are</p> <h2 class="about-heading reveal reveal-delay-1" id="about-heading">
Where grooming<br>is an art.
</h2> <p class="about-body reveal reveal-delay-2">
Welcome to Suds 'n' Scissors. Our professionally trained groomers
            specialise in Asian Fusion styling, combining precision and
            creativity to create looks that are as individual as your dog. We're
            dedicated to building a calm, comfortable environment where pets
            feel safe and groomers can do their best work — session after
            session.
</p> <div class="about-actions reveal reveal-delay-3"> <div class="about-callout" id="accepting-badge"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
Now accepting new clients of all sizes
</div> <a href="#contact" class="about-cta" id="about-contact-link">
Book with us today
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="14" height="14" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a> </div> </div> <div class="about-aside"> <div class="about-stat reveal"> <div class="about-stat-number">8+</div> <div class="about-stat-label">Years serving Coquitlam</div> </div> <div class="about-stat reveal reveal-delay-1"> <div class="about-stat-number">4</div> <div class="about-stat-label">Expert groomers on staff</div> </div> <div class="about-stat reveal reveal-delay-2"> <div class="about-stat-number">★★★</div> <div class="about-stat-label">ThreeBest Rated 2025</div> </div> </div> </div> </section> <!-- ══════════════════════════════
         SERVICES
    ══════════════════════════════ --> <section id="services" aria-labelledby="services-heading"> <div class="services-header reveal"> <h2 class="section-heading" id="services-heading">Our Services</h2> <p class="services-subtitle">
Every service is tailored to your dog's breed, coat type, and
          temperament.
</p> </div> <div class="services-grid"> <!-- Card 1: Full Grooming --> <article class="service-card reveal" id="service-full-grooming"> <div class="service-card-img-wrap"> <img class="service-card-img" src="/images/service_full_grooming.png" alt="Yorkshire Terrier expertly groomed at Suds 'n' Scissors" width="200" height="200" loading="lazy"> </div> <div class="service-card-body"> <h3 class="service-card-name">Full Grooming</h3> <p class="service-card-price">
From $92 · Breed &amp; style dependent
</p> <ul class="service-card-list"> <li>Nail trimming and filing</li> <li>Pad shaving and sanitary trim</li> <li>Ear plucking and cleaning</li> <li>Anal gland expression (on request)</li> <li>Full bath with breed-appropriate shampoo</li> <li>Fluff dry and brush</li> <li>Professional haircut or Asian Fusion styling</li> </ul> </div> </article> <!-- Card 2: Bath & Tidy --> <article class="service-card reveal reveal-delay-1" id="service-bath-tidy"> <div class="service-card-img-wrap"> <img class="service-card-img" src="/images/service_bath_tidy.png" alt="Bichon Frise with freshly groomed fluffy white coat" width="200" height="200" loading="lazy"> </div> <div class="service-card-body"> <h3 class="service-card-name">Bath and Tidy</h3> <p class="service-card-price">From $85 · Medium–Long coat breeds</p> <ul class="service-card-list"> <li>Nail cutting and filing</li> <li>Ear cleaning and plucking (if applicable)</li> <li>Paw pad, belly and sanitary shave</li> <li>Full bath with skin-appropriate shampoo</li> <li>Fluff drying and brushing</li> <li>Eye and paw area tidy-trim</li> <li>General scissor tidy of face, body &amp; legs</li> </ul> </div> </article> <!-- Card 3: Bath & Brush --> <article class="service-card reveal reveal-delay-2" id="service-bath-brush"> <div class="service-card-img-wrap"> <img class="service-card-img" src="/images/service_bath_brush.png" alt="Two happy Dachshunds freshly groomed at Suds 'n' Scissors" width="200" height="200" loading="lazy"> </div> <div class="service-card-body"> <h3 class="service-card-name">Bath and Brush</h3> <p class="service-card-price">From $60 · Short coat breeds</p> <ul class="service-card-list"> <li>Nail cutting and filing</li> <li>Ear cleaning</li> <li>Paw pad, belly and sanitary shave</li> <li>Full bath with skin-appropriate shampoo</li> <li>Drying and brushing</li> <li>Deshedding treatment</li> </ul> </div> </article> </div> </section> <!-- ══════════════════════════════
         A LA CARTE
    ══════════════════════════════ --> <section id="alacarte" aria-labelledby="alacarte-heading"> <div class="alacarte-inner"> <!-- Left --> <div class="alacarte-left reveal"> <div class="alacarte-img-wrap"> <img class="alacarte-img" src="/images/service_full_grooming.png" alt="Border Terrier sitting on grooming table at Suds 'n' Scissors" width="340" height="453" loading="lazy"> </div> <div class="alacarte-awards"> <div class="alacarte-award-badge"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
ThreeBest Rated 2025
</div> <div class="alacarte-award-badge"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
Best Business 2025
</div> </div> </div> <!-- Right --> <div class="alacarte-right reveal reveal-delay-1"> <h2 class="alacarte-heading" id="alacarte-heading">
À La Carte &amp;<br>Walk-In Services
</h2> <p class="alacarte-note">
No appointment necessary for walk-ins. Services can be combined for
            a discount — call us for a custom quote.
</p> <table class="price-table" aria-label="À la carte service pricing"> <tbody> <tr><td>Ear Cleaning</td><td>$10 – $15</td></tr> <tr><td>Ear Plucking <em>(add-on to cleaning)</em></td><td>$10 – $15</td></tr> <tr><td>Nail Cutting &amp; Dremel</td><td>$15 – $25</td></tr> <tr><td>Nail Cutting &amp; Paw Pad Shave</td><td>$25 – $35</td></tr> <tr><td>Sanitary Area Shave</td><td>$15</td></tr> <tr><td>Anal Gland Expression</td><td>$10 – $15</td></tr> <tr><td>Bang Trim</td><td>$5+</td></tr> <tr><td>Face Trim</td><td>$15+</td></tr> <tr><td>Handstripping</td><td>$40 / 30 min</td></tr> </tbody> </table> <div class="walkin-badge"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="14" height="14" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
Walk-ins welcome · No booking required
</div> </div> </div> </section> <!-- ══════════════════════════════
         TEAM
    ══════════════════════════════ --> <section id="team" aria-labelledby="team-heading"> <div class="team-header"> <h2 class="section-heading reveal" id="team-heading">Meet the Team</h2> <div class="team-controls" aria-label="Carousel controls"> <button class="carousel-btn" id="carousel-prev" aria-label="Previous team member"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg> </button> <button class="carousel-btn" id="carousel-next" aria-label="Next team member"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg> </button> </div> </div> <div class="carousel-track-wrap"> <div class="carousel-track" id="carousel-track" role="list"> <!-- Dana --> <article class="team-card" role="listitem" id="team-dana"> <div class="team-card-img-wrap"> <img class="team-card-img" src="/images/hero_dog.png" alt="Dana, Owner of Suds 'n' Scissors" width="400" height="400" loading="lazy"> </div> <div class="team-card-body"> <span class="team-card-role">Owner</span> <h3 class="team-card-name">Dana</h3> <p class="team-card-bio">
Dana's passion for dogs led her to graduate from Animal Haven
                Dog Grooming School in 2017, training in precision grooming and
                hand stripping under two master groomers. She joined Suds 'n'
                Scissors in 2022 and became owner in 2025. Her approach blends
                dog behaviour knowledge with expert technique to create calm,
                personalised sessions.
</p> </div> </article> <!-- Mana --> <article class="team-card" role="listitem" id="team-mana"> <div class="team-card-img-wrap"> <img class="team-card-img" src="/images/service_bath_tidy.png" alt="Mana, groomer at Suds 'n' Scissors" width="400" height="400" loading="lazy"> </div> <div class="team-card-body"> <span class="team-card-role">Senior Stylist</span> <h3 class="team-card-name">Mana</h3> <p class="team-card-bio">
A graduate of Tokyo Communication Arts College, Mana trained for
                three years as a dog groomer, trainer, and vet assistant before
                joining the team in 2017. With steady hands and exceptional
                patience, she has a gift for calming even the most nervous dogs.
</p> </div> </article> <!-- Rachel --> <article class="team-card" role="listitem" id="team-rachel"> <div class="team-card-img-wrap"> <img class="team-card-img" src="/images/service_bath_brush.png" alt="Rachel, groomer at Suds 'n' Scissors" width="400" height="400" loading="lazy"> </div> <div class="team-card-body"> <span class="team-card-role">Senior Stylist</span> <h3 class="team-card-name">Rachel</h3> <p class="team-card-bio">
With over 10 years of grooming experience, Rachel trained at
                Western Dog Grooming School in 2014 and Kim's Dog Grooming
                School in Seoul, Korea in 2017. She brings a rich international
                perspective to her craft and a deep love for every dog she
                grooms.
</p> </div> </article> <!-- Nari --> <article class="team-card" role="listitem" id="team-nari"> <div class="team-card-img-wrap"> <img class="team-card-img" src="/images/service_full_grooming.png" alt="Nari Lee, Asian Style Pet Stylist at Suds 'n' Scissors" width="400" height="400" loading="lazy"> </div> <div class="team-card-body"> <span class="team-card-role">Asian Style Stylist</span> <h3 class="team-card-name">Nari Lee</h3> <p class="team-card-bio">
Nari completed her grooming certification in Korea and holds a
                Fear Free® credential, ensuring every session is low-stress and
                trust-building. She specialises in precision Asian Fusion
                styling and creates the calm, positive experience every dog
                deserves.
</p> </div> </article> </div> </div> <div class="carousel-dots" role="tablist" aria-label="Team carousel position"> <button class="dot active" role="tab" aria-selected="true" aria-label="Team member 1" data-index="0"></button> <button class="dot" role="tab" aria-selected="false" aria-label="Team member 2" data-index="1"></button> <button class="dot" role="tab" aria-selected="false" aria-label="Team member 3" data-index="2"></button> <button class="dot" role="tab" aria-selected="false" aria-label="Team member 4" data-index="3"></button> </div> </section> <!-- ══════════════════════════════
         SOCIAL FEED
    ══════════════════════════════ --> <section id="social" aria-labelledby="social-heading"> <div class="social-header reveal"> <h2 class="section-heading" id="social-heading">Follow us on social</h2> <p>See our latest grooms on Instagram and Facebook.</p> </div> <div class="social-grid reveal reveal-delay-1"> <div class="social-img-wrap"> <img src="/images/social_1.png" alt="Blue merle Doodle dog freshly groomed at Suds 'n' Scissors" width="400" height="400" loading="lazy"> <div class="social-img-overlay" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> </div> </div> <div class="social-img-wrap"> <img src="/images/social_2.png" alt="Papillon dog with gorgeous flowing ears, freshly groomed" width="400" height="400" loading="lazy"> <div class="social-img-overlay" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> </div> </div> <div class="social-img-wrap"> <img src="/images/social_3.png" alt="White Miniature Schnauzer freshly groomed at Suds 'n' Scissors" width="400" height="400" loading="lazy"> <div class="social-img-overlay" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> </div> </div> <div class="social-img-wrap"> <img src="/images/social_4.png" alt="Brown Toy Poodle with round fluffy cut, freshly groomed" width="400" height="400" loading="lazy"> <div class="social-img-overlay" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> </div> </div> </div> <div class="social-cta reveal reveal-delay-2"> <a href="https://www.instagram.com/sudsnscissors/" class="btn-outline" id="social-instagram-link" target="_blank" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
Follow on Instagram
</a> </div> </section> <!-- ══════════════════════════════
         CONTACT
    ══════════════════════════════ --> <section id="contact" aria-labelledby="contact-heading"> <div class="contact-inner"> <!-- Left: Info --> <div class="contact-left reveal"> <h2 class="contact-heading" id="contact-heading">Contact Us</h2> <ul class="contact-info-list" aria-label="Contact details"> <li class="contact-info-item"> <div class="contact-info-icon" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> </div> <div class="contact-info-text"> <div class="contact-info-label">Phone</div> <a href="tel:+16045257387" class="contact-info-value" id="contact-phone">(604) 525-7387</a> </div> </li> <li class="contact-info-item"> <div class="contact-info-icon" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> </div> <div class="contact-info-text"> <div class="contact-info-label">Email</div> <a href="mailto:info@sudsnscissors.ca" class="contact-info-value" id="contact-email">info@sudsnscissors.ca</a> </div> </li> <li class="contact-info-item"> <div class="contact-info-icon" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> </div> <div class="contact-info-text"> <div class="contact-info-label">Address</div> <address class="contact-info-value" id="contact-address" style="font-style:normal;">
G-931 Brunette Avenue<br>Coquitlam, BC V3K 6T5
</address> </div> </li> </ul> </div> <!-- Right: Form --> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "C:/front-end/suds n scissors/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/front-end/suds n scissors/src/pages/index.astro", void 0);

const $$file = "C:/front-end/suds n scissors/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
