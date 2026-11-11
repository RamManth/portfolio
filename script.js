/**
 * Ukiyo-e Design Portfolio Interactions & Customizable Profile Config
 */

const PROFILE_CONFIG = {
  // Personal & contact details for Ram Manthanwar
  name: "Ram Manthanwar",
  handle: "@randm_aces_memory",
  role: "Thumbnail, UI/UX & Social Designer",
  location: "Remote Worldwide • Available",
  experience: "Thumbnails, UI/UX & Live Web",
  email: "ram.manthanwar@gmail.com",
  instagram: "@randm_aces_memory",
  instagramUrl: "https://www.instagram.com/randm_aces_memory/",
  availability: "Open for Freelance Projects",
};

function applyProfileConfig() {
  document.querySelectorAll("[data-field]").forEach((el) => {
    const key = el.getAttribute("data-field");
    if (key && PROFILE_CONFIG[key] && key !== "bio" && key !== "tagline") {
      el.textContent = PROFILE_CONFIG[key];
      if (el.tagName === "A") {
        if (key === "email") {
          el.setAttribute("href", `mailto:${PROFILE_CONFIG.email}`);
        } else if (key === "instagram" && PROFILE_CONFIG.instagramUrl) {
          el.setAttribute("href", PROFILE_CONFIG.instagramUrl);
        }
      }
    }
  });
}

const CATEGORY_LABELS = {
  tactile: "Tactile & 3D",
  art: "Art & Print",
  retro: "Retro & Subculture",
  digital: "Avant-Garde & Digital",
};

