# 📑 Project #6: Bookmark Manager Landing Page
**Product Engineering Curriculum**

A high-fidelity landing page for a Bookmark Management tool, built with **Tailwind CSS v4 (Oxide)** and **Vanilla JavaScript**.

---

## 🎯 Project Overview
The goal of this project is to build a responsive, performant, and visually stunning landing page that focuses on conversion and user engagement. 

### Key Features:
- **Custom Design System**: Tailwind v4 configuration with unique brand tokens.
- **Dynamic Tabs**: Interactive feature switching to manage information density.
- **Advanced Layouts**: Using absolute positioning and overflow tricks for modern "Blob" background effects.
- **Mobile-First Design**: Fully responsive navigation and hero sections.

---

## 🧠 Product Engineering Masterclass: Key Lessons

### Lesson 1: Cognitive Load & Bounce Rate
There is a direct correlation between **Cognitive Load** (the mental effort required to use an interface) and **Bounce Rate** (users leaving the site).
- **The Goal**: Minimize **Extraneous Load** (design noise) so users can focus on the product.
- **Hick's Law**: We reduce the number of choices to speed up user decision-making.

### Lesson 2: Progressive Disclosure
We don't show everything at once. We hide complex features behind tabs or menus to make the interface feel "friendly" and less overwhelming.
- **In this project**: Used in the **Features** section. The user only sees one feature panel at a time, lowering the "Information Density" to a manageable level.

### Lesson 3: The Staircase Effect (Attention Management)
We implemented a staggered layout for the browser cards (using `mt-32`, `mt-64` on desktop).
- **Goal**: To break the strict horizontal grid and guide the user's eye in a specific rhythm.
- **Soft Disclosure**: Even though all cards are visible, the staggering creates a sequence of discovery, ensuring each card gets dedicated attention.

---

### 📥 Project Components Implementation Status
- [x] **Hero Section**: Responsive layout with signature "Right Blob" background.
- [x] **Features Section**: Interactive tabs using JavaScript and "Left Blob" layering.
- [x] **Download Section**: Staggered card layout (Staircase Effect) with custom SVG separators.
- [x] **State Management**: Clean JS logic to handle UI transitions and tab states.
- [ ] **FAQ Section**: (Next) Interactive accordion for common questions.
- [ ] **Newsletter & Footer**: (Pending) Email validation and responsive footer.

---

