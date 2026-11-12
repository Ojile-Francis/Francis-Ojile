/* ===========================================================
   YOUR CONTENT. Edit this file to grow your site.
   To add an item, copy any { ... } line in a list, paste it
   below it (keep the comma) and change the text.
   Icons: https://fontawesome.com/icons (use the class name,
   e.g. "fa-solid fa-code" or "fa-brands fa-vuejs").
   Project screenshots: save as assets/project-1.jpg,
   project-2.jpg ... (the number follows the order below).
   =========================================================== */
window.SITE = {

  // Strip under the hero (home page)
  strip: [
    { icon: "fa-solid fa-globe", text: "Business websites" },
    { icon: "fa-solid fa-laptop-code", text: "Web applications" },
    { icon: "fa-solid fa-mobile-screen", text: "Mobile apps" },
    { icon: "fa-solid fa-server", text: "Backend and APIs" },
    { icon: "fa-solid fa-screwdriver-wrench", text: "Support" }
  ],

  // Technology tags (home page)
  stack: ["HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "Vue.js", "Flutter", "REST APIs", "MySQL"],

  // Skill bars (home page). level = 0 to 100
  skills: [
    { name: "HTML and CSS", note: "Responsive interfaces", level: 95 },
    { name: "JavaScript", note: "Interactive apps", level: 85 },
    { name: "Vue.js", note: "Reactive frontends", level: 80 },
    { name: "PHP and Laravel", note: "Backend", level: 82 },
    { name: "Flutter", note: "Mobile", level: 75 }
  ],

  // Services (home page)
  services: [
    { icon: "fa-solid fa-globe", title: "Website development", text: "Responsive websites that strengthen your brand and turn visitors into customers." },
    { icon: "fa-solid fa-laptop-code", title: "Web applications", text: "Custom apps built with Laravel and Vue.js that automate processes and solve real business problems." },
    { icon: "fa-solid fa-mobile-screen-button", title: "Mobile applications", text: "Cross-platform Android and iOS apps built with Flutter." },
    { icon: "fa-solid fa-server", title: "Backend and APIs", text: "Databases, server logic and integrations that keep your systems connected." },
    { icon: "fa-solid fa-cart-shopping", title: "E-commerce", text: "Online stores tailored to your products, customers and workflow." },
    { icon: "fa-solid fa-screwdriver-wrench", title: "Maintenance and support", text: "Updates, fixes, optimization and help after launch." }
  ],

  // Projects (home page).
  // image: paste the screenshot URL or path here (e.g. "assets/my-shot.jpg" or "https://...").
  //        Leave it as "" to show a neutral placeholder until you have a screenshot.
  // link:  PASTE THE PROJECT URL between the quotes. Every card shows a "View project" line;
  //        while link is "" it appears greyed out ("link coming soon") and is not clickable.
  // To add a project, copy one { ... } block, paste it below with a comma, and edit it.
  projects: [
    { title: "Optimum Choice Technologies", type: "Business website", text: "Corporate website for an end-to-end IT solutions company, covering networks, software, digital marketing and security.", tags: ["HTML", "CSS", "JavaScript"],
      image: "images/octech.webp", link: "https://optimumchoicetechnologies.com" },
    { title: "OCT ProX", type: "Web platform", text: "A platform that connects clients with verified technology professionals, with escrow-protected payments.", tags: ["Laravel", "Vue.js", "MySQL"],
      image: "images/octprox.webp", link: "" /* <- paste project URL here */ },
    { title: "D'Auspices Supports Ltd", type: "Business website", text: "A multi-service website for real estate, car sales, luxury car hire, diagnostics and business support in Lagos.", tags: ["HTML", "CSS", "JavaScript"],
      image: "images/dasl.webp", link: "" /* <- paste project URL here */ },
    { title: "GlobalAura Solutions", type: "Business website", text: "A premium corporate brand site for real estate, recruitment, consulting, interior decoration and events.", tags: ["HTML", "CSS", "JavaScript"],
      image: "images/globalaura.webp", link: "" /* <- paste project URL here */ },
    { title: "El-Roi Fedi Hotel", type: "Hospitality website", text: "A hotel website with room showcase, amenities, gallery and online booking enquiries.", tags: ["HTML", "CSS", "JavaScript"],
      image: "images/elroifedi.webp", link: "https://elroifedihotels.com" },
    { title: "Francis Ojile Portfolio", type: "Personal website", text: "My own developer portfolio: responsive, fast and easy to update.", tags: ["HTML", "CSS", "JavaScript"],
      image: "images/portfolio.webp", link: "https://francisojile.netlify.app/" }
  ],

  // Why work with me (home page)
  benefits: [
    { icon: "fa-solid fa-bullseye", title: "Business-focused", text: "I build for the result you need." },
    { icon: "fa-solid fa-mobile-screen-button", title: "Responsive", text: "Great on phones, tablets and desktops." },
    { icon: "fa-solid fa-arrow-up-right-dots", title: "Built to grow", text: "Structured for future changes." },
    { icon: "fa-solid fa-headset", title: "Ongoing support", text: "I'm here after launch too." }
  ],

  // Process steps (home page). Numbered automatically.
  process: [
    { title: "Discover", text: "Goals, users and requirements." },
    { title: "Plan", text: "Structure, tech and milestones." },
    { title: "Build", text: "Clean, responsive code." },
    { title: "Test", text: "Function, speed and usability." },
    { title: "Launch", text: "Deploy and go live." },
    { title: "Support", text: "Maintain and improve." }
  ],

  // ---------- PROFILE PAGE ----------

  // Side card facts
  facts: [
    { label: "Specialization", value: "Web and mobile development" },
    { label: "Core stack", value: "HTML, CSS, JavaScript, PHP, Laravel, Vue.js, Flutter" },
    { label: "Location", value: "Nigeria" },
    { label: "Availability", value: "Open to selected projects" }
  ],

  // About paragraphs (add as many as you like)
  about: [
    "I'm Francis Ojile, a web developer specializing in modern, responsive and scalable web and mobile applications.",
    "I combine frontend and backend skills to turn business requirements into products that are clear to use, reliable and ready to grow.",
    "My toolkit includes HTML, CSS, JavaScript, PHP, Laravel, Vue.js and Flutter, plus databases, APIs, deployment and third-party integrations as each project needs.",
    "Good development is more than a nice-looking page. A product should solve a problem, serve its users and stay maintainable as your business changes."
  ],

  // Core skills (profile page)
  competencies: [
    { icon: "fa-solid fa-code", title: "Frontend", text: "Responsive, interactive interfaces with HTML, CSS, JavaScript and Vue.js." },
    { icon: "fa-solid fa-database", title: "Backend", text: "Server logic, databases and business workflows with PHP and Laravel." },
    { icon: "fa-solid fa-plug", title: "API integration", text: "Connecting apps and services reliably." },
    { icon: "fa-solid fa-mobile-screen", title: "Mobile", text: "Cross-platform apps with Flutter." },
    { icon: "fa-solid fa-gauge-high", title: "Performance", text: "Fast, usable and maintainable by design." },
    { icon: "fa-solid fa-headset", title: "Support", text: "Fixes, improvements and help after launch." }
  ],

  // Toolkit (profile page)
  toolkit: [
    { icon: "fa-brands fa-html5", title: "HTML5 and CSS3", text: "Semantic, responsive, polished interfaces." },
    { icon: "fa-brands fa-js", title: "JavaScript", text: "Dynamic, interactive web features." },
    { icon: "fa-brands fa-vuejs", title: "Vue.js", text: "Reactive, component-based user interfaces and single-page apps." },
    { icon: "fa-brands fa-php", title: "PHP", text: "Server-side logic and applications." },
    { icon: "fa-brands fa-laravel", title: "Laravel", text: "Structured web apps, APIs and backends that pair well with Vue.js." },
    { icon: "fa-solid fa-mobile-screen-button", title: "Flutter", text: "iOS and Android from one codebase." },
    { icon: "fa-solid fa-database", title: "Databases and APIs", text: "Data-driven apps and connected services." }
  ],

  // Working style (profile page). Numbered automatically.
  values: [
    { title: "Understand first", text: "Start from the business goal and the people using the product." },
    { title: "Build deliberately", text: "Choose fitting technology and a structure that can grow." },
    { title: "Communicate clearly", text: "Share expectations, milestones and technical decisions." },
    { title: "Keep improving", text: "Launch is a start. Products should evolve with users." }
  ]
};