const WEBSITE_CONCEPTS = [
  {
    id: "skeuomorphism",
    num: "01",
    name: "Skeuomorphism",
    category: "tactile",
    url: "analog-master.audio",
    brand: "ANALOG/01",
    nav: ["Tuner", "Levels", "Patch"],
    eyebrow: "Hardware Synth UI",
    heroTitle: "Warm Brushed Metal & Physical Dials",
    heroCopy: "Beveled metal, recessed displays, and light-reactive knobs.",
    cta: "Turn Master Dial",
    chip: "RMS -12.4 dB",
    summary: "Real-world button and dial textures with raised metallic bevels.",
    desc: "Skeuomorphism copies real-world materials like brushed metal, leather stitched edges, and glossy glass so buttons feel familiar and easy to press.",
    bestFor: "Music plugins, hardware companion apps, luxury watches, and audio tools.",
    swatches: ["#d7d2c8", "#524b43", "#ef8b37", "#241e18"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <circle cx="255" cy="112" r="52" fill="#9c9487" stroke="#423b34" stroke-width="4"/>
      <circle cx="255" cy="112" r="38" fill="#3a332d" stroke="#d8d1c5" stroke-width="2"/>
      <circle cx="255" cy="112" r="24" fill="#c7bfb2" stroke="#524b43" stroke-width="2"/>
      <line x1="255" y1="112" x2="272" y2="95" stroke="#ef8b37" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="255" cy="50" r="3" fill="#ef8b37"/>
      <circle cx="298" cy="68" r="2.5" fill="#423b34"/>
      <circle cx="212" cy="68" r="2.5" fill="#423b34"/>
    </svg>`,
  },
  {
    id: "neumorphism",
    num: "02",
    name: "Neumorphism",
    category: "tactile",
    url: "softfocus.home",
    brand: "aether",
    nav: ["Climate", "Lighting", "Sleep"],
    eyebrow: "Soft Clay Smart UI",
    heroTitle: "Quiet Extruded Surface Controls",
    heroCopy: "Monochrome matte canvas sculpted purely with dual light-and-dark shadows.",
    cta: "Toggle Calm Mode",
    chip: "22°C Ambient",
    summary: "Soft plastic-style UI panels raised gently from a matching matte background.",
    desc: "Neumorphism pairs soft light and dark shadows on a matching background color so buttons and sliders look gently raised or pressed in.",
    bestFor: "Smart home apps, wellness trackers, music players, and clean utility dashboards.",
    swatches: ["#e3e8f0", "#ffffff", "#c4ccd8", "#5b6ef5"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <circle cx="258" cy="114" r="46" fill="#e3e8f0" stroke="#ffffff" stroke-width="3"/>
      <circle cx="258" cy="114" r="34" fill="none" stroke="#c4ccd8" stroke-width="6"/>
      <path d="M258 80 A34 34 0 1 1 227 128" fill="none" stroke="#5b6ef5" stroke-width="6" stroke-linecap="round"/>
      <circle cx="258" cy="114" r="14" fill="#d9e0ec"/>
    </svg>`,
  },
  {
    id: "art-nouveau",
    num: "03",
    name: "Art Nouveau",
    category: "art",
    url: "maison-flora.paris",
    brand: "MAISON FLORA",
    nav: ["Atelier", "Botanicals", "Salon"],
    eyebrow: "Belle Époque Ornament",
    heroTitle: "Flowing Plant Arches & Classic Serif Style",
    heroCopy: "Curving vine frames, warm gold hairlines, and graceful serif fonts.",
    cta: "Enter the Salon",
    chip: "Édition 1900",
    summary: "Flowing plant arches, gold lines, and soft natural harmony.",
    desc: "Inspired by turn-of-the-century vintage posters, Art Nouveau mixes decorative botanical borders with warm cream colors and graceful serif lettering.",
    bestFor: "Perfume shops, tea houses, theater events, and boutique hotels.",
    swatches: ["#f4ead2", "#3d4d2c", "#b58d3d", "#8f5c23"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <path d="M210 185 C215 95, 295 110, 290 25" fill="none" stroke="#9c7932" stroke-width="2"/>
      <path d="M235 185 C235 125, 305 135, 308 55" fill="none" stroke="#647849" stroke-width="1.6"/>
      <circle cx="272" cy="74" r="28" fill="none" stroke="#b58d3d" stroke-width="1.8"/>
      <path d="M272 46 Q292 74 272 102 Q252 74 272 46Z" fill="rgba(181,141,61,0.22)" stroke="#9c7932" stroke-width="1.3"/>
    </svg>`,
  },
  {
    id: "liquid-chrome",
    num: "04",
    name: "Liquid chrome",
    category: "tactile",
    url: "mercury-os.xyz",
    brand: "MERCURY",
    nav: ["Specs", "Shaders", "Mint"],
    eyebrow: "Molten Metallic Futurism",
    heroTitle: "Fluid Specular Mirror Forms",
    heroCopy: "High-gloss mercury blobs hovering over deep obsidian glass.",
    cta: "Launch Experience",
    chip: "60 FPS Shader",
    summary: "Smooth liquid-metal shapes floating over dark glass backgrounds.",
    desc: "Liquid chrome blends glossy mirror-like silver shapes with dark glass panels to give modern tech or streetwear websites a clean 3D look.",
    bestFor: "Music events, AI tools, fashion drops, and interactive product launches.",
    swatches: ["#090b10", "#eef3ff", "#7ee8fa", "#99a7bd"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <defs>
        <radialGradient id="chromeBlobGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="45%" stop-color="#899ab8"/>
          <stop offset="80%" stop-color="#222a3d"/>
          <stop offset="100%" stop-color="#7ee8fa"/>
        </radialGradient>
      </defs>
      <path d="M245 48 C282 40, 308 75, 295 112 C282 148, 232 162, 214 134 C196 106, 208 56, 245 48Z" fill="url(#chromeBlobGrad)"/>
      <ellipse cx="242" cy="76" rx="14" ry="7" fill="rgba(255,255,255,0.75)" transform="rotate(-24 242 76)"/>
    </svg>`,
  },
  {
    id: "de-stijl",
    num: "05",
    name: "De Stijl",
    category: "art",
    url: "neoplastic.nl",
    brand: "DE STIJL 17",
    nav: ["Grid", "Planes", "Ratio"],
    eyebrow: "Neoplastic Grid System",
    heroTitle: "Pure Orthogonal Primary Planes",
    heroCopy: "No curves at all, only clean black lines, white boxes, red, yellow, and blue.",
    cta: "Inspect Grid",
    chip: "100% Orthogonal",
    summary: "Mondrian-inspired grid layouts built from primary color blocks.",
    desc: "Inspired by Piet Mondrian paintings, De Stijl divides the page with crisp black lines and bold red, yellow, and blue rectangles.",
    bestFor: "Architecture studios, art galleries, design talks, and modern magazines.",
    swatches: ["#fcfbf7", "#d82424", "#f5c418", "#1e4ea1"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <rect x="228" y="34" width="92" height="58" fill="#1e4ea1"/>
      <rect x="228" y="92" width="46" height="54" fill="#f5c418"/>
      <rect x="274" y="146" width="46" height="54" fill="#d82424"/>
      <line x1="228" y1="0" x2="228" y2="200" stroke="#111111" stroke-width="5"/>
      <line x1="228" y1="92" x2="320" y2="92" stroke="#111111" stroke-width="5"/>
      <line x1="228" y1="146" x2="320" y2="146" stroke="#111111" stroke-width="5"/>
      <line x1="274" y1="92" x2="274" y2="200" stroke="#111111" stroke-width="5"/>
    </svg>`,
  },
  {
    id: "memphis",
    num: "06",
    name: "Memphis",
    category: "retro",
    url: "confetti-pop.club",
    brand: "POP//84",
    nav: ["Drops", "Shapes", "Club"],
    eyebrow: "80s Postmodern Play",
    heroTitle: "Loud Polka Dots & Zigzag Rhythm",
    heroCopy: "Unapologetic pastel collision with chunky offset ink shadows.",
    cta: "Remix Pattern",
    chip: "1981 Milan",
    summary: "Playful 1980s geometry, squiggles, confetti shapes, and pop colors.",
    desc: "Drawing from Ettore Sottsass's Memphis Group, this aesthetic rejects muted seriousness with bouncing squiggles, terrazzo confetti, and bold comic-book borders.",
    bestFor: "Creative agencies, youth apparel, beverage launches, and playful interactive onboarding.",
    swatches: ["#fff2c7", "#ff77a8", "#53e2d3", "#4257f5"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <polygon points="245,42 292,66 254,104" fill="#53e2d3" stroke="#1b1734" stroke-width="2.5"/>
      <circle cx="282" cy="138" r="20" fill="#ff77a8" stroke="#1b1734" stroke-width="2.5"/>
      <polyline points="212,165 225,148 238,165 251,148 264,165" fill="none" stroke="#4257f5" stroke-width="3.5"/>
      <circle cx="222" cy="52" r="4" fill="#1b1734"/>
      <circle cx="296" cy="96" r="5" fill="#1b1734"/>
    </svg>`,
  },
  {
    id: "psychedelic",
    num: "07",
    name: "Psychedelic",
    category: "retro",
    url: "electric-sun.fm",
    brand: "SOLAR//68",
    nav: ["Lineup", "Posters", "Vinyl"],
    eyebrow: "1968 Fillmore Poster Art",
    heroTitle: "Liquid Color Melt & Kaleidoscope",
    heroCopy: "Electric magenta, tangerine waves, and hypnotic concentric arcs.",
    cta: "Feel the Vibe",
    chip: "Technicolor Wave",
    summary: "Swirling 60s concert-poster colors with fun wavy rings.",
    desc: "Inspired by 1960s concert posters, Psychedelic style blends bold contrasting hues, wavy patterns, and curvy display fonts.",
    bestFor: "Music festivals, record labels, indie portfolios, and craft drink brands.",
    swatches: ["#5f14b8", "#ff2e88", "#ff9f1c", "#ffe66d"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <circle cx="272" cy="96" r="68" fill="none" stroke="#ffe66d" stroke-width="6" opacity="0.65"/>
      <circle cx="272" cy="96" r="46" fill="none" stroke="#ff9f1c" stroke-width="7" opacity="0.75"/>
      <circle cx="272" cy="96" r="24" fill="#ffe66d"/>
      <path d="M180 185 Q235 140 280 175 T320 155 L320 200 L180 200Z" fill="rgba(70,11,125,0.45)"/>
    </svg>`,
  },
  {
    id: "vaporwave",
    num: "08",
    name: "Vaporwave",
    category: "retro",
    url: "sunset-grid.1994",
    brand: "ＭＡＬＬ９４",
    nav: ["Synth", "Plaza", "VHS"],
    eyebrow: "Retro Synth Horizon",
    heroTitle: "Neon Grids & Striped Sunset Dreams",
    heroCopy: "Win95 bevel bars above glowing laser-cyan perspective horizons.",
    cta: "Play Cassette",
    chip: "TRACK 04 • CHORUS",
    summary: "Pastel dusk gradients, chrome typography, laser grids, and Win95 chrome.",
    desc: "Vaporwave blends early-90s desktop window bars, striped outrun suns, and glowing perspective wireframes into nostalgic dreamy synthscapes.",
    bestFor: "Synthwave musicians, retro gaming hubs, merch shops, and interactive Microsites.",
    swatches: ["#1b0a3e", "#ff4d9e", "#6df7ff", "#d5d0dc"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <circle cx="258" cy="86" r="34" fill="#ff9a3c"/>
      <rect x="220" y="76" width="76" height="4" fill="#5e1a76"/>
      <rect x="220" y="88" width="76" height="5" fill="#5e1a76"/>
      <rect x="220" y="100" width="76" height="6" fill="#5e1a76"/>
      <g stroke="#6df7ff" stroke-width="1" opacity="0.72">
        <line x1="0" y1="138" x2="320" y2="138"/>
        <line x1="0" y1="158" x2="320" y2="158"/>
        <line x1="0" y1="184" x2="320" y2="184"/>
        <line x1="160" y1="138" x2="40" y2="200"/>
        <line x1="205" y1="138" x2="170" y2="200"/>
        <line x1="255" y1="138" x2="305" y2="200"/>
      </g>
    </svg>`,
  },
  {
    id: "steampunk",
    num: "09",
    name: "Steampunk",
    category: "retro",
    url: "brassworks.co.uk",
    brand: "AETHER & CO.",
    nav: ["Blueprints", "Gears", "Guild"],
    eyebrow: "Victorian Clockwork",
    heroTitle: "Riveted Brass & Mechanical Escapements",
    heroCopy: "Aged bronze gauges, copper trims, and precision interlocking gears.",
    cta: "Ignite Boiler",
    chip: "1889 • 42 PSI",
    summary: "Victorian industrial machinery rendered with brass frames and cogwheels.",
    desc: "Steampunk combines Victorian serif manuscripts with riveted copper borders, parchment dials, and interlocking cogwheel emblems for richly atmospheric storytelling.",
    bestFor: "Tabletop RPG portals, escape rooms, specialty coffee roasters, and indie adventure games.",
    swatches: ["#1c120b", "#dfab57", "#8e5a1d", "#f3deb8"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <circle cx="268" cy="112" r="36" fill="none" stroke="#dfab57" stroke-width="8" stroke-dasharray="10 6"/>
      <circle cx="268" cy="112" r="22" fill="#2a1a10" stroke="#b8843f" stroke-width="3"/>
      <circle cx="216" cy="148" r="22" fill="none" stroke="#b8843f" stroke-width="6" stroke-dasharray="8 5"/>
      <circle cx="268" cy="112" r="6" fill="#dfab57"/>
    </svg>`,
  },
  {
    id: "grunge",
    num: "10",
    name: "Grunge",
    category: "retro",
    url: "subterranean.zine",
    brand: "RAW//PRESS",
    nav: ["Issues", "Shows", "Tape"],
    eyebrow: "90s Punk Zine Aesthetic",
    heroTitle: "Distressed Print, Tape & Raw Grit",
    heroCopy: "Soot charcoal, crimson stamps, and torn photocopy textures.",
    cta: "Read Issue #09",
    chip: "HAND-STAMPED",
    summary: "Rebellious zine collages with distressed ink noise and tilted tape.",
    desc: "Channeling 90s indie magazines and DIY gig flyers, Grunge breaks sterile corporate polish using coarse grain, rotated labels, torn newsprint contrast, and stencil type.",
    bestFor: "Rock & hip-hop tours, skate/streetwear drops, documentary promos, and underground zines.",
    swatches: ["#171614", "#ebe4d1", "#c9382b", "#7a7365"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <rect x="218" y="42" width="76" height="18" fill="rgba(235,228,209,0.22)" transform="rotate(-9 256 51)"/>
      <circle cx="268" cy="120" r="38" fill="none" stroke="#c9382b" stroke-width="3" stroke-dasharray="18 5 6 4"/>
      <circle cx="242" cy="82" r="3" fill="#c9382b"/>
      <circle cx="294" cy="154" r="4" fill="#ebe4d1" opacity="0.5"/>
      <circle cx="222" cy="152" r="2.5" fill="#ebe4d1" opacity="0.6"/>
    </svg>`,
  },
  {
    id: "paper-cutout",
    num: "11",
    name: "Paper cutout",
    category: "tactile",
    url: "kirigami-earth.org",
    brand: "LAYERED",
    nav: ["Layers", "Craft", "Story"],
    eyebrow: "Kirigami Layered Depth",
    heroTitle: "Stacked Die-Cut Craft Horizons",
    heroCopy: "Crisp matte cardstock dunes casting soft organic drop shadows.",
    cta: "Explore Layers",
    chip: "4-Ply Craft",
    summary: "Layered cut-paper shapes with soft shadows and handmade warmth.",
    desc: "Paper cutout stacks wavy colored shapes with soft drop shadows so the page feels handcrafted, warm, and layered like real paper art.",
    bestFor: "Nonprofits, learning apps, kids websites, and visual storytelling pages.",
    swatches: ["#fae8d4", "#e06144", "#5c8d76", "#2c2520"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <defs>
        <filter id="cutShadow" x="-10%" y="-10%" width="120%" height="140%">
          <feDropShadow dx="0" dy="-3" stdDeviation="4" flood-color="#2c2520" flood-opacity="0.22"/>
        </filter>
      </defs>
      <circle cx="268" cy="56" r="22" fill="#e69f45" filter="url(#cutShadow)"/>
      <path d="M0 156 Q88 118 175 148 T320 124 L320 200 L0 200Z" fill="#e06144" filter="url(#cutShadow)"/>
      <path d="M0 176 Q110 144 215 170 T320 152 L320 200 L0 200Z" fill="#5c8d76" filter="url(#cutShadow)"/>
    </svg>`,
  },
  {
    id: "glitch",
    num: "12",
    name: "Glitch",
    category: "digital",
    url: "signal-loss.dev",
    brand: "ERR://404",
    nav: ["Node", "Dump", "Live"],
    eyebrow: "CRT Signal Interference",
    heroTitle: "RGB Split & Digital Scanlines",
    heroCopy: "Cyan-magenta channel chromatic shift and sliced signal blocks.",
    cta: "Override Feed",
    chip: "PACKET_SYNC_98%",
    summary: "Split red-cyan glow, TV scanlines, and edgy sci-fi static.",
    desc: "Glitch style uses subtle TV scanlines, color-split shadows, and raw coding type to create an energetic, high-tech atmosphere.",
    bestFor: "Gaming channels, tech launches, electronic music pages, and sci-fi promos.",
    swatches: ["#08090e", "#00f5d4", "#ff2a85", "#eef5ff"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <rect x="210" y="64" width="96" height="6" fill="#00f5d4" opacity="0.85"/>
      <rect x="232" y="70" width="84" height="5" fill="#ff2a85" opacity="0.85"/>
      <rect x="195" y="132" width="110" height="4" fill="#00f5d4" opacity="0.6"/>
      <rect x="240" y="148" width="58" height="10" fill="none" stroke="#ff2a85" stroke-width="2"/>
    </svg>`,
  },
  {
    id: "anti-design",
    num: "13",
    name: "Anti-design",
    category: "digital",
    url: "no-rules.wtf",
    brand: "ANTI®",
    nav: ["WHY?", "CHAOS", "BUY"],
    eyebrow: "Rule-Breaking Web",
    heroTitle: "Acid Colors, Tilted Labels & Clash",
    heroCopy: "Playful asymmetrical layouts made to break normal web habits.",
    cta: "DON'T CLICK ME",
    chip: "*EXPERIMENTAL*",
    summary: "Rule-breaking layouts, bright acid greens, and colliding stickers.",
    desc: "Anti-design skips clean corporate rules. Mixing bright neon accents, tilted stickers, overlapping boxes, and chunky text makes people stop and look.",
    bestFor: "Streetwear labels, art collectives, event flyers, and bold product drops.",
    swatches: ["#e2ff32", "#0f2aff", "#ff29c3", "#110b29"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <polygon points="270,40 278,64 304,64 284,78 292,102 270,88 248,102 256,78 236,64 262,64" fill="#ff29c3" stroke="#110b29" stroke-width="2.5"/>
      <rect x="218" y="128" width="82" height="26" fill="#0f2aff" stroke="#110b29" stroke-width="2.5" transform="rotate(-7 259 141)"/>
    </svg>`,
  },
  {
    id: "3d-inflated",
    num: "14",
    name: "3D inflated",
    category: "tactile",
    url: "puff-studio.io",
    brand: "PUFFY.3D",
    nav: ["Tokens", "Plush", "Play"],
    eyebrow: "Glossy Claymorphism",
    heroTitle: "Balloon-Soft Sculptural Surfaces",
    heroCopy: "Pillow-puffed shapes with specular highlights and candy gradients.",
    cta: "Squish & Try",
    chip: "Volumetric Pill",
    summary: "Playful puffy 3D buttons with glossy shine and candy colors.",
    desc: "3D inflated design gives buttons and cards a fun, bouncy feel using smooth gradients, glossy highlights, and soft colored shadows.",
    bestFor: "Consumer apps, creator tools, Gen-Z brands, and playful product pages.",
    swatches: ["#dff0ff", "#ff70b8", "#4661f6", "#ffffff"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <defs>
        <radialGradient id="puffBubble" cx="32%" cy="28%" r="70%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="35%" stop-color="#7fa4ff"/>
          <stop offset="100%" stop-color="#354ce0"/>
        </radialGradient>
        <radialGradient id="puffPink" cx="30%" cy="26%" r="70%">
          <stop offset="0%" stop-color="#fff4fa"/>
          <stop offset="35%" stop-color="#ff85c4"/>
          <stop offset="100%" stop-color="#d62880"/>
        </radialGradient>
      </defs>
      <circle cx="264" cy="96" r="42" fill="url(#puffBubble)"/>
      <circle cx="228" cy="144" r="24" fill="url(#puffPink)"/>
    </svg>`,
  },
  {
    id: "isometric",
    num: "15",
    name: "Isometric",
    category: "tactile",
    url: "cloudmesh.infra",
    brand: "ISO//STACK",
    nav: ["Nodes", "Layers", "Docs"],
    eyebrow: "30° Axonometric System",
    heroTitle: "Angled 3D Blocks & Data Layers",
    heroCopy: "Clean 30° 3D layers that make complex software features simple to see.",
    cta: "Inspect Stack",
    chip: "3-Tier Architecture",
    summary: "Clean 30° 3D scenes for software diagrams and feature layouts.",
    desc: "Isometric design shows stacked 3D UI cards and technical layers at a neat angle so complex tools look structured and easy to follow.",
    bestFor: "SaaS platforms, cloud tools, logistics dashboards, and B2B product pages.",
    swatches: ["#f4f7fc", "#2563eb", "#60a5fa", "#14223d"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <g transform="translate(212, 48)">
        <polygon points="48,18 92,38 48,58 4,38" fill="#60a5fa" stroke="#1e3a8a" stroke-width="1.5"/>
        <polygon points="4,38 48,58 48,88 4,68" fill="#2563eb" stroke="#1e3a8a" stroke-width="1.5"/>
        <polygon points="48,58 92,38 92,68 48,88" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>
        <polygon points="48,0 76,13 48,26 20,13" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="1.5"/>
      </g>
    </svg>`,
  },
  {
    id: "ukiyo-e",
    num: "16",
    name: "Ukiyo-e",
    category: "art",
    url: "edo-woodblock.jp",
    brand: "浮世絵・版画",
    nav: ["Prints", "Seals", "Craft"],
    eyebrow: "Edo Woodblock Craft",
    heroTitle: "Washi Paper, Indigo & Vermilion",
    heroCopy: "Block-carved ink borders, rising crimson suns, and rhythmic wave crests.",
    cta: "View Woodblocks",
    chip: "印 • Edo Ink",
    summary: "Japanese woodblock grain, Prussian indigo, vermilion sun, and hanko stamps.",
    desc: "Built right here as the foundation of this portfolio, Ukiyo-e translates Hokusai and Hiroshige woodblock printing into modern digital craft with washi grain and offset ink shadows.",
    bestFor: "Creative director portfolios, cultural exhibitions, artisan studios, and editorial essays.",
    swatches: ["#f3ecdc", "#1d3e5e", "#b83b2a", "#c28e3d"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <circle cx="268" cy="72" r="28" fill="#b83b2a"/>
      <circle cx="268" cy="72" r="36" fill="none" stroke="#c28e3d" stroke-width="1.4" stroke-dasharray="4 4"/>
      <path d="M180 164 Q224 128 268 158 T320 144 L320 200 L180 200Z" fill="#1d3e5e" opacity="0.9"/>
      <path d="M165 182 Q225 148 278 176 T320 168 L320 200 L165 200Z" fill="#152a42"/>
    </svg>`,
  },
  {
    id: "brutalism",
    num: "17",
    name: "Brutalism",
    category: "digital",
    url: "raw-concrete.index",
    brand: "[001]_GRID",
    nav: ["INDEX", "SPEC", "LOG"],
    eyebrow: "Neo-Brutalist Monolith",
    heroTitle: "Raw Concrete Borders & Safety Orange",
    heroCopy: "Unfiltered structural truth: razor-sharp hairlines, bold caps, zero ornament.",
    cta: "OPEN SPEC [→]",
    chip: "RAW_SYSTEM_V2",
    summary: "Strong black borders, raw monospace tags, and bold oversized headlines.",
    desc: "Brutalism skips gradients and soft polish to put big headlines, thick black frames, and high-contrast orange accents front and center.",
    bestFor: "Architecture studios, indie tools, developer sites, and creative collectives.",
    swatches: ["#e6e5df", "#0b0b0b", "#ff3b00", "#ffffff"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <rect x="224" y="42" width="84" height="122" fill="none" stroke="#0b0b0b" stroke-width="2.5"/>
      <line x1="224" y1="42" x2="308" y2="164" stroke="#0b0b0b" stroke-width="2"/>
      <line x1="308" y1="42" x2="224" y2="164" stroke="#0b0b0b" stroke-width="2"/>
      <rect x="250" y="88" width="32" height="32" fill="#ff3b00" stroke="#0b0b0b" stroke-width="2"/>
    </svg>`,
  },
  {
    id: "bauhaus",
    num: "18",
    name: "Bauhaus",
    category: "art",
    url: "weimar-form.de",
    brand: "BAUHAUS 19",
    nav: ["Form", "Color", "Work"],
    eyebrow: "Form Follows Function",
    heroTitle: "Circle, Triangle & Geometric Clarity",
    heroCopy: "Balanced Weimar modernism anchored by primary geometric primitives.",
    cta: "Explore Manifesto",
    chip: "Dessau 1925",
    summary: "Balanced circles, triangles, and bars arranged cleanly on warm grids.",
    desc: "Inspired by the Bauhaus school, this look pairs crisp sans-serif headlines with bold red circles, blue bars, and yellow triangles.",
    bestFor: "Design studios, furniture brands, art schools, and clean editorial blogs.",
    swatches: ["#f3eedf", "#d62f26", "#1b4b9c", "#eab308"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <circle cx="268" cy="84" r="34" fill="#d62f26"/>
      <polygon points="222,166 266,94 310,166" fill="#eab308" opacity="0.92"/>
      <rect x="206" y="138" width="102" height="16" fill="#1b4b9c"/>
    </svg>`,
  },
  {
    id: "mid-century-modern",
    num: "19",
    name: "Mid-century modern",
    category: "art",
    url: "eames-lounge.1956",
    brand: "PALM SPRINGS",
    nav: ["Living", "Wood", "Lounge"],
    eyebrow: "1950s Atomic Warmth",
    heroTitle: "Walnut, Burnt Orange & Starbursts",
    heroCopy: "Warm organic curves mixed with friendly 1950s shapes and colors.",
    cta: "Tour Collection",
    chip: "Walnut & Leather",
    summary: "Warm wood tones, burnt orange curves, and friendly retro starbursts.",
    desc: "Inspired by 1950s interiors and classic Eames furniture, Mid-century modern brings together walnut browns, olive green, burnt orange, and starburst shapes.",
    bestFor: "Furniture and home brands, boutique hotels, coffee roasters, and lifestyle magazines.",
    swatches: ["#362419", "#cf5622", "#6d7a47", "#dca338"],
    decorSvg: `<svg viewBox="0 0 320 200" preserveAspectRatio="none">
      <path d="M214 160 C222 108, 294 94, 308 148 C275 135, 240 144, 214 160Z" fill="#6d7a47"/>
      <g stroke="#cf5622" stroke-width="2.5" stroke-linecap="round">
        <line x1="270" y1="42" x2="270" y2="88"/>
        <line x1="247" y1="65" x2="293" y2="65"/>
        <line x1="254" y1="49" x2="286" y2="81"/>
        <line x1="286" y1="49" x2="254" y2="81"/>
      </g>
      <circle cx="270" cy="65" r="7" fill="#dca338"/>
    </svg>`,
  },
];

function buildConceptStageHTML(concept, interactive = false) {
  const swatchesAttr = concept.swatches.join(",");
  return `
    <div class="stage-decor" aria-hidden="true">${concept.decorSvg}</div>
    <div class="stage-nav">
      <span class="stage-brand">${concept.brand}</span>
      <span class="stage-links">${concept.nav.map((n) => `<span>${n}</span>`).join("")}</span>
    </div>
    <div class="stage-hero">
      <span class="stage-eyebrow">${concept.eyebrow}</span>
      <h4 class="stage-title">${concept.heroTitle}</h4>
      <p class="stage-copy">${concept.heroCopy}</p>
      <div class="stage-actions">
        <button type="button" class="stage-cta" ${interactive ? `data-stage-cta="${concept.id}"` : 'tabindex="-1"'}>
          ${concept.cta}
        </button>
        <span class="stage-pill-chip">${concept.chip}</span>
      </div>
    </div>
    <div class="stage-footer-bar" data-swatches="${swatchesAttr}">
      <span>STYLE ${concept.num} / 19</span>
      <span>${concept.name.toUpperCase()}</span>
    </div>
  `;
}

const LIVE_WEBSITES = [
  {
    id: "the-mural-store",
    badge: "LIVE WEBSITE • ARCHITECTURAL WEB",
    category: "Neo-Brutalism & Art Storefront",
    title: "The Mural Store: Curated Gallery",
    url: "https://the-mural-store.vercel.app/#curation",
    displayUrl: "the-mural-store.vercel.app/#curation",
    desc: "Dark architectural art gallery website showcasing custom wall murals, rich pigment textures, a custom loupe cursor, and private commission booking.",
    tags: ["Neo-Brutalism", "Gallery Site", "Live Vercel"],
  },
  {
    id: "apar-oil-monitoring",
    badge: "LIVE WEBSITE • ENTERPRISE PORTAL",
    category: "Industrial Monitoring & Dark UI",
    title: "APAR: Oil Sample Monitoring System",
    url: "https://apar-oil-sampling-monitoring-system.vercel.app/login",
    displayUrl: "apar-oil-sampling-monitoring-system.vercel.app/login",
    desc: "Clean dark login and portal interface built for industrial oil sample tracking and monitoring teams.",
    tags: ["Portal UI", "Dark Theme", "Live Vercel"],
  },
];

function updateDeviceScale(shell, stage) {
  if (!shell || !stage) return;
  const isMobile = stage.dataset.view === "mobile";
  const targetWidth = isMobile ? 390 : 1280;
  const scale = Math.max(0.18, shell.clientWidth / targetWidth);
  shell.style.setProperty("--screen-scale", scale.toFixed(4));
}

function reloadIframe(iframeEl, url) {
  if (!iframeEl || !url) return;
  iframeEl.src = "about:blank";
  requestAnimationFrame(() => {
    iframeEl.src = url;
  });
}

function animateFilteredTabCards(visibleCards) {
  visibleCards.forEach((card, idx) => {
    card.classList.add("is-inview");
    card.classList.remove("is-tab-entering");
    card.style.setProperty("--tab-enter-delay", `${Math.min(idx, 5) * 32}ms`);
    void card.offsetWidth;
    card.classList.add("is-tab-entering");
    const clearAnim = () => card.classList.remove("is-tab-entering");
    card.addEventListener("animationend", clearAnim, { once: true });
    setTimeout(clearAnim, 500);
  });
}

function attachHorizontalSwipe(targetEl, onPrev, onNext) {
  if (!targetEl) return;
  let startX = 0;
  let startY = 0;

  targetEl.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true }
  );

  targetEl.addEventListener(
    "touchend",
    (e) => {
      if (e.changedTouches.length !== 1) return;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
      if (dx > 0) onPrev();
      else onNext();
    },
    { passive: true }
  );
}

document.addEventListener("DOMContentLoaded", () => {
  applyProfileConfig();

  const portraitCard = document.getElementById("portraitCard");
  if (portraitCard) {
    portraitCard.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      portraitCard.classList.toggle("is-pinned");
    });
    document.addEventListener("click", (e) => {
      if (!portraitCard.contains(e.target)) {
        portraitCard.classList.remove("is-pinned");
      }
    });
  }

  const filterBtns = Array.from(document.querySelectorAll("#work .filter-btn"));
  const cards = Array.from(document.querySelectorAll(".work-card"));
  const worksCarousel = document.getElementById("worksCarousel");
  const carouselStage = document.getElementById("carouselStage");
  const carouselPrevArrow = document.getElementById("carouselPrev");
  const carouselNextArrow = document.getElementById("carouselNext");
  const carouselPrevBtn = document.getElementById("carouselPrevBtn");
  const carouselNextBtn = document.getElementById("carouselNextBtn");
  const carouselCounter = document.getElementById("carouselCounter");
  const carouselDotsEl = document.getElementById("carouselDots");
  const carouselAutoBtn = document.getElementById("carouselAutoBtn");
  const squintToggle = document.getElementById("squintToggle");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxTools = document.getElementById("lightboxTools");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const prevWorkBtn = document.getElementById("prevWork");
  const nextWorkBtn = document.getElementById("nextWork");
  const copyEmailBtn = document.getElementById("copyEmailBtn");

  const reducedMotionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  let activeFilter = "all";
  let currentVisibleCards = [...cards];
  let activeIndex = 0;
  let activeSlide = 0;
  let isAutoRevolve = !reducedMotionQuery?.matches;
  let isCarouselHovered = false;
  let isCarouselTouching = false;
  let isCarouselInView = true;
  let autoRevolveTimer = null;
  let suppressCardClick = false;

  function renderCarouselDots() {
    if (!carouselDotsEl) return;
    carouselDotsEl.innerHTML = currentVisibleCards
      .map(
        (card, i) =>
          `<button type="button" class="carousel-dot${i === activeSlide ? " is-active" : ""}" data-slide="${i}" aria-label="Show ${
            card.dataset.title || `work ${i + 1}`
          }" aria-selected="${i === activeSlide}"></button>`
      )
      .join("");
  }

  function layoutCarousel() {
    const n = currentVisibleCards.length;
    if (!n) return;
    activeSlide = ((activeSlide % n) + n) % n;

    const stageWidth = carouselStage?.clientWidth || window.innerWidth || 960;
    const isPhone = stageWidth < 560;
    const step1 = isPhone ? Math.min(200, stageWidth * 0.56) : Math.min(286, stageWidth * 0.3);
    const step2 = step1 * (isPhone ? 1.65 : 1.78);

    cards.forEach((c) => {
      if (c.classList.contains("is-hidden")) {
        c.classList.remove("is-center");
      }
    });

    currentVisibleCards.forEach((card, i) => {
      let offset = i - activeSlide;
      if (offset > n / 2) offset -= n;
      if (offset < -n / 2) offset += n;

      const abs = Math.abs(offset);
      const sign = offset >= 0 ? 1 : -1;
      let cx = 0;
      let cy = 0;
      let cz = 0;
      let scale = 1;
      let rot = 0;
      let op = 1;
      let zidx = 30;
      let bright = 1;

      if (offset === 0) {
        cx = 0;
        cy = 0;
        cz = 0;
        scale = 1;
        rot = 0;
        op = 1;
        zidx = 30;
        bright = 1;
      } else if (abs === 1) {
        cx = offset * step1;
        cy = 10;
        cz = -115;
        scale = isPhone ? 0.8 : 0.85;
        rot = offset * -16;
        op = isPhone ? 0.62 : 0.9;
        zidx = 20;
        bright = 0.92;
      } else if (abs === 2) {
        cx = offset * step2 * 0.54;
        cy = 20;
        cz = -230;
        scale = 0.69;
        rot = offset * -24;
        op = isPhone ? 0 : 0.54;
        zidx = 10;
        bright = 0.84;
      } else {
        cx = sign * step2 * 0.62;
        cy = 28;
        cz = -340;
        scale = 0.56;
        rot = sign * -30;
        op = 0;
        zidx = 1;
        bright = 0.8;
      }

      card.style.setProperty("--cx", `${cx.toFixed(1)}px`);
      card.style.setProperty("--cy", `${cy}px`);
      card.style.setProperty("--cz", `${cz}px`);
      card.style.setProperty("--cscale", String(scale));
      card.style.setProperty("--crot", `${rot}deg`);
      card.style.setProperty("--cop", String(op));
      card.style.setProperty("--czidx", String(zidx));
      card.style.setProperty("--cbright", String(bright));
      card.style.pointerEvents = op > 0 ? "auto" : "none";
      card.classList.toggle("is-center", offset === 0);
      card.setAttribute("tabindex", offset === 0 ? "0" : "-1");
      card.setAttribute("aria-hidden", offset === 0 ? "false" : "true");
    });

    if (carouselCounter) {
      carouselCounter.textContent = `${String(activeSlide + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
    }

    if (carouselDotsEl) {
      Array.from(carouselDotsEl.children).forEach((dotEl, idx) => {
        const isAct = idx === activeSlide;
        dotEl.classList.toggle("is-active", isAct);
        dotEl.setAttribute("aria-selected", String(isAct));
      });
    }
  }

  function syncAutoButton() {
    if (!carouselAutoBtn) return;
    carouselAutoBtn.classList.toggle("is-playing", isAutoRevolve);
    carouselAutoBtn.setAttribute("aria-pressed", String(isAutoRevolve));
    const span = carouselAutoBtn.querySelector("span");
    if (span) span.textContent = isAutoRevolve ? "Auto-Revolve" : "Paused";
  }

  function updateAutoRevolve() {
    if (autoRevolveTimer) {
      clearInterval(autoRevolveTimer);
      autoRevolveTimer = null;
    }
    if (
      !isAutoRevolve ||
      isCarouselHovered ||
      isCarouselTouching ||
      !isCarouselInView ||
      document.hidden ||
      lightbox?.classList.contains("open") ||
      currentVisibleCards.length <= 1
    ) {
      return;
    }
    autoRevolveTimer = setInterval(() => {
      activeSlide = (activeSlide + 1) % currentVisibleCards.length;
      layoutCarousel();
    }, 3400);
  }

  function goToSlide(targetIdx) {
    const n = currentVisibleCards.length;
    if (!n) return;
    activeSlide = ((targetIdx % n) + n) % n;
    layoutCarousel();
    updateAutoRevolve();
  }

  // Category Filtering inside Carousel
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter || "all";
      filterBtns.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle("active", isCurrent);
        b.setAttribute("aria-selected", String(isCurrent));
      });

      cards.forEach((card) => {
        const match = activeFilter === "all" || card.dataset.category === activeFilter;
        card.classList.toggle("is-hidden", !match);
      });

      currentVisibleCards = cards.filter((c) => !c.classList.contains("is-hidden"));
      activeSlide = 0;
      renderCarouselDots();
      layoutCarousel();
      updateAutoRevolve();
      document.dispatchEvent(new Event("portfolio:relayout"));
    });
  });

  // Carousel Navigation Controls
  [carouselPrevArrow, carouselPrevBtn].forEach((btn) => {
    btn?.addEventListener("click", () => goToSlide(activeSlide - 1));
  });
  [carouselNextArrow, carouselNextBtn].forEach((btn) => {
    btn?.addEventListener("click", () => goToSlide(activeSlide + 1));
  });

  carouselDotsEl?.addEventListener("click", (e) => {
    const dot = e.target.closest("[data-slide]");
    if (!dot) return;
    goToSlide(Number(dot.dataset.slide || 0));
  });

  carouselAutoBtn?.addEventListener("click", () => {
    isAutoRevolve = !isAutoRevolve;
    syncAutoButton();
    updateAutoRevolve();
  });

  if (worksCarousel) {
    worksCarousel.addEventListener("mouseenter", () => {
      isCarouselHovered = true;
      updateAutoRevolve();
    });
    worksCarousel.addEventListener("mouseleave", () => {
      isCarouselHovered = false;
      updateAutoRevolve();
    });
    worksCarousel.addEventListener("keydown", (e) => {
      if (lightbox?.classList.contains("open")) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToSlide(activeSlide - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToSlide(activeSlide + 1);
      }
    });

    if (typeof IntersectionObserver !== "undefined") {
      let carouselWarmed = false;
      const stageVisObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isCarouselInView = entry.isIntersecting;
            if (isCarouselInView && !carouselWarmed) {
              carouselWarmed = true;
              cards.forEach((card) => {
                const img = card.querySelector("img");
                if (img) img.loading = "eager";
              });
            }
            updateAutoRevolve();
          });
        },
        { threshold: 0.15 }
      );
      stageVisObserver.observe(worksCarousel);
    }
  }

  if (carouselStage) {
    let startX = 0;
    let startY = 0;
    let pointerActive = false;

    carouselStage.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length !== 1) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isCarouselTouching = true;
        updateAutoRevolve();
      },
      { passive: true }
    );

    carouselStage.addEventListener(
      "touchend",
      (e) => {
        isCarouselTouching = false;
        if (e.changedTouches.length === 1) {
          const dx = e.changedTouches[0].clientX - startX;
          const dy = e.changedTouches[0].clientY - startY;
          if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
            suppressCardClick = true;
            setTimeout(() => {
              suppressCardClick = false;
            }, 90);
            goToSlide(dx > 0 ? activeSlide - 1 : activeSlide + 1);
          } else {
            updateAutoRevolve();
          }
        } else {
          updateAutoRevolve();
        }
      },
      { passive: true }
    );

    carouselStage.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch" || e.target.closest(".carousel-arrow")) return;
      pointerActive = true;
      startX = e.clientX;
      startY = e.clientY;
    });

    window.addEventListener("pointerup", (e) => {
      if (!pointerActive) return;
      pointerActive = false;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) >= 44 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        suppressCardClick = true;
        setTimeout(() => {
          suppressCardClick = false;
        }, 90);
        goToSlide(dx > 0 ? activeSlide - 1 : activeSlide + 1);
      }
    });
  }

  document.addEventListener("visibilitychange", updateAutoRevolve);
  window.addEventListener("resize", layoutCarousel);

  // 168px Mobile Squint Test Toggle
  if (squintToggle && worksCarousel) {
    squintToggle.addEventListener("change", () => {
      worksCarousel.classList.toggle("mobile-squint", squintToggle.checked);
    });
  }

  // Lightbox Modal
  function openLightbox(index) {
    if (!currentVisibleCards.length) return;
    activeIndex = (index + currentVisibleCards.length) % currentVisibleCards.length;
    activeSlide = activeIndex;
    layoutCarousel();
    const card = currentVisibleCards[activeIndex];
    lightboxImg.src = card.dataset.src || "";
    lightboxImg.alt = card.dataset.title || "Portfolio preview";
    lightboxTitle.textContent = card.dataset.title || "";
    lightboxTools.textContent = card.dataset.tools || "";
    lightboxDesc.textContent = card.dataset.desc || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    updateAutoRevolve();
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    updateAutoRevolve();
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (suppressCardClick) return;
      const idx = currentVisibleCards.indexOf(card);
      if (idx < 0) return;
      if (idx !== activeSlide) {
        goToSlide(idx);
      } else {
        openLightbox(idx);
      }
    });
  });

  renderCarouselDots();
  layoutCarousel();
  syncAutoButton();
  updateAutoRevolve();

  // 19 Website Concepts Grid & Modal
  const conceptsGrid = document.getElementById("conceptsGrid");
  const conceptFilterBtns = Array.from(document.querySelectorAll("[data-concept-filter]"));
  const conceptModal = document.getElementById("conceptModal");
  const conceptBackdrop = document.getElementById("conceptBackdrop");
  const conceptClose = document.getElementById("conceptClose");
  const conceptModalStage = document.getElementById("conceptModalStage");
  const conceptModalUrl = document.getElementById("conceptModalUrl");
  const conceptModalCategory = document.getElementById("conceptModalCategory");
  const conceptModalTitle = document.getElementById("conceptModalTitle");
  const conceptModalDesc = document.getElementById("conceptModalDesc");
  const conceptModalBestFor = document.getElementById("conceptModalBestFor");
  const conceptModalSwatches = document.getElementById("conceptModalSwatches");
  const prevConceptBtn = document.getElementById("prevConcept");
  const nextConceptBtn = document.getElementById("nextConcept");

  let activeConceptFilter = "all";
  let currentVisibleConcepts = [...WEBSITE_CONCEPTS];
  let activeConceptIndex = 0;

  function renderConceptCards() {
    if (!conceptsGrid) return;
    conceptsGrid.innerHTML = WEBSITE_CONCEPTS.map(
      (c) => `
      <article
        class="concept-card"
        data-concept-id="${c.id}"
        data-concept-cat="${c.category}"
        tabindex="0"
        role="button"
        aria-label="Inspect ${c.name} website concept"
      >
        <div class="concept-browser">
          <div class="concept-browser-bar">
            <span class="browser-dots" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="browser-url">${c.url}</span>
          </div>
          <div class="concept-stage theme-${c.id}">
            ${buildConceptStageHTML(c, false)}
          </div>
        </div>
        <div class="concept-meta">
          <div class="concept-meta-top">
            <span class="concept-num">${c.num}</span>
            <span class="concept-cat-badge">${CATEGORY_LABELS[c.category]}</span>
          </div>
          <h3 class="concept-title">${c.name}</h3>
          <p class="concept-summary">${c.summary}</p>
          <div class="concept-swatches" aria-label="Color palette">
            ${c.swatches.map((hex) => `<span class="swatch-dot" style="background:${hex}" title="${hex}"></span>`).join("")}
          </div>
        </div>
      </article>
    `
    ).join("");

    conceptsGrid.querySelectorAll(".concept-card").forEach((card) => {
      const triggerOpen = () => {
        const id = card.dataset.conceptId;
        const idx = currentVisibleConcepts.findIndex((item) => item.id === id);
        openConceptModal(idx >= 0 ? idx : 0);
      };
      card.addEventListener("click", triggerOpen);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerOpen();
        }
      });
    });
  }

  function openConceptModal(index) {
    if (!conceptModal || !currentVisibleConcepts.length) return;
    activeConceptIndex = (index + currentVisibleConcepts.length) % currentVisibleConcepts.length;
    const concept = currentVisibleConcepts[activeConceptIndex];

    conceptModalUrl.textContent = `https://${concept.url}`;
    conceptModalCategory.textContent = `${concept.num} • ${CATEGORY_LABELS[concept.category]}`;
    conceptModalTitle.textContent = concept.name;
    conceptModalDesc.textContent = concept.desc;
    conceptModalBestFor.textContent = concept.bestFor;
    conceptModalSwatches.innerHTML = concept.swatches
      .map(
        (hex) =>
          `<span class="swatch-chip"><span class="swatch-dot" style="background:${hex}"></span>${hex}</span>`
      )
      .join("");

    conceptModalStage.className = `concept-stage concept-stage-lg theme-${concept.id}`;
    conceptModalStage.innerHTML = buildConceptStageHTML(concept, true);

    const modalCta = conceptModalStage.querySelector(".stage-cta");
    modalCta?.addEventListener("click", () => {
      modalCta.classList.add("is-pulsed");
      const orig = modalCta.textContent.trim();
      modalCta.textContent = `✓ ${concept.name} Active`;
      setTimeout(() => {
        modalCta.classList.remove("is-pulsed");
        modalCta.textContent = orig;
      }, 1100);
    });

    conceptModal.classList.add("open");
    conceptModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeConceptModal() {
    if (!conceptModal) return;
    conceptModal.classList.remove("open");
    conceptModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  renderConceptCards();

  conceptFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeConceptFilter = btn.dataset.conceptFilter || "all";
      conceptFilterBtns.forEach((b) => {
        const isCurrent = b === btn;
        b.classList.toggle("active", isCurrent);
        b.setAttribute("aria-selected", String(isCurrent));
      });

      const cardEls = Array.from(document.querySelectorAll(".concept-card"));
      cardEls.forEach((card) => {
        const match =
          activeConceptFilter === "all" || card.dataset.conceptCat === activeConceptFilter;
        card.classList.toggle("is-hidden", !match);
      });

      const visibleConceptCards = cardEls.filter((c) => !c.classList.contains("is-hidden"));
      animateFilteredTabCards(visibleConceptCards);
      currentVisibleConcepts = WEBSITE_CONCEPTS.filter(
        (c) => activeConceptFilter === "all" || c.category === activeConceptFilter
      );
      document.dispatchEvent(new Event("portfolio:relayout"));
    });
  });

  // Live Websites Mini Screens & Modal
  const liveSitesGrid = document.getElementById("liveSitesGrid");
  const liveSiteModal = document.getElementById("liveSiteModal");
  const liveSiteBackdrop = document.getElementById("liveSiteBackdrop");
  const liveSiteClose = document.getElementById("liveSiteClose");
  const liveSiteModalFrame = document.getElementById("liveSiteModalFrame");
  const liveSiteModalUrl = document.getElementById("liveSiteModalUrl");
  const liveSiteModalVisit = document.getElementById("liveSiteModalVisit");
  const liveSiteModalReload = document.getElementById("liveSiteModalReload");
  const liveSiteModalBadge = document.getElementById("liveSiteModalBadge");
  const liveSiteModalTitle = document.getElementById("liveSiteModalTitle");
  const liveSiteModalDesc = document.getElementById("liveSiteModalDesc");

  let activeLiveSite = null;

  function openLiveSiteModal(site) {
    if (!liveSiteModal || !site) return;
    activeLiveSite = site;
    liveSiteModalUrl.textContent = site.url;
    liveSiteModalUrl.href = site.url;
    liveSiteModalVisit.href = site.url;
    liveSiteModalBadge.textContent = site.badge;
    liveSiteModalTitle.textContent = site.title;
    liveSiteModalDesc.textContent = site.desc;
    liveSiteModalFrame.src = site.url;
    liveSiteModal.classList.add("open");
    liveSiteModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLiveSiteModal() {
    if (!liveSiteModal) return;
    liveSiteModal.classList.remove("open");
    liveSiteModal.setAttribute("aria-hidden", "true");
    liveSiteModalFrame.src = "about:blank";
    document.body.style.overflow = "";
    activeLiveSite = null;
  }

  if (liveSitesGrid) {
    const initialLiveView = window.innerWidth <= 640 ? "mobile" : "desktop";
    liveSitesGrid.innerHTML = LIVE_WEBSITES.map(
      (site) => `
      <article class="mini-screen-card" data-site-id="${site.id}">
        <div class="mini-screen-bar">
          <span class="browser-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="mini-url-pill" title="Open ${site.url}">
            ${site.displayUrl}
          </a>
          <div class="mini-bar-controls">
            <div class="viewport-switch" role="group" aria-label="Switch viewport size for ${site.title}">
              <button type="button" class="viewport-btn${initialLiveView === "desktop" ? " active" : ""}" data-set-view="desktop">Desktop</button>
              <button type="button" class="viewport-btn${initialLiveView === "mobile" ? " active" : ""}" data-set-view="mobile">Mobile</button>
            </div>
            <button type="button" class="screen-action-btn" data-action="reload" title="Reload mini screen">↻</button>
            <button type="button" class="screen-action-btn" data-action="expand" title="Expand live monitor">⛶</button>
          </div>
        </div>

        <div class="mini-screen-stage" data-view="${initialLiveView}">
          <div class="mini-device-shell">
            <div class="mini-screen-loader">
              <span>Loading live deployment…</span>
            </div>
            <iframe
              class="mini-screen-iframe"
              src="${site.url}"
              title="${site.title} live preview"
              loading="lazy"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="mini-screen-meta">
          <div class="mini-meta-top">
            <span class="seal-pill">${site.badge}</span>
            <span class="mono-meta">${site.category}</span>
          </div>
          <h3 class="mini-site-title">${site.title}</h3>
          <p class="mini-site-desc">${site.desc}</p>
          <div class="work-tags">
            ${site.tags.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <div class="mini-site-actions">
            <button type="button" class="btn btn-outline btn-sm" data-action="expand">Expand Screen</button>
            <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Live Site ↗</a>
          </div>
        </div>
      </article>
    `
    ).join("");

    const scaleObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver((entries) => {
            entries.forEach((entry) => {
              const shell = entry.target;
              const stage = shell.closest(".mini-screen-stage");
              updateDeviceScale(shell, stage);
            });
          })
        : null;

    liveSitesGrid.querySelectorAll(".mini-screen-card").forEach((card) => {
      const site = LIVE_WEBSITES.find((s) => s.id === card.dataset.siteId);
      const stage = card.querySelector(".mini-screen-stage");
      const shell = card.querySelector(".mini-device-shell");
      const iframe = card.querySelector(".mini-screen-iframe");

      if (iframe && stage) {
        iframe.addEventListener("load", () => {
          stage.classList.add("is-loaded");
        });
      }

      if (shell && stage) {
        updateDeviceScale(shell, stage);
        scaleObserver?.observe(shell);
      }

      card.querySelectorAll("[data-set-view]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const view = btn.dataset.setView || "desktop";
          stage.dataset.view = view;
          card.querySelectorAll("[data-set-view]").forEach((b) => {
            b.classList.toggle("active", b === btn);
          });
          requestAnimationFrame(() => updateDeviceScale(shell, stage));
        });
      });

      card.querySelectorAll('[data-action="reload"]').forEach((btn) => {
        btn.addEventListener("click", () => {
          if (!iframe || !site) return;
          stage.classList.remove("is-loaded");
          reloadIframe(iframe, site.url);
        });
      });

      card.querySelectorAll('[data-action="expand"]').forEach((btn) => {
        btn.addEventListener("click", () => openLiveSiteModal(site));
      });
    });

    window.addEventListener("resize", () => {
      liveSitesGrid.querySelectorAll(".mini-screen-stage").forEach((stage) => {
        updateDeviceScale(stage.querySelector(".mini-device-shell"), stage);
      });
    });
  }

  liveSiteClose?.addEventListener("click", closeLiveSiteModal);
  liveSiteBackdrop?.addEventListener("click", closeLiveSiteModal);
  liveSiteModalReload?.addEventListener("click", () => {
    if (activeLiveSite) reloadIframe(liveSiteModalFrame, activeLiveSite.url);
  });

  conceptClose?.addEventListener("click", closeConceptModal);
  conceptBackdrop?.addEventListener("click", closeConceptModal);
  prevConceptBtn?.addEventListener("click", () => openConceptModal(activeConceptIndex - 1));
  nextConceptBtn?.addEventListener("click", () => openConceptModal(activeConceptIndex + 1));
  attachHorizontalSwipe(
    conceptModal?.querySelector(".concept-modal-stage-wrap"),
    () => openConceptModal(activeConceptIndex - 1),
    () => openConceptModal(activeConceptIndex + 1)
  );

  lightboxClose?.addEventListener("click", closeLightbox);
  lightboxBackdrop?.addEventListener("click", closeLightbox);
  prevWorkBtn?.addEventListener("click", () => openLightbox(activeIndex - 1));
  nextWorkBtn?.addEventListener("click", () => openLightbox(activeIndex + 1));
  attachHorizontalSwipe(
    lightbox?.querySelector(".lightbox-media"),
    () => openLightbox(activeIndex - 1),
    () => openLightbox(activeIndex + 1)
  );

  document.addEventListener("keydown", (e) => {
    if (liveSiteModal?.classList.contains("open")) {
      if (e.key === "Escape") closeLiveSiteModal();
      return;
    }
    if (conceptModal?.classList.contains("open")) {
      if (e.key === "Escape") closeConceptModal();
      if (e.key === "ArrowLeft") openConceptModal(activeConceptIndex - 1);
      if (e.key === "ArrowRight") openConceptModal(activeConceptIndex + 1);
      return;
    }
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") openLightbox(activeIndex - 1);
    if (e.key === "ArrowRight") openLightbox(activeIndex + 1);
  });

  // Copy Email Helper
  copyEmailBtn?.addEventListener("click", async () => {
    const email = PROFILE_CONFIG.email;
    try {
      await navigator.clipboard.writeText(email);
      copyEmailBtn.textContent = `Copied: ${email}`;
    } catch {
      copyEmailBtn.textContent = `Email: ${email}`;
    }
    setTimeout(() => {
      copyEmailBtn.textContent = "Copy Email Address";
    }, 2400);
  });

  // Swift Scroll Morph & Section Connectors
  initScrollChoreography();

  // Custom Ukiyo-e Studio Cursor
  initCustomCursor();
});

function initScrollChoreography() {
  document.documentElement.classList.add("js-scroll");

  const rootEl = document.documentElement;
  const heroEl = document.getElementById("hero");
  const sections = Array.from(document.querySelectorAll("section[data-section]"));
  const transitions = Array.from(document.querySelectorAll(".tab-transition"));
  const spineNodes = Array.from(document.querySelectorAll("[data-spine]"));
  const navLinksEl = document.querySelector(".nav-links");
  const navTargets = Array.from(document.querySelectorAll("[data-nav-target]"));
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  let lastScrolledNavId = "";

  function smoothstep(t) {
    const c = Math.min(1, Math.max(0, t));
    return c * c * (3 - 2 * c);
  }

  const wipeTargets = Array.from(
    document.querySelectorAll(
      "section:not(#hero) .section-kicker, section:not(#hero) .section-title, section:not(#hero) .section-sub"
    )
  );
  wipeTargets.forEach((el, idx) => {
    el.classList.add("morph-wipe");
    el.style.setProperty("--morph-delay", `${(idx % 3) * 35}ms`);
  });

  const cardTargets = Array.from(
    document.querySelectorAll(
      ".woodblock-panel, .skill-card, .works-carousel, .evolution-box, .mini-screen-card, .concept-card, .contact-scroll"
    )
  );
  cardTargets.forEach((el, idx) => {
    el.classList.add("morph-card");
    el.style.setProperty("--morph-delay", `${(idx % 3) * 40}ms`);
  });

  const allMorphTargets = [...wipeTargets, ...cardTargets];

  function checkInitialAndVisible() {
    const triggerY = window.innerHeight * 0.96;
    allMorphTargets.forEach((el) => {
      if (el.classList.contains("is-hidden")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerY && rect.bottom > 0) {
        el.classList.add("is-inview");
      }
    });
  }

  if (typeof IntersectionObserver !== "undefined") {
    const morphObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            morphObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04, rootMargin: "0px 0px -28px 0px" }
    );

    allMorphTargets.forEach((el) => morphObserver.observe(el));
  } else {
    allMorphTargets.forEach((el) => el.classList.add("is-inview"));
  }

  let rafPending = false;
  function updateScrollState() {
    rafPending = false;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const maxScroll = Math.max(1, rootEl.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
    rootEl.style.setProperty("--scroll-p", progress.toFixed(4));

    if (heroEl) {
      const heroRange = Math.max(240, heroEl.offsetHeight * 0.85);
      const heroProgress = Math.min(1, Math.max(0, scrollY / heroRange));
      rootEl.style.setProperty("--hero-p", heroProgress.toFixed(4));
    }

    const vh = Math.max(320, window.innerHeight || 800);
    const activeLine = vh * 0.36;
    const connectLine = vh * 0.9;
    let activeId = "hero";

    transitions.forEach((tx) => {
      const rect = tx.getBoundingClientRect();
      const txP = smoothstep((vh * 0.96 - rect.top) / (vh * 0.72));
      tx.style.setProperty("--tx-p", txP.toFixed(4));
      tx.classList.toggle("is-crossed", txP >= 0.42);
    });

    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      const secId = sec.dataset.section || sec.id;
      if (rect.top <= connectLine) {
        sec.classList.add("is-connected");
      }
      if (rect.top <= activeLine && rect.bottom >= 80) {
        activeId = secId;
      }
      if (secId !== "hero" && !reducedMotion?.matches) {
        const enterP = smoothstep((vh * 1.02 - rect.top) / (vh * 0.3));
        const exitP = smoothstep((vh * 0.34 - rect.bottom) / (vh * 0.38));
        sec.style.setProperty("--enter-p", enterP.toFixed(4));
        sec.style.setProperty("--exit-p", exitP.toFixed(4));
      }
    });

    spineNodes.forEach((node) => {
      node.classList.toggle("is-active", node.dataset.spine === activeId);
    });
    navTargets.forEach((link) => {
      const isCurrent = link.dataset.navTarget === activeId;
      link.classList.toggle("is-current", isCurrent);
      if (
        isCurrent &&
        activeId !== lastScrolledNavId &&
        navLinksEl &&
        navLinksEl.scrollWidth > navLinksEl.clientWidth + 4
      ) {
        lastScrolledNavId = activeId;
        const left = Math.max(0, link.offsetLeft - (navLinksEl.clientWidth - link.offsetWidth) / 2);
        navLinksEl.scrollTo({
          left,
          behavior: reducedMotion?.matches ? "auto" : "smooth",
        });
      }
    });
  }

  function requestScrollTick() {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(updateScrollState);
    }
  }

  window.addEventListener("scroll", requestScrollTick, { passive: true });
  window.addEventListener("resize", () => {
    requestScrollTick();
    checkInitialAndVisible();
  });

  document.addEventListener("portfolio:relayout", () => {
    requestAnimationFrame(() => {
      checkInitialAndVisible();
      updateScrollState();
    });
  });

  updateScrollState();
  checkInitialAndVisible();
}

