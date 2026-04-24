# Frontend Challenge - Bold Agency

This project is a functional landing page developed as part of a technical challenge for Bold Agency. The page features a product grid integrated with a paginated API and validated forms.

## Live Preview
The project can be accessed online through the following link:
[View Project on Netlify](https://69eb79e4798533000898be5c--gleaming-crumble-66d4df.netlify.app/)

---

## Implemented Features

- Dynamic API Consumption: Integration with the Bold endpoint to list products in real-time.
- Load More Pagination: Page increment logic that loads new products without refreshing the page.
- Responsive Grid: Layout that adapts from 1 or 2 columns on mobile devices to 4 columns on desktop.
- Form Validation:
    - Newsletter: Validation for valid email patterns (Regex) and required fields.
    - Share Form: Validation for name length (minimum 3 characters) and email format.
- Image Fallback: Implementation of the onerror event in JavaScript to replace broken images from the API with a placeholder, ensuring layout integrity.
- UI/UX: Visual implementation following the Adobe XD mockups, including diagonal header splits and section separators.

---

## Tech Stack

To demonstrate mastery over web development fundamentals, this project was built without the use of frameworks:

- HTML5: Semantic structure for better accessibility and SEO.
- CSS3: Use of Flexbox, CSS Grid, CSS Variables, and Media Queries.
- Vanilla JavaScript (ES6+): DOM manipulation, async/await for API calls, and validation logic.
- Git: Version control with organized commit history.

---

## Architecture and Technical Decisions

1. Mobile-First: Development started focusing on the mobile experience, expanding to desktop via Media Queries.
2. Performance: In JavaScript, insertAdjacentHTML was used instead of innerHTML to avoid full re-rendering of the product container when loading new pages, optimizing browser performance.
3. Organization: Files are organized into separate folders for styles, scripts, and fonts to facilitate maintenance and scalability.

---

## Setup and Local Installation

1. Clone the repository:
   git clone https://github.com/Frazon/desafio-frontend-bold.git

2. Open the project:
   Simply open the index.html file in any modern web browser.

---

## Final Notes
The development prioritized delivering all requested behaviors (pagination, validation, and visual fidelity) with high technical quality.

Developed by Airton Frazon - Software Developer and Computer Engineer.