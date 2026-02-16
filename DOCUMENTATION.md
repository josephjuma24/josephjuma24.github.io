# Portfolio Website Documentation

**Version:** 1.0  
**Last Updated:** February 2026  
**Author:** Joseph Otieno Juma  
**Status:** Production

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Structure](#architecture--structure)
3. [HTML Components (index.html)](#html-components-indexhtml)
4. [Styling System (styles.css)](#styling-system-stylescss)
5. [JavaScript Functionality (main.js)](#javascript-functionality-mainjs)
6. [Configuration & Setup](#configuration--setup)
7. [Browser Support & Performance](#browser-support--performance)
8. [Maintenance Guidelines](#maintenance-guidelines)

---

## Project Overview

### Purpose
This is a professional portfolio website designed to showcase Joseph Otieno Juma's expertise as an **AI Researcher & Engineer** specializing in:
- Ethical AI for African markets
- Natural Language Processing (NLP)
- Large Language Models (LLMs)
- Mobile AI in low-resource environments
- Cloud Engineering & DevOps

### Key Features
- **Responsive Design:** Fully responsive across all device sizes
- **Smooth Interactions:** Scroll animations, modal dialogs, and smooth navigation
- **Dynamic Content:** GitHub integration for real-time repository and contribution display
- **Professional UX:** Clean, modern interface with carefully chosen typography and color palette
- **Accessibility:** ARIA labels, semantic HTML, keyboard navigation support
- **Performance Optimized:** Minimal dependencies, efficient animations, optimized assets

---

## Architecture & Structure

### Directory Organization

```
josephjuma24.github.io/
├── index.html           # Main HTML structure
├── css/
│   └── styles.css       # All styling rules
├── js/
│   └── main.js          # JavaScript functionality
├── images/              # Image assets
├── README.md            # Project readme
└── DOCUMENTATION.md     # This file
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Markup** | HTML5 | Semantic structure |
| **Styling** | CSS3 | Responsive design, animations |
| **Scripting** | Vanilla JavaScript ES6+ | Interactivity, API integration |
| **Icons** | Font Awesome 6.5.0 | Rich iconography |
| **Typography** | Google Fonts (Syne, DM Sans, DM Mono) | Professional typography |
| **External APIs** | GitHub API, GitHub Calendar | Dynamic data integration |

---

## HTML Components (index.html)

### Document Metadata

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**Purpose:** Ensures proper rendering across all browsers and devices with responsive design support.

### Meta Tags & SEO

```html
<title>Joseph Otieno Juma — AI Researcher & Engineer</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
```

**Purpose:** 
- Improves search engine ranking (SEO)
- Enhances social media sharing preview
- Provides accessibility context

### External Resources

| Resource | Purpose | CDN |
|----------|---------|-----|
| Google Fonts | Syne, DM Sans, DM Mono typography | fonts.googleapis.com |
| Font Awesome | Icon library | cdnjs.cloudflare.com |
| GitHub Calendar | Contribution graph visualization | unpkg.com |

### Main Sections

#### 1. **Navigation Bar** (`#main-nav`)

**Purpose:** Fixed header providing site navigation

**Components:**
- `.nav-logo` — Branding element with name initials
- `.nav-links` — Navigation menu items with section numbers
- `#hamburger` — Mobile menu toggle button
- `.nav-cta` — Call-to-action contact button

**Features:**
- Fixed positioning (top: 0)
- Glassmorphic design (backdrop blur)
- Responsive hamburger menu for mobile devices
- Active link highlighting based on scroll position

**Sections Linked:**
- 01. About
- 02. Experience
- 03. Projects
- 04. GitHub
- 05. Education

---

#### 2. **Hero Section** (`#home`)

**Purpose:** Landing section introducing the portfolio owner

**Key Elements:**
- **Hero Content**
  - Name: "Joseph Otieno Juma."
  - Title: "AI Researcher & Engineer"
  - Tagline: Building inclusive AI for African markets
  - Skill tags: Ethical AI, ML, NLP, LLMs, UX Research, Cloud platforms
  
- **Hero Actions** — Three primary buttons:
  - "View Projects" (rocket icon)
  - "Explore GitHub" (GitHub icon)
  - "Contact Me" (envelope icon)

- **Hero Visual**
  - Profile avatar image with fallback placeholder
  - Location badge: "Nairobi, Kenya"
  - Social media links (GitHub, LinkedIn, Email, Phone)

**Styling Classes:**
- `.hero-inner` — Main container
- `.hero-content` — Text content area
- `.hero-visual` — Image and social section
- `.hero-tags` — Skill tags display
- `.hero-avatar` — Profile image container

---

#### 3. **About Section** (`#about`)

**Purpose:** Detailed introduction and skills showcase

**Structure:**
- **About Text**
  - Professional background (3+ years AI research)
  - Core competencies and focus areas
  - Impact metrics in stat cards
    - "3+ Years in AI Research"
    - "30% Voice Accuracy Boost"
    - "80% Uptime Improvement"
    - "90% Ops Adherence (ISO)"

- **Skills Panel** — Categorized expertise:
  - **AI/ML:** Machine Learning, Deep Learning, NLP, Generative AI, LLMs, Multimodal AI, ASR, Prompt Engineering
  - **Research & UX:** UX Research, Ethical AI, Data Privacy, Data Visualization
  - **Cloud & Engineering:** AWS, Azure, GCP, Python, PyTorch, TensorFlow, Docker
  - **Languages:** English (C2), French (A1)

**Styling Classes:**
- `.about-grid` — Two-column layout
- `.about-text` — Prose content with highlights
- `.about-stats` — Metrics display
- `.skills-panel` — Skills categorized by group
- `.skill-tags` — Individual skill badges

---

#### 4. **Experience Section** (`#experience`)

**Purpose:** Professional work history and achievements

**Timeline Structure:** Three career positions displayed chronologically

**Position 1: AI Researcher** (Jan 2023 – Dec 2025)
- **Company:** Transsion (Caricare) — Nairobi, Kenya
- **Responsibilities:** 
  - Conducted user interviews and usability testing
  - Designed data collection pipelines for AI models
  - Identified localization pain points
  - Translated research into actionable recommendations
- **Key Achievements:**
  - 30% improvement in voice command accuracy
  - Generative AI camera feature research
  - AI translation models for African languages

**Position 2: Cloud & DevOps Engineer** (Jan 2022 – Dec 2022)
- **Company:** Kingsway Tyres Ltd — Nairobi, Kenya
- **Responsibilities:**
  - Configuration management with version control
  - CI/CD pipeline deployment (Jenkins, Docker)
  - Infrastructure automation (Terraform, Ansible)
  - Data backup and recovery protocols

**Position 3: Systems & Networks Administrator** (Jan 2018 – Dec 2021)
- **Company:** Riley Falcon Security Services Ltd — Nairobi, Kenya
- **Responsibilities:**
  - System uptime optimization (80% improvement)
  - Microsoft 365 support and Azure deployment
  - ERP solution implementation
  - Paperless environment transition

**Interactive Features:**
- **Expandable Sections:** Each position can be expanded/collapsed via toggle buttons
- **Timeline Dots:** Visual markers with color coding
- **Achievement Highlights:** Trophy icons for key accomplishments

**Styling Classes:**
- `.timeline` — Vertical timeline container
- `.timeline-item` — Individual job card
- `.exp-card` — Job details card
- `.exp-body` — Collapsible content area
- `.exp-toggle` — Expand/collapse button

---

#### 5. **Projects Section** (`#projects`)

**Purpose:** Showcase selected portfolio projects

**Features:**
- Dynamic project grid layout
- Project cards with descriptions
- Modal dialog system for detailed project views
- Technology tags for each project
- Call-to-action buttons

**Interactive Elements:**
- Click to open detailed project modal
- Modal overlay with close button
- Escape key to close modal
- Overlay click to close modal

---

#### 6. **GitHub Section** (`#github`)

**Purpose:** Display GitHub contribution graph and recent repositories

**Components:**

**GitHub Calendar (`#github-calendar-container`)**
- Visual representation of contribution activity
- Responsive calendar grid
- Tooltips showing contribution details
- Fallback mechanism for API failures

**GitHub Repositories (`#repos-grid`)**
- Displays up to 6 most recently updated repositories
- Repository information includes:
  - Repository name with code icon
  - Description
  - Programming language with color coding
  - Star count

**Features:**
- Real-time data fetching from GitHub API
- Language color coding system
- Error handling with fallback messages
- Links directly to repository pages (target="_blank")

**Setup Requirement:**
- Must configure `GITHUB_USERNAME` in [main.js](#configuration--setup)

---

#### 7. **Education Section** (`#education`)

**Purpose:** Academic qualifications and certifications

---

#### 8. **Contact Section** (`#contact`)

**Purpose:** Contact form for direct communication

**Features:**
- Contact form with validation
- Success state feedback with visual confirmation
- Auto-reset after submission

---

## Styling System (styles.css)

### Design System Variables

The portfolio uses CSS custom properties (variables) for consistent theming:

```css
:root {
  /* Color Palette */
  --navy: #f4f7fb;              /* Light page background */
  --navy-mid: #e9eff6;          /* Card/panel background */
  --navy-light: #e0eaf6;        /* Subtle accents */
  --teal: #0b8f82;              /* Primary accent color */
  --teal-dim: #087061;          /* Dimmed teal */
  --amber: #ffb25a;             /* Warm highlight */
  --amber-dim: #c27a2a;         /* Dimmed amber */
  --cream: #ffffff;             /* Card background */
  --cream-dim: #f6f7fa;         /* Subtle cream */
  --white: #0b1a2b;             /* Primary text (dark) */
  --text-primary: #102831;      /* Body text color */
  --text-secondary: #48626f;    /* Secondary text */
  --text-muted: #6b7b88;        /* Muted text */
  
  /* Typography */
  --font-display: 'Syne', sans-serif;         /* Headings */
  --font-body: 'DM Sans', sans-serif;         /* Body text */
  --font-mono: 'DM Mono', monospace;          /* Code */
  
  /* Effects */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-teal: 0 0 30px rgba(11, 143, 130, 0.08);
  --shadow-card: 0 6px 20px rgba(16, 24, 40, 0.06);
  --border: rgba(11, 143, 130, 0.12);        /* Border color */
}
```

### Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--teal` | #0b8f82 | Primary accent, links, highlights |
| `--amber` | #ffb25a | Warm highlights, secondary accents |
| `--navy` | #f4f7fb | Page background |
| `--text-primary` | #102831 | Main text content |
| `--text-secondary` | #48626f | Secondary/supporting text |
| `--cream` | #ffffff | Card and content backgrounds |

### Typography System

#### Font Families

1. **Syne** (Display)
   - Used for: Headings, section titles, logo
   - Weights: 400, 500, 600, 700, 800
   - Characteristics: Bold, geometric, modern

2. **DM Sans** (Body)
   - Used for: Body text, paragraphs, form inputs
   - Weights: 300, 400, 500 (italic available)
   - Characteristics: Clean, readable, geometric

3. **DM Mono** (Code)
   - Used for: Code snippets, technical text, navigation labels
   - Weights: 400, 500
   - Characteristics: Monospaced, technical appearance

#### Font Sizes

```css
h1 (section-title):     clamp(1.8rem, 4vw, 2.8rem)  /* Responsive */
h2:                     ~1.8rem
h3:                     ~1.4rem
Body text:              1rem (16px baseline)
Navigation:             0.75rem (12px)
```

### Layout & Grid System

#### Container Width

- **Default sections:** max-width: 1100px
- **About/Experience/Projects:** max-width: 1600px (wider, fluid)
- Padding: 2rem (horizontal)
- Auto margins for centering

#### Card-based Layout

- **Cards use flexbox:** flex-direction: column
- **Grid layouts:** CSS Grid for repo cards
- **Responsive breakpoints:** Mobile-first (media query at 768px)

### Animation System

#### Transitions

All interactive elements use consistent easing:
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

This provides smooth, professional transitions for:
- Color changes on hover
- Transform effects
- Opacity changes
- Background changes

#### Scroll Reveal Animation

- **Trigger:** Intersection Observer (threshold: 0.1)
- **Effect:** Elements fade in as they enter viewport
- **Classes:**
  - `.reveal` — Element to reveal
  - `.visible` — Applied when revealed
  - `.reveal-delay-1`, `.reveal-delay-2` — Staggered animations

#### Keyframe Animations

- **Expand/Collapse:** Smooth height transitions for experience cards
- **Modal Transitions:** Overlay fade-in effects
- **Navigation:** Underline slide effects on hover

### Responsive Design Breakpoints

```css
Mobile-first approach with media query at max-width: 768px
```

**Mobile Adjustments:**
- Navigation menu becomes hamburger icon
- Font sizes scale down
- Layouts adapt from multi-column to single column
- Padding and margins reduce

**Desktop Features:**
- Fixed navigation bar
- Multi-column layouts
- Hover effects enabled
- Background patterns visible

### Background & Visual Effects

#### Geometric Pattern

```css
body::before {
  /* Diagonal stripe pattern at 45° and -45° */
  /* Semi-transparent teal overlay */
  /* Creates subtle depth without distraction */
}
```

**Purpose:** Adds subtle visual interest while maintaining readability

#### Glassmorphism

```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.85);
```

Applied to:
- Navigation bar
- Mobile menu overlay
- Card backgrounds

### Shadows & Depth

**Card Shadow:**
```css
box-shadow: 0 6px 20px rgba(16, 24, 40, 0.06);
```

**Teal Accent Shadow:**
```css
box-shadow: 0 0 30px rgba(11, 143, 130, 0.08);
```

### Button Styles

#### Three CTA Variants

1. **Primary Button** (`.btn-primary`)
   - Background: Teal
   - Color: White
   - Use: Main actions (View Projects)

2. **Outline Button** (`.btn-outline`)
   - Border: Teal
   - Color: Teal
   - Use: Secondary actions (Explore GitHub)

3. **Ghost Button** (`.btn-ghost`)
   - No background
   - Color: Teal
   - Use: Tertiary actions (Contact Me)

All buttons feature:
- Icon support (Font Awesome)
- Hover state transitions
- Active/focus states for accessibility
- Consistent padding and typography

### Selection & Scrollbar Styling

```css
::selection {
  background: var(--teal);
  color: var(--navy);
}

::-webkit-scrollbar {
  width: 5px;
  background: var(--navy);
}

::-webkit-scrollbar-thumb {
  background: var(--teal-dim);
  border-radius: 10px;
}
```

---

## JavaScript Functionality (main.js)

### Configuration

#### GitHub Username Setup

```javascript
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME';
```

**Required Action:** Replace `YOUR_GITHUB_USERNAME` with actual GitHub username to enable:
- GitHub contribution calendar display
- Repository fetching and display
- Contribution graph visualization

---

### Feature 1: Mobile Navigation Toggle

**Function:** `hamburger.addEventListener('click', ...)`

**Purpose:** Enable responsive menu on mobile devices

**Functionality:**
- Click hamburger icon → Toggle `.open` class on nav links
- Click nav link → Auto-close menu
- Classes managed: `.open` (visible) / (hidden)

**Code Location:** Lines 6-16

**Trigger Elements:**
- `#hamburger` — Menu toggle button
- `.nav-links` — Navigation list

---

### Feature 2: Active Navigation Highlighting

**Function:** `updateActiveNav()`

**Purpose:** Highlight current section in navigation as user scrolls

**Mechanism:**
- Monitors scroll position via `window.addEventListener('scroll')`
- Compares scroll position to section offsets
- Applies `.active` class to corresponding nav link
- Threshold offset: 120px (accounts for fixed nav height)

**Code Location:** Lines 18-32

**Elements Monitored:**
- All `section[id]` elements
- All `.nav-links a[href^="#"]` links

**Event:** `passive: true` scroll listener (performance optimized)

---

### Feature 3: Scroll Reveal Animation

**Function:** `revealObserver` (Intersection Observer API)

**Purpose:** Reveal elements with animation as they scroll into view

**Configuration:**
```javascript
{
  threshold: 0.1,           // Element 10% visible triggers animation
  rootMargin: '0px 0px -50px 0px'  // Trigger slightly after entering
}
```

**Elements Triggered:** All elements with `.reveal` class

**Animation Applied:** `.visible` class triggers CSS animation

**Code Location:** Lines 34-45

**Staggered Delays:**
- `.reveal` — No delay
- `.reveal-delay-1` — 100ms delay
- `.reveal-delay-2` — 200ms delay

---

### Feature 4: Experience Section Toggle

**Function:** `toggleExp(bodyId, btn)`

**Purpose:** Expand/collapse experience job descriptions

**Behavior:**
- Toggles between `.expanded` and `.collapsed` CSS classes
- Updates button text and icon (chevron up/down)
- Sets `aria-expanded` attribute for accessibility
- Called on button click: `onclick="toggleExp('exp-body-X', this)"`

**Code Location:** Lines 47-63

**Parameters:**
- `bodyId` — ID of expandable content container
- `btn` — Button element reference

**Accessibility:**
- `aria-expanded` attribute updated
- Semantic toggle information
- Keyboard navigable

---

### Feature 5: Project Modals

**Functions:**
- `openModal(id)` — Lines 65-70
- `closeModal(id)` — Lines 72-76

**Purpose:** Display detailed project information in dialog overlay

**Interaction Methods:**
1. **Button click** → Open modal
2. **Overlay click** → Close modal (only on background, not content)
3. **Escape key** → Close all modals

**Accessibility:**
- ARIA labels on modal buttons
- Semantic dialog structure
- Focus management (body overflow hidden)
- Keyboard exit support

**Code Location:** Lines 65-85

**Modal Management:**
- Adds `.active` class to overlay
- Sets `body { overflow: hidden }` to prevent scrolling
- Removes `.active` on close
- Restores overflow on close

---

### Feature 6: GitHub Calendar Integration

**Function:** `initGitHubCalendar()`

**Purpose:** Display GitHub contribution graph/calendar

**Primary Method:** GitHub Calendar library (`GitHubCalendar`)
```javascript
GitHubCalendar('#github-calendar-container', username, {
  responsive: true,
  tooltips: true,
});
```

**Fallback Method:** SVG image service (if library fails)
```
https://ghchart.rshah.org/{username}
```

**Error Handling:**
- Checks if username configured
- Shows setup instruction if not configured
- Falls back to svg service on library error
- Displays error message if both methods fail

**Code Location:** Lines 87-126

**Setup Requirement:**
- Configure `GITHUB_USERNAME` in config (line 4)
- Displays warning if not configured

---

### Feature 7: GitHub Repositories Display

**Function:** `fetchRepos()` (Async)

**Purpose:** Dynamically fetch and display latest GitHub repositories

**API Call:**
```javascript
https://api.github.com/users/{username}/repos?sort=updated&per_page=6&type=owner
```

**Parameters:**
- `sort=updated` — Most recently updated first
- `per_page=6` — Display 6 repos maximum
- `type=owner` — Only repos owned by user

**Data Displayed per Repository:**
- Repository name with icon
- Description (or "No description provided")
- Programming language with color dot
- Star count

**Language Color Coding:**
```javascript
const langColors = {
  'Python': '#3776AB',
  'JavaScript': '#F7DF1E',
  'TypeScript': '#3178C6',
  'Shell': '#89E051',
  'HTML': '#E34C26',
  'CSS': '#563D7C',
  'Jupyter Notebook': '#DA5B0B',
  'R': '#276DC3',
  'Go': '#00ADD8',
};
```

**Error Handling:**
- Network error → Fallback message with GitHub link
- No repos → "No public repositories found" message
- Respects GitHub API rate limits (60 requests/hour anonymous)

**Code Location:** Lines 128-189

**Setup Requirement:**
- Configure `GITHUB_USERNAME` in config

---

### Feature 8: Contact Form Submission

**Function:** Contact form event listener

**Purpose:** Handle contact form submission with UX feedback

**Behavior:**
1. Prevent default form submission
2. Change button text to "✓ Message Sent!"
3. Change button color to teal
4. Disable button
5. After 3 seconds:
   - Reset button text
   - Reset button color
   - Enable button
   - Clear form fields

**Code Location:** Lines 191-207

**Note:** Current implementation requires backend integration for actual email delivery. Currently shows local feedback only.

---

### Initialization Sequence

**Function:** `DOMContentLoaded` event listener

**Execution Order (Line 209-212):**
1. Initialize GitHub calendar
2. Fetch GitHub repositories
3. Update active navigation

**Purpose:** Ensures DOM is fully loaded before accessing elements and making API calls

---

### Event Listeners Summary

| Event | Trigger | Handler | Location |
|-------|---------|---------|----------|
| `click` | #hamburger | Toggle nav menu | Line 7 |
| `click` | nav-links | Close mobile menu | Line 12 |
| `click` | nav-links a | Auto-close menu | Line 12 |
| `scroll` | window | Update active nav | Line 29 |
| `observe` | .reveal elements | Add visible class | Line 40 |
| `click` | modal-overlay | Close modal | Line 81 |
| `keydown` | Escape key | Close all modals | Line 87 |
| `submit` | #contact-form | Handle submission | Line 194 |
| `DOMContentLoaded` | document | Initialize features | Line 211 |

---

## Configuration & Setup

### Essential Configuration

#### 1. GitHub Username

**File:** `js/main.js` — Line 4

**Current Value:**
```javascript
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME';
```

**Action Required:**
```javascript
const GITHUB_USERNAME = 'josephjuma24';  // Change to actual username
```

**Impact:**
- ✅ Enables GitHub calendar visualization
- ✅ Enables repository display
- ✅ Enables contribution graph

**Without Configuration:**
- ⚠️ Shows setup instruction message
- ⚠️ Calendar displays fallback message
- ⚠️ Repository grid shows configuration prompt

---

### Optional Enhancements

#### 1. Contact Form Backend

**Current State:** Local UI feedback only

**To Enable Email Delivery:**
- Implement backend API endpoint
- Add form action attribute
- Update JavaScript to send data via fetch/AJAX
- Suggested services: FormSpree, EmailJS, custom backend

**Current Code (Line 194):**
```javascript
e.preventDefault();  // Prevents form submission
```

**To Enable:** Remove preventDefault or integrate with email service

---

#### 2. Modal Content

**Placeholder:** Projects modals exist but need content configuration

**Setup Steps:**
1. Add project details to HTML modal structure
2. Update modal IDs to match button onclick handlers
3. Add project descriptions, images, and links
4. Update modal styling if needed

---

### Deployment Checklist

- [ ] Verify all external CDN links are accessible
- [ ] Replace `YOUR_GITHUB_USERNAME` with actual GitHub username
- [ ] Test responsive design on mobile devices
- [ ] Verify all navigation links point to correct sections
- [ ] Test modal open/close functionality
- [ ] Test form submission (at least local feedback)
- [ ] Verify GitHub calendar and repo fetching works
- [ ] Check lighthouse performance metrics
- [ ] Test keyboard navigation and accessibility
- [ ] Verify all external links open in new tabs

---

## Browser Support & Performance

### Supported Browsers

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 90+ | Full support |
| Firefox | 88+ | Full support |
| Safari | 14+ | Full support |
| Edge | 90+ | Full support |
| Mobile Safari (iOS) | 14+ | Full support |
| Mobile Chrome (Android) | 90+ | Full support |

### Unsupported Features by Browser

- **CSS Grid:** IE 11 (not supported)
- **Custom Properties:** IE 11 (not supported)
- **IntersectionObserver:** IE 11 (not supported)
- **Backdrop Filter:** Some older mobile browsers (graceful degradation)

### Performance Metrics

#### Optimization Techniques

1. **Lazy Loading**
   - Images load as needed
   - GitHub API calls only on demand
   - Intersection Observer for animations

2. **CSS Optimization**
   - Single stylesheet (styles.css)
   - CSS variables reduce repetition
   - Hardware-accelerated transforms
   - Passive scroll listeners

3. **JavaScript Optimization**
   - Vanilla JS (no frameworks)
   - Minimal dependencies (only GitHub Calendar library)
   - Debounced scroll events
   - Efficient DOM queries

4. **Visual Optimization**
   - Font preconnection
   - Geometric pattern uses CSS (no images)
   - Optimized hover states
   - Smooth 60fps animations

#### Recommended Lighthouse Targets

- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 95+

---

## Maintenance Guidelines

### Regular Maintenance Tasks

#### Monthly
- [ ] Verify GitHub API functionality
- [ ] Check for broken external CDN links
- [ ] Review console for JavaScript errors
- [ ] Test all interactive features on latest browser versions

#### Quarterly
- [ ] Update Google Fonts if needed
- [ ] Review Font Awesome icon library for updates
- [ ] Audit accessibility with tools like WAVE or Axe
- [ ] Performance testing with Lighthouse

#### Annually
- [ ] Review color palette accessibility (WCAG 2.1 AA compliance)
- [ ] Update external API dependencies
- [ ] Comprehensive accessibility audit
- [ ] Testing on latest mobile device releases

### Common Modifications

#### Updating Skills Section

**File:** `index.html` — Lines ~150-190

**Steps:**
1. Locate `.skill-tag` elements within `.skills-panel`
2. Add/remove skill tags:
```html
<span class="skill-tag"><i class="fas fa-icon-name"></i> Skill Name</span>
```
3. Update Font Awesome icon class if needed

**Icon Reference:** [fontawesome.com/icons](https://fontawesome.com/icons)

---

#### Adding New Experience Entry

**File:** `index.html` — Experience section

**Template:**
```html
<div class="timeline-item reveal reveal-delay-X">
  <div class="timeline-dot" style="background: var(--color)"></div>
  <div class="exp-card">
    <div class="exp-header">
      <div class="exp-role">Job Title</div>
      <span class="exp-period">Start – End</span>
    </div>
    <div class="exp-company">
      <i class="fas fa-building"></i>
      Company Name — Location
    </div>
    <div class="exp-body expanded" id="exp-body-X">
      <!-- Content -->
    </div>
    <button class="exp-toggle" onclick="toggleExp('exp-body-X', this)" aria-expanded="true">
      <i class="fas fa-chevron-up"></i> Collapse
    </button>
  </div>
</div>
```

---

#### Modifying Color Scheme

**File:** `css/styles.css` — Lines 2-25

**Process:**
1. Update CSS variables in `:root` selector
2. Test color contrast for accessibility
3. Update both light and dark theme variants if applicable
4. Verify all interactive states still have sufficient contrast

**Example:**
```css
:root {
  --teal: #0b8f82;        /* Change primary color here */
  --amber: #ffb25a;       /* Change accent color here */
  /* ... other variables */
}
```

---

#### Updating Style Effects

**Transition Timing:**
```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```
Change duration (0.3s) or easing function for different feel.

**Shadow Effects:**
```css
--shadow-card: 0 6px 20px rgba(16, 24, 40, 0.06);
```
Adjust offset, blur, and opacity for more/less dramatic shadows.

---

### Troubleshooting Guide

#### GitHub Calendar Not Displaying

**Symptoms:** Shows "Setup Required" or blank space

**Solutions:**
1. Verify `GITHUB_USERNAME` is set correctly in `js/main.js`
2. Check GitHub username spelling (case-sensitive)
3. Ensure profile is public (private profiles won't display)
4. Check browser console for error messages
5. Verify internet connection
6. Check GitHub API status

---

#### Repositories Not Loading

**Symptoms:** Shows loading spinner or error message

**Solutions:**
1. Verify GitHub username configured
2. Check that user has public repositories
3. Verify API rate limit not exceeded (60 requests/hour)
4. Check network connectivity
5. Wait 1 minute and refresh (rate limit reset)

---

#### Navigation Links Not Working

**Symptoms:** Clicking nav links doesn't scroll to section

**Solutions:**
1. Verify section IDs exist in HTML (e.g., `id="about"`)
2. Verify nav link hrefs match (e.g., `href="#about"`)
3. Check for JavaScript errors in console
4. Test on different browser
5. Clear browser cache

---

#### Animations Not Triggering

**Symptoms:** Elements don't fade in on scroll

**Solutions:**
1. Verify elements have `.reveal` class
2. Check IntersectionObserver browser support
3. Scroll slowly to trigger threshold (10%)
4. Check CSS for animation definition
5. Verify browser hardware acceleration enabled

---

#### Mobile Menu Not Closing

**Symptoms:** Hamburger menu stays open after clicking link

**Solutions:**
1. Check for JavaScript errors in console
2. Verify hamburger button HTML structure
3. Test on different mobile browser
4. Clear browser cache
5. Reset browser zoom to 100%

---

## Code Quality & Best Practices

### HTML Structure

- ✅ Semantic HTML5 elements (nav, section, article)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ ARIA labels for interactive elements
- ✅ Alt text for images
- ✅ Form elements with proper labels

### CSS Architecture

- ✅ BEM naming convention
- ✅ CSS custom properties for theming
- ✅ Mobile-first responsive approach
- ✅ Minimal specificity conflicts
- ✅ Comments for major sections

### JavaScript Best Practices

- ✅ No global variables (except config)
- ✅ Event delegation where applicable
- ✅ Error handling for API calls
- ✅ Passive event listeners for scroll
- ✅ Efficient DOM queries

---

## Glossary

| Term | Definition |
|------|-----------|
| **Viewport** | The visible area of a web page on user's device |
| **DOM** | Document Object Model; allows JavaScript to interact with HTML |
| **API** | Application Programming Interface; allows apps to communicate |
| **CDN** | Content Delivery Network; serves files from multiple locations |
| **Intersection Observer** | Browser API to detect element visibility |
| **Glassmorphism** | UI design style with frosted glass effect |
| **Backdrop Filter** | CSS property creating blurred background effect |
| **CSS Variables** | Dynamic CSS values defined with `--` prefix |
| **ARIA** | Accessible Rich Internet Applications; improves accessibility |

---

## Support & Resources

### External Documentation

- [MDN Web Docs](https://developer.mozilla.org/) — Web standards reference
- [GitHub API Documentation](https://docs.github.com/en/rest) — GitHub data access
- [Font Awesome Icons](https://fontawesome.com/icons) — Icon library
- [Google Fonts](https://fonts.google.com/) — Typography

### Tools for Development

- **Browser DevTools** — Chrome, Firefox, Safari built-in inspection
- **Lighthouse** — Performance and accessibility auditing
- **WAVE** — Web Accessibility Evaluation Tool
- **GTmetrix** — Performance analysis

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 2026 | Initial comprehensive documentation |

---

## Document Information

- **Last Modified:** February 16, 2026
- **Document Status:** Complete
- **Maintenance Owner:** Joseph Otieno Juma
- **Review Cycle:** Quarterly

---

*This documentation serves as the definitive guide for understanding, maintaining, and extending the portfolio website. For updates or clarifications, refer to the source files or consult the code comments.*