/* Custom Graphic Design Pen Tool & Transform Cursor */
function initCustomCursor() {
  const finePointer = window.matchMedia?.("(hover: hover) and (pointer: fine)");
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  if (!finePointer?.matches || reducedMotion?.matches) return;

  const ring = document.getElementById("customCursorRing");
  const label = document.getElementById("customCursorLabel");
  const dot = document.getElementById("customCursorDot");
  if (!ring || !label || !dot) return;

  const root = document.documentElement;
  let mx = 0;
  let my = 0;
  let rx = 0;
  let ry = 0;
  let ox = 10;
  let oy = 10;
  let targetOx = 10;
  let targetOy = 10;
  let initialized = false;
  let visible = false;
  let inFrame = false;
  let isPressed = false;
  let isHovering = false;
  let hasLabel = false;
  let activeLabel = "";
  let rafId = 0;

  function renderTransforms() {
    const ringScale = isPressed ? 0.88 : 1;
    const dotScale = isPressed ? 0.9 : 1;
    const dotRotate = isPressed ? -8 : 0;

    let frameX = rx + ox;
    let frameY = ry + oy;
    if (hasLabel) {
      frameX = Math.min(window.innerWidth - 54, Math.max(54, frameX));
      frameY = Math.min(window.innerHeight - 24, Math.max(24, frameY));
    }

    ring.style.transform = `translate3d(${frameX.toFixed(2)}px, ${frameY.toFixed(2)}px, 0) scale(${ringScale})`;
    dot.style.transform = `translate3d(${mx.toFixed(2)}px, ${my.toFixed(2)}px, 0) rotate(${dotRotate}deg) scale(${dotScale})`;
  }

  function updateTargetOffsets() {
    if (hasLabel) {
      targetOx = 56;
      targetOy = 34;
    } else if (isHovering) {
      targetOx = 0;
      targetOy = 0;
    } else {
      targetOx = 10;
      targetOy = 10;
    }
    scheduleTick();
  }

  function clearInteractiveState() {
    ring.classList.remove("is-hover", "has-label");
    dot.classList.remove("is-hover");
    isHovering = false;
    if (hasLabel) {
      hasLabel = false;
      activeLabel = "";
      label.textContent = "";
    }
    updateTargetOffsets();
  }

  function setLabelState(nextLabel) {
    hasLabel = true;
    isHovering = false;
    ring.classList.remove("is-hover");
    ring.classList.add("has-label");
    dot.classList.add("is-hover");
    if (activeLabel !== nextLabel) {
      activeLabel = nextLabel;
      label.textContent = nextLabel;
    }
    updateTargetOffsets();
  }

  function setHoverState() {
    if (hasLabel) {
      hasLabel = false;
      activeLabel = "";
      label.textContent = "";
    }
    isHovering = true;
    ring.classList.remove("has-label");
    ring.classList.add("is-hover");
    dot.classList.add("is-hover");
    updateTargetOffsets();
  }

  function setHiddenState(hidden) {
    ring.classList.toggle("is-hidden", hidden);
    dot.classList.toggle("is-hidden", hidden);
  }

  function spawnClickAnchor(x, y) {
    const node = document.createElement("span");
    node.className = "cursor-anchor-pulse";
    node.setAttribute("aria-hidden", "true");
    node.style.setProperty("--cx", `${x.toFixed(1)}px`);
    node.style.setProperty("--cy", `${y.toFixed(1)}px`);
    document.body.appendChild(node);

    const cleanup = () => {
      if (node.parentNode) node.remove();
    };
    node.addEventListener("animationend", cleanup, { once: true });
    setTimeout(cleanup, 520);
  }

  function tick() {
    rafId = 0;
    const dx = mx - rx;
    const dy = my - ry;
    const dox = targetOx - ox;
    const doy = targetOy - oy;
    if (
      Math.abs(dx) < 0.08 &&
      Math.abs(dy) < 0.08 &&
      Math.abs(dox) < 0.08 &&
      Math.abs(doy) < 0.08
    ) {
      rx = mx;
      ry = my;
      ox = targetOx;
      oy = targetOy;
      renderTransforms();
      return;
    }
    rx += dx * 0.28;
    ry += dy * 0.28;
    ox += dox * 0.28;
    oy += doy * 0.28;
    renderTransforms();
    rafId = requestAnimationFrame(tick);
  }

  function scheduleTick() {
    if (!rafId && visible && !inFrame) {
      rafId = requestAnimationFrame(tick);
    }
  }

  function updateContextFromTarget(target) {
    const el = target instanceof Element ? target : target?.parentElement;
    if (!el) {
      if (inFrame) {
        inFrame = false;
        root.classList.remove("cursor-in-frame");
      }
      clearInteractiveState();
      renderTransforms();
      return;
    }

    if (el.closest(".mini-screen-stage, .live-modal-frame-wrap")) {
      if (!inFrame) {
        inFrame = true;
        root.classList.add("cursor-in-frame");
      }
      setHiddenState(true);
      clearInteractiveState();
      renderTransforms();
      return;
    }

    if (inFrame) {
      inFrame = false;
      root.classList.remove("cursor-in-frame");
      if (visible) setHiddenState(false);
    }

    if (el.closest("#portraitCard") && !el.closest("a, button")) {
      setLabelState("INFO");
    } else if (el.closest(".concept-card") && !el.closest("a")) {
      setLabelState("INSPECT");
    } else if (el.closest(".work-card:not(.is-center)") && el.closest(".carousel-track")) {
      setLabelState("FOCUS");
    } else if (el.closest(".work-card") && !el.closest("a")) {
      setLabelState("VIEW");
    } else if (el.closest("a, button, .filter-btn, .spine-node, .squint-toggle")) {
      setHoverState();
    } else {
      clearInteractiveState();
    }
    renderTransforms();
  }

  function hideCursor() {
    visible = false;
    isPressed = false;
    setHiddenState(true);
    clearInteractiveState();
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  document.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;

    mx = e.clientX;
    my = e.clientY;

    if (!initialized) {
      initialized = true;
      rx = mx;
      ry = my;
      ox = targetOx;
      oy = targetOy;
      root.classList.add("has-custom-cursor");
    }

    visible = true;
    updateContextFromTarget(e.target);

    if (!inFrame) {
      setHiddenState(false);
      renderTransforms();
      scheduleTick();
    }
  }, { passive: true });

  document.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch" || !visible) return;
    updateContextFromTarget(e.target);
  }, { passive: true });

  window.addEventListener("scroll", () => {
    if (!visible) return;
    const hovered = document.elementFromPoint(mx, my);
    updateContextFromTarget(hovered);
  }, { passive: true });

  document.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "touch" || inFrame) return;
    isPressed = true;
    renderTransforms();
    spawnClickAnchor(e.clientX, e.clientY);
  }, { passive: true });

  function releasePress() {
    if (!isPressed) return;
    isPressed = false;
    renderTransforms();
  }

  document.addEventListener("pointerup", releasePress, { passive: true });
  document.addEventListener("pointercancel", releasePress, { passive: true });
  document.addEventListener("mouseleave", hideCursor);
  window.addEventListener("blur", hideCursor);
}

